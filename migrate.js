const mysql = require('mysql2');
require('dotenv').config();
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'smartqiyos_db'
});
db.query("CREATE TABLE IF NOT EXISTS messages (message_id INT PRIMARY KEY AUTO_INCREMENT, user_id VARCHAR(50) NOT NULL, sender_type ENUM('user', 'admin') DEFAULT 'user', text TEXT NOT NULL, is_read BOOLEAN DEFAULT FALSE, timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP)", (err) => {
    if(err) console.error(err); else console.log('Messages table created/exists!');
    db.end();
});
