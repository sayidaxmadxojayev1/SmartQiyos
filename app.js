// ============================================================
// SMARTQIYOS APP LOGIC
// ============================================================

const STORES = [
    {
        id: 'uzum', name: 'Uzum Market', rating: 4.6,
        brandColor: 'bg-purple-500', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
        terms: '6-12 oy', docs: 'Faqat pasport', url: 'https://uzum.uz'
    },
    {
        id: 'olcha', name: 'Olcha.uz', rating: 4.8,
        brandColor: 'bg-[#00ffcc]', brandText: 'text-black',
        banner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426',
        terms: '3-24 oy', docs: 'Pasport/ID karta', url: 'https://olcha.uz'
    },
    {
        id: 'texnomart', name: 'Texnomart', rating: 4.9,
        brandColor: 'bg-[#ffcc00]', brandText: 'text-black',
        banner: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000',
        terms: '12-24 oy', docs: 'Pasport va daromad', url: 'https://texnomart.uz'
    },
    {
        id: 'mediapark', name: 'MediaPark', rating: 4.5,
        brandColor: 'bg-red-600', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80',
        terms: '12-24 oy', docs: 'Pasport/ID karta', url: 'https://mediapark.uz'
    },
    {
        id: 'asaxiy', name: 'Asaxiy', rating: 4.8,
        brandColor: 'bg-[#1a56db]', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000',
        terms: '6-18 oy', docs: 'Faqat pasport', url: 'https://asaxiy.uz'
    },
    {
        id: 'alifshop', name: 'Alifshop', rating: 4.7,
        brandColor: 'bg-blue-500', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80',
        terms: '6-24 oy', docs: 'Pasport/ID karta', url: 'https://alifshop.uz'
    },
    {
        id: 'idea', name: 'Idea', rating: 4.2,
        brandColor: 'bg-green-500', brandText: 'text-black',
        banner: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80',
        terms: '6-20 oy', docs: 'Faqat pasport', url: 'https://idea.uz'
    },
    {
        id: 'radius', name: 'Radius', rating: 4.5,
        brandColor: 'bg-orange-500', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2070',
        terms: '12 oy', docs: 'Pasport va daromad', url: 'https://radius.uz'
    },
    {
        id: 'elmakon', name: 'Elmakon', rating: 4.3,
        brandColor: 'bg-pink-600', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=2000',
        terms: '12-24 oy', docs: 'Faqat pasport', url: 'https://elmakon.uz'
    },
    {
        id: 'ishonch', name: 'Ishonch', rating: 4.4,
        brandColor: 'bg-blue-600', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1512428559083-a4979b2b91ef?q=80&w=2070',
        terms: '6-24 oy', docs: 'Pasport va daromad', url: 'https://ishonch.uz'
    },
    {
        id: 'goodzone', name: 'Goodzone', rating: 4.3,
        brandColor: 'bg-yellow-600', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000',
        terms: '12-18 oy', docs: 'Pasport/ID karta', url: 'https://goodzone.uz'
    },
    {
        id: 'terabayt', name: 'Terabayt', rating: 4.4,
        brandColor: 'bg-cyan-500', brandText: 'text-black',
        banner: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2000',
        terms: '12 oy', docs: 'Faqat pasport', url: 'https://terabayt.uz'
    },
    {
        id: 'zoodmall', name: 'ZoodMall', rating: 4.1,
        brandColor: 'bg-indigo-500', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2000',
        terms: '4-6 oy', docs: 'Karta orqali', url: 'https://zoodmall.uz'
    }
];

const MOCK_PAYMENTS = [
    { id: "PAY-101", user: "SQ-2099", amount: "3,999 UZS", date: "2026-04-20 14:30", status: "Tasdiqlandi" },
    { id: "PAY-102", user: "SQ-7777", amount: "3,999 UZS", date: "2026-04-21 09:15", status: "Tasdiqlandi" },
    { id: "PAY-103", user: "SQ-3001", amount: "3,999 UZS", date: "2026-04-24 10:00", status: "Kutish jarayonida" }
];

const DEFAULT_ADMIN_PASS = "admin123";
let adminLogged = localStorage.getItem('smartqiyos_admin_logged') === 'true';
let loginAttempts = parseInt(localStorage.getItem('smartqiyos_login_attempts') || '0');
let blockUntil = parseInt(localStorage.getItem('smartqiyos_block_until') || '0');

const TRANSLATIONS = {
    uz: {
        navHome: "Asosiy",
        navKatalog: "Katalog",
        navCalc: "Kalkulyator",
        navSmartSearch: "Aqlli qidiruv",
        navCompare: "Solishtirish",
        navFav: "Sevimli",
        navProf: "Profil",
        navFeed: "Takliflar",
        navAdmin: "Admin",
        pageTitleHome: "Internet Do'konlar",
        pageTitleProfile: "Shaxsiy Kabinet",
        pageTitleFav: "Sevimli Mahsulotlar",
        pageTitleFeed: "Taklif va Shikoyatlar",
        pageTitleCalc: "Kalkulyator",
        searchPlaceholder: "Mahsulot qidirish...",
        compTerms: "12 oygacha 0%",
        compDocs: "Faqat pasport",
        btnSolishtirish: "Solishtirish",
        btnSaytga: "Saytga o'tish",
        btnOrqaga: "Orqaga",
        vipTitle: "Pullik Obuna",
        vipDesc: "Ushbu aqlli bo'limdan foydalanish uchun VIP obunani faollashtiring.",
        vipPrice: "Xizmat narxi",
        btnBuyNow: "Hoziroq sotib olish",
        btnSubscribe: "Obuna bo'lish",
        btnLater: "Keyinroq",
        supportTitle: "Yordam Markazi",
        supportStatus: "Admin online",
        supportWelcome: "Assalomu alaykum! Fikr va takliflaringizni yozib qoldiring.",
        profileId: "ID Raqamingiz",
        profileStatus: "Statusingiz",
        statusVip: "VIP OBUNA",
        statusBasic: "ODDIY",
        expDate: "Tugash muddati",
        notFavs: "Sizda sevimli mahsulotlar yo'q.",
        noResults: "Hech narsa topilmadi...",
        noBrandResults: "Hozircha bu brendda mahsulot yo'q.",
        calcTitle: "Muddatli to'lov hisoblagichi",
        calcSubtitle: "Oylik to'lovni oson darajada hisoblang",
        calcLabelPrice: "Mahsulot narxi (UZS)",
        calcMinError: "Minimal summa 500 000 so'm",
        calcLabelDuration: "To'lov muddati (oy)",
        calcMonthlyLabel: "Oylik to'lov",
        calcPerMonth: "so'm / oyiga",
        calcTotalLabel: "Umumiy summa",
        calcOverLabel: "Ortiqcha to'lov",
        calcDisclaimer: "Hisob-kitoblar onlayn do'konlarning o'rtacha ustama foizlari asosida amalga oshirildi.",
        monthTerm: "oy"
    },
    ru: {
        navHome: "Главная",
        navKatalog: "Каталог",
        navCalc: "Калькулятор",
        navSmartSearch: "Умный поиск",
        navCompare: "Сравнение",
        navFav: "Избранное",
        navProf: "Профиль",
        navFeed: "Предложения",
        navAdmin: "Админ",
        pageTitleHome: "Интернет Магазины",
        pageTitleProfile: "Личный Кабинет",
        pageTitleFav: "Избранные Товары",
        pageTitleFeed: "Предложения и Жалобы",
        pageTitleCalc: "Калькулятор",
        searchPlaceholder: "Поиск товаров...",
        compTerms: "До 12 месяцев 0%",
        compDocs: "Только паспорт",
        btnSolishtirish: "Сравнить",
        btnSaytga: "Перейти на сайт",
        btnOrqaga: "Назад",
        vipTitle: "Платная Подписка",
        vipDesc: "Активируйте VIP подписку для доступа к этому разделу.",
        vipPrice: "Стоимость услуги",
        btnBuyNow: "Купить сейчас",
        btnSubscribe: "Подписаться",
        btnLater: "Позже",
        supportTitle: "Центр Поддержки",
        supportStatus: "Админ онлайн",
        supportWelcome: "Здравствуйте! Оставьте свои отзывы и предложения.",
        profileId: "Ваш ID",
        profileStatus: "Ваш статус",
        statusVip: "VIP ПОДПИСКА",
        statusBasic: "ОБЫЧНЫЙ",
        expDate: "Срок истечения",
        notFavs: "У вас нет избранных товаров.",
        noResults: "Ничего не найдено...",
        noBrandResults: "В этом бренде пока нет товаров.",
        calcTitle: "Калькулятор рассрочки",
        calcSubtitle: "Рассчитайте ежемесячный платеж легко",
        calcLabelPrice: "Цена товара (UZS)",
        calcMinError: "Минимальная сумма 500 000 сум",
        calcLabelDuration: "Срок оплаты (мес)",
        calcMonthlyLabel: "Ежемесячный платеж",
        calcPerMonth: "сум / в месяц",
        calcTotalLabel: "Общая сумма",
        calcOverLabel: "Переплата",
        calcDisclaimer: "Расчеты основаны на средних наценках интернет-магазинов.",
        monthTerm: "мес"
    },
    en: {
        navHome: "Home",
        navKatalog: "Catalog",
        navCalc: "Calculator",
        navSmartSearch: "Smart Search",
        navCompare: "Compare",
        navFav: "Favorites",
        navProf: "Profile",
        navFeed: "Feedback",
        navAdmin: "Admin",
        pageTitleHome: "Online Stores",
        pageTitleProfile: "Personal Account",
        pageTitleFav: "Favorite Products",
        pageTitleFeed: "Feedback & Complaints",
        pageTitleCalc: "Calculator",
        searchPlaceholder: "Search products...",
        compTerms: "Up to 12 months 0%",
        compDocs: "Passport only",
        btnSolishtirish: "Compare",
        btnSaytga: "Go to site",
        btnOrqaga: "Go back",
        vipTitle: "Paid Subscription",
        vipDesc: "Activate VIP subscription to use this smart section.",
        vipPrice: "Service price",
        btnBuyNow: "Buy now",
        btnSubscribe: "Subscribe",
        btnLater: "Later",
        supportTitle: "Support Center",
        supportStatus: "Admin online",
        supportWelcome: "Hello! Please leave your feedback and suggestions.",
        profileId: "Your ID",
        profileStatus: "Your Status",
        statusVip: "VIP SUBSCRIPTION",
        statusBasic: "BASIC",
        expDate: "Expiry date",
        notFavs: "You have no favorite products.",
        noResults: "Nothing found...",
        noBrandResults: "No products in this brand yet.",
        calcTitle: "Installment Calculator",
        calcSubtitle: "Calculate your monthly payment easily",
        calcLabelPrice: "Product Price (UZS)",
        calcMinError: "Minimum amount 500,000 UZS",
        calcLabelDuration: "Payment term (months)",
        calcMonthlyLabel: "Monthly payment",
        calcPerMonth: "UZS / per month",
        calcTotalLabel: "Total amount",
        calcOverLabel: "Overpayment",
        calcDisclaimer: "Calculations are based on average markups of online stores.",
        monthTerm: "months"
    }
};

// 📱 BRAND LOGOS AND DATA
// 📱 BRAND LOGOS AND DATA
const BRANDS_DATA = {
    'phones_001': [
        { name: "Apple", logo: "https://cdn.simpleicons.org/apple/00ffcc" },
        { name: "Samsung", logo: "https://cdn.simpleicons.org/samsung/00ffcc" },
        { name: "Xiaomi", logo: "https://cdn.simpleicons.org/xiaomi/00ffcc" },
        { name: "Honor", logo: "https://cdn.simpleicons.org/honor/00ffcc" },
        { name: "Vivo", logo: "https://cdn.simpleicons.org/vivo/00ffcc" },
        { name: "Oppo", logo: "https://cdn.simpleicons.org/oppo/00ffcc" },
        { name: "Realme", logo: "https://cdn.simpleicons.org/realme/00ffcc" },
        { name: "Tecno", logo: "https://cdn.simpleicons.org/tecno/00ffcc" },
        { name: "Infinix", logo: "https://cdn.simpleicons.org/infinix/00ffcc" }
    ],
    'pc_001': [
        { name: "HP", logo: "https://cdn.simpleicons.org/hp/00ffcc" },
        { name: "ASUS", logo: "https://cdn.simpleicons.org/asus/00ffcc" },
        { name: "Lenovo", logo: "https://cdn.simpleicons.org/lenovo/00ffcc" },
        { name: "Acer", logo: "https://cdn.simpleicons.org/acer/00ffcc" },
        { name: "Dell", logo: "https://cdn.simpleicons.org/dell/00ffcc" },
        { name: "MSI", logo: "https://cdn.simpleicons.org/msi/00ffcc" },
        { name: "Apple", logo: "https://cdn.simpleicons.org/apple/00ffcc" },
        { name: "Huawei", logo: "https://cdn.simpleicons.org/huawei/00ffcc" }
    ],
    'home_001': [
        { name: "Artel", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Artel_Logo.png" },
        { name: "LG", logo: "https://cdn.simpleicons.org/lg/00ffcc" },
        { name: "Samsung", logo: "https://cdn.simpleicons.org/samsung/00ffcc" },
        { name: "Bosch", logo: "https://cdn.simpleicons.org/bosch/00ffcc" },
        { name: "Beko", logo: "https://cdn.simpleicons.org/beko/00ffcc" },
        { name: "Hofmann", logo: "https://hofmann-shop.de/favicon.ico" },
        { name: "Shivaki", logo: "https://cdn.simpleicons.org/shivaki/00ffcc" },
        { name: "Avalon", logo: "https://cdn.simpleicons.org/avalon/00ffcc" }
    ],
    'tv_001': [
        { name: "Samsung", logo: "https://cdn.simpleicons.org/samsung/00ffcc" },
        { name: "LG", logo: "https://cdn.simpleicons.org/lg/00ffcc" },
        { name: "Sony", logo: "https://cdn.simpleicons.org/sony/00ffcc" },
        { name: "Artel", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Artel_Logo.png" },
        { name: "TCL", logo: "https://cdn.simpleicons.org/tcl/00ffcc" },
        { name: "Roison", logo: "https://cdn.simpleicons.org/roison/00ffcc" }
    ],
    'climate_001': [
        { name: "Gree", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Gree_Electric_Logo.svg" },
        { name: "Hofmann", logo: "https://hofmann-shop.de/favicon.ico" },
        { name: "Artel", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Artel_Logo.png" },
        { name: "Aux", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Aux_logo.svg" },
        { name: "Midea", logo: "https://cdn.simpleicons.org/midea/00ffcc" }
    ],
    'beauty_001': [
        { name: "Philips", logo: "https://cdn.simpleicons.org/philips/00ffcc" },
        { name: "Braun", logo: "https://cdn.simpleicons.org/braun/00ffcc" },
        { name: "Dyson", logo: "https://cdn.simpleicons.org/dyson/00ffcc" },
        { name: "Panasonic", logo: "https://cdn.simpleicons.org/panasonic/00ffcc" },
        { name: "Remington", logo: "https://cdn.simpleicons.org/remington/00ffcc" }
    ]
};

let currentLang = localStorage.getItem('smartqiyos_lang') || 'uz';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('smartqiyos_lang', lang);
    updateStaticLabels();
    renderStores();
    
    // Update active state in lang bar
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('text-white', btn.id === `lang-${lang}`);
        btn.classList.toggle('text-gray-500', btn.id !== `lang-${lang}`);
    });

    // Re-render current section parts if needed
    if (currentSection === 'profile') renderProfile();
    if (currentSection === 'favorites') renderFavorites();
    
    updatePageTitle();
}

function updateStaticLabels() {
    const t = TRANSLATIONS[currentLang];
    document.getElementById('navHome').innerHTML = `<i class="fas fa-home mr-4 w-6"></i> ${t.navHome}`;
    document.getElementById('navKatalog').innerHTML = `<i class="fas fa-th-large mr-4 w-6"></i> ${t.navKatalog}`;
    document.getElementById('navCalc').innerHTML = `<i class="fas fa-calculator mr-4 w-6"></i> ${t.navCalc}`;
    
    document.getElementById('navSmartSearch').innerHTML = `
        <div class="flex-1 flex items-center">
            <i class="fas fa-bolt mr-4 w-6"></i> ${t.navSmartSearch}
        </div>
        <span class="premium-badge-gold"><i class="fas fa-crown"></i></span>`;
    
    document.getElementById('navCompare').innerHTML = `
        <div class="flex-1 flex items-center">
            <i class="fas fa-balance-scale mr-4 w-6"></i> ${t.navCompare}
        </div>
        <span class="premium-badge-gold"><i class="fas fa-crown"></i></span>`;

    document.getElementById('navFav').innerHTML = `<i class="fas fa-heart mr-4 w-6"></i> ${t.navFav}`;
    document.getElementById('navProf').innerHTML = `<i class="fas fa-user mr-4 w-6"></i> ${t.navProf}`;
    document.getElementById('navFeed').innerHTML = `<i class="fas fa-comment-dots mr-4 w-6"></i> ${t.navFeed}`;
    
    document.getElementById('main-search').placeholder = t.searchPlaceholder;

    // Calculator Section fixed labels
    if (document.getElementById('section-kalkulyator')) {
        document.querySelector('#section-kalkulyator h2').textContent = t.calcTitle;
        document.querySelector('#section-kalkulyator p.text-sm').textContent = t.calcSubtitle;
        // Search by text content or a more stable selector
        const labels = document.querySelectorAll('#section-kalkulyator label');
        if (labels[0]) labels[0].textContent = t.calcLabelPrice;
        if (labels[1]) labels[1].textContent = t.calcLabelDuration;
        
        document.getElementById('calc-error').textContent = t.calcMinError;
        document.getElementById('calc-back-btn').innerHTML = `<i class="fas fa-arrow-left"></i> ${t.btnOrqaga}`;
        
        // Update results labels
        document.querySelectorAll('#section-kalkulyator .uppercase').forEach(el => {
            if (el.textContent.trim().toLowerCase().includes('oylik')) el.textContent = t.calcMonthlyLabel;
            if (el.textContent.trim().toLowerCase().includes('umumiy')) el.textContent = t.calcTotalLabel;
            if (el.textContent.trim().toLowerCase().includes('ortiqcha')) el.textContent = t.calcOverLabel;
        });
        const perMonthLabel = document.querySelector('#section-kalkulyator .text-lg.text-gray-500');
        if (perMonthLabel) perMonthLabel.textContent = t.calcPerMonth;
        
        const disclaimer = document.querySelector('#section-kalkulyator .mt-10.p-4');
        if (disclaimer) disclaimer.innerHTML = `<i class="fas fa-info-circle mr-2 text-[#00ffcc]"></i> ${t.calcDisclaimer}`;
        
        // Update Chips Labels
        const durationChips = document.getElementById('calc-durations').children;
        for (let chip of durationChips) {
            const months = chip.getAttribute('onclick').match(/\d+/)[0];
            chip.textContent = `${months} ${t.monthTerm}`;
        }
    }
}

function updatePageTitle() {
    const t = TRANSLATIONS[currentLang];
    const titles = {
        home: t.pageTitleHome,
        profile: t.pageTitleProfile,
        favorites: t.pageTitleFav,
        feedback: t.pageTitleFeed,
        kalkulyator: t.pageTitleCalc
    };
    if (titles[currentSection]) {
        document.getElementById('page-title').textContent = titles[currentSection];
        // Also update inner headings if they exist
        const profileInner = document.getElementById('profile-page-title');
        if (profileInner) profileInner.textContent = t.pageTitleProfile;
    }
    
    // Update Premium Button restricted states
    const isVip = checkVipStatus();
    const premiumBtns = ['navSmartSearch', 'navCompare'];
    premiumBtns.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.classList.toggle('restricted', !isVip);
        }
    });
}

function handleAdminLogin() {
    if (adminLogged && currentSection !== 'admin') {
        showSection('admin', 'navAdmin');
        showAdminSubSection('dashboard');
        return;
    }

    const now = Date.now();
    if (now < blockUntil) {
        const remaining = Math.ceil((blockUntil - now) / 60000);
        alert(`Tizim bloklangan! Iltimos ${remaining} daqiqadan so'ng urinib ko'ring.`);
        return;
    }

    const modal = document.getElementById('admin-login-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.getElementById('admin-pass-input').focus();
}

function closeAdminLogin() {
    const modal = document.getElementById('admin-login-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.getElementById('admin-pass-input').value = '';
}

function submitAdminLogin() {
    const passInput = document.getElementById('admin-pass-input');
    const pass = passInput.value;
    const now = Date.now();

    if (now < blockUntil) {
        alert("System Blocked!");
        return;
    }

    const currentStoredPass = localStorage.getItem('smartqiyos_admin_pass') || DEFAULT_ADMIN_PASS;
    if (pass === currentStoredPass) {
        adminLogged = true;
        loginAttempts = 0;
        localStorage.setItem('smartqiyos_admin_logged', 'true');
        localStorage.setItem('smartqiyos_login_attempts', '0');
        
        closeAdminLogin();
        updateAdminButtonVisibility();
        showSection('admin', 'navAdmin');
        showAdminSubSection('dashboard');
        // renderAdminPanel(); // Now fetching real data
    } else {
        loginAttempts++;
        localStorage.setItem('smartqiyos_login_attempts', loginAttempts.toString());
        
        if (loginAttempts >= 3) {
            blockUntil = now + (30 * 60 * 1000); // 30 minutes
            localStorage.setItem('smartqiyos_block_until', blockUntil.toString());
            alert("Ko'p marta xato urunish! Tizim 30 daqiqaga bloklandi.");
            closeAdminLogin();
        } else {
            alert(`Parol xato! Qolgan urinishlar: ${3 - loginAttempts}`);
            passInput.value = '';
            passInput.focus();
        }
    }
}

function updateAdminButtonVisibility() {
    const btn = document.getElementById('navAdmin');
    if (btn) {
        // Always show the button as an entry point, 
        // but highight it if logged in.
        if (adminLogged) {
            btn.classList.add('bg-[#00ffcc]/10');
            btn.classList.add('border-[#00ffcc]');
        } else {
            btn.classList.remove('bg-[#00ffcc]/10');
            btn.classList.remove('border-[#00ffcc]');
        }
        btn.classList.remove('hidden');
    }
}

function logoutAdmin() {
    adminLogged = false;
    localStorage.setItem('smartqiyos_admin_logged', 'false');
    updateAdminButtonVisibility();
    showSection('home', 'navHome');
}

let currentUser = { 
    isVip: localStorage.getItem('smartqiyos_vip') === 'true',
    userId: localStorage.getItem('smartqiyos_uid') || generateUserId(),
    subEnd: localStorage.getItem('smartqiyos_sub_end') || null,
    firstName: localStorage.getItem('smartqiyos_fname') || "Smart",
    lastName: localStorage.getItem('smartqiyos_lname') || "User",
    phone: localStorage.getItem('smartqiyos_phone') || "+998 90 123 45 67"
};

// ===========================================
// WEBSOCKET (SOCKET.IO) / MOCK INITIALIZATION
// System lacks NPM, implementing BroadcastChannel for ZERO-DEPENDENCY Real-time cross-tab chat!
// ===========================================
let socket = null;
const broadcastChannel = new BroadcastChannel('smartqiyos_chat');

// Universal Event Dispatcher
function emitChatEvent(eventName, payload) {
    if (typeof io !== 'undefined' && socket) {
        socket.emit(eventName, payload);
    } else {
        // Fallback to BroadcastChannel for local cross-tab Live Chat
        broadcastChannel.postMessage({ type: eventName, data: payload });
    }
}

// Receive Real-time Data
broadcastChannel.onmessage = (event) => {
    const { type, data } = event.data;
    
    // As USER receiving reply from ADMIN
    if (type === 'admin_reply' && data.user_id === currentUser.userId) {
        const chatBox = document.getElementById('chat-history');
        if (chatBox) {
            chatBox.innerHTML += `
                <div class="flex mb-4 fade-in">
                    <div class="bg-white/5 border border-white/10 text-white rounded-2xl rounded-tl-none px-6 py-4 max-w-[80%]">
                        <span class="text-[10px] text-[#00ffcc] font-bold uppercase tracking-widest block mb-1">Yordam Markazi</span>
                        ${data.text}
                        <div class="text-left mt-2 text-xs text-gray-400 font-medium">${new Date().toLocaleTimeString('uz-UZ', {hour: '2-digit', minute:'2-digit'})}</div>
                    </div>
                </div>
            `;
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }
    
    // As USER seeing their message was read
    if (type === 'message_read_by_admin' && data === currentUser.userId) {
        const unreadLabels = document.querySelectorAll('.msg-status-label');
        unreadLabels.forEach(label => {
            if (label.innerText.includes("Yuborildi")) {
                label.innerHTML = `O'qildi <i class="fas fa-check-double ml-1"></i>`;
                label.classList.remove('text-gray-400');
                label.classList.add('text-[#00ffcc]', 'drop-shadow-[0_0_8px_rgba(0,255,204,0.8)]');
            }
        });
    }

    // As ADMIN receiving message from USER
    if (type === 'send_message' && data.sender_type === 'user') {
        const list = document.getElementById('admin-chat-list');
        if (list) {
            // Append user to chat list dynamically if not already active
            const userCard = `
                <div onclick="openAdminChat('${data.user_id}', 'Foydalanuvchi')" class="p-4 rounded-2xl bg-white/5 border border-[#00ffcc]/30 cursor-pointer hover:bg-white/10 transition-all flex items-center justify-between mb-2 fade-in">
                    <div>
                        <h4 class="font-bold text-sm text-[#00ffcc]">Yangi Xabar (Live)</h4>
                        <p class="text-xs text-gray-400 font-mono mt-1">${data.user_id}</p>
                        <p class="text-[10px] text-gray-500 mt-1 truncate max-w-[150px]">${data.text}</p>
                    </div>
                    <div class="w-3 h-3 bg-[#00ffcc] rounded-full shadow-[0_0_8px_#00ffcc] animate-pulse"></div>
                </div>
            `;
            // Remove "Yuklanmoqda" 
            if(list.innerHTML.includes("yuklanmoqda")) list.innerHTML = '';
            list.innerHTML = userCard + list.innerHTML;
        }

        // If currently chatting with this user, append live text
        if (activeAdminChatUser === data.user_id) {
            const msgArea = document.getElementById('admin-chat-messages');
            if (msgArea) {
                msgArea.innerHTML += `
                    <div class="flex mb-4 fade-in">
                        <div class="bg-white/5 border border-white/10 text-white rounded-2xl rounded-tl-none px-6 py-4 max-w-[80%] border-l border-l-green-500 shadow-[0_0_15px_rgba(0,255,100,0.1)]">
                            <span class="text-[10px] text-[#00ffcc] font-bold uppercase tracking-widest block mb-1">Mijoz</span>
                            ${data.text}
                            <div class="text-left mt-2 text-xs text-gray-500">${new Date().toLocaleTimeString('uz-UZ', {hour: '2-digit', minute:'2-digit'})}</div>
                        </div>
                    </div>
                `;
                msgArea.scrollTop = msgArea.scrollHeight;
                emitChatEvent('mark_as_read', data.user_id); 
            }
        }
    }
    
    // Admin reading trigger fallback update
    if (type === 'mark_as_read') {
        // (Just triggers cross-tab for user above)
    }
};

// Mock Database
let MOCK_USERS = [
    { id: "SQ-2099", fname: "Ali", lname: "Valiyev", phone: "+998 91 111 22 33", isVip: true, subEnd: "2026-05-10" },
    { id: "SQ-3001", fname: "Olim", lname: "Hakimov", phone: "+998 90 999 88 77", isVip: false, subEnd: null },
    { id: "SQ-4040", fname: "Lola", lname: "Karimova", phone: "+998 93 444 55 66", isVip: false, subEnd: null },
    { id: "SQ-7777", fname: "Jasur", lname: "Rahimov", phone: "+998 99 777 77 77", isVip: true, subEnd: "2026-05-12" }
];

// Add current user to mock database if not exists
if (!MOCK_USERS.find(u => u.id === currentUser.userId)) {
    MOCK_USERS.push({
        id: currentUser.userId,
        fname: currentUser.firstName,
        lname: currentUser.lastName,
        phone: currentUser.phone,
        isVip: currentUser.isVip,
        subEnd: currentUser.subEnd
    });
}

function generateUserId() {
    const id = "SQ-" + Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem('smartqiyos_uid', id);
    return id;
}

function checkVipStatus() {
    if (currentUser.subEnd) {
        const now = new Date();
        const end = new Date(currentUser.subEnd);
        if (now > end) {
            currentUser.isVip = false;
            localStorage.setItem('smartqiyos_vip', 'false');
        }
    }
    return currentUser.isVip;
}

const favorites = new Set();

const CATEGORIES = [
    { id: 'phones_001', name: 'Telefonlar va gadjetlar', icon: 'fas fa-mobile-alt', count: '9+', color: 'from-purple-500 to-pink-600', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300' },
    { id: 'pc_001', name: 'Kompyuter texnikasi', icon: 'fas fa-laptop', count: '8+', color: 'from-blue-500 to-indigo-700', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300' },
    { id: 'home_001', name: 'Maishiy texnika', icon: 'fas fa-blender', count: '9+', color: 'from-green-500 to-teal-700', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=300' },
    { id: 'tv_001', name: 'Televizorlar, video va audio', icon: 'fas fa-tv', count: '8+', color: 'from-red-500 to-orange-500', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=300' },
    { id: 'climate_001', name: 'Iqlim texnikasi', icon: 'fas fa-wind', count: '5+', color: 'from-slate-400 to-gray-500', img: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=300' },
    { id: 'beauty_001', name: "Go'zallik va salomatlik", icon: 'fas fa-magic', count: '5+', color: 'from-rose-400 to-pink-500', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300' }
];

const PRODUCTS = [
    { id: 1, category: 'phones', brand: 'Apple', name: 'iPhone 15 Pro Max', img: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=500', price: "16,500,000 so'm", store: 'Texnomart' },
    { id: 2, category: 'phones', brand: 'Samsung', name: 'Samsung Galaxy S24 Ultra', img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500', price: "14,800,000 so'm", store: 'Olcha.uz' },
    { id: 3, category: 'phones', brand: 'Xiaomi', name: 'Xiaomi 14 Pro', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500', price: "9,800,000 so'm", store: 'MediaPark' },
    { id: 4, category: 'computers', brand: 'MacBook', name: 'MacBook Air M3', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500', price: "15,800,000 so'm", store: 'Texnomart' },
    { id: 5, category: 'computers', brand: 'Asus', name: 'ASUS ZenBook 14', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500', price: "9,800,000 so'm", store: 'Idea' },
    { id: 6, category: 'tvs', brand: 'Samsung', name: 'Samsung Neo QLED 65"', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500', price: "12,400,000 so'm", store: 'MediaPark' }
];

// 1. Render Stores
let _storesShowAll = false;
let _storesFilter = 'all'; // 'all' | 'pasport' | 'daromad' | 'karta'
let _storesSort = 'rating'; // 'rating' | 'term-asc' | 'term-desc'

function renderStores() {
    const t = TRANSLATIONS[currentLang];
    const grid = document.getElementById('section-home');

    // Filter
    let filtered = STORES.filter(s => {
        if (_storesFilter === 'pasport') return s.docs.toLowerCase().includes('faqat pasport');
        if (_storesFilter === 'daromad') return s.docs.toLowerCase().includes('daromad');
        if (_storesFilter === 'karta') return s.docs.toLowerCase().includes('karta');
        return true;
    });

    // Sort
    if (_storesSort === 'rating') filtered = filtered.sort((a, b) => b.rating - a.rating);
    else if (_storesSort === 'term-asc') filtered = filtered.sort((a, b) => parseInt(a.terms) - parseInt(b.terms));
    else if (_storesSort === 'term-desc') filtered = filtered.sort((a, b) => parseInt(b.terms) - parseInt(a.terms));

    const MAX_INITIAL = 8;
    const displayed = _storesShowAll ? filtered : filtered.slice(0, MAX_INITIAL);
    const hasMore = filtered.length > MAX_INITIAL && !_storesShowAll;

    const filterBtns = [
        { key: 'all',     label: 'Barchasi' },
        { key: 'pasport', label: '📋 Faqat pasport' },
        { key: 'daromad', label: '📄 Pasport + daromad' },
        { key: 'karta',   label: '💳 Karta orqali' }
    ].map(f => `
        <button onclick="setStoreFilter('${f.key}')" 
                class="px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    _storesFilter === f.key 
                        ? 'bg-[#00ffcc] text-black shadow-[0_0_10px_rgba(0,255,204,0.3)]' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }">${f.label}</button>
    `).join('');

    const sortBtns = [
        { key: 'rating',    label: '⭐ Reyting' },
        { key: 'term-asc',  label: '📅 Muddat ↑' },
        { key: 'term-desc', label: '📅 Muddat ↓' }
    ].map(s => `
        <button onclick="setStoreSort('${s.key}')" 
                class="px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    _storesSort === s.key 
                        ? 'bg-white/20 text-white' 
                        : 'bg-white/5 text-gray-500 hover:text-gray-300'
                }">${s.label}</button>
    `).join('');

    grid.innerHTML = `
        <!-- Filter & Sort Controls -->
        <div class="col-span-full mb-8 flex flex-col w-full">
            <div class="overflow-x-auto w-full pb-2 mb-2 no-scrollbar">
                <div class="inline-flex flex-nowrap items-center bg-black/30 backdrop-blur border border-white/5 rounded-2xl px-4 py-2 min-w-max gap-2">
                    <span class="text-[10px] text-gray-500 uppercase tracking-widest font-black mr-1">FILTRLASH:</span>
                    ${filterBtns}
                </div>
            </div>
            <div class="overflow-x-auto w-full pb-2 no-scrollbar">
                <div class="inline-flex flex-nowrap items-center bg-black/20 backdrop-blur border border-white/5 rounded-2xl px-4 py-2 min-w-max gap-2">
                    <span class="text-[10px] text-gray-500 uppercase tracking-widest font-black mr-1">SARALASH:</span>
                    ${sortBtns}
                </div>
            </div>
        </div>

        <!-- Store Cards -->
        ${displayed.length === 0 ? `
        <div class="col-span-full flex flex-col items-center justify-center py-24 text-center">
            <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-3xl">🔍</div>
            <h3 class="text-lg font-bold text-white mb-2">Bu shartlarga mos do'kon topilmadi</h3>
            <p class="text-gray-500 text-sm mb-6">Filtr shartlarini o'zgartiring va qayta urinib ko'ring.</p>
            <button onclick="setStoreFilter('all')" class="px-6 py-3 bg-[#00ffcc] text-black font-bold rounded-xl hover:shadow-[0_0_15px_#00ffcc] transition-all">Barcha do'konlarni ko'rish</button>
        </div>` : displayed.map(s => `
        <div class="group relative rounded-[24px] overflow-hidden border border-white/8 hover:border-[#00ffcc]/40 transition-all duration-300 flex flex-col"
             style="background: rgba(0,18,15,0.8); box-shadow: 0 4px 24px rgba(0,0,0,0.4);">
            <!-- Banner Image -->
            <div class="relative h-44 overflow-hidden">
                <img src="${s.banner}" 
                     loading="lazy"
                     onerror="this.parentElement.style.background='linear-gradient(135deg,#001a15,#003020)'; this.style.display='none';"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     alt="${s.name}">
                <!-- Gradient overlay -->
                <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,18,15,0.85) 100%);"></div>
                <!-- Neon top accent line -->
                <div class="absolute top-0 left-0 right-0 h-[2px]" style="background: linear-gradient(90deg, transparent, #00ffcc60, transparent);"></div>
                <!-- Store Name Badge (top-left) -->
                <div class="absolute top-4 left-4">
                    <span class="${s.brandColor} ${s.brandText} px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-lg">
                        ${s.name.toUpperCase()}
                    </span>
                </div>
                <!-- Rating Badge (top-right) -->
                <div class="absolute top-4 right-4">
                    <span class="bg-black/60 backdrop-blur-sm text-yellow-400 px-3 py-1.5 rounded-lg text-xs font-black border border-yellow-400/20">
                        ${s.rating} ★
                    </span>
                </div>
            </div>

            <!-- Card Body -->
            <div class="p-5 flex flex-col flex-1">
                <!-- Store Name -->
                <h4 class="text-lg font-black text-white mb-3 tracking-tight">${s.name}</h4>
                <!-- Details -->
                <div class="space-y-2 mb-5 flex-1">
                    <div class="flex items-center gap-2 text-xs text-gray-400">
                        <i class="far fa-clock text-[#00ffcc] w-4 text-center flex-shrink-0"></i>
                        <span>${s.terms}</span>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-gray-400">
                        <i class="far fa-file-alt text-[#00ffcc] w-4 text-center flex-shrink-0"></i>
                        <span>${s.docs}</span>
                    </div>
                </div>
                <!-- Action Buttons -->
                <div class="flex gap-2">
                    <button onclick="checkVip('compare')" 
                            class="flex-1 ${s.brandColor} ${s.brandText} py-3 rounded-xl font-bold text-sm transition-all filter hover:brightness-110 hover:shadow-lg">
                        ${t.btnSolishtirish}
                    </button>
                    <button onclick="window.open('${s.url}', '_blank')" 
                            class="flex-1 border border-white/15 hover:border-white/40 text-gray-300 hover:text-white py-3 rounded-xl text-sm font-bold transition-all">
                        ${t.btnSaytga}
                    </button>
                </div>
            </div>
        </div>
        `).join('')}

        <!-- Show More Button -->
        ${hasMore ? `
        <div class="col-span-full flex justify-center mt-6">
            <button onclick="showAllStores()" 
                    class="flex items-center gap-3 px-8 py-4 rounded-2xl border border-[#00ffcc]/30 text-[#00ffcc] font-bold hover:bg-[#00ffcc] hover:text-black transition-all hover:shadow-[0_0_20px_rgba(0,255,204,0.3)]">
                <i class="fas fa-chevron-down"></i>
                Barcha ${filtered.length} ta do'konni ko'rish
            </button>
        </div>` : ''}
    `;
}

function setStoreFilter(f) { _storesFilter = f; _storesShowAll = false; renderStores(); }
function setStoreSort(s) { _storesSort = s; renderStores(); }
function showAllStores() { _storesShowAll = true; renderStores(); }


// ============================================================
// 6. Installment Calculator Logic
// ============================================================

const CALCULATOR_RATES = {
    3: 0.12,
    6: 0.22,
    9: 0.30,
    12: 0.40,
    18: 0.52,
    24: 0.65
};

let currentCalcDuration = 12;
let currentCalcAmount = 0;

function handleCalcInput(el) {
    let val = el.value.replace(/\D/g, ''); // Remove non-digits
    
    if (val === "") {
        currentCalcAmount = 0;
        el.value = "";
    } else {
        currentCalcAmount = parseInt(val);
        // Format with spaces
        el.value = currentCalcAmount.toLocaleString('uz-UZ').replace(/,/g, ' ');
    }
    
    // Validation
    const errorEl = document.getElementById('calc-error');
    if (currentCalcAmount > 0 && currentCalcAmount < 500000) {
        errorEl.classList.remove('hidden');
    } else {
        errorEl.classList.add('hidden');
    }
    
    calculateInstallments();
}

function updateCalcDuration(months) {
    currentCalcDuration = months;
    
    // UI Update for chips
    document.querySelectorAll('.calc-chip').forEach(btn => {
        btn.classList.remove('active-glow');
        if (btn.innerText.includes(months + " oy")) {
            btn.classList.add('active-glow');
        }
    });
    
    calculateInstallments();
}

function calculateInstallments() {
    if (currentCalcAmount < 500000) {
        updateCalcDisplay(0, 0, 0);
        return;
    }
    
    const markup = CALCULATOR_RATES[currentCalcDuration] || 0.40;
    const totalAmount = currentCalcAmount + (currentCalcAmount * markup);
    const monthlyPayment = totalAmount / currentCalcDuration;
    const overpayment = totalAmount - currentCalcAmount;
    
    updateCalcDisplay(monthlyPayment, totalAmount, overpayment);
}

function updateCalcDisplay(monthly, total, over) {
    animateValue('res-monthly', monthly);
    document.getElementById('res-total').textContent = Math.round(total).toLocaleString('uz-UZ').replace(/,/g, ' ') + " so'm";
    document.getElementById('res-over').textContent = "+" + Math.round(over).toLocaleString('uz-UZ').replace(/,/g, ' ') + " so'm";
}

function animateValue(id, end) {
    const el = document.getElementById(id);
    const start = parseInt(el.innerText.replace(/\s/g, '')) || 0;
    const duration = 500;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        el.innerText = current.toLocaleString('uz-UZ').replace(/,/g, ' ');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

// 2. Navigation (UPDATED)
function showSection(section, btnId) {
    currentSection = section;
    const sections = ['section-home', 'section-products', 'section-profile', 'section-favorites', 'section-feedback', 'section-kalkulyator', 'section-admin'];
    sections.forEach(s => {
        const el = document.getElementById(s);
        if(el) el.classList.add('hidden');
    });
    
    // Active Sidebar logic
    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active-glow'));
    if(btnId) {
        document.getElementById(btnId).classList.add('active-glow');
    }
    
    const targetSectionId = `section-${section}`;
    if (document.getElementById(targetSectionId)) {
        document.getElementById(targetSectionId).classList.remove('hidden');
        updatePageTitle();
        
        // Admin Sidebar Logic
        const mainSidebar = document.querySelector('aside:not(#admin-sidebar)');
        const adminSidebar = document.getElementById('admin-sidebar');
        if (section === 'admin') {
            mainSidebar.classList.add('hidden');
            adminSidebar.classList.remove('hidden');
            adminSidebar.classList.add('flex');
            renderAdminPanel();
        } else {
            mainSidebar.classList.remove('hidden');
            adminSidebar.classList.add('hidden');
            adminSidebar.classList.remove('flex');
        }

        if (section === 'profile') renderProfile();
        if (section === 'favorites') renderFavorites();
    }
}

function showAdminSubSection(subId) {
    document.querySelectorAll('.admin-sub-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`admin-sub-${subId}`).classList.remove('hidden');
    
    document.querySelectorAll('.admin-sidebar-btn').forEach(btn => btn.classList.remove('active-admin-glow'));
    const btnMap = {
        dashboard: 'adminNavDash',
        users: 'adminNavUsers',
        payments: 'adminNavPay',
        stores: 'adminNavStores',
        settings: 'adminNavSettings',
        support: 'adminNavSupport'
    };
    if (btnMap[subId]) document.getElementById(btnMap[subId]).classList.add('active-admin-glow');
    
    if (subId === 'users') renderAdminPanel();
    if (subId === 'stores') renderAdminStores();
    if (subId === 'payments') renderAdminPayments();
    if (subId === 'support') renderAdminSupport();
}

function renderAdminPayments() {
    const section = document.getElementById('admin-sub-payments');
    if (!section) return;
    
    section.innerHTML = `
        <h2 class="text-3xl font-black mb-8 tracking-tighter">To'lovlar <span class="text-[#00ffcc]">Tarixi</span></h2>
        <div class="bg-[#002320]/50 border border-[#01312b] rounded-[32px] overflow-hidden backdrop-blur-xl">
            <table class="w-full text-left text-sm">
                <thead class="bg-black/40 text-gray-500 uppercase text-[10px] font-black border-b border-[#01312b]">
                    <tr>
                        <th class="p-8">ID</th>
                        <th class="p-8">Foydalanuvchi</th>
                        <th class="p-8">Summa</th>
                        <th class="p-8">Sana</th>
                        <th class="p-8">Status</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-[#01312b]">
                    ${MOCK_PAYMENTS.map(p => `
                        <tr class="admin-glass-row">
                            <td class="p-8 font-mono text-[#00ffcc]">${p.id}</td>
                            <td class="p-8 font-bold">${p.user}</td>
                            <td class="p-8 text-white">${p.amount}</td>
                            <td class="p-8 text-gray-500">${p.date}</td>
                            <td class="p-8">
                                <span class="px-3 py-1 rounded-full text-[10px] font-black ${p.status === 'Tasdiqlandi' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}">
                                    ${p.status}
                                </span>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderAdminSupport() {
    const section = document.getElementById('admin-sub-support');
    if (!section) return;

    section.innerHTML = `
        <div class="flex h-full w-full">
            <!-- Chat List Sidebar -->
            <div class="w-1/3 border-r border-[#01312b] bg-black/20 flex flex-col">
                <div class="p-6 border-b border-[#01312b]">
                    <h2 class="text-2xl font-black tracking-tighter">Taklif va shikoyatlar</h2>
                    <p class="text-xs text-gray-500 mt-1 uppercase tracking-widest font-bold">Murojaatlar qutisi</p>
                </div>
                <div id="admin-chat-list" class="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-2">
                    <p class="text-gray-500 text-center text-xs mt-10">Murojaatlar yuklanmoqda...</p>
                </div>
            </div>

            <!-- Chat Window -->
            <div class="flex-1 flex flex-col relative bg-[#001211]/50">
                <div id="admin-chat-header" class="p-6 border-b border-[#01312b] bg-[#002320]/80 backdrop-blur-md flex items-center justify-between">
                    <h3 class="text-lg font-bold text-gray-400">Chatni tanlang</h3>
                </div>
                
                <div id="admin-chat-messages" class="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col gap-4">
                    <!-- Messages go here -->
                </div>

                <div class="p-4 bg-[#002320] border-t border-[#01312b] flex gap-4 items-center hidden" id="admin-chat-input-area">
                    <input type="text" id="admin-chat-input" placeholder="Javob yozish..." class="flex-1 bg-black/40 border border-[#01312b] rounded-full py-4 px-6 focus:border-[#00ffcc] outline-none transition-all text-sm">
                    <button id="admin-chat-send-btn" class="bg-[#00ffcc] text-[#001211] w-14 h-14 rounded-full font-black hover:shadow-[0_0_15px_#00ffcc] transition flex items-center justify-center">
                        <i class="fas fa-paper-plane text-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    if (socket && typeof socket.emit === 'function') {
        socket.emit('join_admin_room');
    }

    fetchAdminChats();
}

function fetchAdminChats() {
    const list = document.getElementById('admin-chat-list');
    if (!list) return;

    list.innerHTML = `
        <div onclick="openAdminChat('SQ-2099', 'Ali Valiyev')" class="p-4 rounded-2xl bg-white/5 border border-[#00ffcc]/30 cursor-pointer hover:bg-white/10 transition-all flex items-center justify-between">
            <div>
                <h4 class="font-bold text-sm text-[#00ffcc]">Ali Valiyev</h4>
                <p class="text-xs text-gray-400 font-mono mt-1">SQ-2099</p>
                <p class="text-[10px] text-gray-500 mt-1 truncate max-w-[150px]">To'lov tizmi haqida savol...</p>
            </div>
            <div class="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]"></div>
        </div>
    `;
}

let activeAdminChatUser = null;
function openAdminChat(userId, userName) {
    activeAdminChatUser = userId;
    document.getElementById('admin-chat-header').innerHTML = `<h3 class="text-lg font-bold text-white">${userName} <span class="text-xs text-gray-500 font-mono ml-2 border border-white/10 bg-black/30 px-2 py-1 rounded-full">${userId}</span></h3>`;
    const msgArea = document.getElementById('admin-chat-messages');
    
    emitChatEvent('mark_as_read', userId); 

    msgArea.innerHTML = `
        <div class="flex mb-4">
            <div class="bg-white/5 border border-white/10 text-white rounded-2xl rounded-tl-none px-6 py-4 max-w-[80%]">
                <span class="text-[10px] text-[#00ffcc] font-bold uppercase tracking-widest block mb-1">Mijoz</span>
                Assalomu alaykum! Saytdagi xatoni qanday to'g'irlash mumkin?
                <div class="text-left mt-2 text-xs text-gray-500">11:00</div>
            </div>
        </div>
    `;
    
    document.getElementById('admin-chat-input-area').classList.remove('hidden');
    
    document.getElementById('admin-chat-send-btn').onclick = () => {
        const input = document.getElementById('admin-chat-input');
        const text = input.value.trim();
        if(!text) return;
        
        msgArea.innerHTML += `
            <div class="flex justify-end mb-4 fade-in">
                <div class="bg-[#001a1a] border border-[#00ffcc]/30 text-white rounded-2xl rounded-tr-none px-6 py-3 max-w-[80%] relative shadow-[0_0_15px_rgba(0,255,204,0.05)]">
                    ${text}
                    <div class="text-right mt-1 text-xs text-gray-400 font-medium">${new Date().toLocaleTimeString('uz-UZ', {hour: '2-digit', minute:'2-digit'})} • Yuborildi</div>
                </div>
            </div>
        `;
        input.value = '';
        msgArea.scrollTop = msgArea.scrollHeight;

        emitChatEvent('send_message', { user_id: userId, sender_type: 'admin', text });
    };
}

// 3. Search Logic
function handleSearch() {
    const query = document.getElementById('main-search').value.toLowerCase();
    const home = document.getElementById('section-home');
    const productsView = document.getElementById('section-products');
    const grid = document.getElementById('products-grid');

    if(query.length > 0) {
        home.classList.add('hidden');
        productsView.classList.remove('hidden');
        document.getElementById('page-title').textContent = "Qidiruv Natijalari";

        const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query));
        
        grid.innerHTML = results.length > 0 ? results.map(p => renderProductCard(p)).join('') 
        : '<p class="text-gray-500 mt-10 col-span-full text-center">Hech narsa topilmadi...</p>';
    } else {
        resetHome();
    }
}

function resetHome() {
    document.getElementById('main-search').value = "";
    document.getElementById('section-products').classList.add('hidden');
    document.getElementById('section-admin').classList.add('hidden');
    document.getElementById('section-home').classList.remove('hidden');
    document.getElementById('page-title').textContent = TRANSLATIONS[currentLang].pageTitleHome;
}

// Returns a reliable fallback image per category when the primary image fails
function getFallbackImg(categoryId) {
    const fallbacks = {
        'phones_001': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
        'pc_001':     'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
        'home_001':   'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80',
        'tv_001':     'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80',
        'climate_001':'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80',
        'beauty_001': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80'
    };
    return fallbacks[categoryId] || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80';
}

function renderProductCard(p) {
    const isFav = favorites.has(p.id);
    const favColor = isFav ? 'text-red-500' : 'text-gray-500 hover:text-red-400';
    const isVip = checkVipStatus();
    
    // For real-time products, we show a simplified card with multiple store options
    const storeInfo = p.stores ? p.stores.map(s => `
        <div class="flex justify-between items-center text-[10px] text-gray-400 border-b border-white/5 py-2">
            <span>${s.name}</span>
            <span class="text-[#00ffcc] font-bold">${Math.round(s.price).toLocaleString('uz-UZ').replace(/,/g, ' ')} so'm</span>
        </div>
    `).join('') : '';

    const priceLabel = p.price ? (typeof p.price === 'string' ? p.price : Math.round(p.price).toLocaleString('uz-UZ').replace(/,/g, ' ') + " so'm") : '';

    return `
        <div class="card-shop p-6 border border-white/5 relative group flex flex-col h-full">
            <button onclick="toggleFavorite(${p.id}, event)" class="absolute top-4 right-4 transition text-2xl z-10 ${favColor}">
                <i class="fas fa-heart"></i>
            </button>
            <div class="h-40 flex items-center justify-center mb-4 bg-black/20 rounded-2xl overflow-hidden">
                <img src="${p.img}" 
                     onerror="this.src=getFallbackImg('${p.category}')"
                     class="max-h-full w-full object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
            <h5 class="font-bold text-lg leading-tight mb-2">${p.name}</h5>
            <p class="text-[#00ffcc] font-black text-xl mb-3">${priceLabel}</p>
            
            <div class="space-y-1 mb-6 flex-1">
                ${storeInfo}
            </div>

            <div class="flex flex-col gap-2 mt-auto">
                ${!isVip ? `
                    <button onclick="checkVip('details')" 
                            class="w-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black py-3 rounded-xl font-black text-sm transition hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] flex items-center justify-center gap-2">
                        <i class="fas fa-crown text-xs"></i> TAFSILOTLARNI KO'RISH
                        <span class="text-[10px] bg-black/20 px-2 py-0.5 rounded-full font-bold">3,999 so'm</span>
                    </button>
                ` : `
                    <button onclick="window.open('${p.stores ? p.stores[0].url : '#'}', '_blank')" 
                            class="w-full bg-[#00ffcc] text-black py-3 rounded-xl font-bold text-sm transition hover:shadow-[0_0_15px_#00ffcc]">
                        <i class="fas fa-external-link-alt mr-2"></i> SOTIB OLISH
                    </button>
                `}
            </div>
        </div>
    `;
}

function toggleFavorite(id, e) {
    if(e) e.stopPropagation();
    if(favorites.has(id)) {
        favorites.delete(id);
    } else {
        favorites.add(id);
    }
    // Re-render if in home search or favorites
    const title = document.getElementById('page-title').textContent;
    if(title === "Sevimli Mahsulotlar") {
        renderFavorites();
    } else {
        // Just brute visual update
        e.target.closest('button').className = `absolute top-4 right-4 transition text-2xl z-10 ${favorites.has(id) ? 'text-red-500' : 'text-gray-500 hover:text-red-400'}`;
    }
}

function renderFavorites() {
    const grid = document.getElementById('favorites-grid');
    const favProducts = PRODUCTS.filter(p => favorites.has(p.id));
    if(favProducts.length === 0) {
        grid.innerHTML = '<div class="col-span-full py-20 text-center text-gray-500"><i class="fas fa-heart-broken text-6xl mb-4"></i><p>Sizda sevimli mahsulotlar yo\'q.</p></div>';
    } else {
        grid.innerHTML = favProducts.map(p => renderProductCard(p)).join('');
    }
}

async function renderProfile() {
    const t = TRANSLATIONS[currentLang];
    const container = document.getElementById('profile-container');
    if (!container) return;

    try {
        const response = await fetch(`/api/profile/${currentUser.userId}`);
        const data = await response.json();
        
        // Update currentUser from API response
        if (data && !data.error) {
            currentUser.isVip = data.is_vip;
            currentUser.subEnd = data.vip_end_date;
            currentUser.firstName = data.first_name;
            currentUser.lastName = data.last_name;
            currentUser.phone = data.phone_number;
        }
    } catch (e) {
        console.error("Profile fetch error:", e);
    }
    
    const isVip = checkVipStatus();
    currentUser.isVip = isVip;

    const adminLink = adminLogged ? `
        <div class="mt-4 p-4 bg-[#00ffcc]/10 border border-[#00ffcc]/20 rounded-2xl flex items-center justify-between mb-6">
            <span class="text-xs font-black text-[#00ffcc] uppercase tracking-widest"><i class="fas fa-user-shield mr-2"></i> Siz Adminsiz</span>
            <button onclick="showSection('admin', 'navAdmin'); showAdminSubSection('dashboard');" class="text-[10px] bg-[#00ffcc] text-black px-4 py-2 rounded-xl font-black hover:shadow-[0_0_15px_#00ffcc] transition-all">Admin Panelga o'tish</button>
        </div>
    ` : '';

    const vipExpiry = currentUser.subEnd && currentUser.subEnd !== 'N/A' ? currentUser.subEnd : null;

    container.innerHTML = `
        <div class="flex flex-col items-center justify-center min-h-[60vh] py-8 fade-in">

            ${adminLink}

            <!-- ═══ MAIN USER CARD ═══ -->
            <div class="relative w-[95%] sm:w-full max-w-lg mx-auto rounded-[32px] border border-[#00ff88]/25 overflow-hidden"
                 style="background: rgba(0,0,0,0.55); backdrop-filter: blur(18px); box-shadow: 0 0 40px rgba(0,255,136,0.08), 0 8px 32px rgba(0,0,0,0.5);">

                <!-- Decorative top bar -->
                <div class="h-1 w-full" style="background: linear-gradient(90deg, #00ffcc, #00ff88, #00ffcc);"></div>

                <div class="p-8 sm:p-10 flex flex-col items-center text-center gap-4">

                    <!-- Avatar -->
                    <div class="relative mb-2">
                        <div class="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-black text-[#001211] select-none"
                             style="background: linear-gradient(135deg, #00ffcc, #00cc88); box-shadow: 0 0 0 4px rgba(0,255,204,0.15), 0 0 30px rgba(0,255,204,0.35);">
                            ${currentUser.firstName ? currentUser.firstName[0].toUpperCase() : '?'}${currentUser.lastName ? currentUser.lastName[0].toUpperCase() : ''}
                        </div>
                        ${isVip ? `
                        <div class="absolute -bottom-1 -right-1 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg" title="VIP">
                            <i class="fas fa-crown text-black text-xs"></i>
                        </div>` : ''}
                    </div>

                    <!-- User ID -->
                    <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                        <i class="fas fa-id-badge text-[#00ffcc] text-xs"></i>
                        <span class="text-gray-400 text-xs font-mono tracking-widest">ID: <span class="text-[#00ffcc] font-bold">${currentUser.userId}</span></span>
                        <button onclick="navigator.clipboard.writeText('${currentUser.userId}')" title="Nusxalash" class="text-gray-600 hover:text-[#00ffcc] transition text-xs ml-1">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>

                    <!-- Full Name -->
                    <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mt-1">
                        ${currentUser.firstName} <span class="text-[#00ffcc]">${currentUser.lastName}</span>
                    </h2>

                    <!-- VIP Badge -->
                    ${isVip ? `
                    <div class="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest">
                        <i class="fas fa-crown"></i> VIP Obuna Faol
                        ${vipExpiry ? `<span class="text-gray-400 font-normal normal-case tracking-normal ml-1">— ${vipExpiry}</span>` : ''}
                    </div>` : `
                    <div class="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest">
                        <i class="fas fa-user"></i> Oddiy Foydalanuvchi
                    </div>`}

                    <!-- Info Fields -->
                    <div class="w-full grid grid-cols-1 gap-3 mt-4">
                        <!-- Phone -->
                        <div class="flex items-center gap-4 bg-white/5 border border-white/8 rounded-2xl px-5 py-4 text-left">
                            <div class="w-10 h-10 rounded-xl bg-[#00ffcc]/10 flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-phone text-[#00ffcc]"></i>
                            </div>
                            <div>
                                <p class="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-0.5">Telefon raqam</p>
                                <p class="text-white font-bold text-base">${currentUser.phone || '+998 -- --- -- --'}</p>
                            </div>
                        </div>

                        <!-- Status -->
                        <div class="flex items-center gap-4 bg-white/5 border border-white/8 rounded-2xl px-5 py-4 text-left">
                            <div class="w-10 h-10 rounded-xl ${isVip ? 'bg-yellow-500/10' : 'bg-white/5'} flex items-center justify-center flex-shrink-0">
                                <i class="fas ${isVip ? 'fa-star text-yellow-400' : 'fa-user text-gray-500'}"></i>
                            </div>
                            <div>
                                <p class="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-0.5">Obuna holati</p>
                                <p class="${isVip ? 'text-yellow-400' : 'text-gray-400'} font-bold text-base">${isVip ? 'VIP Premium — Faol' : 'VIP emas'}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        <button onclick="openEditProfile()" 
                                class="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all border border-[#00ffcc]/30 text-[#00ffcc] hover:bg-[#00ffcc] hover:text-black hover:border-transparent hover:shadow-[0_0_20px_rgba(0,255,204,0.4)]">
                            <i class="fas fa-pencil-alt"></i> Profilni tahrirlash
                        </button>
                        <button onclick="logout()" 
                                class="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white hover:border-transparent">
                            <i class="fas fa-sign-out-alt"></i> Chiqish
                        </button>
                    </div>

                    ${!isVip ? `
                    <!-- VIP Upsell -->
                    <div class="w-full mt-2 p-5 rounded-2xl border border-yellow-500/20 text-left" style="background: rgba(234,179,8,0.05);">
                        <div class="flex items-center gap-3 mb-3">
                            <i class="fas fa-crown text-yellow-400"></i>
                            <h4 class="text-yellow-400 font-black text-sm uppercase tracking-widest">VIP obunani faollashtiring</h4>
                        </div>
                        <p class="text-gray-400 text-xs mb-4">Barcha premium funksiyalarga kirish: Aqlli qidiruv, narx solishtirish, cheksiz katalog va ko'proq!</p>
                        <a href="https://t.me/SaydjamollG4S" target="_blank" 
                           class="flex items-center justify-center gap-2 w-full bg-yellow-500 text-black py-3 rounded-xl font-black text-sm hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all">
                            <i class="fab fa-telegram-plane"></i> Telegram orqali sotib olish
                        </a>
                    </div>` : ''}

                </div>
            </div>
        </div>

        <!-- Edit Profile Modal -->
        <div id="edit-profile-modal" style="display:none" class="fixed inset-0 bg-black/80 backdrop-blur-md z-[300] flex items-center justify-center p-4">
            <div class="w-full max-w-md rounded-[28px] border border-[#00ff88]/20 p-8 relative" style="background: rgba(0,10,8,0.95);">
                <button onclick="closeEditProfile()" class="absolute top-5 right-5 text-gray-500 hover:text-white transition text-xl">
                    <i class="fas fa-times"></i>
                </button>
                <h3 class="text-xl font-black text-white mb-6"><i class="fas fa-pencil-alt text-[#00ffcc] mr-2"></i>Profilni tahrirlash</h3>
                <div class="space-y-4">
                    <div>
                        <label class="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-2">Ism</label>
                        <input id="edit-firstname" type="text" value="${currentUser.firstName}"
                               class="w-full bg-black/40 border border-[#01312b] focus:border-[#00ffcc] rounded-2xl py-4 px-5 text-white outline-none transition-all">
                    </div>
                    <div>
                        <label class="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-2">Familiya</label>
                        <input id="edit-lastname" type="text" value="${currentUser.lastName}"
                               class="w-full bg-black/40 border border-[#01312b] focus:border-[#00ffcc] rounded-2xl py-4 px-5 text-white outline-none transition-all">
                    </div>
                    <div>
                        <label class="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-2">Telefon</label>
                        <input id="edit-phone" type="tel" value="${currentUser.phone || ''}"
                               class="w-full bg-black/40 border border-[#01312b] focus:border-[#00ffcc] rounded-2xl py-4 px-5 text-white outline-none transition-all">
                    </div>
                </div>
                <div class="flex gap-3 mt-6">
                    <button onclick="saveProfileEdits()" 
                            class="flex-1 bg-[#00ffcc] text-black py-4 rounded-2xl font-black hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] transition-all">
                        <i class="fas fa-check mr-2"></i>Saqlash
                    </button>
                    <button onclick="closeEditProfile()" 
                            class="flex-1 bg-white/5 text-gray-400 py-4 rounded-2xl font-bold hover:text-white transition-all">
                        Bekor qilish
                    </button>
                </div>
            </div>
        </div>
    `;
}

function openEditProfile() {
    const modal = document.getElementById('edit-profile-modal');
    if (modal) modal.style.display = 'flex';
}

function closeEditProfile() {
    const modal = document.getElementById('edit-profile-modal');
    if (modal) modal.style.display = 'none';
}

function saveProfileEdits() {
    const fn = document.getElementById('edit-firstname')?.value.trim();
    const ln = document.getElementById('edit-lastname')?.value.trim();
    const ph = document.getElementById('edit-phone')?.value.trim();
    if (!fn || !ln) { alert("Ism va familiya bo'sh bo'lmasligi kerak!"); return; }
    currentUser.firstName = fn;
    currentUser.lastName = ln;
    if (ph) currentUser.phone = ph;
    // Persist to localStorage
    localStorage.setItem('smartqiyos_firstname', fn);
    localStorage.setItem('smartqiyos_lastname', ln);
    if (ph) localStorage.setItem('smartqiyos_phone', ph);
    closeEditProfile();
    renderProfile();
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if(!text) return;
    
    const chatBox = document.getElementById('chat-history');
    const timeStr = new Date().toLocaleTimeString('uz-UZ', {hour: '2-digit', minute:'2-digit'});
    
    // UI - Yuborilgan xabarni ekranda chizish (Yuborildi - 1 check) bilan
    chatBox.innerHTML += `
        <div class="flex justify-end mb-4 fade-in">
            <div class="bg-[#001a1a] border border-[#00ffcc]/30 text-white rounded-2xl rounded-tr-none px-6 py-3 max-w-[80%] relative shadow-[0_0_15px_rgba(0,255,204,0.05)]">
                ${text}
                <div class="text-right mt-1 text-xs text-gray-400 font-medium">
                    ${timeStr} • <span class="msg-status-label transition-all">Yuborildi <i class="fas fa-check ml-1"></i></span>
                </div>
            </div>
        </div>
    `;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Emit event manually (Universal Fallback)
    emitChatEvent('send_message', {
        user_id: currentUser.userId,
        sender_type: 'user',
        text: text
    });
}

// OBUNA YO'NALTIRISH FUNKSIYASI
function handleVipSubscription() {
    const telegramBot = "https://t.me/SaydjamollG4S";
    const t = TRANSLATIONS[currentLang];
    const message = `Assalomu alaykum, ID: ${currentUser.userId} uchun obuna sotib olmoqchiman.`;
    
    alert(`DIQQAT: To'lovni amalga oshirish uchun ID raqamingizni (${currentUser.userId}) nusxalab oling va Telegram orqali adminga yuboring.`);
    
    // Copy to clipboard attempt
    navigator.clipboard.writeText(currentUser.userId).then(() => {
        console.log("ID copied to clipboard");
    });

    window.open(`${telegramBot}?text=${encodeURIComponent(message)}`, '_blank');
}

// TEST: Activate VIP (for demo purposes)
function activateVipDemo() {
    const end = new Date();
    end.setDate(end.getDate() + 15);
    currentUser.isVip = true;
    currentUser.subEnd = end.toISOString().split('T')[0];
    localStorage.setItem('smartqiyos_vip', 'true');
    localStorage.setItem('smartqiyos_sub_end', currentUser.subEnd);
    alert("VIP faollashtirildi (Demo)");
    renderProfile();
}

// 4. VIP Modules
function checkVip(action) {
    if (!checkVipStatus()) {
        const t = TRANSLATIONS[currentLang];
        document.getElementById('vip-title-text').textContent = t.vipTitle;
        document.getElementById('vip-desc-text').textContent = t.vipDesc;
        document.getElementById('vip-price-label').textContent = t.vipPrice;
        document.getElementById('vip-buy-btn').innerHTML = `<i class="fab fa-telegram-plane mr-2"></i> ${t.btnBuyNow}`;
        
        const modal = document.getElementById('vip-modal');
        modal.classList.remove('hidden');
        modal.style.display = 'flex'; // Explicitly set to flex
        
        const box = document.getElementById('vip-box');
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
    } else {
        if (action === 'compare') {
            alert("Solishtirish bo'limiga o'tildi (VIP)");
        } else if (action === 'vip-search') {
            alert("Aqlli qidiruv bo'limiga o'tildi (VIP)");
        }
    }
}

function closeVip() { 
    const modal = document.getElementById('vip-modal');
    modal.classList.add('hidden'); 
    modal.style.display = 'none';
    const box = document.getElementById('vip-box');
    box.classList.add('scale-95');
    box.classList.remove('scale-100');
}

// ============================================================
// 👤 ADMIN PANEL LOGIC
// ============================================================

async function renderAdminPanel() {
    const table = document.getElementById('admin-user-table');
    const totalUsersEl = document.getElementById('stat-total-users');
    const vipUsersEl = document.getElementById('stat-vip-users');
    
    if(!table) return;

    let users = [];
    try {
        const response = await fetch('/api/admin/users');
        users = await response.json();
    } catch (e) {
        console.error("Admin user list fetch error:", e);
    }

    totalUsersEl.textContent = users.length;
    vipUsersEl.textContent = users.filter(u => u.is_vip).length;

    table.innerHTML = users.map(u => {
        let remainingTime = "---";
        if (u.is_vip && u.vip_end_date) {
            const diff = new Date(u.vip_end_date) - new Date();
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                remainingTime = `${days} kun ${hours} soat`;
            } else {
                remainingTime = "Tugagan";
            }
        }

        const idCode = u.user_id_code || u.id; // Fallback if needed

        return `
            <tr class="admin-glass-row">
                <td class="p-8">
                    <div class="font-bold text-white">${u.first_name} ${u.last_name}</div>
                    <div class="text-[10px] text-gray-500">${u.phone_number}</div>
                </td>
                <td class="p-8">
                    <span class="font-mono text-[#00ffcc] font-bold">${idCode}</span>
                </td>
                <td class="p-8">
                    ${u.is_vip 
                        ? `<span class="status-badge status-vip"><i class="fas fa-crown mr-1"></i> VIP</span>` 
                        : `<span class="status-badge status-basic">Oddiy</span>`}
                </td>
                <td class="p-8 font-bold text-gray-400">
                    ${remainingTime}
                </td>
                <td class="p-8">
                    <div class="flex gap-2">
                        ${!u.is_vip ? `<button onclick="activateVip('${idCode}')" class="admin-btn-vip px-4 py-2 rounded-xl text-xs font-bold transition-all"><i class="fas fa-bolt mr-1"></i> VIP qilish</button>` : ''}
                        <button onclick="blockUser('${idCode}')" class="bg-white/5 hover:bg-orange-500/20 text-gray-400 hover:text-orange-500 w-10 h-10 rounded-xl transition-all flex items-center justify-center">
                            <i class="fas fa-ban"></i>
                        </button>
                        <button onclick="deleteUser('${idCode}')" class="bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-500 w-10 h-10 rounded-xl transition-all flex items-center justify-center">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function quickActivateVip() {
    const id = document.getElementById('admin-quick-search').value.trim();
    if (!id) return;
    activateVip(id);
    document.getElementById('admin-quick-search').value = '';
}

function blockUser(id) {
    alert(`Foydalanuvchi ${id} bloklandi!`);
}

function deleteUser(id) {
    if (confirm(`Haqiqatan ham ${id} foydalanuvchini o'chirib tashlamoqchimisiz?`)) {
        MOCK_USERS = MOCK_USERS.filter(u => u.id !== id);
        renderAdminPanel();
    }
}

function renderAdminStores() {
    const grid = document.getElementById('admin-stores-grid');
    if (!grid) return;
    grid.innerHTML = STORES.map((s, idx) => `
        <div class="bg-[#002320] border border-[#01312b] p-6 rounded-[28px] hover:border-[#00ffcc]/30 transition-all">
            <!-- Header -->
            <div class="flex items-center gap-4 mb-5">
                <div class="w-14 h-14 rounded-xl ${s.brandColor} flex items-center justify-center overflow-hidden flex-shrink-0" style="background-image:url('${s.banner}'); background-size:cover; background-position:center; opacity:0.8;">
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-white truncate">${s.name}</h4>
                    <p class="text-[10px] text-[#00ffcc] truncate">${s.url}</p>
                    <p class="text-[10px] text-yellow-400">${s.rating} ★</p>
                </div>
            </div>
            <!-- Editable Fields -->
            <div class="space-y-3">
                <div>
                    <label class="text-[10px] text-gray-500 uppercase font-bold block mb-1">To'lov muddati</label>
                    <input id="store-terms-${idx}" type="text" value="${s.terms}" 
                           class="w-full bg-black/40 border border-[#01312b] rounded-xl py-2 px-3 text-xs outline-none focus:border-[#00ffcc] transition-all">
                </div>
                <div>
                    <label class="text-[10px] text-gray-500 uppercase font-bold block mb-1">Hujjat</label>
                    <input id="store-docs-${idx}" type="text" value="${s.docs}" 
                           class="w-full bg-black/40 border border-[#01312b] rounded-xl py-2 px-3 text-xs outline-none focus:border-[#00ffcc] transition-all">
                </div>
            </div>
            <!-- Actions -->
            <div class="flex gap-2 mt-4">
                <button onclick="adminUpdateStore(${idx})" 
                        class="flex-1 bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/20 py-2 rounded-xl text-xs font-bold hover:bg-[#00ffcc] hover:text-black transition-all">
                    <i class="fas fa-save mr-1"></i> Saqlash
                </button>
                <button onclick="adminDeleteStore(${idx})" 
                        class="w-10 h-9 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl hover:bg-red-500 hover:text-white transition-all flex items-center justify-center">
                    <i class="fas fa-trash-alt text-xs"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function adminAddStore() {
    const name   = document.getElementById('new-store-name')?.value.trim();
    const url    = document.getElementById('new-store-url')?.value.trim();
    const terms  = document.getElementById('new-store-terms')?.value.trim();
    const docs   = document.getElementById('new-store-docs')?.value.trim();
    const rating = parseFloat(document.getElementById('new-store-rating')?.value) || 4.0;
    const banner = document.getElementById('new-store-banner')?.value.trim() 
                   || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000';
    if (!name || !url || !terms || !docs) { alert("Barcha majburiy maydonlarni to'ldiring!"); return; }
    const colors = ['bg-blue-500','bg-green-500','bg-red-500','bg-purple-500','bg-orange-500','bg-teal-500'];
    STORES.push({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name, rating, url, terms, docs, banner,
        brandColor: colors[STORES.length % colors.length],
        brandText: 'text-white'
    });
    // Clear form
    ['new-store-name','new-store-url','new-store-terms','new-store-docs','new-store-rating','new-store-banner']
        .forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
    renderAdminStores();
    renderStores(); // Refresh main page grid
    alert(`"${name}" do'koni muvaffaqiyatli qo'shildi!`);
}

// ============================================================
// MOBILE NAVIGATION LOGIC
// ============================================================
function toggleMobileMenu() {
    const sidebar = document.getElementById('main-sidebar');
    const overlay = document.getElementById('mobile-overlay');
    if (!sidebar || !overlay) return;

    const isOpen = !sidebar.classList.contains('-translate-x-full');
    
    if (isOpen) {
        // Close menu
        sidebar.classList.add('-translate-x-full');
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    } else {
        // Open menu
        overlay.classList.remove('hidden');
        // Small delay to allow display:block to apply before animating opacity
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
        setTimeout(() => overlay.classList.add('opacity-100'), 10);
        sidebar.classList.remove('-translate-x-full');
    }
}

function adminUpdateStore(idx) {
    const terms = document.getElementById(`store-terms-${idx}`)?.value.trim();
    const docs  = document.getElementById(`store-docs-${idx}`)?.value.trim();
    if (!terms || !docs) return;
    STORES[idx].terms = terms;
    STORES[idx].docs  = docs;
    renderStores();
    alert(`"${STORES[idx].name}" ma'lumotlari yangilandi!`);
}

function adminDeleteStore(idx) {
    const name = STORES[idx]?.name;
    if (!confirm(`"${name}" do'konini o'chirib tashlaysizmi?`)) return;
    STORES.splice(idx, 1);
    renderAdminStores();
    renderStores();
}

function setTheme(theme) {
    const bp = document.querySelector('.blueprint-bg');
    const mc = document.querySelector('.microchip-bg');
    if (theme === 'blueprint') {
        bp.classList.remove('opacity-0');
        bp.classList.add('opacity-10');
        mc.classList.add('opacity-0');
        mc.classList.remove('opacity-10');
    } else {
        mc.classList.remove('opacity-0');
        mc.classList.add('opacity-10');
        bp.classList.add('opacity-0');
        bp.classList.remove('opacity-10');
    }
    localStorage.setItem('smartqiyos_theme', theme);
}

// 🔐 ADMIN SECURITY FUNCTIONS
function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function revealAdminCode() {
    const display = document.getElementById('admin-code-display');
    const currentPass = localStorage.getItem('smartqiyos_admin_pass') || DEFAULT_ADMIN_PASS;
    
    if (display.textContent === '••••••') {
        display.textContent = currentPass;
        display.classList.add('text-[#00ffcc]');
        display.classList.remove('text-white');
    } else {
        display.textContent = '••••••';
        display.classList.remove('text-[#00ffcc]');
        display.classList.add('text-white');
    }
}

function updateAdminPass() {
    const passInput = document.getElementById('new-admin-pass');
    const pass = passInput.value.trim();
    if (pass.length < 4) {
        alert("Kod kamida 4 ta belgidan iborat bo'lishi kerak!");
        return;
    }
    localStorage.setItem('smartqiyos_admin_pass', pass);
    alert("Admin xavfsizlik kodi muvaffaqiyatli o'zgartirildi!");
    passInput.value = '';
    
    // Refresh display if revealed
    const display = document.getElementById('admin-code-display');
    if (display.textContent !== '••••••') {
        display.textContent = pass;
    }
}

function adminFilterUsers() {
    const query = document.getElementById('admin-user-search').value.toLowerCase();
    const rows = document.querySelectorAll('#admin-user-table tr');
    rows.forEach(row => {
        const id = row.cells[1].innerText.toLowerCase();
        row.style.display = id.includes(query) ? "" : "none";
    });
}

async function activateVip(userCode) {
    try {
        const response = await fetch('/api/admin/activate-vip', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id_code: userCode })
        });
        const resData = await response.json();
        
        if (resData.success) {
            alert(resData.message);
            if (userCode === currentUser.userId) {
                renderProfile();
            }
            renderAdminPanel();
        } else {
            alert("Xatolik: " + resData.message);
        }
    } catch (e) {
        console.error("VIP activation error:", e);
        alert("Server bilan bo'glanishda xatolik!");
    }
}


// ============================================================
// 🛒 CATALOG NAVIGATION (MULTI-STAGE)
// ============================================================
let catalogStage = 0; // 0: Categories, 1: Brands, 2: Products
let currentCategoryId = null;

function openCatalog() {
    catalogStage = 0;
    document.getElementById('catalog-modal').classList.remove('hidden');
    document.getElementById('catalog-modal').classList.add('flex');
    renderCatalogCategories();
}

function closeCatalog() { 
    document.getElementById('catalog-modal').classList.remove('flex'); 
    document.getElementById('catalog-modal').classList.add('hidden'); 
    catalogStage = 0;
}

function renderCatalogCategories() {
    catalogStage = 0;
    document.getElementById('catalog-title').textContent = TRANSLATIONS[currentLang].navKatalog || "Katalog";
    document.getElementById('catalog-back-btn').style.display = 'none';
    document.getElementById('catalog-main').classList.remove('hidden');
    document.getElementById('sub-catalog').classList.add('hidden');
    document.getElementById('catalog-loading').classList.add('hidden');

    document.getElementById('catalog-main').innerHTML = CATEGORIES.map(c => `
        <div onclick="openSubCatalog('${c.id}')" class="catalog-card group relative overflow-hidden rounded-[32px] cursor-pointer transition-all hover:scale-[1.02] active:scale-95 border border-white/5 hover:border-[#00ffcc]/30 shadow-2xl">
            <div class="absolute inset-0 bg-gradient-to-br ${c.color} opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative p-8 h-48 flex flex-col justify-between">
                <div class="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white text-xl">
                    <i class="${c.icon}"></i>
                </div>
                <div>
                    <h3 class="text-xl font-black text-white leading-tight">${c.name}</h3>
                    <p class="text-xs text-white/60 font-bold mt-1">${c.count} bo'limlar</p>
                </div>
            </div>
            <img src="${c.img}" class="absolute right-0 bottom-0 w-32 h-32 object-cover opacity-30 group-hover:opacity-50 transition-all transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 rotate-12">
        </div>
    `).join('');

    document.getElementById('catalog-main').innerHTML = `
            <div class="col-span-full">
                <h3 class="text-xl font-bold bg-black/40 inline-block px-4 py-2 rounded-xl border border-white/5 shadow-xl mb-4">Mahsulot toifalari</h3>
            </div>
            <div class="col-span-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 min-[1600px]:grid-cols-6 gap-6 px-2">
                ${catsHTML}
            </div>
        `;
}

function openSubCatalog(catId) {
    catalogStage = 1;
    currentCategoryId = catId;
    document.getElementById('catalog-main').classList.add('hidden');
    document.getElementById('sub-catalog').classList.remove('hidden');
    document.getElementById('catalog-back-btn').style.display = 'flex';
    
    const category = CATEGORIES.find(c => c.id === catId);
    const brands = BRANDS_DATA[catId] || [];

    if(category) {
        document.getElementById('catalog-title').textContent = category.name;
        document.getElementById('sub-catalog').innerHTML = `
            <div class="col-span-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                ${brands.map(b => `
                    <div onclick="handleBrandClick('${b.name}')" class="brand-card">
                        <div class="brand-logo-container">
                            <img src="${b.logo}" alt="${b.name}" class="brand-logo" 
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="brand-placeholder" style="display: none;">
                                ${b.name[0]}
                            </div>
                        </div>
                        <h4 class="text-sm font-bold text-gray-300">${b.name}</h4>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function handleBrandClick(brandName) {
    fetchRealTimePrices(brandName);
}

// 📊 CATEGORY-SPECIFIC PRODUCT DATABASE (with unique images)
const CATALOG_MODELS_DB = {
    'phones_001': {
        'Apple': [
            { name: 'iPhone 15 Pro Max', img: 'https://images.unsplash.com/photo-1695048133142-1a20484429be?w=400&q=80' },
            { name: 'iPhone 15 Pro', img: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400&q=80' },
            { name: 'iPhone 15 Plus', img: 'https://images.unsplash.com/photo-1695048066209-8f63745cf79c?w=400&q=80' },
            { name: 'iPhone 15', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&q=80' },
            { name: 'iPhone 14 Pro', img: 'https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?w=400&q=80' },
            { name: 'iPhone 14', img: 'https://images.unsplash.com/photo-1661599698774-3e93e5c54c66?w=400&q=80' },
            { name: 'iPhone 13', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&q=80' },
            { name: 'iPhone SE 2022', img: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=400&q=80' },
            { name: 'iPad Pro M2', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80' },
            { name: 'iPad Air M5', img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80' },
            { name: 'Apple Watch Series 9', img: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80' },
            { name: 'AirPods Pro 2', img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80' }
        ],
        'Samsung': [
            { name: 'Galaxy S24 Ultra', img: 'https://images.unsplash.com/photo-1706439485733-5f7e1c9b1e9a?w=400&q=80' },
            { name: 'Galaxy S24+', img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80' },
            { name: 'Galaxy S24', img: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&q=80' },
            { name: 'Galaxy S23 FE', img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80' },
            { name: 'Galaxy A55 5G', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80' },
            { name: 'Galaxy A35', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80' },
            { name: 'Galaxy A15', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80' },
            { name: 'Galaxy Tab S9 Ultra', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80' },
            { name: 'Galaxy Watch 6 Classic', img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80' },
            { name: 'Galaxy Buds 2 Pro', img: 'https://images.unsplash.com/photo-1590658165737-15a047b7c35c?w=400&q=80' }
        ],
        'Xiaomi': [
            { name: 'Xiaomi 14 Ultra', img: 'https://images.unsplash.com/photo-1546961342-ea5f62d5e546?w=400&q=80' },
            { name: 'Xiaomi 14', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80' },
            { name: 'Redmi Note 13 Pro+ 5G', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80' },
            { name: 'Redmi Note 13', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80' },
            { name: 'POCO F6 Pro', img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80' },
            { name: 'POCO X6 Pro', img: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&q=80' },
            { name: 'Xiaomi Pad 6', img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80' },
            { name: 'Redmi Watch 4', img: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80' },
            { name: 'Xiaomi Buds 5', img: 'https://images.unsplash.com/photo-1590658165737-15a047b7c35c?w=400&q=80' }
        ],
        'Honor': [
            { name: 'Honor Magic 6 Pro', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80' },
            { name: 'Honor 90', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80' },
            { name: 'Honor X9b', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80' },
            { name: 'Honor Pad 9', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80' }
        ],
        'Vivo': [
            { name: 'Vivo V30 Pro', img: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&q=80' },
            { name: 'Vivo Y100', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80' },
            { name: 'Vivo X100 Pro', img: 'https://images.unsplash.com/photo-1546961342-ea5f62d5e546?w=400&q=80' }
        ],
        'Oppo': [
            { name: 'Oppo Find X7 Ultra', img: 'https://images.unsplash.com/photo-1546961342-ea5f62d5e546?w=400&q=80' },
            { name: 'Oppo Reno 11', img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80' },
            { name: 'Oppo A78', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80' }
        ],
        'Realme': [
            { name: 'Realme GT 5', img: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&q=80' },
            { name: 'Realme 12 Pro+', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80' },
            { name: 'Realme C67', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80' }
        ],
        'Tecno': [
            { name: 'Tecno Phantom V Fold', img: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=400&q=80' },
            { name: 'Tecno Camon 30 Premier', img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80' },
            { name: 'Tecno Pova 6 Pro', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80' }
        ],
        'Infinix': [
            { name: 'Infinix GT 20 Pro', img: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&q=80' },
            { name: 'Infinix Note 40 Pro', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80' },
            { name: 'Infinix Smart 8', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80' }
        ]
    },
    'pc_001': {
        'HP': [
            { name: 'HP Victus 16', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80' },
            { name: 'HP Pavilion x360', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
            { name: 'HP Envy x370', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80' },
            { name: 'HP ProBook 450 G10', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80' }
        ],
        'ASUS': [
            { name: 'ROG Strix G16', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80' },
            { name: 'ASUS TUF Gaming F15', img: 'https://images.unsplash.com/photo-1593642632632-31697040b8f7?w=400&q=80' },
            { name: 'ASUS ZenBook 14 OLED', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
            { name: 'ASUS Vivobook 16', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80' }
        ],
        'Lenovo': [
            { name: 'Legion Pro 5i', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80' },
            { name: 'IdeaPad Gaming 3', img: 'https://images.unsplash.com/photo-1593642632632-31697040b8f7?w=400&q=80' },
            { name: 'Yoga Slim 7', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
            { name: 'ThinkPad X1 Carbon Gen 11', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80' }
        ],
        'Acer': [
            { name: 'Acer Nitro 5', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80' },
            { name: 'Acer Predator Helios Neo', img: 'https://images.unsplash.com/photo-1593642632632-31697040b8f7?w=400&q=80' },
            { name: 'Acer Swift Go 14', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
            { name: 'Acer Aspire 5', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80' }
        ],
        'Dell': [
            { name: 'Dell XPS 15', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400&q=80' },
            { name: 'Dell G15 Gaming', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80' },
            { name: 'Dell Inspiron 15', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80' },
            { name: 'Dell Latitude 5440', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80' }
        ],
        'MSI': [
            { name: 'MSI Katana 17', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80' },
            { name: 'MSI Stealth 16', img: 'https://images.unsplash.com/photo-1593642632632-31697040b8f7?w=400&q=80' },
            { name: 'MSI Modern 15', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
            { name: 'MSI GF63 Thin', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400&q=80' }
        ],
        'Apple': [
            { name: 'MacBook Pro 14 M3', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80' },
            { name: 'MacBook Pro 16 M3 Max', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80' },
            { name: 'MacBook Air 13 M3', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
            { name: 'MacBook Air 15 M2', img: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&q=80' }
        ],
        'Huawei': [
            { name: 'MateBook X Pro', img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400&q=80' },
            { name: 'MateBook D16', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80' },
            { name: 'MatePad Pro 11', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80' }
        ]
    },
    'home_001': {
        'Artel': [
            { name: 'Artel Grand Inverter', img: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80' },
            { name: 'Artel HD 455 Fridge', img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80' },
            { name: 'Artel Vesta Washing Machine', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80' },
            { name: 'Artel Gas Stove', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' },
            { name: 'Artel Microwave 20L', img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&q=80' },
            { name: 'Artel Vacuum Cleaner Explorer', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' }
        ],
        'LG': [
            { name: 'LG InstaView Door-in-Door', img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80' },
            { name: 'LG Vivace V5 Washing Machine', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80' },
            { name: 'LG PuriCare Air Purifier', img: 'https://images.unsplash.com/photo-1602060681116-33b5a4f31e49?w=400&q=80' },
            { name: 'LG Smart Dishwasher', img: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80' }
        ],
        'Samsung': [
            { name: 'Samsung Bespoke Refrigerator', img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80' },
            { name: 'Samsung EcoBubble 9kg', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80' },
            { name: 'Samsung Jet 75 Pet Vacuum', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
            { name: 'Samsung Smart Oven', img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&q=80' }
        ],
        'Bosch': [
            { name: 'Bosch Series 6 Washing Machine', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80' },
            { name: 'Bosch Serie 4 Fridge', img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80' },
            { name: 'Bosch Dishwasher Series 2', img: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80' }
        ],
        'Beko': [
            { name: 'Beko HarvestFresh Fridge', img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80' },
            { name: 'Beko SteamCure Washing Machine', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80' },
            { name: 'Beko Built-in Oven', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' }
        ],
        'Hofmann': [
            { name: 'Hofmann Fridge 320L', img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80' },
            { name: 'Hofmann Washing Machine 7kg', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80' },
            { name: 'Hofmann Gas Cooker 60x60', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' }
        ],
        'Shivaki': [
            { name: 'Shivaki Fridge HD 276', img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80' },
            { name: 'Shivaki Washing Machine 6kg', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80' }
        ],
        'Avalon': [
            { name: 'Avalon Split System 12', img: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80' },
            { name: 'Avalon Electric Kettle', img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&q=80' },
            { name: 'Avalon Meat Grinder', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' }
        ]
    },
    'tv_001': {
        'Samsung': [
            { name: 'Samsung Neo QLED 8K 75"', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80' },
            { name: 'Samsung Crystal UHD 55"', img: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?w=400&q=80' },
            { name: 'Samsung The Frame 50"', img: 'https://images.unsplash.com/photo-1571348700432-bc4fc63ad4a3?w=400&q=80' },
            { name: 'Samsung OLED S95C', img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80' }
        ],
        'LG': [
            { name: 'LG OLED G3 65"', img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80' },
            { name: 'LG QNED 81 55"', img: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?w=400&q=80' },
            { name: 'LG NanoCell 75"', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80' },
            { name: 'LG UHD 43"', img: 'https://images.unsplash.com/photo-1571348700432-bc4fc63ad4a3?w=400&q=80' }
        ],
        'Sony': [
            { name: 'Sony BRAVIA XR A95L', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80' },
            { name: 'Sony X90L 65"', img: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?w=400&q=80' },
            { name: 'Sony X80L 55"', img: 'https://images.unsplash.com/photo-1571348700432-bc4fc63ad4a3?w=400&q=80' },
            { name: 'Sony HT-S20R Soundbar', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&q=80' }
        ],
        'Artel': [
            { name: 'Artel 65AU20H 4K Smart', img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80' },
            { name: 'Artel 43AF90G Android TV', img: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?w=400&q=80' },
            { name: 'Artel 32AH90G', img: 'https://images.unsplash.com/photo-1571348700432-bc4fc63ad4a3?w=400&q=80' }
        ],
        'TCL': [
            { name: 'TCL Mini-LED C845', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80' },
            { name: 'TCL QLED C745', img: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?w=400&q=80' },
            { name: 'TCL 4K P745', img: 'https://images.unsplash.com/photo-1571348700432-bc4fc63ad4a3?w=400&q=80' }
        ],
        'Roison': [
            { name: 'Roison 55" Smart TV', img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80' },
            { name: 'Roison 43" Digital TV', img: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?w=400&q=80' }
        ]
    },
    'climate_001': {
        'Gree': [
            { name: 'Gree Pular Inverter 12', img: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80' },
            { name: 'Gree Fairy 09', img: 'https://images.unsplash.com/photo-1636953056263-2da03b7a3e14?w=400&q=80' },
            { name: 'Gree Bora 18', img: 'https://images.unsplash.com/photo-1602060681116-33b5a4f31e49?w=400&q=80' },
            { name: 'Gree Portable AC', img: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80' }
        ],
        'Hofmann': [
            { name: 'Hofmann Inverter 12000', img: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80' },
            { name: 'Hofmann 18000 BTU', img: 'https://images.unsplash.com/photo-1636953056263-2da03b7a3e14?w=400&q=80' }
        ],
        'Artel': [
            { name: 'Artel Inverter 12k', img: 'https://images.unsplash.com/photo-1602060681116-33b5a4f31e49?w=400&q=80' },
            { name: 'Artel Shahrisabz 12', img: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80' }
        ],
        'Aux': [
            { name: 'Aux Freedom 12', img: 'https://images.unsplash.com/photo-1636953056263-2da03b7a3e14?w=400&q=80' },
            { name: 'Aux J-Smart 18', img: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80' }
        ],
        'Midea': [
            { name: 'Midea Mission II', img: 'https://images.unsplash.com/photo-1602060681116-33b5a4f31e49?w=400&q=80' },
            { name: 'Midea Blanc 12', img: 'https://images.unsplash.com/photo-1636953056263-2da03b7a3e14?w=400&q=80' }
        ]
    },
    'beauty_001': {
        'Philips': [
            { name: 'Philips OneBlade', img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80' },
            { name: 'Philips Lumea IPL', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80' },
            { name: 'Philips Sonicare 5100', img: 'https://images.unsplash.com/photo-1559591935-26373a6c040e?w=400&q=80' },
            { name: 'Philips Hair Dryer 5000', img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=400&q=80' }
        ],
        'Braun': [
            { name: 'Braun Silk-épil 9', img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80' },
            { name: 'Braun Series 9 Pro', img: 'https://images.unsplash.com/photo-1600428853876-fb13f7900358?w=400&q=80' },
            { name: 'Braun Satin Hair 7', img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=400&q=80' }
        ],
        'Dyson': [
            { name: 'Dyson Airwrap Multi-styler', img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=400&q=80' },
            { name: 'Dyson Supersonic Nural', img: 'https://images.unsplash.com/photo-1545914561-b5e7fc71f225?w=400&q=80' },
            { name: 'Dyson Corrale Straightener', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80' }
        ],
        'Panasonic': [
            { name: 'Panasonic Nanoe Hair Dryer', img: 'https://images.unsplash.com/photo-1545914561-b5e7fc71f225?w=400&q=80' },
            { name: 'Panasonic Beard Trimmer ER-GB80', img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80' }
        ],
        'Remington': [
            { name: 'Remington Keratin Protect', img: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=400&q=80' },
            { name: 'Remington Shine Therapy', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80' }
        ]
    }
};

async function fetchRealTimePrices(brand) {
    catalogStage = 2;
    document.getElementById('catalog-loading').classList.remove('hidden');
    document.getElementById('sub-catalog').classList.add('hidden');
    document.getElementById('catalog-back-btn').style.display = 'flex'; // Keep back button visible
    document.getElementById('catalog-title').textContent = `${brand} - Online Narxlar`;

    try {
        await new Promise(resolve => setTimeout(resolve, 1500)); 

        const stores = [
            { name: "Uzum", url: "https://uzum.uz" },
            { name: "Olcha", url: "https://olcha.uz" },
            { name: "MediaPark", url: "https://mediapark.uz" },
            { name: "Elmakon", url: "https://elmakon.uz" }
        ];

        const categoryModels = CATALOG_MODELS_DB[currentCategoryId] || {};
        let requestedModels = categoryModels[brand] || [];

        // Fallback generic items if brand not found in DB
        if (requestedModels.length < 3) {
            const fallbackImgs = {
                'phones_001': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
                'pc_001': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
                'home_001': 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80',
                'tv_001': 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80',
                'climate_001': 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80',
                'beauty_001': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80'
            };
            const genericImg = fallbackImgs[currentCategoryId] || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80';
            const genericNames = ['Premium Pro', 'Series Ultra', 'Basic Model', 'Advanced Edition', 'Lite Version'];
            requestedModels = genericNames.map(n => ({ name: `${brand} ${n}`, img: genericImg }));
        }

        let finalProducts = [];
        for(let i = 0; i < 20; i++) {
            const modelObj = requestedModels[i % requestedModels.length];
            const variant = i >= requestedModels.length ? ` - Variant ${i - requestedModels.length + 2}` : "";
            const basePrice = 2000000 + (Math.random() * 15000000);
            
            finalProducts.push({
                id: `rt-${brand}-${i}`,
                name: `${modelObj.name}${variant}`,
                brand: brand,
                category: currentCategoryId,
                img: `https://picsum.photos/seed/${encodeURIComponent(currentCategoryId + '-' + brand + '-' + modelObj.name)}/400/300`,
                price: basePrice,
                stores: stores.map(s => ({
                    name: s.name,
                    price: basePrice * (0.95 + Math.random() * 0.1),
                    url: `${s.url}/search?q=${encodeURIComponent(modelObj.name)}`
                }))
            });
        }
        
        document.getElementById('catalog-loading').classList.add('hidden');
        document.getElementById('sub-catalog').classList.remove('hidden');
        
        document.getElementById('sub-catalog').innerHTML = `
            <div class="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
                ${finalProducts.map(p => renderProductCard(p)).join('')}
            </div>
        `;
    } catch (e) {
        console.error("Simulation error:", e);
        alert("Xatolik yuz berdi!");
        backToPrevStage();
    }
}

function backToPrevStage() {
    if (catalogStage === 2) {
        openSubCatalog(currentCategoryId);
    } else if (catalogStage === 1) {
        renderCatalogCategories();
    } else {
        closeCatalog();
    }
}

function backToCatalog() {
    renderCatalogCategories();
}

// PARALLAX EFFECT
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    const bg = document.querySelector('.tech-bg');
    if (bg) {
        bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// INIT
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    checkVipStatus();
    updateAdminButtonVisibility();

    // Theme initialization
    const savedTheme = localStorage.getItem('smartqiyos_theme') || 'microchip';
    setTheme(savedTheme);

    // Check URL for admin-login
    if (window.location.hash === '#admin-login') {
        handleAdminLogin();
    }
});
