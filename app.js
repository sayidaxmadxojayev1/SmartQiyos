// ============================================================
// SMARTQIYOS APP LOGIC
// ============================================================

const STORES = [
    {
        id: 'texnomart', name: 'Texnomart', rating: 4.9,
        brandColor: 'bg-[#ffcc00]', brandText: 'text-black',
        banner: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000',
        terms: '12 oygacha 0%', docs: 'Faqat pasport', url: 'https://texnomart.uz'
    },
    {
        id: 'mediapark', name: 'MediaPark', rating: 4.5,
        brandColor: 'bg-red-600', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80',
        terms: '24 oygacha bo\'lib to\'lash', docs: 'Pasport va daromad', url: 'https://mediapark.uz'
    },
    {
        id: 'idea', name: 'Idea', rating: 4.2,
        brandColor: 'bg-green-500', brandText: 'text-black',
        banner: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80',
        terms: 'Muddatli to\'lov 0%', docs: 'Faqat pasport', url: 'https://idea.uz'
    },
    {
        id: 'olcha', name: 'Olcha.uz', rating: 4.8,
        brandColor: 'bg-[#00ffcc]', brandText: 'text-black',
        banner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426',
        terms: 'Onlayn buyurtma', docs: 'Yetkazib berish xizmati', url: 'https://olcha.uz'
    },
    {
        id: 'uzum', name: 'Uzum', rating: 4.6,
        brandColor: 'bg-purple-500', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
        terms: '6 oygacha bo\'lib to\'lash', docs: 'Pasport va selfi', url: 'https://uzum.uz'
    },
    {
        id: 'alifshop', name: 'Alifshop', rating: 4.7,
        brandColor: 'bg-blue-500', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80',
        terms: 'Alif nasiya 12 oy', docs: 'Faqat pasport', url: 'https://alifshop.uz'
    },
    {
        id: 'ishonch', name: 'Ishonch', rating: 4.4,
        brandColor: 'bg-blue-600', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1512428559083-a4979b2b91ef?q=80&w=2070',
        terms: 'Muddatli to\'lov 15 oy', docs: 'Faqat pasport', url: 'https://ishonch.uz'
    },
    {
        id: 'elmakon', name: 'Elmakon', rating: 4.3,
        brandColor: 'bg-pink-600', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=300',
        terms: '12 oygacha foizsiz', docs: 'Pasport va daromad', url: 'https://elmakon.uz'
    },
    {
        id: 'radius', name: 'Radius', rating: 4.5,
        brandColor: 'bg-gray-800', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070',
        terms: 'Bonuslar va chegirmalar', docs: 'Barcha hujjatlar', url: 'https://radius.uz'
    },
    {
        id: 'artel', name: 'Artel', rating: 4.6,
        brandColor: 'bg-green-600', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070',
        terms: 'Brend kafolati', docs: 'Texnik pasport', url: 'https://artelgroup.org'
    }
];

const MOCK_PAYMENTS = [
    { id: "PAY-101", user: "SQ-2099", amount: "3,999 UZS", date: "2026-04-20 14:30", status: "Tasdiqlandi" },
    { id: "PAY-102", user: "SQ-7777", amount: "3,999 UZS", date: "2026-04-21 09:15", status: "Tasdiqlandi" },
    { id: "PAY-103", user: "SQ-3001", amount: "3,999 UZS", date: "2026-04-24 10:00", status: "Kutish jarayonida" }
];

const ADMIN_PASS = "admin123";
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

let currentLang = localStorage.getItem('smartqiyos_lang') || 'uz';

let currentSection = 'home';

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
        <span class="bg-yellow-500 p-1 rounded-md text-[10px] text-black"><i class="fas fa-crown"></i></span>`;
    
    document.getElementById('navCompare').innerHTML = `
        <div class="flex-1 flex items-center">
            <i class="fas fa-balance-scale mr-4 w-6"></i> ${t.navCompare}
        </div>
        <span class="bg-yellow-500 p-1 rounded-md text-[10px] text-black"><i class="fas fa-crown"></i></span>`;

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

    if (pass === ADMIN_PASS || pass === localStorage.getItem('smartqiyos_admin_pass')) {
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
    { id: 'phones', name: 'Telefonlar va gadjetlar', icon: 'fas fa-mobile-alt', count: '4+', color: 'from-purple-500 to-pink-600', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300', brands: ['Samsung', 'Apple', 'Xiaomi', 'Oppo'] },
    { id: 'computers', name: 'Kompyuter texnikasi', icon: 'fas fa-laptop', count: '3+', color: 'from-blue-500 to-indigo-700', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300', brands: ['MacBook', 'Asus', 'HP', 'Lenovo'] },
    { id: 'appliances', name: 'Maishiy texnika', icon: 'fas fa-blender', count: '3+', color: 'from-green-500 to-teal-700', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=300', brands: ['Samsung', 'LG', 'Artel'] },
    { id: 'tvs', name: 'Televizorlar, video va audio', icon: 'fas fa-tv', count: '3+', color: 'from-red-500 to-orange-500', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=300', brands: ['Samsung', 'Sony', 'Artel'] },
    { id: 'books', name: 'Kitoblar', icon: 'fas fa-book', count: '3+', color: 'from-yellow-500 to-orange-400', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=300', brands: ['Badiiy adabiyot', 'Biznes kitaplar', 'Ilmiy-ommabop'] },
    { id: 'toys', name: "O'yinchoqlar, sovg'alar", icon: 'fas fa-gift', count: '2+', color: 'from-fuchsia-500 to-purple-600', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=300', brands: ['Lego', 'Qo\'g\'irchoqlar', 'Stol o\'yinlari'] },
    { id: 'kids', name: 'Bolalar uchun tovarlar', icon: 'far fa-smile', count: '2+', color: 'from-indigo-400 to-purple-400', img: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=300', brands: ['Kiyimlar', 'Aravachalar', 'Oziq-ovqat'] },
    { id: 'climate', name: 'Iqlim texnikasi', icon: 'fas fa-wind', count: '2+', color: 'from-slate-400 to-gray-500', img: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=300', brands: ['Konditsionerlar', 'Isitgichlar', 'Havo tozalagichlar'] },
    { id: 'beauty', name: "Go'zallik va salomatlik", icon: 'fas fa-magic', count: '2+', color: 'from-rose-400 to-pink-500', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300', brands: ['Pabrikam', 'Atirlar', 'Kosmetika'] },
    { id: 'sport', name: 'Sport va dam olish', icon: 'fas fa-trophy', count: '2+', color: 'from-blue-400 to-blue-600', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=300', brands: ['Trenajyorlar', 'Ochiq havo', 'Kiyimlar'] },
    { id: 'auto', name: 'Avto tovarlar', icon: 'fas fa-car', count: '2+', color: 'from-emerald-500 to-green-600', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=300', brands: ['Shinalar', 'Aksessuarlar', 'Avtokimyo'] },
    { id: 'home', name: 'Uy va ofis uchun', icon: 'fas fa-couch', count: '5+', color: 'from-teal-400 to-emerald-500', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=300', brands: ['Mebel', 'Dekor', 'Idishlar'] }
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
function renderStores() {
    const t = TRANSLATIONS[currentLang];
    const grid = document.getElementById('section-home');
    grid.innerHTML = STORES.map(s => `
        <div class="card-shop overflow-hidden">
            <div class="h-40 bg-cover bg-center p-4 flex justify-between items-start" style="background-image: url('${s.banner}');">
                <div class="${s.brandColor} ${s.brandText} px-2 py-1 rounded text-[10px] font-extrabold uppercase">${s.name}</div>
                <div class="bg-black/50 backdrop-blur px-2 py-1 rounded text-xs font-bold text-yellow-400">${s.rating} ★</div>
            </div>
            <div class="p-6">
                <h4 class="text-xl font-bold mb-4">${s.name}</h4>
                <p class="text-xs text-gray-400 mb-2"><i class="far fa-clock mr-2"></i> ${s.terms}</p>
                <p class="text-xs text-gray-400 mb-6"><i class="far fa-file-alt mr-2"></i> ${s.docs}</p>
                <div class="flex space-x-2">
                    <button onclick="checkVip('compare')" class="flex-1 ${s.brandColor} ${s.brandText} py-2 rounded-xl font-bold text-sm transition filter hover:brightness-110">${t.btnSolishtirish}</button>
                    <button onclick="window.open('${s.url}')" class="flex-1 border border-gray-600 hover:border-gray-400 py-2 rounded-xl text-sm transition">${t.btnSaytga}</button>
                </div>
            </div>
        </div>
    `).join('');
}


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
        settings: 'adminNavSettings'
    };
    if (btnMap[subId]) document.getElementById(btnMap[subId]).classList.add('active-admin-glow');
    
    if (subId === 'users') renderAdminPanel();
    if (subId === 'stores') renderAdminStores();
    if (subId === 'payments') renderAdminPayments();
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

function renderProductCard(p) {
    const isFav = favorites.has(p.id);
    const favColor = isFav ? 'text-red-500' : 'text-gray-500 hover:text-red-400';
    
    return `
        <div class="card-shop p-6 border border-white/5 relative group">
            <button onclick="toggleFavorite(${p.id}, event)" class="absolute top-4 right-4 transition text-2xl z-10 ${favColor}">
                <i class="fas fa-heart"></i>
            </button>
            <div class="h-40 flex items-center justify-center mb-4">
                <img src="${p.img}" class="max-h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300">
            </div>
            <h5 class="font-bold text-lg leading-tight mb-2">${p.name}</h5>
            <p class="text-[#00ffcc] font-black text-xl mb-3">${p.price}</p>
            <h3 class="text-2xl font-bold mb-4">Pullik Obuna</h3>
        <p class="text-gray-400 mb-4">Ushbu aqlli bo'limdan foydalanish uchun VIP obunani faollashtiring.</p>
        <div class="bg-black/30 rounded-xl p-4 mb-8">
            <p class="text-sm text-gray-400">Xizmat narxi</p>
            <p class="text-3xl font-black text-[#00ffcc]">3,999 so'm</p>
        </div>
        <button onclick="handleVipSubscription()" class="w-full bg-gradient-to-r from-[#00ffcc] to-[#3b82f6] hover:shadow-[0_0_20px_#00ffcc] text-[#001211] py-4 rounded-2xl font-bold mb-4 transition-all">
            <i class="fab fa-telegram-plane mr-2"></i> Obuna bo'lish
        </button>
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

    container.innerHTML = `
        <div class="bg-[#002320] rounded-[40px] p-10 border border-[#01312b] shadow-2xl w-full max-w-4xl mx-auto relative overflow-hidden fade-in">
            <div class="tech-bg opacity-10 absolute inset-0 pointer-events-none"></div>
            
            <div class="relative z-10">
                <div class="flex flex-col sm:flex-row items-center gap-8 mb-10">
                    <div class="w-32 h-32 rounded-full bg-gradient-to-tr from-[#00ffcc] to-teal-800 flex items-center justify-center text-4xl font-extrabold text-[#001211] border-4 border-[#001211]/50 shadow-[0_0_30px_rgba(0,255,204,0.3)]">
                        ${currentUser.firstName[0]}${currentUser.lastName[0]}
                    </div>
                    <div class="text-center sm:text-left">
                        <div class="flex flex-col sm:flex-row items-center gap-3 mb-2">
                            <h3 class="text-4xl font-black text-white tracking-tighter">${currentUser.firstName} <span class="text-[#00ffcc]">${currentUser.lastName}</span></h3>
                            ${isVip ? `<span class="bg-yellow-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg"><i class="fas fa-crown"></i> VIP</span>` : `<span class="bg-gray-700 text-white text-[10px] font-black px-4 py-1.5 rounded-full">ODDIY</span>`}
                        </div>
                        <p class="text-gray-500 font-mono text-sm tracking-wider">${currentUser.userId}</p>
                    </div>
                </div>

                ${adminLink}

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div class="bg-black/40 rounded-[32px] p-8 border border-[#01312b] hover:border-[#00ffcc]/30 transition-all">
                        <p class="text-[10px] text-gray-500 uppercase font-black mb-1">${t.profileId}</p>
                        <p class="font-mono text-[#00ffcc] text-xl font-black tracking-wider mb-4">${currentUser.userId}</p>
                        <p class="text-[10px] text-gray-500 uppercase font-black mb-1">Telefon raqam</p>
                        <p class="text-white text-xl font-bold">${currentUser.phone}</p>
                    </div>

                    ${!isVip ? `
                    <div class="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-[32px] p-8 border border-yellow-500/20 hover:border-yellow-500/50 transition-all flex flex-col justify-between">
                        <div>
                            <h4 class="text-yellow-500 font-black uppercase text-xs tracking-widest mb-2"><i class="fas fa-bolt"></i> VIP Muddat</h4>
                            <p class="text-gray-400 text-sm mb-4">Cheklanmagan imtiyozlarga ega bo'lish uchun VIP rejasini faollashtiring.</p>
                        </div>
                        <a href="https://t.me/SmartQiyosBot" target="_blank" class="w-full bg-yellow-500 text-black text-center py-4 rounded-2xl font-black hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all">
                            <i class="fab fa-telegram-plane mr-2"></i> Telegram bot orqali
                        </a>
                    </div>
                    ` : `
                    <div class="bg-green-500/5 rounded-[32px] p-8 border border-green-500/20">
                        <h4 class="text-green-500 font-black uppercase text-xs tracking-widest mb-2"><i class="fas fa-crown"></i> VIP Aktiv</h4>
                        <div class="text-[10px] text-gray-500 uppercase font-black mb-1">${t.expDate}</div>
                        <p class="text-white text-3xl font-black">${currentUser.subEnd}</p>
                        <p class="text-[10px] text-green-500/50 font-bold mt-4">Barcha do'konlar ochiq</p>
                    </div>
                    `}
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                    <button onclick="logout()" class="flex-1 bg-red-500/10 text-red-500 py-4 rounded-2xl font-bold hover:bg-red-500 text-white transition-all">
                        <i class="fas fa-sign-out-alt mr-2"></i> ${t.profile.logout}
                    </button>
                    <button onclick="showSection('home', 'navHome')" class="flex-1 bg-white/5 text-gray-400 py-4 rounded-2xl font-bold hover:text-white transition-all">
                        Asosiy sahifaga qaytish
                    </button>
                </div>
            </div>
        </div>
    `;
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if(!msg) return;
    
    const chatBox = document.getElementById('chat-history');
    chatBox.innerHTML += `
        <div class="flex justify-end mb-4 fade-in">
            <div class="bg-[#00ffcc]/10 border border-[#00ffcc]/30 text-white rounded-2xl rounded-tr-none px-6 py-3 max-w-[80%] relative">
                ${msg}
                <div class="text-right mt-1 text-xs text-[#00ffcc]">12:00 <i class="fas fa-check-double ml-1"></i></div>
            </div>
        </div>
    `;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// OBUNA YO'NALTIRISH FUNKSIYASI
function handleVipSubscription() {
    const telegramBot = "https://t.me/saydjamolG4S";
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
        
        document.getElementById('vip-modal').classList.remove('hidden');
        document.getElementById('vip-modal').classList.add('flex');
        
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
    document.getElementById('vip-modal').classList.add('hidden'); 
    document.getElementById('vip-modal').classList.remove('flex');
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
    grid.innerHTML = STORES.map(s => `
        <div class="bg-[#002320] border border-[#01312b] p-6 rounded-[32px] hover:border-[#00ffcc]/30 transition-all">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-xl ${s.brandColor} flex items-center justify-center overflow-hidden">
                    <img src="${s.banner}" class="w-full h-full object-cover opacity-50">
                </div>
                <div>
                    <h4 class="font-bold">${s.name}</h4>
                    <p class="text-[10px] text-gray-500">${s.url}</p>
                </div>
            </div>
            <div class="space-y-3">
                <input type="text" value="${s.url}" class="w-full bg-black/40 border border-[#01312b] rounded-xl py-2 px-4 text-xs outline-none focus:border-[#00ffcc]">
                <button onclick="alert('Store info updated!')" class="w-full bg-[#01312b] text-[#00ffcc] py-2 rounded-xl text-xs font-bold hover:bg-[#00ffcc] hover:text-black transition-all">Yangilash</button>
            </div>
        </div>
    `).join('');
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

function updateAdminPass() {
    const pass = document.getElementById('new-admin-pass').value;
    if (pass.length < 4) {
        alert("Parol kamida 4 ta belgidan iborat bo'lishi kerak!");
        return;
    }
    localStorage.setItem('smartqiyos_admin_pass', pass);
    alert("Admin paroli muvaffaqiyatli o'zgartirildi!");
    document.getElementById('new-admin-pass').value = '';
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

// 5. Catalog System
function openCatalog() { 
    document.getElementById('catalog-modal').classList.remove('hidden'); 
    document.getElementById('catalog-modal').classList.add('flex');
    
    // Render Categories Full Grid
    document.getElementById('catalog-main').innerHTML = CATEGORIES.map(c => `
        <div onclick="openSubCatalog('${c.id}')" 
             class="relative h-48 rounded-[32px] overflow-hidden cursor-pointer group bg-gradient-to-br ${c.color} shadow-lg border border-white/5">
            <div class="p-8 relative z-10 w-[70%]">
                <i class="${c.icon} text-2xl mb-3 text-white bg-black/20 p-3 rounded-xl inline-block"></i>
                <h3 class="text-2xl font-bold text-white leading-tight">${c.name}</h3>
                <p class="text-white/70 text-sm mt-2">${c.count} bo'limlar</p>
            </div>
            <img src="${c.img}" 
                 class="absolute right-[-20px] bottom-[-20px] w-48 rotate-[5deg] group-hover:scale-110 transition duration-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
        </div>
    `).join('');
}

function closeCatalog() { 
    document.getElementById('catalog-modal').classList.remove('flex'); 
    document.getElementById('catalog-modal').classList.add('hidden'); 
    backToCatalog();
}

function openSubCatalog(catId) {
    document.getElementById('catalog-main').classList.add('hidden');
    document.getElementById('sub-catalog').classList.remove('hidden');
    document.getElementById('catalog-back-btn').classList.remove('hidden');
    
    const category = CATEGORIES.find(c => c.id === catId);
    if(category) {
        document.getElementById('catalog-title').textContent = category.name;
        document.getElementById('sub-catalog').innerHTML = category.brands.map(b => `
            <div onclick="filterByBrand('${b}', '${catId}')" class="bg-white/5 p-10 rounded-[32px] text-center border border-white/10 hover:border-[#00ffcc] hover:bg-[#00ffcc]/10 cursor-pointer transition">
                <h4 class="text-3xl font-bold">${b}</h4>
            </div>
        `).join('');
    }
}

function filterByBrand(brand, catId) {
    closeCatalog();
    document.getElementById('section-home').classList.add('hidden');
    const productsView = document.getElementById('section-products');
    productsView.classList.remove('hidden');
    document.getElementById('page-title').textContent = brand + " (Katalog)";

    const results = PRODUCTS.filter(p => p.brand === brand && p.category === catId);
    document.getElementById('products-grid').innerHTML = results.length > 0 
        ? results.map(p => renderProductCard(p)).join('') 
        : '<p class="text-gray-500 mt-10">Hozircha bu brendda mahsulot yo\'q.</p>';
}

function backToCatalog() {
    document.getElementById('catalog-main').classList.remove('hidden');
    document.getElementById('sub-catalog').classList.add('hidden');
    document.getElementById('catalog-back-btn').classList.add('hidden');
    document.getElementById('catalog-title').textContent = "Katalog";
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
