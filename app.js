// SmartQiyos - App Logic v1.0.9 (FIXED)
// Last update: 2026-03-29

// --- DATA ---
const STORES = [
    // Electronics
    { id: 'texnomart', name: 'Texnomart', logo: 'https://texnomart.uz/favicon.ico', rating: 4.8, rates: { 3: 0, 6: 0, 12: 12, 18: 24, 24: 36 }, category: 'electronics', url: 'https://texnomart.uz', terms: { uz: '12 oygacha 0%', ru: 'до 12 мес 0%', en: 'up to 12 mo 0%' }, docs: { uz: 'Faqat pasport', ru: 'Только паспорт', en: 'Passport only' }, requirements: { passport: true, income: false }, showOnHome: true },
    { id: 'mediapark', name: 'MediaPark', logo: 'https://mediapark.uz/favicon.ico', rating: 4.5, rates: { 3: 0, 6: 5, 12: 15, 18: 20, 24: 30 }, category: 'electronics', url: 'https://mediapark.uz', terms: { uz: '24 oygacha bo\'lib to\'lash', ru: 'рассрочка до 24 мес', en: 'installment up to 24 mo' }, docs: { uz: 'Pasport va daromad', ru: 'Паспорт и доход', en: 'Passport and income' }, requirements: { passport: true, income: true }, showOnHome: true },
    { id: 'idea', name: 'Idea', logo: 'https://idea.uz/favicon.ico', rating: 4.2, rates: { 3: 0, 6: 0, 12: 0, 18: 15, 24: 25 }, category: 'electronics', url: 'https://idea.uz', terms: { uz: 'Muddatli to\'lov 0%', ru: 'Рассрочка 0%', en: '0% Installment' }, docs: { uz: 'Faqat pasport', ru: 'Только паспорт', en: 'Passport only' }, requirements: { passport: true, income: false }, showOnHome: true },
    { id: 'radius', name: 'Radius', logo: 'https://radius.uz/favicon.ico', rating: 4.4, rates: { 3: 0, 6: 0, 12: 15, 18: 25, 24: 35 }, category: 'electronics', url: 'https://radius.uz', terms: { uz: 'Sifatli xizmat', ru: 'Качественный сервис', en: 'Quality service' }, docs: { uz: 'Pasport', ru: 'Паспорт', en: 'Passport' }, requirements: { passport: true, income: false }, showOnHome: true },
    
    // Furniture
    { id: 'eskiz', name: 'Eskiz Mebel', logo: 'https://eskiz.uz/favicon.ico', rating: 4.7, rates: { 3: 0, 6: 0, 12: 12, 18: 22, 24: 30 }, category: 'furniture', url: 'https://eskiz.uz', terms: { uz: '12 oygacha 0%', ru: '12 мес 0%', en: '12 mo 0%' }, docs: { uz: 'Faqat pasport', ru: 'Только паспорт', en: 'Passport only' }, requirements: { passport: true, income: false }, showOnHome: true },
    { id: 'jysk', name: 'Jysk', logo: 'https://jysk.uz/favicon.ico', rating: 4.6, rates: { 3: 0, 6: 5, 12: 10, 18: 20, 24: 25 }, category: 'furniture', url: 'https://jysk.uz', terms: { uz: 'Skandinaviya uslubi', ru: 'Скандинавский стиль', en: 'Scandi style' }, docs: { uz: 'Skoring orqali', ru: 'Через скоринг', en: 'Via scoring' }, requirements: { passport: true, income: false }, showOnHome: true },
    { id: 'home24', name: 'Home24', logo: 'https://home24.uz/favicon.ico', rating: 4.5, rates: { 3: 0, 6: 15, 12: 30, 18: 45, 24: 60 }, category: 'furniture', url: 'https://home24.uz', terms: { uz: 'Shinam uy uchun', ru: 'Для уютного дома', en: 'For cozy home' }, docs: { uz: 'Pasport', ru: 'Паспорт', en: 'Passport' }, requirements: { passport: true, income: false }, showOnHome: true },
    { id: 'aiko', name: 'AIKO', logo: 'https://aiko.uz/favicon.ico', rating: 4.3, rates: { 3: 0, 6: 10, 12: 20, 18: 30, 24: 40 }, category: 'furniture', url: 'https://aiko.uz', terms: { uz: 'Sifatli mebel', ru: 'Качественная мебель', en: 'Quality furniture' }, docs: { uz: 'Pasport', ru: 'Паспорт', en: 'Passport' }, requirements: { passport: true, income: false }, showOnHome: true },

    // Clothing & Shoes
    { id: 'terrapro', name: 'Terra Pro', logo: 'https://terrapro.uz/favicon.ico', rating: 4.8, rates: { 3: 0, 6: 0, 12: 0, 18: 12, 24: 20 }, category: 'clothing', url: 'https://terrapro.uz', terms: { uz: 'Foizsiz muddatli to\'lov', ru: 'Рассрочка без %', en: 'Interest-free installment' }, docs: { uz: 'Faqat pasport', ru: 'Только паспорт', en: 'Passport only' }, requirements: { passport: true, income: false }, showOnHome: true },
    { id: 'selfi', name: 'Selfi', logo: 'https://selfi.uz/favicon.ico', rating: 4.4, rates: { 3: 0, 6: 0, 12: 10, 18: 18, 24: 25 }, category: 'clothing', url: 'https://selfi.uz', terms: { uz: 'Sifatli kiyimlar', ru: 'Качественная одежда', en: 'Quality clothes' }, docs: { uz: 'ID-karta', ru: 'ID-карта', en: 'ID-card' }, requirements: { passport: true, income: false }, showOnHome: true },
    { id: 'uzum', name: 'Uzum Market', logo: 'https://uzum.uz/favicon.ico', rating: 4.9, rates: { 3: 0, 6: 0, 12: 16, 18: 24, 24: 32 }, category: 'clothing', url: 'https://uzum.uz', terms: { uz: 'Tezkor yetkazish', ru: 'Быстрая доставка', en: 'Fast delivery' }, docs: { uz: 'Karta orqali', ru: 'Через карту', en: 'Via card' }, requirements: { passport: true, income: false }, showOnHome: true },

    // Sport
    { id: 'sportmarket', name: 'Sport Market', logo: 'images/sportmarket_logo.png', rating: 4.6, rates: { 3: 0, 6: 0, 12: 15, 18: 25, 24: 35 }, category: 'sport', url: '#', terms: { uz: 'Sport anjomlari', ru: 'Спорттовары', en: 'Sport goods' }, docs: { uz: 'Pasport', ru: 'Паспорт', en: 'Passport' }, requirements: { passport: true, income: false }, showOnHome: true },
    { id: 'chempion', name: 'Chempion', logo: 'images/chempion_logo.png', rating: 4.5, rates: { 3: 0, 6: 5, 12: 12, 18: 20, 24: 30 }, category: 'sport', url: '#', terms: { uz: 'Professional anjomlar', ru: 'Проф оборудование', en: 'Professional gear' }, docs: { uz: 'Pasport', ru: 'Паспорт', en: 'Passport' }, requirements: { passport: true, income: false }, showOnHome: true },

    // Books
    { id: 'asaxiy', name: 'Asaxiy Books', logo: 'https://asaxiy.uz/favicon.ico', rating: 4.8, rates: { 3: 0, 6: 0, 12: 18, 18: 27, 24: 36 }, category: 'books', url: 'https://asaxiy.uz', terms: { uz: 'Kitoblar aksiyasi', ru: 'Акции на книги', en: 'Book deals' }, docs: { uz: 'Pasport', ru: 'Паспорт', en: 'Passport' }, requirements: { passport: true, income: false }, showOnHome: true },
    { id: 'factorbooks', name: 'Factor Books', logo: 'https://factorbooks.uz/favicon.ico', rating: 4.7, rates: { 3: 0, 6: 0, 12: 0, 18: 15, 24: 25 }, category: 'books', url: 'https://factorbooks.uz', terms: { uz: 'Eng sara kitoblar', ru: 'Лучшие книги', en: 'Selected books' }, docs: { uz: 'Faqat pasport', ru: 'Только паспорт', en: 'Passport only' }, requirements: { passport: true, income: false }, showOnHome: true },

    // Kids
    { id: 'erkatoy', name: 'Erkatoy', logo: 'https://erkatoy.uz/favicon.ico', rating: 4.9, rates: { 3: 0, 6: 0, 12: 12, 18: 24, 24: 36 }, category: 'kids', url: 'https://erkatoy.uz', terms: { uz: 'Bolalar dunyosi', ru: 'Мир детей', en: 'Kids world' }, docs: { uz: 'ID-karta', ru: 'ID-карта', en: 'ID-card' }, requirements: { passport: true, income: false }, showOnHome: true },
    { id: 'babyuz', name: 'Babyuz', logo: 'images/babyuz_logo.png', rating: 4.6, rates: { 3: 0, 6: 5, 12: 15, 18: 20, 24: 30 }, category: 'kids', url: '#', terms: { uz: 'Sifatli o\'yinchoqlar', ru: 'Качественные игрушки', en: 'Quality toys' }, docs: { uz: 'Pasport', ru: 'Паспорт', en: 'Passport' }, requirements: { passport: true, income: false }, showOnHome: true }
];

// --- UTILS ---
function formatPrice(num) {
    if (num === null || num === undefined) return '0 so\'m';
    return new Intl.NumberFormat('uz-UZ').format(num).replace(/,/g, ' ') + ' so\'m';
}

function calculateMonthly(price, rate, months) {
    // rate is expected as 0.15 for 15%
    if (rate === 0) return price / months;
    return (price * (1 + rate)) / months;
}

const PRODUCTS = [
    // Electronics - Smartphones
    { id: 1, name: 'iPhone 15 Pro Max', brand: 'Apple', price: 15500000, image: 'https://assets.asaxiy.uz/product/items/desktop/f689e4740e793910f5454641c8882ca12023091910542365947YyWb7U5n9.png.webp', category: 'cat_phones', subCategory: 'sub_smartphones', storeId: 'texnomart', date: '2023-09-20', specs: { ram: '8GB', battery: '4441mAh', storage: '256GB' }, url: 'https://texnomart.uz/uz/katalog/product/view/id/iPhone-15-Pro-Max' },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', price: 14200000, image: 'https://assets.asaxiy.uz/product/items/desktop/ae0d152a16d82f7c02b8a362dbd6a7e52024013110543681424vOnc8tC73X.png.webp', category: 'cat_phones', subCategory: 'sub_smartphones', storeId: 'mediapark', date: '2024-01-31', specs: { ram: '12GB', battery: '5000mAh', storage: '512GB' }, url: 'https://mediapark.uz/products/view/samsung-galaxy-s24-ultra' },
    { id: 4, name: 'Redmi Note 13 Pro', brand: 'Xiaomi', price: 4500000, image: 'https://assets.asaxiy.uz/product/items/desktop/937397262450375f462f47c32bf28b6d2024012516480579222u26D9GIsYV.png.webp', category: 'cat_phones', subCategory: 'sub_smartphones', storeId: 'idea', date: '2024-01-25', specs: { ram: '8GB', battery: '5000mAh', storage: '128GB' }, url: 'https://idea.uz/product/redmi-note-13-pro' },
    { id: 17, name: 'Nothing Phone 2', brand: 'Nothing', price: 7800000, image: 'images/telefonlar_render_1774713115199.png', category: 'cat_phones', subCategory: 'sub_smartphones', storeId: 'radius', date: '2023-07-01', specs: { ram: '12GB', battery: '4700mAh', storage: '256GB' } },
    { id: 18, name: 'Xiaomi 14 Ultra', brand: 'Xiaomi', price: 13500000, image: 'images/telefonlar_render_1774713115199.png', category: 'cat_phones', subCategory: 'sub_smartphones', storeId: 'texnomart', date: '2024-02-22', specs: { ram: '16GB', battery: '5000mAh', storage: '512GB' } },

    // Electronics - Tablets
    { id: 11, name: 'iPad Pro M4', brand: 'Apple', price: 12500000, image: 'images/telefonlar_render_1774713115199.png', category: 'cat_phones', subCategory: 'sub_watches', storeId: 'mediapark', date: '2024-05-07', specs: { screen: '13"', storage: '256GB' } }, // Repurposed for Watches/gadgets in new cat
    { id: 19, name: 'Samsung Galaxy Tab S9', brand: 'Samsung', price: 9500000, image: 'images/telefonlar_render_1774713115199.png', category: 'cat_phones', subCategory: 'sub_watches', storeId: 'radius', date: '2023-08-11', specs: { screen: '11"', storage: '128GB' } },
    { id: 20, name: 'Xiaomi Pad 6', brand: 'Xiaomi', price: 4200000, image: 'images/telefonlar_render_1774713115199.png', category: 'cat_phones', subCategory: 'sub_watches', storeId: 'idea', date: '2023-04-18', specs: { screen: '11"', storage: '128GB' } },

    // Electronics - Laptops
    { id: 3, name: 'MacBook Air M3', brand: 'Apple', price: 18000000, image: 'https://assets.asaxiy.uz/product/items/desktop/35252875b8e90f23078a08d2bb2dcc1a2024031518004116496N3aEsm4i3t.png.webp', category: 'cat_computers', subCategory: 'sub_laptops', storeId: 'texnomart', date: '2024-03-04', specs: { ram: '8GB', ssd: '256GB', cpu: 'M3' } },
    { id: 21, name: 'ASUS ROG Zephyrus G14', brand: 'ASUS', price: 22000000, image: 'images/kompyuter_render_1774713131449.png', category: 'cat_computers', subCategory: 'sub_laptops', storeId: 'mediapark', date: '2024-01-10', specs: { ram: '16GB', ssd: '1TB', cpu: 'Ryzen 9' } },
    { id: 22, name: 'HP Victus 15', brand: 'HP', price: 9500000, image: 'images/kompyuter_render_1774713131449.png', category: 'cat_computers', subCategory: 'sub_laptops', storeId: 'radius', date: '2023-06-15', specs: { ram: '16GB', ssd: '512GB', cpu: 'i5' } },
    { id: 23, name: 'Lenovo Legion 5', brand: 'Lenovo', price: 14500000, image: 'images/kompyuter_render_1774713131449.png', category: 'cat_computers', subCategory: 'sub_laptops', storeId: 'ishonch', date: '2023-11-20', specs: { ram: '16GB', ssd: '512GB', cpu: 'Ryzen 7' } },

    // Kitchen
    { id: 5, name: 'Samsung RF71 Fridge', brand: 'Samsung', price: 18500000, image: 'https://assets.asaxiy.uz/product/items/desktop/f34086d75c0c9454f0a2894627f3f3502023052216551820468qQ9uY0u8l.png.webp', category: 'cat_kitchen', subCategory: 'sub_fridges', storeId: 'mediapark', date: '2023-05-22', specs: { volume: '700L', color: 'Inox', compressor: 'Inverter' } },
    { id: 6, name: 'LG Inverter 9kg Washer', brand: 'LG', price: 7200000, image: 'images/maishiy_render_1774713145179.png', category: 'cat_kitchen', subCategory: 'sub_washers', storeId: 'ishonch', date: '2023-10-15', specs: { capacity: '9kg', color: 'White' } },
    { id: 13, name: 'Samsung Microwave Solo', brand: 'Samsung', price: 1800000, image: 'images/maishiy_render_1774713145179.png', category: 'cat_kitchen', subCategory: 'sub_washers', storeId: 'idea', date: '2023-03-20', specs: { volume: '23L' } },

    // Climate
    { id: 7, name: 'Gree Pular 12 Inverter', brand: 'Gree', price: 5800000, image: 'https://assets.asaxiy.uz/product/items/desktop/5e22e69f8263a24d07bfb43446548f3b2024031215104278434Yx8fH8zW8.png.webp', category: 'cat_climate', subCategory: 'sub_ac', storeId: 'idea', date: '2024-03-12', specs: { area: '35m2', type: 'Inverter' } },

    // Marketplace
    { id: 9, name: 'Xiaomi Mi Band 8', brand: 'Xiaomi', price: 550000, image: 'images/telefonlar_render_1774713115199.png', category: 'cat_phones', subCategory: 'sub_watches', storeId: 'uzum', date: '2023-04-18', specs: { display: 'AMOLED' } },
    { id: 15, name: 'Uzum Exclusive Item', brand: 'Uzum', price: 250000, image: 'images/kiyim_render_1774713320477.png', category: 'cat_toys', subCategory: 'sub_gifts', storeId: 'uzum', date: '2024-03-01', specs: {} },
    
    // New items for diverse categories
    { id: 30, name: 'Bosch Gas Stove', brand: 'Bosch', price: 4500000, image: 'images/maishiy_render_1774713145179.png', category: 'cat_kitchen', subCategory: 'sub_stoves', storeId: 'texnomart', date: '2024-01-10', specs: { burners: 4, oven: 'Gas' } },
    { id: 31, name: 'LG 55" OLED TV', brand: 'LG', price: 12000000, image: 'images/tv_render_1774713160860.png', category: 'cat_tv_audio', subCategory: 'sub_tv', storeId: 'mediapark', date: '2024-02-15', specs: { screen: '55"', resolution: '4K' } },
    { id: 32, name: 'Dyson V15', brand: 'Dyson', price: 9000000, image: 'images/maishiy_render_1774713145179.png', category: 'cat_kitchen', subCategory: 'sub_washers', storeId: 'radius', date: '2023-12-05', specs: { type: 'Wireless' } },
    { id: 33, name: 'Samsung 65" QLED TV', brand: 'Samsung', price: 15000000, image: 'images/tv_render_1774713160860.png', category: 'cat_tv_audio', subCategory: 'sub_tv', storeId: 'idea', date: '2024-03-20', specs: { screen: '65"', resolution: '4K' } },
    // Electronics - Laptops & Tablets (New for Catalog View)
    { id: 101, name: 'ASUS ROG Zephyrus G14', brand: 'ASUS', price: 22000000, image: 'images/kompyuter_render_1774713131449.png', category: 'cat_computers', subCategory: 'sub_laptops', storeId: 'texnomart', date: '2024-03-01', specs: { ram: '16GB', cpu: 'Ryzen 9', storage: '1TB' } },
    { id: 102, name: 'MacBook Air M3', brand: 'Apple', price: 18000000, image: 'images/kompyuter_render_1774713131449.png', category: 'cat_computers', subCategory: 'sub_laptops', storeId: 'mediapark', date: '2024-03-05', specs: { ram: '8GB', cpu: 'M3', storage: '256GB' } },
    { id: 103, name: 'iPad Pro M4', brand: 'Apple', price: 12500000, image: 'images/telefonlar_render_1774713115199.png', category: 'cat_phones', subCategory: 'sub_accessories', storeId: 'idea', date: '2024-03-10', specs: { ram: '8GB', screen: '11"', storage: '256GB' } },
    { id: 104, name: 'HP Victus 16', brand: 'HP', price: 11500000, image: 'images/kompyuter_render_1774713131449.png', category: 'cat_computers', subCategory: 'sub_laptops', storeId: 'radius', date: '2024-02-15', specs: { ram: '16GB', cpu: 'Core i7', storage: '512GB' } },
];

const CATEGORIES_CONFIG = {
    cat_books: {
        name: { uz: 'Kitoblar', ru: 'Книги', en: 'Books' },
        icon: 'book',
        image: 'images/kitoblar_render_1774713100967.png',
        color: 'linear-gradient(135deg, #F59E0B, #D97706)',
        pattern: 'leaf',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_fiction: { name: 'Badiiy adabiyot', icon: 'book-open' },
            sub_edu: { name: 'Darsliklar', icon: 'graduation-cap' },
            sub_business: { name: 'Biznes va psixologiya', icon: 'trending-up' }
        }
    },
    cat_phones: {
        name: { uz: 'Telefonlar va gadjetlar', ru: 'Телефоны и гаджеты', en: 'Phones & Gadgets' },
        icon: 'smartphone',
        image: 'images/telefonlar_render_1774713115199.png',
        color: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
        pattern: 'leaf',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_smartphones: { name: 'Smartfonlar', icon: 'smartphone' },
            sub_basic_phones: { name: 'Tugmachali telefonlar', icon: 'phone' },
            sub_watches: { name: 'Aqlli soatlar va brasletlar', icon: 'watch' },
            sub_accessories: { name: 'Smartfonlar uchun aksessuarlar', icon: 'headphones' }
        }
    },
    cat_computers: {
        name: { uz: 'Kompyuter texnikasi', ru: 'Компьютерная техника', en: 'Computer Tech' },
        icon: 'laptop',
        image: 'images/kompyuter_render_1774713131449.png',
        color: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
        pattern: 'leaf',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_laptops: { name: 'Noutbuklar', icon: 'laptop' },
            sub_desktops: { name: 'Monitorlar va PK', icon: 'monitor' },
            sub_pc_acc: { name: 'Kompyuter aksessuarlari', icon: 'mouse' }
        }
    },
    cat_kitchen: {
        name: { uz: 'Maishiy texnika', ru: 'Бытовая техника', en: 'Appliances' },
        icon: 'refrigerator',
        image: 'images/maishiy_render_1774713145179.png',
        color: 'linear-gradient(135deg, #10B981, #065F46)',
        pattern: 'plant',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_fridges: { name: 'Muzlatgichlar', icon: 'snowflake' },
            sub_washers: { name: 'Kir yuvish mashinalari', icon: 'waves' },
            sub_stoves: { name: 'Gaz plitalari', icon: 'flame' }
        }
    },
    cat_tv_audio: {
        name: { uz: 'Televizorlar, video va audio', ru: 'ТВ, видео и аудио', en: 'TV, Video & Audio' },
        icon: 'tv',
        image: 'images/tv_render_1774713160860.png',
        color: 'linear-gradient(135deg, #F87171, #EF4444)',
        pattern: 'wave',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_tv: { name: 'Televizorlar', icon: 'tv' },
            sub_audio: { name: 'Akustika va kalonkalar', icon: 'speaker' },
            sub_headphones: { name: 'Quloqchinlar', icon: 'headphones' }
        }
    },
    cat_toys: {
        name: { uz: 'O\'yinchoqlar, sovg\'alar va aksessuarlar', ru: 'Игрушки и подарки', en: 'Toys & Gifts' },
        icon: 'gift',
        image: 'images/oyinchoqlar_render_1774713178924.png',
        color: 'linear-gradient(135deg, #7C3AED, #9333EA)',
        pattern: 'diamond',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_toys: { name: 'O\'yinchoqlar', icon: 'puzzle' },
            sub_gifts: { name: 'Sovg\'alar', icon: 'gift' }
        }
    },
    cat_kids: {
        name: { uz: 'Bolalar uchun tovarlar', ru: 'Товары для детей', en: 'Kids Goods' },
        icon: 'smile',
        image: 'images/bolalar_render_1774713193804.png',
        color: 'linear-gradient(135deg, #A78BFA, #C4B5FD)',
        pattern: 'geometric',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_baby: { name: 'Chaqaloqlar uchun', icon: 'baby' },
            sub_kids_clothing: { name: 'Bolalar kiyimi', icon: 'shirt' }
        }
    },
    cat_climate: {
        name: { uz: 'Iqlim texnikasi', ru: 'Климатическая техника', en: 'Climate Tech' },
        icon: 'wind',
        image: 'images/iqlim_render_1774713206590.png',
        color: 'linear-gradient(135deg, #CBD5E1, #94A3B8)',
        pattern: 'geometric',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_ac: { name: 'Konditsionerlar', icon: 'snowflake' },
            sub_heaters: { name: 'Isitgichlar', icon: 'flame' }
        }
    },
    cat_beauty: {
        name: { uz: 'Go\'zallik va salomatlik', ru: 'Красота и здоровье', en: 'Beauty & Health' },
        icon: 'sparkles',
        image: 'images/gozallik_render_1774713223742.png',
        color: 'linear-gradient(135deg, #F472B6, #FB7185)',
        pattern: 'perfume',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_perfume: { name: 'Parfyumeriya', icon: 'droplet' },
            sub_health: { name: 'Salomatlik', icon: 'heart' }
        }
    },
    cat_sport: {
        name: { uz: 'Sport va dam olish', ru: 'Спорт и отдых', en: 'Sport & Leisure' },
        icon: 'trophy',
        image: 'images/sport_render_1774713236981.png',
        color: 'linear-gradient(135deg, #60A5FA, #2563EB)',
        pattern: 'ball',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_fitness: { name: 'Fitnes', icon: 'dumbbell' },
            sub_outdoor: { name: 'Dam olish', icon: 'tent' }
        }
    },
    cat_auto: {
        name: { uz: 'Avto tovarlar', ru: 'Автотовары', en: 'Auto Goods' },
        icon: 'car',
        image: 'images/avto_render_1774713256152.png',
        color: 'linear-gradient(135deg, #22C55E, #15803D)',
        pattern: 'none',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_tires: { name: 'Shinalar va disklar', icon: 'circle' },
            sub_auto_acc: { name: 'Avto aksessuarlar', icon: 'settings' }
        }
    },
    cat_home_office: {
        name: { uz: 'Uy va ofis uchun tovarlar', ru: 'Товары для дома и офиса', en: 'Home & Office' },
        icon: 'briefcase',
        image: 'images/uy_ofis_render_1774713272190.png',
        color: 'linear-gradient(135deg, #10B981, #059669)',
        pattern: 'none',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_office: { name: 'Ofis jihozlari', icon: 'printer' },
            sub_stationary: { name: 'Kantselyariya', icon: 'pen' }
        }
    },
    cat_dishes: {
        name: { uz: 'Idish-tovoqlar', ru: 'Посуда', en: 'Dishes' },
        icon: 'utensils',
        image: 'images/idish_render_1774713289034.png',
        color: 'linear-gradient(135deg, #A7F3D0, #6EE7B7)',
        pattern: 'none',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_cookware: { name: 'Oshxona idishlari', icon: 'utensils' },
            sub_sets: { name: 'Servizlar', icon: 'coffee' }
        }
    },
    cat_furniture: {
        name: { uz: 'Mebel', ru: 'Мебель', en: 'Furniture' },
        icon: 'armchair',
        image: 'images/mebel_render_1774713302299.png',
        color: 'linear-gradient(135deg, #67E8F9, #22D3EE)',
        pattern: 'none',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_home_furn: { name: 'Uy mebeli', icon: 'home' },
            sub_office_furn: { name: 'Ofis mebeli', icon: 'briefcase' }
        }
    },
    cat_clothing: {
        name: { uz: 'Kiyim, poyabzal va aksessuarlar', ru: 'Одежда и обувь', en: 'Clothing & Shoes' },
        icon: 'shirt',
        image: 'images/kiyim_render_1774713320477.png',
        color: 'linear-gradient(135deg, #E2E8F0, #94A3B8)',
        pattern: 'none',
        sub: {
            sub_all: { name: 'Barcha mahsulotlar', icon: 'list' },
            sub_men: { name: 'Erkaklar kiyimi', icon: 'user' },
            sub_women: { name: 'Ayollar kiyimi', icon: 'user-2' }
        }
    }
};

let activeSort = 'price_asc';
let itemsToShow = 8;

// --- LOCALIZATION ---
const TRANSLATIONS = {
    uz: {
        nav_home: 'Asosiy',
        nav_catalog: 'Katalog',
        nav_calc: 'Kalkulyator',
        nav_favorites: 'Sevimli',
        nav_profile: 'Profil',
        nav_support: 'Taklif va shikoyatlar',
        nav_comparison: 'Solishtirish',
        search_placeholder: 'Tovar qidirish...',
        stores_title: 'Hamkor Do\'konlar',
        featured_products: 'Saralangan Mahsulotlar',
        filter_all: 'Hammasi',
        filter_phones: 'Telefonlar',
        filter_laptops: 'Noutbuklar',
        buy_now: 'Sotib olish',
        compare: 'Solishtirish',
        monthly: 'oyiga',
        total_pay: 'Umumiy to\'lov',
        overpay: 'Ustama',
        calc_title: 'Kredit Kalkulyatori',
        calc_price: 'Tovar narxi',
        calc_months: 'Muddat (oy)',
        calc_downpay: 'Boshlang\'ich to\'lov',
        credit_score: 'Kredit Skoring',
        sum: 'so\'m',
        subscription: 'Obuna',
        billing_title: 'To\'lov usulini tanlash',
        billing_subtitle: 'VIP obuna (30 kun) - 2 999 so\'m',
        activate_vip: 'VIP-ni faollashtirish',
        vip_member: 'VIP A\'zo',
        trial_info: 'Bepul sinov muddati',
        trial_warning: 'Sinov muddati tugamoqda!',
        trial_expired: 'Sinov muddati tugadi!',
        days_left: 'kun qoldi',
        expires_at: 'Tugash vaqti',
        upgrade_now: 'Atigi 2999 so\'mga obuna bo\'ling',
        about_project: 'Loyiha haqida',
        feature_locked: 'Funksiya yopiq',
        locked_desc: 'Bu funksiya faqat VIP a\'zolar uchun. Obuna bo\'ling!',
        go_vip: 'VIP-ga o\'tish',
        annual: 'yillik',
        months_label: 'oy',
        active_status: 'Faol (Premium)',
        cat_furniture: 'Mebel',
        cat_kitchen: 'Oshxona texnikasi',
        cat_home: 'Uy uchun texnika',
        cat_climate: 'Iqlim nazorati',
        sub_phones: 'Smartfonlar',
        sub_tablets: 'Planshetlar',
        sub_laptops: 'Noutbuklar va Kompyuterlar',
        sub_watches: 'Smart-soatlar va brasletlar',
        sub_audio: 'Quloqchinlar (Garnitura)',
        sub_fridges: 'Sovutgichlar (Xolodilnik)',
        sub_washers: 'Kir yuvish mashinalari',
        sub_stoves: 'Gaz va elektr plitalari',
        sub_microwaves: 'Mikroto‘lqinli pechlar',
        sub_dishwashers: 'Idish yuvish mashinalari',
        sub_kettles: 'Elektr choynaklar va kofevarkalar',
        sub_vacuums: 'Changyutgichlar (Robot, Simli, Simsiz)',
        sub_irons: 'Dazmollar va par generatorlari',
        sub_sewing: 'Tikuv mashinalari',
        sub_water_purifiers: 'Suv tozalash filtrlari',
        sub_personal_care: 'Fenlar va shaxsiy parvarish texnikasi',
        sub_ac: 'Konditsionerlar',
        sub_boilers: 'Isitish qozonlari (Kotellar)',
        sub_ariston: 'Suv isitgichlar (Ariston)',
        sub_humidifiers: 'Havo namlagichlar va tozalagichlar',
        sub_heaters: 'Elektr isitgichlar (Obogrevatel)',
        sub_uzum: 'Uzum Market takliflari',
        sub_zood: 'Zoodmall takliflari',
        sub_olcha: 'Olcha.uz mahsulotlari',
        sub_bedroom: 'Yotoqxona mebellari',
        sub_kitchen_mebel: 'Oshxona mebellari',
        sub_sofas: 'Yumshoq mebellar (Divan, kreslo)',
        sub_office: 'Ofis mebellari',
        visit_site: 'Saytga o\'tish',
        credit_terms: 'Muddatli to\'lov shartlari',
        required_docs: 'Kerakli hujjatlar',
        specs_label: 'Xususiyatlari',
        scoring_title: 'Kredit Skoring',
        get_score: 'Kredit balingizni aniqlang',
        scoring_desc: 'KATM orqali rasmiy ma\'lumot',
        last_updated: 'Oxirgi yangilangan',
        recommendations_btn: 'Shaxsiy tavsiyalarni ko\'rish',
        recommendations_title: 'Siz uchun tavsiyalar',
        consent_title: 'KATM-ga ruxsat berish',
        consent_text: 'Men shaxsiy ma\'lumotlarimni tahlil qilishga va KATM dan kredit tariximni olishga rozilik beraman',
        confirm: 'Tasdiqlash',
        probability: 'Tasdiqlanish ehtimoli',
        score_low: 'Hozircha kredit olish imkoniyati biroz past. Ballni ko\'tarish uchun kichik xaridlarni Uzum Nasiya orqali qilib, o\'z vaqtida yoping.',
        score_mid: 'Sizning kredit tarixingiz barqaror. Kredit olish ehtimolingiz 75-80% atrofida.',
        score_high: 'Tabriklaymiz! Sizning balingiz juda yuqori. Sizga balla do\'konlar 0% boshlang\'ich to\'lov bilan kredit berishga tayyor.',
        score_status_red: 'Xavfli',
        score_status_yellow: 'O\'rtacha',
        score_status_green: 'Ishonchli',
        pay_title: 'Barcha do\'konlarni bir zumda solishtiring!',
        pay_benefit_1: 'Yashirin foizlarni ko\'rish',
        pay_benefit_2: 'Eng arzon variantni avtomatik topish',
        pay_benefit_3: 'Kredit ehtimolligini hisoblash',
        pay_price: 'Atigi 4 999 so\'m / 6 kunga',
        pay_btn: 'Hozir VIP bo\'lish',
        locked_msg: 'Solishtirish uchun VIP obuna kerak',
        sort_label: 'Saralash',
        sort_price_asc: 'Narxi (arzonidan)',
        sort_newest: 'Yangi modellar',
        empty_title: 'Hozircha bu bo\'limda modellar mavjud emas',
        load_more: 'Yana yuklash',
        nav_budget: 'Aqlli qidiruv',
        budget_title: 'Aqlli Budjet Qidiruvi',
        budget_subtitle: 'Oylik to\'lov imkoniyatingizga mos mahsulotlarni toping',
        cat_all: 'Hammasi',
        cat_electronics: 'Elektronika',
        cat_furniture: 'Mebel',
        cat_clothing: 'Kiyim-kechak',
        cat_sport: 'Sport va Salomatlik',
        cat_books: 'Kitoblar',
        cat_kids: 'Bolalar dunyosi',
        max_monthly: 'Maksimal oylik to\'lov',
        payment_duration: 'To\'lov muddati',
        budget_fit: 'Budjetingizga to\'liq mos keladi',
        budget_cheaper: 'Budjetingizdan {price} arzonroq',
        max_total_price: 'Kutilayotgan tan narx',
        best_variant: 'Eng yaxshi variant',
        passport_label: 'Pasport',
        income_label: 'Daromad',
        total_pay: 'Jami to\'lov',
        diff_budget: 'Budjetdan farq',
        suggested_term: 'Taklif etilgan muddat',
        best_total_price: 'Eng arzon tan narx',
        months_label: 'oy',
        budget_lock_title: 'VIP Kirish talab etiladi',
        budget_lock_desc: 'Aqlli qidiruv funksiyasidan foydalanish uchun admin bilan bog\'laning va ruxsat oling.',
        vip_required: 'VIP obuna talab qilinadi',
        contact_admin: 'Adminga yozish',
        support_title: 'Sizni eshitamiz',
        leaving_app_warning: 'Siz hozir ilovadan chiqib Telegramga o\'tasiz. Davom etasizmi?',
        admin_title: 'Admin Paneli',
        user_id_label: 'Foydalanuvchi ID',
        referral_title: 'Tekin VIP olish',
        referral_desc: 'Har bir ro\'yxatdan o\'tgan do\'stingiz uchun +1 kunlik Premium obuna sovg\'a qilinadi!',
        referral_btn: 'Bepul VIP olish (Do\'stlarni taklif qilish)',
        referral_success: 'Tabriklaymiz! Do\'stingiz qo\'shildi, sizga 1 kunlik VIP taqdim etildi.',
        referral_limit: 'Kunlik limit tugadi (maksimal 5 ta).',
        chat_placeholder: 'Xabaringizni yozing...',
        filter_clothing: 'Kiyim',
        filter_sport: 'Sport',
        filter_books: 'Kitoblar',
        filter_kids: 'Bolalar',
        filter_furniture: 'Mebel'
    },
    ru: {
        nav_home: 'Главная',
        nav_catalog: 'Каталог',
        nav_calc: 'Калькулятор',
        nav_favorites: 'Избранное',
        nav_profile: 'Профиль',
        nav_support: 'Поддержка',
        nav_comparison: 'Сравнение',
        search_placeholder: 'Поиск товара...',
        stores_title: 'Магазины-партнеры',
        featured_products: 'Популярные товары',
        filter_all: 'Все',
        filter_phones: 'Телефоны',
        filter_laptops: 'Ноутбуки',
        buy_now: 'Купить',
        compare: 'Сравнить',
        monthly: 'в месяц',
        total_pay: 'Общая сумма',
        overpay: 'Переплата',
        calc_title: 'Кредитный калькулятор',
        calc_price: 'Цена товара',
        calc_months: 'Срок (мес)',
        calc_downpay: 'Первоначальный взнос',
        credit_score: 'Кредитный скоринг',
        sum: 'сум',
        subscription: 'Подписка',
        billing_title: 'Выберите способ оплаты',
        billing_subtitle: 'VIP подписка (30 дней) - 2 999 сум',
        activate_vip: 'Активировать VIP',
        vip_member: 'VIP Участник',
        trial_info: 'Бесплатный период',
        trial_warning: 'Период заканчивается!',
        trial_expired: 'Период истек!',
        days_left: 'дня осталось',
        expires_at: 'Истекает',
        upgrade_now: 'Подпишитесь всего за 2999 сум',
        about_project: 'О проекте',
        support_title: 'Мы вас слушаем',
        feature_locked: 'Функция заблокирована',
        locked_desc: 'Эта функция доступна только для VIP. Подпишитесь!',
        go_vip: 'Стать VIP',
        annual: 'годовых',
        months_label: 'мес',
        active_status: 'Активен (Premium)',
        cat_furniture: 'Мебель',
        cat_kitchen: 'Кухонная техника',
        cat_home: 'Техника для дома',
        cat_climate: 'Климат-контроль',
        sub_phones: 'Смартфоны',
        sub_tablets: 'Планшеты',
        sub_laptops: 'Ноутбуки и компьютеры',
        sub_watches: 'Смарт-часы и браслеты',
        sub_audio: 'Наушники (Гарнитуры)',
        sub_fridges: 'Холодильники',
        sub_washers: 'Стиральные машины',
        sub_stoves: 'Газовые и электроплиты',
        sub_microwaves: 'Микроволновые печи',
        sub_dishwashers: 'Посудомоечные машины',
        sub_kettles: 'Электрочайники и кофеварки',
        sub_vacuums: 'Пылесосы (Робот, проводные, беспроводные)',
        sub_irons: 'Утюги и парогенераторы',
        sub_sewing: 'Швейные машины',
        sub_water_purifiers: 'Фильтры для воды',
        sub_personal_care: 'Фены и уход за собой',
        sub_ac: 'Кондиционеры',
        sub_boilers: 'Отопительные котлы',
        sub_ariston: 'Водонагреватели (Аристон)',
        sub_humidifiers: 'Увлажнители и очистители воздуха',
        sub_heaters: 'Электрообогреватели',
        sub_uzum: 'Предложения Uzum Market',
        sub_zood: 'Предложения Zoodmall',
        sub_olcha: 'Товары Olcha.uz',
        sub_bedroom: 'Мебель для спальни',
        sub_kitchen_mebel: 'Кухонная мебель',
        sub_sofas: 'Мягкая мебель (Диваны, кресла)',
        sub_office: 'Офисная мебель',
        visit_site: 'Перейти на сайт',
        credit_terms: 'Условия кредита',
        required_docs: 'Необходимые документы',
        specs_label: 'Характеристики',
        scoring_title: 'Кредитный скоринг',
        get_score: 'Узнайте свой кредитный балл',
        scoring_desc: 'Официальные данные через КАТМ',
        last_updated: 'Последнее обновление',
        recommendations_btn: 'Посмотреть рекомендации',
        recommendations_title: 'Рекомендации для вас',
        consent_title: 'Разрешение КАТМ',
        consent_text: 'Я даю согласие на анализ персональных данных и получение кредитной истории из КАТМ',
        confirm: 'Подтвердить',
        probability: 'Вероятность одобрения',
        score_low: 'Пока вероятность получения кредита низкая. Чтобы поднять балл, делайте небольшие покупки через Uzum Nasiya и закрывайте их вовремя.',
        score_mid: 'Ваша кредитная история стабильна. Вероятность одобрения около 75-80%.',
        score_high: 'Поздравляем! У вас очень высокий балл. Все магазины готовы предоставить вам кредит с 0% взносом.',
        score_status_red: 'Опасный',
        score_status_yellow: 'Средний',
        score_status_green: 'Надежный',
        pay_title: 'Сравните все магазины мгновенно!',
        pay_benefit_1: 'Просмотр скрытых процентов',
        pay_benefit_2: 'Автоматический поиск дешевого варианта',
        pay_benefit_3: 'Расчет вероятности кредита',
        pay_price: 'Всего 4 999 сум / на 6 дней',
        pay_btn: 'Стать VIP сейчас',
        locked_msg: 'Для сравнения нужна VIP подписка',
        referral_title: 'Получить бесплатный VIP',
        referral_desc: 'Отправьте приложение другу, и если он зарегистрируется, вы получите 1 день VIP-подписки бесплатно!',
        referral_btn: 'Пригласить друзей',
        referral_success: 'Поздравляем! Ваш друг присоединился, вам предоставлен 1 день VIP.',
        referral_limit: 'Дневной лимит исчерпан (максимум 5).',
        cat_all: 'Все',
        cat_electronics: 'Электроника',
        cat_furniture: 'Мебель',
        cat_clothing: 'Одежда и обувь',
        cat_sport: 'Спорт и здоровье',
        cat_books: 'Книги',
        cat_kids: 'Детский мир',
        max_monthly: 'Максимальный платеж',
        payment_duration: 'Срок платежа',
        budget_fit: 'Полностью подходит',
        budget_cheaper: 'Дешевле на {price}',
        max_total_price: 'Ожидаемая цена',
        best_variant: 'Лучший вариант',
        passport_label: 'Паспорт',
        income_label: 'Доход',
        total_pay: 'Итоговая сумма',
        diff_budget: 'Разница',
        suggested_term: 'Рекомендуемый срок',
        best_total_price: 'Лучшая цена',
        months_label: 'мес',
        budget_lock_title: 'Требуется VIP доступ',
        budget_lock_desc: 'Для использования этой функции обратитесь к админу.',
        vip_required: 'Нужна VIP подписка',
        contact_admin: 'Написать админу',
        support_title: 'Мы вас слушаем',
        leaving_app_warning: 'Вы переходите в Telegram. Продолжить?',
        admin_title: 'Панель админа',
        user_id_label: 'ID пользователя',
        referral_title: 'Получить VIP бесплатно',
        referral_desc: 'За каждого друга +1 день Premium!',
        referral_btn: 'Пригласить друзей',
        referral_success: 'Поздравляем! Друг добавлен, вам начислен 1 день VIP.',
        referral_limit: 'Лимит исчерпан (макс 5).',
        chat_placeholder: 'Пишите сообщение...',
        filter_clothing: 'Одежда',
        filter_sport: 'Спорт',
        filter_books: 'Книги',
        filter_kids: 'Дети',
        filter_furniture: 'Мебель'
    },
    en: {
        nav_home: 'Home',
        nav_catalog: 'Catalog',
        nav_calc: 'Calculator',
        nav_favorites: 'Favorites',
        nav_profile: 'Profile',
        nav_support: 'Support',
        nav_comparison: 'Comparison',
        search_placeholder: 'Search products...',
        stores_title: 'Partner Stores',
        featured_products: 'Featured Products',
        filter_all: 'All',
        filter_phones: 'Phones',
        filter_laptops: 'Laptops',
        buy_now: 'Buy Now',
        compare: 'Compare',
        monthly: 'per month',
        total_pay: 'Total Payment',
        overpay: 'Overpayment',
        calc_title: 'Credit Calculator',
        calc_price: 'Product Price',
        calc_months: 'Period (months)',
        calc_downpay: 'Down Payment',
        credit_score: 'Credit Scoring',
        sum: 'UZS',
        subscription: 'Subscription',
        billing_title: 'Select Payment Method',
        billing_subtitle: 'VIP Subscription (30 days) - 2,999 UZS',
        activate_vip: 'Activate VIP',
        vip_member: 'VIP Member',
        trial_info: 'Free Trial',
        trial_warning: 'Trial is ending!',
        trial_expired: 'Trial expired!',
        days_left: 'days left',
        expires_at: 'Expires at',
        upgrade_now: 'Upgrade for only 2999 UZS',
        about_project: 'About Project',
        support_title: 'We hear you',
        feature_locked: 'Feature Locked',
        locked_desc: 'This feature is for VIP members only. Subscribe now!',
        go_vip: 'Go VIP',
        annual: 'annual',
        months_label: 'months',
        active_status: 'Active (Premium)',
        cat_all: 'All',
        cat_electronics: 'Electronics',
        cat_furniture: 'Furniture',
        cat_clothing: 'Clothing & Shoes',
        cat_sport: 'Sport & Health',
        cat_books: 'Books',
        cat_kids: 'Kids World',
        max_monthly: 'Max monthly payment',
        payment_duration: 'Payment duration',
        budget_fit: 'Fits your budget perfectly',
        budget_cheaper: '{price} cheaper than your budget',
        max_total_price: 'Expected total price',
        best_variant: 'Best Variant',
        passport_label: 'Passport',
        income_label: 'Income',
        total_pay: 'Total payment',
        diff_budget: 'Budget difference',
        suggested_term: 'Suggested term',
        best_total_price: 'Best total price',
        months_label: 'months',
        budget_lock_title: 'Smart Search Locked',
        budget_lock_desc: 'Upgrade to VIP to find the best deals in all stores!',
        vip_required: 'VIP Subscription Required',
        contact_admin: 'Contact Admin',
        leaving_app_warning: 'You are now leaving the app to Telegram. Do you want to continue?',
        admin_title: 'Admin Panel',
        user_id_label: 'User ID',
        referral_title: 'Get Free VIP',
        referral_desc: 'Send the app to a friend and if they register, get 1 day of VIP subscription for free!',
        referral_btn: 'Invite Friends',
        referral_success: 'Congratulations! Your friend joined, you have been granted 1 day of VIP.',
        referral_limit: 'Daily limit reached (max 5).',
        chat_placeholder: 'Type your message...',
        filter_clothing: 'Clothing',
        filter_sport: 'Sport',
        filter_books: 'Books',
        filter_kids: 'Kids',
        filter_furniture: 'Furniture'
    }
};

// --- GLOBAL STATE ---
let currentLang = localStorage.getItem('smartqiyos_lang') || 'uz';
let activeCategory = 'all';
let activeSubCategory = 'sub_all';
let searchQuery = '';
let activeView = 'home';
let userScore = 0;

const USER_STATE = {
    isAuthorized: true,
    isVip: true, // For demo purposes
    subscriptionDays: 24,
    trialEnd: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString()
};

// --- CORE FUNCTIONS ---
function updateLocalization() {
    const t = TRANSLATIONS[currentLang];
    document.title = "SmartQiyos";
    
    // Header & Sidebar
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT') el.placeholder = t[key];
            else el.innerText = t[key];
        }
    });

    lucide.createIcons();
}

function switchView(viewId, params = null) {
    console.log('Switching to view:', viewId, params);
    activeView = viewId;
    
    // Hide all views
    document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
    
    // Show target view
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.add('active');
        target.style.display = 'block'; // Ensure it's shown if using display:none in css
        window.scrollTo(0, 0);
    }
    
    // Specific logic per view
    if (viewId === 'home') {
        renderModernCatalogGrid();
        renderStores();
    } else if (viewId === 'catalog') {
        renderModernCatalogGrid();
    } else if (viewId === 'favorites') {
        renderFavorites();
    } else if (viewId === 'budget') {
        initBudgetSearch();
    }
    
    // Update sidebar active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-id') === viewId);
    });

    lucide.createIcons();
}

function renderStores() {
    const container = document.getElementById('stores-grid');
    if (!container) return;
    container.innerHTML = '';
    
    const filteredStores = STORES.filter(s => s.showOnHome);
    
    filteredStores.forEach(store => {
        const div = document.createElement('div');
        div.className = 'store-card-premium fade-in-up';
        div.innerHTML = `
            <div class="store-badge">${store.rating} <i data-lucide="star" style="width:10px;fill:currentColor"></i></div>
            <img src="${store.logo}" alt="${store.name}" class="store-logo-img">
            <h4>${store.name}</h4>
            <p class="store-term">${store.terms[currentLang]}</p>
            <div class="store-footer">
                <span><i data-lucide="file-text"></i> ${store.docs[currentLang]}</span>
            </div>
        `;
        div.onclick = () => window.open(store.url, '_blank');
        container.appendChild(div);
    });
    lucide.createIcons();
}

function renderProducts() {
    let container = document.getElementById('products-grid');
    if (activeView === 'subcategory') {
        container = document.getElementById('subcategory-products');
    }
    
    if (!container) return;
    
    let filtered = PRODUCTS;
    
    // Category filter
    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
        if (activeSubCategory !== 'sub_all') {
            filtered = filtered.filter(p => p.subCategory === activeSubCategory);
        }
    }
    
    // Search filter
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.brand.toLowerCase().includes(q)
        );
    }
    
    // Sort
    if (activeSort === 'price_asc') filtered.sort((a, b) => a.price - b.price);
    else if (activeSort === 'price_desc') filtered.sort((a, b) => b.price - a.price);
    
    container.innerHTML = filtered.slice(0, itemsToShow).map((p, idx) => `
        <div class="product-card fade-in-up" style="animation-delay: ${idx * 0.05}s">
            <div class="product-badge">Top Sale</div>
            <button class="wishlist-btn ${isProductFavorited(p.id) ? 'active' : ''}" onclick="toggleFavorite(${p.id}, this)">
                <i data-lucide="heart" style="${isProductFavorited(p.id) ? 'fill:#EF4444; color:#EF4444;' : ''}"></i>
            </button>
            <div class="product-img-wrap" onclick="showProductDetails(${p.id})">
                <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/150'">
            </div>
            <div class="product-info">
                <p class="brand-tag">${p.brand}</p>
                <h3 onclick="showProductDetails(${p.id})">${p.name}</h3>
                <div class="price-box">
                    <span class="main-price">${formatPrice(p.price)}</span>
                    <span class="monthly-price">${formatPrice(Math.round(p.price * 1.15 / 12))} / ${TRANSLATIONS[currentLang].monthly}</span>
                </div>
                <div class="product-footer">
                    <button class="btn btn-outline" onclick="selectModelForCompare(${p.id})">
                        <i data-lucide="scale"></i> ${TRANSLATIONS[currentLang].compare}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

function showProductDetails(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    
    modal.querySelector('.modal-product-name').innerText = p.name;
    modal.querySelector('.modal-product-img').src = p.image;
    modal.querySelector('.modal-price').innerText = formatPrice(p.price);
    
    // Specs
    const specsCont = modal.querySelector('.specs-list');
    specsCont.innerHTML = Object.entries(p.specs || {}).map(([k, v]) => `
        <div class="spec-item">
            <span class="spec-label">${k.toUpperCase()}</span>
            <span class="spec-value">${v}</span>
        </div>
    `).join('');
    
    modal.style.display = 'flex';
    lucide.createIcons();
}

let compareModelId = null;

function selectModelForCompare(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    
    compareModelId = id;
    switchView('comparison');
    renderComparison();
}

function renderComparison() {
    const container = document.getElementById('comparison-results');
    if (!container) return;
    
    const p = PRODUCTS.find(x => x.id === compareModelId);
    if (!p) {
        container.innerHTML = '<div class="empty-state">Select a product first</div>';
        return;
    }
    
    // Header
    const header = document.getElementById('comparison-header-info');
    if (header) {
        header.innerHTML = `
            <img src="${p.image}" style="height:60px">
            <div>
                <h3>${p.name}</h3>
                <p>${formatPrice(p.price)}</p>
            </div>
        `;
    }
    
    // Stores Comparison
    container.innerHTML = STORES.map(store => {
        const rate = (store.rates[12] || 15) / 100;
        const monthly = calculateMonthly(p.price, rate, 12);
        const total = monthly * 12;
        
        return `
            <div class="comparison-card fade-in-up">
                <div class="comp-store-info">
                    <img src="${store.logo}" class="comp-logo">
                    <div>
                        <h4>${store.name}</h4>
                        <div class="stars">${'★'.repeat(Math.floor(store.rating))}</div>
                    </div>
                </div>
                <div class="comp-details">
                    <div class="comp-row">
                        <span>12 ${TRANSLATIONS[currentLang].months_label}</span>
                        <span class="comp-monthly">${formatPrice(Math.round(monthly))}</span>
                    </div>
                    <div class="comp-row total">
                        <span>${TRANSLATIONS[currentLang].total_pay}</span>
                        <span>${formatPrice(Math.round(total))}</span>
                    </div>
                </div>
                <button class="btn btn-primary w-100" onclick="window.open('${store.url}', '_blank')">
                    ${TRANSLATIONS[currentLang].buy_now}
                </button>
            </div>
        `;
    }).join('');
    
    lucide.createIcons();
}

// --- CATALOG V2 ---
function renderModernCatalogGrid() {
    const grid = document.getElementById('catalog-grid') || document.getElementById('home-catalog-grid');
    if (!grid) return;
    
    grid.innerHTML = Object.entries(CATEGORIES_CONFIG).map(([id, config]) => {
        const lang = currentLang || 'uz';
        const name = config.name[lang] || config.name.uz;
        return `
            <div class="catalog-card-premium fade-in-up" onclick="renderSubCategoryList('${id}')">
                <img src="${config.image}" alt="${name}" class="catalog-card-image">
                <div class="card-content">
                    <i data-lucide="${config.icon}" class="card-icon"></i>
                    <h3>${name}</h3>
                    <p>${Object.keys(config.sub).length - 1}+ bo'limlar</p>
                </div>
            </div>
        `;
    }).join('');
    
    lucide.createIcons();
}

function renderSubCategoryList(catId) {
    const config = CATEGORIES_CONFIG[catId];
    if (!config) return;
    
    activeCategory = catId;
    activeSubCategory = 'sub_all';
    switchView('subcategory');
    
    const title = document.getElementById('subcategory-title');
    if (title) title.innerText = config.name[currentLang] || config.name.uz;
    
    const list = document.getElementById('subcategory-list');
    if (list) {
        list.innerHTML = Object.entries(config.sub).map(([subId, sub]) => `
            <button class="sub-filter-btn ${activeSubCategory === subId ? 'active' : ''}" 
                    onclick="setSubCategory('${subId}', this)">
                <i data-lucide="${sub.icon}"></i> ${sub.name}
            </button>
        `).join('');
    }
    
    renderProducts();
    lucide.createIcons();
}

function setSubCategory(id, btn) {
    activeSubCategory = id;
    document.querySelectorAll('.sub-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderProducts();
}

// --- SEARCH ---
let searchTimeout = null;
function handleSearch(val) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchQuery = val;
        if (activeView !== 'catalog' && activeView !== 'subcategory') {
            switchView('catalog');
        }
        renderProducts();
    }, 400);
}

// --- BUDGET SEARCH ---
function initBudgetSearch() {
    const container = document.getElementById('budget-results');
    if (!container) return;
    
    const slider = document.getElementById('budget-slider');
    const monthsSelect = document.getElementById('budget-months');
    const maxMonthly = parseInt(slider ? slider.value : 1000000);
    const months = parseInt(monthsSelect ? monthsSelect.value : 12);
    
    const monthlyValLabel = document.getElementById('budget-monthly-val');
    if (monthlyValLabel) monthlyValLabel.innerText = formatPrice(maxMonthly);
    
    const fits = PRODUCTS.filter(p => {
        const monthly = (p.price * 1.15) / months;
        return monthly <= maxMonthly;
    });
    
    if (fits.length === 0) {
        container.innerHTML = `<div class="empty-state">${TRANSLATIONS[currentLang].empty_title}</div>`;
        return;
    }

    container.innerHTML = fits.map(p => {
        const monthly = Math.round((p.price * 1.15) / months);
        return `
            <div class="product-card fade-in-up">
                <div class="product-img-wrap" onclick="showProductDetails(${p.id})">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p class="budget-match">${TRANSLATIONS[currentLang].budget_fit}</p>
                    <div class="price-box">
                        <span class="main-price">${formatPrice(p.price)}</span>
                        <span class="monthly-price">${formatPrice(monthly)} x ${months} ${TRANSLATIONS[currentLang].months_label}</span>
                    </div>
                    <button class="btn btn-primary w-100" onclick="selectModelForCompare(${p.id})">
                        <i data-lucide="scale"></i> ${TRANSLATIONS[currentLang].compare}
                    </button>
                </div>
            </div>`;
    }).join('');
    
    lucide.createIcons();
}

// --- SCORING ---
function openScoring() {
    const modal = document.getElementById('scoring-modal');
    if (modal) modal.style.display = 'flex';
}

function calculateScore() {
    const btn = document.querySelector('.scoring-btn');
    if (btn) {
        btn.innerHTML = '<span class="loader"></span>';
        btn.disabled = true;
    }
    
    setTimeout(() => {
        userScore = 710;
        updateCreditScoreUI(userScore);
        const modal = document.getElementById('scoring-modal');
        if (modal) modal.style.display = 'none';
        if (btn) {
            btn.innerHTML = TRANSLATIONS[currentLang].get_score;
            btn.disabled = false;
        }
    }, 2000);
}

function updateCreditScoreUI(score) {
    const scoreVal = document.getElementById('score-value');
    const scoreBar = document.getElementById('score-fill');
    const scoreStatus = document.getElementById('score-status');
    
    if (scoreVal) scoreVal.innerText = score;
    if (scoreBar) scoreBar.style.width = `${(score / 900) * 100}%`;
    
    if (scoreStatus) {
        if (score < 400) {
            scoreStatus.innerText = TRANSLATIONS[currentLang].score_status_red;
            scoreStatus.style.color = '#EF4444';
        } else if (score < 700) {
            scoreStatus.innerText = TRANSLATIONS[currentLang].score_status_yellow;
            scoreStatus.style.color = '#F59E0B';
        } else {
            scoreStatus.innerText = TRANSLATIONS[currentLang].score_status_green;
            scoreStatus.style.color = '#10B981';
        }
    }
}

// --- VIP & SUBSCRIPTION ---
function checkVipAccess(feature) {
    if (USER_STATE.isVip) return true;
    showVipLock(feature);
    return false;
}

function showVipLock(feature) {
    const modal = document.getElementById('vip-modal');
    if (modal) modal.style.display = 'flex';
}

// --- FAVORITES SYSTEM ---
let FAVORITES = JSON.parse(localStorage.getItem('smartqiyos_favorites') || '[]');
let PRICE_DROP_NOTIFS = JSON.parse(localStorage.getItem('smartqiyos_price_drop') || '[]');

function saveFavorites() {
    localStorage.setItem('smartqiyos_favorites', JSON.stringify(FAVORITES));
}

function isProductFavorited(productId) {
    return FAVORITES.includes(parseInt(productId));
}

function toggleFavorite(productId, btn) {
    productId = parseInt(productId);
    const idx = FAVORITES.indexOf(productId);
    
    if (idx === -1) {
        FAVORITES.push(productId);
        if (btn) {
            btn.classList.add('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.style.fill = '#EF4444';
                icon.style.color = '#EF4444';
            }
        }
    } else {
        FAVORITES.splice(idx, 1);
        if (btn) {
            btn.classList.remove('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.style.fill = 'none';
                icon.style.color = 'rgba(0,0,0,0.6)';
            }
        }
    }
    
    saveFavorites();
    updateFavoritesBadge();
    lucide.createIcons();
}

function updateFavoritesBadge() {
    const favLink = document.querySelector('.nav-item[data-id="favorites"]');
    if (!favLink) return;
    let badge = favLink.querySelector('.fav-count-badge');
    
    if (FAVORITES.length > 0) {
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'fav-count-badge';
            const badgeStyle = 'background:#EF4444; color:white; border-radius:50%; width:18px; height:18px; font-size:10px; display:inline-flex; align-items:center; justify-content:center; margin-left:6px; font-weight:700;';
            badge.style.cssText = badgeStyle;
            const span = favLink.querySelector('span');
            if (span) span.after(badge); else favLink.appendChild(badge);
        }
        badge.textContent = FAVORITES.length;
        badge.style.display = 'inline-flex';
    } else if (badge) {
        badge.remove();
    }
}

function togglePriceDropNotification(productId, btn) {
    const id = parseInt(productId);
    const idx = PRICE_DROP_NOTIFS.indexOf(id);
    if (idx === -1) {
        PRICE_DROP_NOTIFS.push(id);
        if (btn) btn.classList.add('active');
    } else {
        PRICE_DROP_NOTIFS.splice(idx, 1);
        if (btn) btn.classList.remove('active');
    }
    localStorage.setItem('smartqiyos_price_drop', JSON.stringify(PRICE_DROP_NOTIFS));
    lucide.createIcons();
}

function renderFavorites() {
    const grid = document.getElementById('favorites-grid');
    if (!grid) return;

    if (FAVORITES.length === 0) {
        grid.innerHTML = `
            <div class="fav-empty-state fade-in-up" style="grid-column: 1/-1;">
                <i data-lucide="heart"></i>
                <h3>${currentLang === 'uz' ? 'Sevimlilar bo\'sh' : 'No favorites yet'}</h3>
                <p>${currentLang === 'uz' ? 'O\'zingizga yoqqan mahsulotlarni saqlab qo\'ying.' : 'Save your favorite products.'}</p>
                <button class="btn btn-primary" onclick="switchView('home')">
                    ${currentLang === 'uz' ? 'Mahsulotlarni ko\'rish' : 'Browse products'}
                </button>
            </div>`;
        lucide.createIcons();
        return;
    }

    const favoriteProducts = PRODUCTS.filter(p => FAVORITES.includes(Number(p.id)));
    grid.innerHTML = favoriteProducts.map(p => `
        <div class="product-card fade-in-up">
            <button class="wishlist-btn active" onclick="toggleFavorite(${p.id}, this); setTimeout(renderFavorites, 200);">
                <i data-lucide="heart" style="fill:#EF4444; color:#EF4444;"></i>
            </button>
            <div class="product-img-wrap" onclick="showProductDetails(${p.id})">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="price-box">
                    <span class="main-price">${formatPrice(p.price)}</span>
                </div>
                <div class="price-drop-toggle ${PRICE_DROP_NOTIFS.includes(Number(p.id)) ? 'active' : ''}" 
                     onclick="togglePriceDropNotification(${p.id}, this)">
                    <i data-lucide="${PRICE_DROP_NOTIFS.includes(Number(p.id)) ? 'bell-ring' : 'bell'}"></i>
                    <span>${currentLang === 'uz' ? 'Narx tushsa xabar berish' : 'Notify on price drop'}</span>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    updateLocalization();
    renderModernCatalogGrid();
    renderStores();
    renderProducts(); // Show featured products on home load
    updateFavoritesBadge();

    // Mobile Menu Toggle
    const sidebar = document.getElementById('sidebar');
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');

    if (openMenuBtn && sidebar) {
        openMenuBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    if (closeMenuBtn && sidebar) {
        closeMenuBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Close menu when clicking nav items on mobile
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 991) {
                sidebar.classList.remove('active');
            }
        });
    });
});

// Bridge functions for index.html event handlers
function filterCatalog(q) {
    searchQuery = q || '';
    renderModernCatalogGrid();
}

function searchInSubCategory(q) {
    searchQuery = q || '';
    renderProducts();
}

function applySubCategorySort(sort) {
    activeSort = sort;
    renderProducts();
}
