// ============================================================
// SMARTQIYOS APP LOGIC
// ============================================================

const STORES = [
    {
        id: 'texnomart', name: 'Texnomart', rating: 4.8,
        brandColor: 'bg-yellow-500', brandText: 'text-black',
        banner: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1974',
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
        id: 'olcha', name: 'Olcha.uz', rating: 4.7,
        brandColor: 'bg-[#00ffcc]', brandText: 'text-black',
        banner: 'https://images.unsplash.com/photo-1556656793-062ff987b50d?auto=format&fit=crop&q=80',
        terms: 'Onlayn buyurtma', docs: 'Yetkazib berish xizmati', url: 'https://olcha.uz'
    },
    {
        id: 'uzum', name: 'Uzum', rating: 4.4,
        brandColor: 'bg-purple-500', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
        terms: '6 oygacha bo\'lib to\'lash', docs: 'Pasport va selfi', url: 'https://uzum.uz'
    },
    {
        id: 'alifshop', name: 'Alifshop', rating: 4.6,
        brandColor: 'bg-blue-500', brandText: 'text-white',
        banner: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80',
        terms: 'Alif nasiya 12 oy', docs: 'Faqat pasport', url: 'https://alifshop.uz'
    }
];

let currentUser = { isVip: false };
const favorites = new Set();

// PROFIL MA'LUMOTLARI QOLIP
const userData = {
    firstName: "Sofya",
    lastName: "Project Manager",
    phone: "+998 90 123 45 67",
    userId: "SQ-8892"
};

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
                    <button onclick="checkVip('compare')" class="flex-1 ${s.brandColor} ${s.brandText} py-2 rounded-xl font-bold text-sm transition filter hover:brightness-110">Solishtirish</button>
                    <button onclick="window.open('${s.url}')" class="flex-1 border border-gray-600 hover:border-gray-400 py-2 rounded-xl text-sm transition">Saytga o'tish</button>
                </div>
            </div>
        </div>
    `).join('');
}

// 2. Navigation
function showSection(section, btnId) {
    const sections = ['section-home', 'section-products', 'section-profile', 'section-favorites', 'section-feedback'];
    sections.forEach(s => {
        const el = document.getElementById(s);
        if(el) el.classList.add('hidden');
    });
    
    // Active Sidebar logic
    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active-glow'));
    if(btnId) {
        document.getElementById(btnId).classList.add('active-glow');
    }
    
    if (section === 'home') {
        document.getElementById('section-home').classList.remove('hidden');
        document.getElementById('page-title').textContent = "Internet Do'konlar";
    } else if (section === 'profile') {
        document.getElementById('section-profile').classList.remove('hidden');
        document.getElementById('page-title').textContent = "Shaxsiy Kabinet";
        renderProfile();
    } else if (section === 'favorites') {
        document.getElementById('section-favorites').classList.remove('hidden');
        document.getElementById('page-title').textContent = "Sevimli Mahsulotlar";
        renderFavorites();
    } else if (section === 'feedback') {
        document.getElementById('section-feedback').classList.remove('hidden');
        document.getElementById('page-title').textContent = "Taklif va Shikoyatlar";
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
    const container = document.getElementById('profile-container');
    container.innerHTML = `
        <div class="bg-[#002320] rounded-[32px] p-10 border border-[#01312b] shadow-xl w-full max-w-3xl mx-auto items-center flex flex-col sm:flex-row gap-8">
            <div class="bg-gradient-to-tr from-[#00ffcc] to-teal-800 w-32 h-32 rounded-full flex items-center justify-center text-5xl font-bold text-black border-4 border-black shadow-[0_0_20px_rgba(0,255,204,0.4)]">
                ${userData.firstName[0]}${userData.lastName[0]}
            </div>
            <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                    <h3 class="text-3xl font-extrabold">${userData.firstName} ${userData.lastName}</h3>
                    ${currentUser.isVip ? '<span class="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full"><i class="fas fa-crown"></i> VIP</span>' : '<span class="bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">ODDIY</span>'}
                </div>
                <p class="text-gray-400 text-lg mb-4"><i class="fas fa-phone text-[#00ffcc] mr-2"></i> ${userData.phone}</p>
                <div class="bg-black/40 rounded-xl p-4 flex justify-between items-center border border-white/5">
                    <div>
                        <p class="text-xs text-gray-500 mb-1">ID Raqamingiz</p>
                        <p class="font-mono text-[#00ffcc] text-xl font-bold">${userData.userId}</p>
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
    const message = `Assalomu alaykum! Men SmartQiyos VIP obunasini (3,999 so'm) sotib olmoqchiman. ID: ${userData.userId}`;
    window.location.href = `${telegramBot}?text=${encodeURIComponent(message)}`;
}

// 4. VIP Modules
function checkVip(action) {
    if (!currentUser.isVip) {
        document.getElementById('vip-modal').classList.remove('hidden');
        document.getElementById('vip-modal').classList.add('flex');
        
        // Add pop animation
        const box = document.getElementById('vip-box');
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
    } else {
        alert("VIP tizimiga xush kelibsiz!");
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
    renderStores();
});
