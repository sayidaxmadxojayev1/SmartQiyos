const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
app.use(express.json());

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

// 3. ADMIN: Foydalanuvchini VIP qilish (15 kunga)
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

// 4. Serverni ishga tushirish
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} manzilida ishlamoqda...`);
});
