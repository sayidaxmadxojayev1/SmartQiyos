const { Telegraf } = require('telegraf');
const mysql = require('mysql2');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID; // @SaydjamollG4S Chat ID

// Ma'lumotlar bazasiga ulanish
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'smartqiyos_db'
}).promise();

bot.start((ctx) => {
    ctx.reply('Assalomu alaykum! SmartQiyos VIP obunasini faollashtirish uchun ID raqamingizni yuboring (Masalan: SQ-2099).');
});

bot.on('text', async (ctx) => {
    const text = ctx.message.text;
    if (text.startsWith('SQ-')) {
        const [rows] = await db.query("SELECT * FROM users WHERE user_id_code = ?", [text]);
        if (rows.length > 0) {
            ctx.reply(`Foydalanuvchi topildi: ${rows[0].first_name} ${rows[0].last_name}. Endi to'lov chekini (skrinshot) yuboring.`);
            // Save state for this user in temporary memory or DB session
        } else {
            ctx.reply("Bunday ID raqamga ega foydalanuvchi topilmadi. Iltimos, qaytadan tekshirib ko'ring.");
        }
    }
});

bot.on('photo', async (ctx) => {
    // Bu yerda foydalanuvchi chek yuborgan deb hisoblaymiz.
    // Chekni va User ID ni adminga yuboramiz.
    const photo = ctx.message.photo[ctx.message.photo.length - 1].file_id;
    
    ctx.telegram.sendPhoto(ADMIN_CHAT_ID, photo, {
        caption: `Yangi VIP obuna so'rovi!\nFoydalanuvchi ID: (Nusxalangan ID bilan birga keladi)\n\nIltimos, to'lovni tekshiring va Admin Paneldan faollashtiring.`
    });

    ctx.reply("Sizning so'rovingiz adminga yuborildi. Tez orada tekshirilib, VIP obunangiz faollashtiriladi.");
});

bot.launch().then(() => {
    console.log('Telegram Bot ishga tushdi...');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
