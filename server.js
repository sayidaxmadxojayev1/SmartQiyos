const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
app.use(express.json());
app.use(express.static('.')); // Frontend fayllarini serve qilish

// 1. Ma'lumotlar bazasiga ulanish
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password', // bazangiz paroli
    database: process.env.DB_NAME || 'smartqiyos_db'
});

// In-Memory Database Fallback
let isDbConnected = false;
let MOCK_DB_MESSAGES = [];
let msgIdCounter = 1;

db.connect((err) => {
    if (err) {
        console.warn('MySQL ulanishida xatolik, server in-memory rejimga o\'tmoqda (MOCK_DB).');
        isDbConnected = false;
        
        // Mock db.query for fallback so functions don't break
        db.query = function(sql, params, callback) {
            // Callback could be the 2nd argument instead of 3rd
            if (typeof params === 'function') {
                callback = params;
                params = [];
            }
            
            setTimeout(() => {
                const uSql = sql.toUpperCase();
                if (uSql.includes('INSERT INTO MESSAGES')) {
                    const [uid, stype, txt] = params;
                    const result = { insertId: msgIdCounter++ };
                    MOCK_DB_MESSAGES.push({
                        message_id: result.insertId,
                        user_id: uid,
                        sender_type: stype || 'user',
                        text: txt,
                        is_read: false,
                        timestamp: new Date()
                    });
                    callback(null, result);
                } else if (uSql.includes('SELECT * FROM MESSAGES WHERE USER_ID')) {
                    callback(null, MOCK_DB_MESSAGES.filter(m => m.user_id === params[0]));
                } else if (uSql.includes('SELECT COUNT(*) AS COUNT FROM MESSAGES')) {
                    const unread = MOCK_DB_MESSAGES.filter(m => m.sender_type === 'user' && !m.is_read).length;
                    callback(null, [{ count: unread }]);
                } else if (uSql.includes('UPDATE MESSAGES SET IS_READ = TRUE')) {
                    let updated = 0;
                    MOCK_DB_MESSAGES.forEach(m => {
                        if (m.user_id === params[0] && m.sender_type === 'user' && !m.is_read) {
                            m.is_read = true;
                            updated++;
                        }
                    });
                    callback(null, { affectedRows: updated });
                } else {
                    callback(null, []); // Generic mock fallback for other queries
                }
            }, 10);
        };
        return;
    }
    isDbConnected = true;
    console.log('MySQL ma\'lumotlar bazasiga ulanish muvaffaqiyatli!');
});

// 2. Foydalanuvchi profil ma'lumotlarini olish (Ism, Tel, Status)
app.get('/api/profile/:userIdCode', (req, res) => {
    const userIdCode = req.params.userIdCode;
    const sql = "SELECT first_name, last_name, phone_number, is_vip, vip_end_date FROM users WHERE user_id_code = ?";
    
    db.query(sql, [userIdCode], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
        
        res.json(result[0]);
    });
});

// 2.1 ADMIN: Barcha foydalanuvchilar ro'yxati
app.get('/api/admin/users', (req, res) => {
    const sql = "SELECT first_name, last_name, phone_number, user_id_code, is_vip, vip_end_date FROM users ORDER BY created_at DESC";
    
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

// 3.1. ADMIN: Foydalanuvchini VIP qilish (15 kunga)
app.post('/api/admin/activate-vip', (req, res) => {
    const { user_id_code } = req.body;
    
    // 15 kunlik muddatni hisoblash
    const sql = `
        UPDATE users 
        SET is_vip = TRUE, 
            vip_start_date = NOW(), 
            vip_end_date = DATE_ADD(NOW(), INTERVAL 15 DAY) 
        WHERE user_id_code = ?`;

    db.query(sql, [user_id_code], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        
        res.json({ 
            success: true, 
            message: `${user_id_code} foydalanuvchisi uchun VIP 15 kunga faollashtirildi.` 
        });
    });
});

// 4. Real-time Price Comparison API
const priceCache = new Map();

app.get('/api/prices', (req, res) => {
    const { category, brand } = req.query;
    if (!category || !brand) return res.status(400).json({ error: "Kategoriya va Brend talab qilinadi" });

    const cacheKey = `${category}_${brand}`;
    const cachedData = priceCache.get(cacheKey);
    const now = Date.now();

    // Cache logic: 1 hour (3600000ms)
    if (cachedData && (now - cachedData.timestamp < 3600000)) {
        return res.json(cachedData.products);
    }

    // Real-time Parsing Simulation (In real world, use Puppeteer/Axios)
    // Here we generate realistic variations based on the brand
    const stores = [
        { name: "Uzum", url: "https://uzum.uz" },
        { name: "Olcha", url: "https://olcha.uz" },
        { name: "MediaPark", url: "https://mediapark.uz" },
        { name: "Elmakon", url: "https://elmakon.uz" }
    ];

    const models = {
        'Samsung': ['Galaxy S24 Ultra', 'Galaxy A55', 'Galaxy Tab S9'],
        'Apple': ['iPhone 15 Pro Max', 'iPad Pro M2', 'MacBook Air M3'],
        'Xiaomi': ['Redmi Note 13', 'Xiaomi 14 Ultra', 'POCO F6'],
        'Oppo': ['Reno 11 Pro', 'Find X7 Ultra', 'A78']
    };

    const requestedModels = models[brand] || [`${brand} High-Tech Model`, `${brand} Basic Model`];
    
    const results = requestedModels.map((model, idx) => {
        const basePrice = 5000000 + (Math.random() * 10000000);
        return {
            id: `rt-${brand}-${idx}`,
            name: `${brand} ${model}`,
            brand: brand,
            category: category,
            img: `https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300`, // Placeholder
            price: Math.round(basePrice / 1000) * 1000,
            stores: stores.map(s => ({
                name: s.name,
                price: Math.round((basePrice * (0.95 + Math.random() * 0.1)) / 1000) * 1000,
                url: `${s.url}/search?q=${encodeURIComponent(brand + ' ' + model)}`
            }))
        };
    });

    // Save to cache
    priceCache.set(cacheKey, { timestamp: now, products: results });

    // Simulate network delay
    setTimeout(() => {
        res.json(results);
    }, 1500);
});

// ==========================================
// 5. REAL-TIME XABARLAR (SOCKET & API)
// ==========================================

// Barcha xabarlarni olish (Foydalanuvchi yoki Admin uchun)
app.get('/api/messages/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = "SELECT * FROM messages WHERE user_id = ? ORDER BY timestamp ASC";
    db.query(sql, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Adminga barcha foydalanuvchilarning oxirgi xabarlarini chiqarish (Chat ro'yxati)
app.get('/api/admin/chats', (req, res) => {
    const sql = `
        SELECT u.first_name, u.last_name, m.user_id, m.text, m.timestamp, m.is_read 
        FROM messages m
        JOIN users u ON m.user_id = u.user_id_code
        WHERE m.timestamp = (SELECT MAX(timestamp) FROM messages WHERE user_id = m.user_id)
        ORDER BY m.timestamp DESC
    `;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// O'qilmagan xabarlar soni (Admin Panel Indicator)
app.get('/api/admin/unread-count', (req, res) => {
    const sql = "SELECT COUNT(*) AS count FROM messages WHERE sender_type = 'user' AND is_read = FALSE";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ unread: result[0].count });
    });
});

// Xabarlarni yuborish (API fallback)
app.post('/api/messages', (req, res) => {
    const { user_id, sender_type, text } = req.body;
    const sql = "INSERT INTO messages (user_id, sender_type, text, is_read) VALUES (?, ?, ?, FALSE)";
    db.query(sql, [user_id, sender_type, text], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        
        const newMessage = { message_id: result.insertId, user_id, sender_type, text, is_read: false, timestamp: new Date() };
        
        // Agar foydalanuvchi yozsa, adminga ping
        if (sender_type === 'user') {
            io.to('admin').emit('new_message_for_admin', newMessage);
        } else {
            // Agar admin javob yozsa, userga ping
            io.to(`user_${user_id}`).emit('admin_reply', newMessage);
        }
        res.json(newMessage);
    });
});

// Admin xabarni o'qidi degan holat (is_read = true)
app.patch('/api/messages/read-all/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = "UPDATE messages SET is_read = TRUE WHERE user_id = ? AND sender_type = 'user' AND is_read = FALSE";
    db.query(sql, [userId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows > 0) {
            // Klient ekranidagi barcha single-check larni double-check ga o'zgartirish
            io.to(`user_${userId}`).emit('message_read_by_admin');
        }
        res.json({ success: true, updated: result.affectedRows });
    });
});

// WEBSOCKET LOGIC
io.on('connection', (socket) => {
    console.log('🔗 Yangi ulangan Socket:', socket.id);

    // Foydalanuvchi o'zining xususiy xonasiga(kanaliga) qo'shilish
    socket.on('join_user_room', (userId) => {
        socket.join(`user_${userId}`);
    });

    // Admin barcha foydalanuvchilar xabarlarini o'qish xonasiga qo'shilish
    socket.on('join_admin_room', () => {
        socket.join('admin');
    });

    // Jonli tarzda yuborilgan Socket xabar
    socket.on('send_message', (data) => {
        const { user_id, sender_type, text } = data;
        const sql = "INSERT INTO messages (user_id, sender_type, text, is_read) VALUES (?, ?, ?, FALSE)";
        db.query(sql, [user_id, sender_type || 'user', text], (err, result) => {
            if (err) return console.error(err);
            
            const newMessage = { 
                message_id: result.insertId, 
                user_id, 
                sender_type: sender_type || 'user', 
                text, 
                is_read: false, 
                timestamp: new Date() 
            };
            
            // Xabarni o'ziga muvaffaqiyatli saqlanganligini bildirish
            socket.emit('message_saved', newMessage);

            if ((sender_type || 'user') === 'user') {
                io.to('admin').emit('new_message_for_admin', newMessage);
            } else {
                io.to(`user_${user_id}`).emit('admin_reply', newMessage);
            }
        });
    });

    // Admin chatni ochganda o'qildi qilish hodisasi
    socket.on('mark_as_read', (userId) => {
        const sql = "UPDATE messages SET is_read = TRUE WHERE user_id = ? AND sender_type = 'user' AND is_read = FALSE";
        db.query(sql, [userId], (err, result) => {
            if (err) return console.error(err);
            if (result.affectedRows > 0) {
                // Userga o'qilganligi haqida status uzatish
                io.to(`user_${userId}`).emit('message_read_by_admin');
            }
        });
    });

    socket.on('disconnect', () => {
        console.log('🔴 Uzildi:', socket.id);
    });
});

// ==========================================
// 6. SMART XABARNOMALAR (SETTINGS & MONITORING)
// ==========================================

// 6.1. Xabarnoma sozlamalarini olish
app.get('/api/notifications/settings/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = "SELECT * FROM notification_settings WHERE user_id_code = ?";
    db.query(sql, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            // Default sozlamalar
            return res.json({ is_enabled: true, categories: "all", min_discount: 15 });
        }
        res.json(results[0]);
    });
});

// 6.2. Xabarnoma sozlamalarini saqlash
app.post('/api/notifications/settings', (req, res) => {
    const { user_id_code, is_enabled, categories, min_discount } = req.body;
    const sql = `
        INSERT INTO notification_settings (user_id_code, is_enabled, categories, min_discount)
        VALUES (?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE is_enabled = VALUES(is_enabled), categories = VALUES(categories), min_discount = VALUES(min_discount)
    `;
    db.query(sql, [user_id_code, is_enabled, categories, min_discount], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// 6.3. Narxlar tarixini olish (Deals uchun)
app.get('/api/notifications/deals', (req, res) => {
    const sql = "SELECT * FROM price_history WHERE is_deal = TRUE ORDER BY recorded_at DESC LIMIT 20";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// 6.4. MOCK PRICE MONITORING (Skaner simulatsiyasi)
function runMockPriceCheck() {
    console.log('🔍 Narxlar monitoringi skaneri ishga tushdi...');
    
    // Tasodifiy chegirmali mahsulot yaratish
    const products = [
        { name: "SADO erkaklar krossovkalari", old: 180000, new: 123000, store: "Uzum", cat: "clothing" },
        { name: "Samsung Galaxy A55", old: 4500000, new: 3600000, store: "Olcha", cat: "electronics" },
        { name: "MacBook Air M3", old: 16000000, new: 13500000, store: "Texnomart", cat: "electronics" }
    ];

    const item = products[Math.floor(Math.random() * products.length)];
    const discountPercent = Math.round((1 - item.new / item.old) * 100);

    if (discountPercent >= 15) {
        const sql = "INSERT INTO price_history (product_name, store_name, price, is_deal) VALUES (?, ?, ?, TRUE)";
        db.query(sql, [item.name, item.store, item.new], (err, res) => {
            if (err) return console.error(err);

            const deal = {
                title: `Atigi ${item.new.toLocaleString()} so'mga ${item.name}`,
                text: `${item.store} do'konida ${discountPercent}% chegirma!`,
                product_name: item.name,
                price: item.new,
                store: item.store,
                category: item.cat,
                timestamp: new Date()
            };

            // Real-time Push (Simulation via Socket.io)
            // Faqat online va sozlamalari mos foydalanuvchilarga yuborish
            io.emit('smart_notification', deal);
            console.log('🚀 Yangi aksiya topildi va xabarnoma yuborildi:', deal.title);
        });
    }
}

// 10 daqiqada bir marta tekshirish (Simulatsiya uchun 30 sekundda bir)
setInterval(runMockPriceCheck, 30000);

// ==========================================
// 7. Serverni ishga tushirish
// ==========================================
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} manzilida ishlamoqda...`);
});
