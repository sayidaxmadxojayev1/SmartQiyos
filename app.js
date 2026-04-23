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

function handleAdmin() {
    const t = TRANSLATIONS[currentLang];
    const pass = prompt(currentLang === 'uz' ? "Admin parolini kiriting:" : (currentLang === 'ru' ? "Введите пароль админа:" : "Enter admin password:"));
    if (pass === "admin123") {
        alert("Success!");
    } else {
        alert("Access Denied!");
    }
}

let currentUser = { 
    isVip: localStorage.getItem('smartqiyos_vip') === 'true',
    userId: localStorage.getItem('smartqiyos_uid') || generateUserId(),
    subEnd: localStorage.getItem('smartqiyos_sub_end') || null
};

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
    const sections = ['section-home', 'section-products', 'section-profile', 'section-favorites', 'section-feedback', 'section-kalkulyator'];
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
        if (section === 'profile') renderProfile();
        if (section === 'favorites') renderFavorites();
    }
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
    document.getElementById('section-home').classList.remove('hidden');
    document.getElementById('page-title').textContent = "Internet Do'konlar";
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

function renderProfile() {
    const t = TRANSLATIONS[currentLang];
    const container = document.getElementById('profile-container');
    if (!container) return;
    const isVip = checkVipStatus();
    
    container.innerHTML = `
        <div class="bg-[#002320] rounded-[32px] p-10 border border-[#01312b] shadow-xl w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8 fade-in">
            <div class="bg-gradient-to-tr from-[#00ffcc] to-teal-800 w-32 h-32 rounded-full flex items-center justify-center text-5xl font-extrabold text-black border-4 border-black/20 shadow-[0_0_30px_rgba(0,255,204,0.3)]">
                SQ
            </div>
            <div class="flex-1 text-center sm:text-left">
                <div class="flex flex-col sm:flex-row items-center gap-3 mb-4">
                    <h3 class="text-3xl font-black text-white">Smart User</h3>
                    ${isVip ? `<span class="bg-yellow-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg"><i class="fas fa-crown"></i> ${t.statusVip}</span>` : `<span class="bg-gray-700 text-white text-[10px] font-black px-4 py-1.5 rounded-full">${t.statusBasic}</span>`}
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-black/40 rounded-2xl p-5 border border-white/5 transition hover:border-[#00ffcc]/30">
                        <p class="text-[10px] text-gray-500 uppercase font-black mb-1">${t.profileId}</p>
                        <p class="font-mono text-[#00ffcc] text-xl font-black tracking-wider">${currentUser.userId}</p>
                    </div>
                    <div class="bg-black/40 rounded-2xl p-5 border border-white/5 transition hover:border-[#00ffcc]/30">
                        <p class="text-[10px] text-gray-500 uppercase font-black mb-1">${t.expDate}</p>
                        <p class="text-white text-xl font-bold">${currentUser.subEnd || '---'}</p>
                    </div>
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

// INIT
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    checkVipStatus();
});
