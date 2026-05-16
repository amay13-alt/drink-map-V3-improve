const mockDrinks = [
  {
    id: 1, name: '波霸紅茶拿鐵', name_en: 'Boba Black Tea Latte', category: '拿鐵', price: 65, store: '50嵐', store_en: '50Lan',
    lat: 24.79612, latitude: 24.79612, lng: 120.9758, longitude: 120.9758, rating: 4.5, color: '#FFD700', brand_color: '#FFD700', logo: '/logos/50lan.png',
    feature: '平價經典手搖，經典配料豐富選擇', address: '新竹市東區食品路 150 號', hours: '10:00 - 22:00',
    toppings: [{ name: '波霸', price: 10, name_en: 'Boba', standard_name: '波霸' }]
  },
  {
    id: 2, name: '椰果奶茶', name_en: 'Coconut Jelly Milk Tea', category: '奶茶', price: 50, store: 'CoCo都可', store_en: 'CoCo',
    lat: 24.7965, latitude: 24.7965, lng: 120.9762, longitude: 120.9762, rating: 4.1, color: '#FF8C00', brand_color: '#FF8C00', logo: '/logos/coco.png',
    feature: '活力的代名詞，主打鮮果茶與百香系列', address: '新竹市東區食品路 165 號', hours: '10:00 - 21:30',
    toppings: [{ name: '椰果', price: 10, name_en: 'Coconut Jelly', standard_name: '椰果' }]
  },
  {
    id: 3, name: '燕麥鮮奶茶', name_en: 'Oat Fresh Milk Tea', category: '拿鐵', price: 70, store: '迷客夏', store_en: 'Milksha',
    lat: 24.7968, latitude: 24.7968, lng: 120.9759, longitude: 120.9759, rating: 4.6, color: '#4CAF50', brand_color: '#4CAF50', logo: '/logos/milksha.png',
    feature: '自家綠光牧場鮮乳標竿，手作大甲芋頭首選', address: '新竹市東區食品路 142 號', hours: '10:00 - 22:00',
    toppings: [{ name: '大甲燕麥', price: 15, name_en: 'Oats', standard_name: '燕麥' }]
  },
  {
    id: 4, name: '冰淇淋紅茶', name_en: 'Ice Cream Black Tea', category: '特調', price: 55, store: '清心福全', store_en: 'Chingshin',
    lat: 24.7955, latitude: 24.7955, lng: 120.9752, longitude: 120.9752, rating: 3.9, color: '#006400', brand_color: '#006400', logo: '/logos/chingshin.png',
    feature: '招牌烏龍綠茶與優多系列引領手搖風潮', address: '新竹市東區食品路 180 號', hours: '09:30 - 22:00',
    toppings: [{ name: '香草冰淇淋', price: 20, name_en: 'Vanilla Ice Cream', standard_name: '冰淇淋' }]
  },
  {
    id: 5, name: '布丁奶茶', name_en: 'Pudding Milk Tea', category: '奶茶', price: 65, store: 'MOREiN沫飲', store_en: 'MOREiN',
    lat: 24.7972, latitude: 24.7972, lng: 120.9765, longitude: 120.9765, rating: 4.3, color: '#010101', brand_color: '#010101', logo: '/logos/morein.png',
    feature: '獨家波本香草奶蓋，打造極致綿密層次口感', address: '新竹市東區食品路 138 號', hours: '11:00 - 21:00',
    toppings: [{ name: '統一布丁', price: 15, name_en: 'Pudding', standard_name: '布丁' }]
  },
  {
    id: 6, name: '仙草凍奶茶', name_en: 'Grass Jelly Milk Tea', category: '奶茶', price: 55, store: '清原芋圓', store_en: 'Chingyuan',
    lat: 24.7948, latitude: 24.7948, lng: 120.9748, longitude: 120.9748, rating: 4.2, color: '#4B0082', brand_color: '#4B0082', logo: '/logos/chingyuan.png',
    feature: '九份手工芋圓與手搖茶飲完美結合的甜品專家', address: '新竹市東區食品路 130 號', hours: '10:00 - 22:00',
    toppings: [{ name: '嫩仙草凍', price: 10, name_en: 'Grass Jelly', standard_name: '仙草凍' }]
  },
  {
    id: 7, name: '烤糖蕎麥奶蓋茶', name_en: 'Buckwheat Cream Foam Tea', category: '奶蓋茶', price: 60, store: '大茗本位', store_en: 'Daming',
    lat: 24.7975, latitude: 24.7975, lng: 120.9755, longitude: 120.9755, rating: 4.7, color: '#8B4513', brand_color: '#8B4513', logo: '/logos/daming.png',
    feature: '烤糖蕎麥風靡全台的排隊名店', address: '新竹市東區食品路 172 號', hours: '10:00 - 22:00',
    toppings: [{ name: '芝士奶蓋', price: 20, name_en: 'Cheese Cream Foam', standard_name: '奶蓋' }]
  },
  {
    id: 8, name: '翡翠香橙綠茶', name_en: 'Orange Green Tea', category: '鮮果', price: 60, store: '麻古茶坊', store_en: 'Macu',
    lat: 24.7960, latitude: 24.7960, lng: 120.9745, longitude: 120.9745, rating: 4.4, color: '#FF0000', brand_color: '#FF0000', logo: '/logos/macu.png',
    feature: '芝芝鮮果粒元祖，嚼感滿分的甜品系茶飲', address: '新竹市東區食品路 198 號', hours: '10:00 - 22:00',
    toppings: [{ name: '綠茶凍', price: 10, name_en: 'Tea Jelly', standard_name: '茶凍' }]
  },
  {
    id: 9, name: '水玉烏龍青', name_en: 'Agar Crystal Oolong Tea', category: '原味茶', price: 45, store: '可不可', store_en: 'Kebuke',
    lat: 24.7963, latitude: 24.7963, lng: 120.9751, longitude: 120.9751, rating: 4.3, color: '#002A54', brand_color: '#002A54', logo: '/logos/kebuke.png',
    feature: '經典熟成紅茶專家，引領英倫復古調飲美學', address: '新竹市東區食品路 155 號', hours: '10:00 - 22:00',
    toppings: [{ name: '水玉', price: 10, name_en: 'Agar Boba', standard_name: '寒天晶球' }]
  },
  {
    id: 10, name: '粉角手工鮮奶茶', name_en: 'Tapioca Cube Fresh Milk Tea', category: '拿鐵', price: 65, store: '上宇林', store_en: 'Shangyulin',
    lat: 24.7958, latitude: 24.7958, lng: 120.9769, longitude: 120.9769, rating: 4.4, color: '#D2B48C', brand_color: '#D2B48C', logo: '/logos/shangyulin.png',
    feature: '頂級茶道厚鮮奶茶，手工粉角厚實嚼感首選', address: '新竹市東區食品路 160 號', hours: '10:00 - 21:30',
    toppings: [{ name: '手工粉角', price: 10, name_en: 'Tapioca Cube', standard_name: '粉角' }]
  },
  {
    id: 11, name: '古早味粉粿冬瓜', name_en: 'Jelly Cake White Gourd Tea', category: '特調', price: 45, store: '可不可', store_en: 'Kebuke',
    lat: 24.7963, latitude: 24.7963, lng: 120.9751, longitude: 120.9751, rating: 4.2, color: '#002A54', brand_color: '#002A54', logo: '/logos/kebuke.png',
    feature: '經典熟成紅茶專家，引領英倫復古調飲美學', address: '新竹市東區食品路 155 號', hours: '10:00 - 22:00',
    toppings: [{ name: '古早味粉粿', price: 10, name_en: 'Jelly Cake', standard_name: '粉粿' }]
  },
  {
    id: 12, name: '翡翠百香多多綠', name_en: 'Passion Fruit Yakult Green Tea', category: '鮮果', price: 65, store: 'CoCo都可', store_en: 'CoCo',
    lat: 24.7965, latitude: 24.7965, lng: 120.9762, longitude: 120.9762, rating: 4.3, color: '#FF8C00', brand_color: '#FF8C00', logo: '/logos/coco.png',
    feature: '活力的代名詞，主打鮮果茶與百香系列', address: '新竹市東區食品路 165 號', hours: '10:00 - 21:30',
    toppings: [{ name: '正宗養樂多', price: 10, name_en: 'Yakult', standard_name: '養樂多' }]
  }
];

export default mockDrinks;