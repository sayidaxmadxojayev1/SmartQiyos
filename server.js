const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('.')); // Frontend fayllarini serve qilish

// 1. Ma'lumotlar bazasiga ulanish
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password', // bazangiz paroli
    database: process.env.DB_NAME || 'smartqiyos_db'
});

db.connect((err) => {
    if (err) {
        console.error('MySQL ulanishda xato:', err.message);
        return;
    }
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

// 5. Serverni ishga tushirish
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} manzilida ishlamoqda...`);
});
