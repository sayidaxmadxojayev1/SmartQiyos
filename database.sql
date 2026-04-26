-- 1. Foydalanuvchilar jadvali (users)
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id_code VARCHAR(20) UNIQUE, -- Masalan: SQ-2099
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone_number VARCHAR(20),
    password_hash VARCHAR(255), -- Xavfsizlik uchun parolni shifrlangan saqlash
    is_vip BOOLEAN DEFAULT FALSE, -- VIP yoki Oddiy
    vip_start_date DATETIME NULL,
    vip_end_date DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. To'lovlar va Obuna tarixi (subscriptions)
CREATE TABLE subscriptions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    plan_name VARCHAR(50) DEFAULT '15 kunlik VIP',
    amount DECIMAL(10, 2), -- To'lov summasi
    status ENUM('pending', 'active', 'expired') DEFAULT 'active',
    activated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 3. Do'konlar ma'lumotlari (stores)
CREATE TABLE stores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    store_name VARCHAR(100), -- Texnomart, MediaPark va h.k.
    logo_url VARCHAR(255),
    rating FLOAT DEFAULT 0.0,
    credit_terms VARCHAR(255), -- "12 oygacha 0%" kabi matnlar
    site_url VARCHAR(255),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 4. Real-time xabarlar (messages)
CREATE TABLE messages (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(50) NOT NULL, -- Masalan: SQ-2099
    sender_type ENUM('user', 'admin') DEFAULT 'user',
    text TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin uchun foydali SQL buyruqlari (Sorgular):

-- Foydalanuvchini VIP qilish (15 kunga):
-- UPDATE users 
-- SET is_vip = TRUE, 
--     vip_start_date = NOW(), 
--     vip_end_date = DATE_ADD(NOW(), INTERVAL 15 DAY) 
-- WHERE user_id_code = 'SQ-2099';

-- Muddati tugagan VIP'larni avtomatik aniqlash:
-- SELECT * FROM users 
-- WHERE is_vip = TRUE AND vip_end_date < NOW();
