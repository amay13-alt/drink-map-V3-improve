// 🚀 喝呵飲料地圖 — 100% 品牌對齊完整配料版假資料 (完全體)

// ==========================================
// 1. 各品牌的完整配料池 (Topping Arrays)
// ==========================================
const toppings50Lan = [
  {"name":"布丁","price":15,"name_en":"Pudding","standard_name":"布丁"},
  {"name":"香草冰淇淋","price":15,"name_en":"Ice Cream","standard_name":"冰淇淋"},
  {"name":"波霸(大珍珠)","price":10,"name_en":"Bubble","standard_name":"波霸"},
  {"name":"椰果","price":10,"name_en":"Coconut Jelly","standard_name":"椰果"},
  {"name":"燕麥","price":10,"name_en":"Oat","standard_name":"燕麥"}
];

const toppingsCoCo = [
  {"name":"仙草","price":10,"name_en":"Grass Jelly","standard_name":"仙草凍"},
  {"name":"布丁","price":10,"name_en":"Pudding","standard_name":"布丁"},
  {"name":"珍珠","price":10,"name_en":"Tapioca Pearl","standard_name":"波霸"},
  {"name":"粉角","price":10,"name_en":"Tapioca Cube","standard_name":"粉角"},
  {"name":"茉香茶凍","price":10,"name_en":"Jasmine Green Jelly","standard_name":"茶凍"},
  {"name":"椰果","price":10,"name_en":"Nata Jelly","standard_name":"椰果"}
];

const toppingsChingshin = [
  {"name":"仙草凍","price":5,"name_en":"Grass Jelly","standard_name":"仙草凍"},
  {"name":"布丁","price":15,"name_en":"Pudding","standard_name":"布丁"},
  {"name":"珍珠","price":10,"name_en":"Bubble","standard_name":"波霸"},
  {"name":"茉綠茶凍","price":10,"name_en":"Jasmine Green Jelly","standard_name":"茶凍"},
  {"name":"椰果","price":10,"name_en":"Coconut Jelly","standard_name":"椰果"}
];

const toppingsMilksha = [
  {"name":"仙草凍","price":10,"name_en":"Grass Jelly","standard_name":"仙草凍"},
  {"name":"珍珠","price":10,"name_en":"Bubble (White Jade)","standard_name":"波霸"},
  {"name":"桂香粉粿","price":15,"name_en":"Osmanthus Jelly Cake","standard_name":"粉粿"},
  {"name":"綠茶凍","price":10,"name_en":"Green Tea Jelly","standard_name":"茶凍"},
  {"name":"脆啵啵球","price":15,"name_en":"Popping Boba","standard_name":"寒天晶球"}
];

const toppingsKebuke = [
  {"name":"白玉","price":10,"name_en":"Bubble (White Jade)","standard_name":"波霸"},
  {"name":"榛果蕎麥凍","price":15,"name_en":"Hazelnut Buckwheat Jelly","standard_name":"茶凍"},
  {"name":"水玉","price":10,"name_en":"Water Jade Pearl","standard_name":"寒天晶球"}
];

const toppingsMorein = [
  {"name":"波本香草奶蓋","price":30,"name_en":"Vanilla Milk Foam","standard_name":"奶蓋"},
  {"name":"蜂蜜珍珠","price":10,"name_en":"Honey Bubble","standard_name":"波霸"},
  {"name":"手作黑糖粉粿","price":15,"name_en":"Brown Sugar Jelly Cake","standard_name":"粉粿"}
];

const toppingsDaming = [
  {"name":"嫩仙草","price":10,"name_en":"Grass Jelly","standard_name":"仙草凍"},
  {"name":"酪梨奶蓋","price":35,"name_en":"Avocado Milk Foam","standard_name":"奶蓋"},
  {"name":"波霸珍珠","price":10,"name_en":"Bubble","standard_name":"波霸"},
  {"name":"咖啡粉粿","price":20,"name_en":"Coffee Jelly","standard_name":"粉粿"},
  {"name":"烤糖蕎麥凍","price":20,"name_en":"Buckwheat Jelly","standard_name":"茶凍"}
];

const toppingsMacu = [
  {"name":"仙草凍","price":10,"name_en":"Grass Jelly","standard_name":"仙草凍"},
  {"name":"芝芝","price":20,"name_en":"Cheese Foam","standard_name":"奶蓋"},
  {"name":"波霸","price":10,"name_en":"Bubble","standard_name":"波霸"},
  {"name":"紅萱粉粿","price":10,"name_en":"Hung Xuan Tea Jelly","standard_name":"粉粿"},
  {"name":"綠茶凍","price":10,"name_en":"Green Tea Jelly","standard_name":"茶凍"},
  {"name":"椰果","price":10,"name_en":"Coconut Jelly","standard_name":"椰果"},
  {"name":"養樂多","price":10,"name_en":"Yakult","standard_name":"養樂多"}
];

const toppingsShangyulin = [
  {"name":"仙草凍","price":10,"name_en":"Grass Jelly","standard_name":"仙草凍"},
  {"name":"布丁","price":15,"name_en":"Pudding","standard_name":"布丁"},
  {"name":"香草冰淇淋","price":20,"name_en":"Ice Cream","standard_name":"冰淇淋"},
  {"name":"珍珠","price":10,"name_en":"Pearl","standard_name":"波霸"},
  {"name":"手工粉角","price":10,"name_en":"Tapioca Cube","standard_name":"粉角"},
  {"name":"黑糖Q粿","price":20,"name_en":"Brown Sugar Jelly","standard_name":"粉粿"},
  {"name":"茉莉綠茶凍","price":10,"name_en":"Jasmine Green Jelly","standard_name":"茶凍"},
  {"name":"椰果","price":10,"name_en":"Coconut Jelly","standard_name":"椰果"},
  {"name":"多多","price":20,"name_en":"Yakult","standard_name":"養樂多"}
];

const toppingsChingyuan = [
  {"name":"仙草","price":10,"name_en":"Grass Jelly","standard_name":"仙草凍"},
  {"name":"珍珠","price":10,"name_en":"Bubble","standard_name":"波霸"},
  {"name":"QQ角","price":20,"name_en":"Tapioca Cube","standard_name":"粉角"},
  {"name":"椰果","price":10,"name_en":"Coconut Jelly","standard_name":"椰果"}
];

// ==========================================
// 2. 各店家的門市地圖與基礎中英文中繼資料
// ==========================================
const storeMeta = {
  '50嵐': { store_en: '50Lan', lat: 24.79715, lng: 120.9760, rating: 2.9, color: '#FFD700', logo: '/logos/50lan.png', feature: '平價大眾款，品項豐富', address: '新竹市東區食品路184號', hours: '10:00 – 22:00', toppings: toppings50Lan },
  'CoCo都可': { store_en: 'CoCo', lat: 24.79698, lng: 120.9759, rating: 4.0, color: '#EF7D1A', logo: '/logos/coco.png', feature: '鮮果茶與奶茶為主', address: '300新竹市東區食品路198號', hours: '10:00 – 21:30', toppings: toppingsCoCo },
  '清心福全': { store_en: 'Chingshin', lat: 24.79588, lng: 120.9745, rating: 1.7, color: '#005743', logo: '/logos/chingshin.png', feature: '優多系列為招牌', address: '300新竹市東區食品路231號', hours: '10:00 – 21:30', toppings: toppingsChingshin },
  '迷客夏': { store_en: 'Milksha', lat: 24.79676, lng: 120.9759, rating: 3.8, color: '#83A731', logo: '/logos/milksha.png', feature: '鮮奶系列為主打', address: '300新竹市東區食品路175號', hours: '11:00 – 20:45', toppings: toppingsMilksha },
  '可不可': { store_en: 'Kebuke', store_en: 'KEBUKE', lat: 24.79657, lng: 120.9757, rating: 4.2, color: '#003E52', logo: '/logos/kebuke.png', feature: '熟成紅茶專門店', address: '300新竹市東區食品路187號', hours: '10:00 – 22:00', toppings: toppingsKebuke },
  'MOREiN沫飲': { store_en: 'MOREiN', lat: 24.79718, lng: 120.9762, rating: 4.7, color: '#010101', logo: '/logos/morein.png', feature: '波本香草奶蓋為特色', address: '300新竹市東區食品路182號', hours: '10:00 – 21:00', toppings: toppingsMorein },
  '大茗本位': { store_en: 'Daming', lat: 24.79691, lng: 120.9761, rating: 3.6, color: '#B06651', logo: '/logos/daming.png', feature: '酪梨奶蓋為招牌', address: '300新竹市東區食品路167號', hours: '10:00 – 21:00', toppings: toppingsDaming },
  '麻古茶坊': { store_en: 'MACU', lat: 24.79795, lng: 120.9771, rating: 3.9, color: '#E61919', logo: '/logos/macu.png', feature: '果粒茶創始品牌', address: '300新竹市東區食品路130號', hours: '10:00 – 22:00', toppings: toppingsMacu },
  '上宇林': { store_en: 'Shangyulin', lat: 24.79655, lng: 120.9755, rating: 3.7, color: '#765232', logo: '/logos/shangyulin.png', feature: '雪浮奶蓋與原味茶為特色', address: '300新竹市東區食品路189號', hours: '10:00 – 22:00', toppings: toppingsShangyulin },
  '清原芋圓': { store_en: 'Chingyuan', lat: 24.79803, lng: 120.9773, rating: 4.1, color: '#A778A6', logo: '/logos/chingyuan.png', feature: '芋頭甜品與飲品混合', address: '300新竹市東區食品路124號', hours: '09:00 – 21:00', toppings: toppingsChingyuan }
};

// ==========================================
// 3. 全量飲品資料表 (包含妳列出的所有品項)
// ==========================================
const rawDrinks = [
  // 50嵐 (36筆)
  { name: '茉莉綠茶', name_en: 'Jasmine Green Tea', category: '原味茶', price: 35, store: '50嵐' },
  { name: '阿薩姆紅茶', name_en: 'Assam Black Tea', category: '原味茶', price: 35, store: '50嵐' },
  { name: '四季春青茶', name_en: 'Four Season Tea', category: '原味茶', price: 35, store: '50嵐' },
  { name: '黃金烏龍', name_en: 'OStandard Oolong Tea', category: '原味茶', price: 35, store: '50嵐' },
  { name: '微檸檬紅茶', name_en: 'Light Lemon Black Tea', category: '鮮果', price: 45, store: '50嵐' },
  { name: '微檸檬青茶', name_en: 'Light Lemon Four Season Tea', category: '鮮果', price: 45, store: '50嵐' },
  { name: '檸檬綠茶', name_en: 'Lemon Green Tea', category: '鮮果', price: 55, store: '50嵐' },
  { name: '檸檬青茶', name_en: 'Lemon Four Season Tea', category: '鮮果', price: 55, store: '50嵐' },
  { name: '梅の綠', name_en: 'Plum Green Tea', category: '鮮果', price: 55, store: '50嵐' },
  { name: '8冰綠', name_en: 'No.8 Green Tea', category: '鮮果', price: 55, store: '50嵐' },
  { name: '情人茶', name_en: "Lover's Green Tea", category: '鮮果', price: 55, store: '50嵐' },
  { name: '柚子紅茶', name_en: 'Yuzu Black Tea', category: '鮮果', price: 55, store: '50嵐' },
  { name: '柚子綠茶', name_en: 'Yuzu Green Tea', category: '鮮果', price: 55, store: '50嵐' },
  { name: '柚子青茶', name_en: 'Yuzu Four Season Tea', category: '鮮果', price: 55, store: '50嵐' },
  { name: '柚子烏龍', name_en: 'Yuzu Oolong Tea', category: '鮮果', price: 55, store: '50嵐' },
  { name: '旺來紅茶', name_en: 'Pineapple Black Tea', category: '鮮果', price: 55, store: '50嵐' },
  { name: '旺來青茶', name_en: 'Pineapple Four Season Tea', category: '鮮果', price: 55, store: '50嵐' },
  { name: '冰淇淋紅茶', name_en: 'Ice Cream Black Tea', category: '特調', price: 55, store: '50嵐' },
  { name: '奶茶', name_en: 'Milk Tea', category: '奶茶', price: 55, store: '50嵐' },
  { name: '奶綠', name_en: 'Green Milk Tea', category: '奶茶', price: 55, store: '50嵐' },
  { name: '烏龍奶', name_en: 'Oolong Milk Tea', category: '奶茶', price: 55, store: '50嵐' },
  { name: '冰淇淋奶茶', name_en: 'Ice Cream Milk Tea', category: '奶茶', price: 65, store: '50嵐' },
  { name: '阿華田', name_en: 'Ovaltine Cocoa', category: '奶茶', price: 60, store: '50嵐' },
  { name: '可可芭蕾', name_en: 'Cacao Barry Premium', category: '奶茶', price: 65, store: '50嵐' },
  { name: '紅茶拿鐵', name_en: 'Black Tea Latte', category: '拿鐵', price: 65, store: '50嵐' },
  { name: '綠茶拿鐵', name_en: 'Green Tea Latte', category: '拿鐵', price: 65, store: '50嵐' },
  { name: '烏龍拿鐵', name_en: 'Oolong Tea Latte', category: '拿鐵', price: 65, store: '50嵐' },
  { name: '冰淇淋紅茶拿鐵', name_en: 'Ice Cream Black Tea Latte', category: '拿鐵', price: 75, store: '50嵐' },
  { name: '阿華田拿鐵', name_en: 'Ovaltine Cocoa Latte', category: '拿鐵', price: 75, store: '50嵐' },
  { name: '可可芭蕾拿鐵', name_en: 'Cacao Barry Premium Latte', category: '拿鐵', price: 75, store: '50嵐' },
  { name: '柚子茶', name_en: 'Yuzu Juice', category: '鮮果', price: 55, store: '50嵐' },
  { name: '8冰茶', name_en: 'No.8 Juice', category: '鮮果', price: 55, store: '50嵐' },
  { name: '檸檬汁', name_en: 'Pure Lemon Juice', category: '鮮果', price: 65, store: '50嵐' },
  { name: '金桔檸檬', name_en: 'Kumquat Lemon Juice', category: '鮮果', price: 65, store: '50嵐' },
  { name: '檸檬梅汁', name_en: 'Lemon Plum Juice', category: '鮮果', price: 65, store: '50嵐' },
  { name: '檸檬多多', name_en: 'Lemon Yakult Juice', category: '鮮果', price: 75, store: '50嵐' },

  // CoCo都可 (21筆)
  { name: '鮮榨蘋果百香', name_en: 'Fresh Apple Passion Fruit Tea', category: '鮮果', price: 65, store: 'CoCo都可' },
  { name: '百香果綠茶', name_en: 'Passion Fruit Green Tea', category: '鮮果', price: 50, store: 'CoCo都可' },
  { name: '芒果綠茶', name_en: 'Mango Green Tea', category: '鮮果', price: 50, store: 'CoCo都可' },
  { name: '金桔檸檬', name_en: 'Kumquat Lemon Drink', category: '鮮果', price: 65, store: 'CoCo都可' },
  { name: '檸檬奇遇桔', name_en: 'Kumquat Lemon With Chia Seed', category: '鮮果', price: 55, store: 'CoCo都可' },
  { name: '檸檬紅茶', name_en: 'Lemon Black Tea', category: '鮮果', price: 55, store: 'CoCo都可' },
  { name: '檸檬綠茶', name_en: 'Lemon Green Tea', category: '鮮果', price: 55, store: 'CoCo都可' },
  { name: '綠豆沙', name_en: 'Mung Bean Smoothie', category: '特調', price: 60, store: 'CoCo都可' },
  { name: '綠豆沙牛奶', name_en: 'Mung Bean Milk Smoothie', category: '特調', price: 75, store: 'CoCo都可' },
  { name: '阿薩姆奶茶', name_en: 'Assam Milk Tea', category: '奶茶', price: 50, store: 'CoCo都可' },
  { name: '茉香奶綠', name_en: 'Jasmine Milk Tea', category: '奶茶', price: 50, store: 'CoCo都可' },
  { name: '四季春青茶', name_en: 'Four Season Tea', category: '原味茶', price: 35, store: 'CoCo都可' },
  { name: '手採紅茶', name_en: 'Black Tea', category: '原味茶', price: 35, store: 'CoCo都可' },
  { name: '茉莉綠茶', name_en: 'Jasmine Green Tea', category: '原味茶', price: 35, store: 'CoCo都可' },
  { name: '琥珀烏龍', name_en: 'Oolong Tea', category: '原味茶', price: 35, store: 'CoCo都可' },
  { name: '蕎麥冬瓜露', name_en: 'Buckwheat Winter Melon Tea', category: '特調', price: 50, store: 'CoCo都可' },
  { name: '蕎麥茶', name_en: 'Buckwheat Tea', category: '原味茶', price: 40, store: 'CoCo都可' },
  { name: '手做冬瓜露', name_en: 'Winter Melon Drink', category: '原味茶', price: 35, store: 'CoCo都可' },
  { name: '英式鮮奶茶', name_en: 'Black Tea Latte', category: '拿鐵', price: 70, store: 'CoCo都可' },
  { name: '日焙鮮奶茶', name_en: 'Roasted Green Tea Latte', category: '拿鐵', price: 75, store: 'CoCo都可' },
  { name: '28茉輕乳茶', name_en: '28 Jasmine Milk Tea', category: '拿鐵', price: 60, store: 'CoCo都可' },

  // 清心福全 (37筆)
  { name: '優多紅茶', name_en: 'Yogurt Black Tea', category: '特調', price: 55, store: '清心福全' },
  { name: '優多青茶', name_en: 'Yogurt Four Seasons Tea', category: '特調', price: 55, store: '清心福全' },
  { name: '優多百香果', name_en: 'Yogurt Passion Fruit', category: '特調', price: 70, store: '清心福全' },
  { name: '優多葡萄柚', name_en: 'Yogurt Grapefruit', category: '特調', price: 70, store: '清心福全' },
  { name: '優多檸檬', name_en: 'Yogurt Lemon', category: '特調', price: 70, store: '清心福全' },
  { name: '優多綠茶', name_en: 'Yogurt Green Tea', category: '特調', price: 55, store: '清心福全' },
  { name: '蘆薈蜂蜜檸檬', name_en: 'Honey Lemon Aloe', category: '鮮果', price: 90, store: '清心福全' },
  { name: '蜂蜜檸檬', name_en: 'Honey Lemon', category: '鮮果', price: 75, store: '清心福全' },
  { name: '金桔檸檬', name_en: 'Kumquat Lemon', category: '鮮果', price: 70, store: '清心福全' },
  { name: '檸檬紅茶', name_en: 'Lemon Black Tea', category: '鮮果', price: 65, store: '清心福全' },
  { name: '檸檬綠茶', name_en: 'Lemon Green Tea', category: '鮮果', price: 65, store: '清心福全' },
  { name: '梅子綠茶', name_en: 'Plum Green Tea', category: '鮮果', price: 55, store: '清心福全' },
  { name: '冰淇淋紅茶', name_en: 'Ice Cream Black Tea', category: '特調', price: 60, store: '清心福全' },
  { name: '冰淇淋奶茶', name_en: 'Ice Cream Milk Tea', category: '特調', price: 75, store: '清心福全' },
  { name: '蘋果醋', name_en: 'Apple Iced Vinegar', category: '特調', price: 55, store: '清心福全' },
  { name: '蘋果醋紅茶', name_en: 'Apple Iced Vinegar Black Tea', category: '特調', price: 60, store: '清心福全' },
  { name: '蜂蜜蘋果醋', name_en: 'Honey Apple Iced Vinegar', category: '特調', price: 65, store: '清心福全' },
  { name: '藍莓醋', name_en: 'Blueberry Vinegar Drink', category: '特調', price: 60, store: '清心福全' },
  { name: '蜂蜜藍莓醋', name_en: 'Honey Blueberry Vinegar', category: '特調', price: 70, store: '清心福全' },
  { name: '冬瓜茶', name_en: 'Winter Melon Tea', category: '原味茶', price: 40, store: '清心福全' },
  { name: '冬瓜檸檬', name_en: 'Winter Melon Lemon Tea', category: '鮮果', price: 60, store: '清心福全' },
  { name: '冬瓜菁茶', name_en: 'Winter Melon Green Tea', category: '特調', price: 45, store: '清心福全' },
  { name: '百香果綠茶', name_en: 'Passion Fruit Green Tea', category: '鮮果', price: 60, store: '清心福全' },
  { name: '錫蘭奶紅', name_en: 'Ceylon Black Milk Tea', category: '奶茶', price: 60, store: '清心福全' },
  { name: '烏龍奶茶', name_en: 'Oolong Milk Tea', category: '奶茶', price: 60, store: '清心福全' },
  { name: '特級奶綠', name_en: 'Premium Green Milk Tea', category: '奶茶', price: 60, store: '清心福全' },
  { name: '極品奶菁', name_en: 'Premium Oolong Milk Tea', category: '奶茶', price: 60, store: '清心福全' },
  { name: '烏龍奶菁', name_en: 'Oolong Green Milk Tea', category: '奶茶', price: 60, store: '清心福全' },
  { name: '四季奶茶', name_en: 'Four Seasons Oolong Milk Tea', category: '奶茶', price: 60, store: '清心福全' },
  { name: '鮮奶茶', name_en: 'Black Tea Latte', category: '拿鐵', price: 70, store: '清心福全' },
  { name: '鮮奶冬瓜', name_en: 'Winter Melon Milk Tea', category: '拿鐵', price: 65, store: '清心福全' },
  { name: '頂級可可拿鐵', name_en: 'Premium Chocolate Latte', category: '拿鐵', price: 85, store: '清心福全' },
  { name: '極品菁茶', name_en: 'Premium Oolong Tea', category: '原味茶', price: 35, store: '清心福全' },
  { name: '錫蘭紅茶', name_en: 'Ceylon Black Tea', category: '原味茶', price: 35, store: '清心福全' },
  { name: '特級綠茶', name_en: 'Finest Green Tea', category: '原味茶', price: 35, store: '清心福全' },
  { name: '原鄉四季', name_en: 'Four Seasons Oolong Tea', category: '原味茶', price: 35, store: '清心福全' },
  { name: '特遠普洱', name_en: 'Finest Puer Tea', category: '原味茶', price: 35, store: '清心福全' },

  // 迷客夏 (31筆)
  { name: '娜杯紅茶拿鐵', name_en: 'Aged Black Tea Latte', category: '拿鐵', price: 70, store: '迷客夏' },
  { name: '伯爵紅茶拿鐵', name_en: 'Earl Grey Tea Latte', category: '拿鐵', price: 65, store: '迷客夏' },
  { name: '大正紅茶拿鐵', name_en: 'Taisho Black Tea Latte', category: '拿鐵', price: 65, store: '迷客夏' },
  { name: '琥珀烏龍拿鐵', name_en: 'Oolong Tea Latte', category: '拿鐵', price: 65, store: '迷客夏' },
  { name: '茶香綠茶拿鐵', name_en: 'Green Tea Latte', category: '拿鐵', price: 65, store: '迷客夏' },
  { name: '原片青茶拿鐵', name_en: 'Oolong Tea Latte', category: '拿鐵', price: 65, store: '迷客夏' },
  { name: '伯爵可可拿鐵', name_en: 'Earl Grey Cacao Latte', category: '拿鐵', price: 85, store: '迷客夏' },
  { name: '娜杯紅茶', name_en: 'Naber Black Tea', category: '原味茶', price: 45, store: '迷客夏' },
  { name: '伯爵紅茶', name_en: 'Earl Grey Black Tea', category: '原味茶', price: 40, store: '迷客夏' },
  { name: '大正紅茶', name_en: 'Taisho Black Tea', category: '原味茶', price: 40, store: '迷客夏' },
  { name: '原片初露青茶', name_en: 'Oolong Tea', category: '原味茶', price: 40, store: '迷客夏' },
  { name: '茉莉原淬綠茶', name_en: 'Jasmine Green Tea', category: '原味茶', price: 40, store: '迷客夏' },
  { name: '琥珀高峰烏龍', name_en: 'Amber Oolong Tea', category: '原味茶', price: 40, store: '迷客夏' },
  { name: '芋頭鮮奶', name_en: 'Taro Milk Smoothie', category: '特調', price: 90, store: '迷客夏' },
  { name: '法芙娜可可鮮奶', name_en: 'Valrhona Cacao Milk', category: '拿鐵', price: 100, store: '迷客夏' },
  { name: '輕纖蕎麥茶', name_en: 'Buckwheat Tea', category: '原味茶', price: 45, store: '迷客夏' },
  { name: '輕纖蕎麥拿鐵', name_en: 'Buckwheat Tea Latte', category: '拿鐵', price: 75, store: '迷客夏' },
  { name: '焙香決明大麥', name_en: 'Roasted Barley Tea', category: '原味茶', price: 35, store: '迷客夏' },
  { name: '焙香大麥拿鐵', name_en: 'Roasted Barley Latte', category: '拿鐵', price: 65, store: '迷客夏' },
  { name: '原鄉冬瓜茶', name_en: 'Winter Melon Tea', category: '原味茶', price: 40, store: '迷客夏' },
  { name: '冬瓜檸檬', name_en: 'Winter Melon Lemon', category: '鮮果', price: 55, store: '迷客夏' },
  { name: '冬瓜麥茶', name_en: 'Winter Melon Barley Tea', category: '鮮果', price: 55, store: '迷客夏' },
  { name: '熟醸青梅綠', name_en: 'Pickled Plum Green Tea', category: '鮮果', price: 60, store: '迷客夏' },
  { name: '熟醸青梅檸', name_en: 'Pickled Plum Lemon Tea', category: '鮮果', price: 60, store: '迷客夏' },
  { name: '白甘蔗青茶', name_en: 'Sugarcane Oolong Tea', category: '鮮果', price: 75, store: '迷客夏' },
  { name: '冬瓜青茶', name_en: 'Winter Melon Oolong Tea', category: '鮮果', price: 55, store: '迷客夏' },
  { name: '柳丁綠茶', name_en: 'Orange Green Tea', category: '鮮果', price: 70, store: '迷客夏' },
  { name: '柳丁青茶', name_en: 'Orange Oolong Tea', category: '鮮果', price: 70, store: '迷客夏' },
  { name: '青檸香茶', name_en: 'Lime Tea', category: '鮮果', price: 70, store: '迷客夏' },
  { name: '香柚綠茶', name_en: 'Grapefruit Green Tea', category: '鮮果', price: 60, store: '迷客夏' },
  { name: '冰萃柳丁', name_en: 'Cold Brew Orange', category: '鮮果', price: 65, store: '迷客夏' },

  // 可不可 (31筆)
  { name: '熟成紅茶', name_en: 'Aged Black Tea', category: '原味茶', price: 35, store: '可不可' },
  { name: '麗春紅茶', name_en: 'Rose Black Tea', category: '原味茶', price: 35, store: '可不可' },
  { name: '胭脂紅茶', name_en: 'Carmine Black Tea', category: '原味茶', price: 45, store: '可不可' },
  { name: '半熟烏龍', name_en: 'Semi-Ripe Oolong', category: '原味茶', price: 40, store: '可不可' },
  { name: '春芽綠茶', name_en: 'Spring Bud Green Tea', category: '原味茶', price: 35, store: '可不可' },
  { name: '雪花冷露', name_en: 'Snowflake Winter Melon', category: '原味茶', price: 35, store: '可不可' },
  { name: '熟成冷露', name_en: 'Aged Winter Melon', category: '原味茶', price: 40, store: '可不可' },
  { name: '春芽冷露', name_en: 'Spring Bud Winter Melon', category: '原味茶', price: 40, store: '可不可' },
  { name: '半熟烏龍冷露', name_en: 'Semi-Ripe Oolong Winter Melon', category: '原味茶', price: 45, store: '可不可' },
  { name: '胭脂冷露', name_en: 'Carmine Winter Melon', category: '原味茶', price: 45, store: '可不可' },
  { name: '檸檬冷露', name_en: 'Lemon Winter Melon', category: '原味茶', price: 55, store: '可不可' },
  { name: '熟成奶茶', name_en: 'Aged Milk Tea', category: '原味茶', price: 55, store: '可不可' },
  { name: '胭脂奶茶', name_en: 'Carmine Milk Tea', category: '原味茶', price: 60, store: '可不可' },
  { name: '熟成歐蕾', name_en: 'Aged Milk Tea Latte', category: '原味茶', price: 65, store: '可不可' },
  { name: '冷露歐蕾', name_en: 'Winter Melon Milk Tea Latte', category: '原味茶', price: 65, store: '可不可' },
  { name: '金蜜歐蕾', name_en: 'Gold Honey Milk Tea Latte', category: '原味茶', price: 70, store: '可不可' },
  { name: '胭脂歐蕾', name_en: 'Carmine Milk Tea Latte', category: '原味茶', price: 69, store: '可不可' },
  { name: '熟成榛果歐蕾', name_en: 'Aged Hazelnut Milk Tea Latte', category: '原味茶', price: 70, store: '可不可' },
  { name: '半熟烏龍歐蕾', name_en: 'Semi-Ripe Oolong Latte', category: '原味茶', price: 69, store: '可不可' },
  { name: '半熟烏龍厚乳', name_en: 'Semi-Ripe Oolong Heavy Milk Latte', category: '原味茶', price: 69, store: '可不可' },
  { name: '熟檸紅茶', name_en: 'Aged Lemon Black Tea', category: '原味茶', price: 50, store: '可不可' },
  { name: '春檸綠茶', name_en: 'Spring Lemon Green Tea', category: '原味茶', price: 50, store: '可不可' },
  { name: '春梅冰茶', name_en: 'Spring Plum Iced Tea', category: '原味茶', price: 55, store: '可不可' },
  { name: '太妃熟成', name_en: 'Toffee Aged Tea', category: '原味茶', price: 50, store: '可不可' },
  { name: '金蜜熟成', name_en: 'Gold Honey Aged Tea', category: '原味茶', price: 58, store: '可不可' },
  { name: '輕纖穀奈茶', name_en: 'Grain Tea', category: '原味茶', price: 45, store: '可不可' },
  { name: '穀奈冷露', name_en: 'Grain Winter Melon Tea', category: '原味茶', price: 50, store: '可不可' },
  { name: '穀奈歐蕾', name_en: 'Grain Milk Tea Latte', category: '原味茶', price: 69, store: '可不可' },
  { name: '金蜜檸檬', name_en: 'Gold Honey Lemon Tea', category: '原味茶', price: 58, store: '可不可' },
  { name: '雪藏紅茶', name_en: 'Ice Cream Black Tea', category: '原味茶', price: 60, store: '可不可' },
  { name: '雪藏奶茶', name_en: 'Ice Cream Milk Tea', category: '原味茶', price: 69, store: '可不可' },

  // MOREiN沫飲 (30筆)
  { name: '四季青茶', name_en: 'Four Seasons Tea', category: '原味茶', price: 35, store: 'MOREiN沫飲' },
  { name: '黃金蕎麥', name_en: 'Buckwheat Tea', category: '原味茶', price: 40, store: 'MOREiN沫飲' },
  { name: '舞鶴紅茶', name_en: 'Honey Flavored Black Tea', category: '原味茶', price: 40, store: 'MOREiN沫飲' },
  { name: '茉綠茶', name_en: 'Jasmine Green Tea', category: '原味茶', price: 35, store: 'MOREiN沫飲' },
  { name: '肯亞紅茶', name_en: 'Kenya Black Tea', category: '原味茶', price: 35, store: 'MOREiN沫飲' },
  { name: '嵐烏龍', name_en: 'Oolong Tea', category: '原味茶', price: 35, store: 'MOREiN沫飲' },
  { name: '香韻青茶', name_en: 'Gardenia Four Seasons Green Tea', category: '原味茶', price: 40, store: 'MOREiN沫飲' },
  { name: '盧哈娜拿鐵', name_en: 'Black Tea Latte', category: '拿鐵', price: 65, store: 'MOREiN沫飲' },
  { name: '茉香拿鐵', name_en: 'Green Tea Latte', category: '拿鐵', price: 65, store: 'MOREiN沫飲' },
  { name: '烏龍拿鐵', name_en: 'Oolong Tea Latte', category: '拿鐵', price: 65, store: 'MOREiN沫飲' },
  { name: '黃金蕎麥拿鐵', name_en: 'Buckwheat Tea Latte', category: '拿鐵', price: 70, store: 'MOREiN沫飲' },
  { name: '舞鶴紅茶拿鐵', name_en: 'Honey Flavored Black Tea Latte', category: '拿鐵', price: 70, store: 'MOREiN沫飲' },
  { name: '黑焦拿鐵', name_en: 'Caramel Coffee Tea Latte', category: '拿鐵', price: 70, store: 'MOREiN沫飲' },
  { name: '盧哈娜奶茶', name_en: 'Milk Tea', category: '奶茶', price: 55, store: 'MOREiN沫飲' },
  { name: '茉香奶茶', name_en: 'Green Milk Tea', category: '奶茶', price: 55, store: 'MOREiN沫飲' },
  { name: '烏龍奶茶', name_en: 'Oolong Milk Tea', category: '奶茶', price: 55, store: 'MOREiN沫飲' },
  { name: '黃金蕎麥奶茶', name_en: 'Buckwheat Milk Tea', category: '奶茶', price: 60, store: 'MOREiN沫飲' },
  { name: '舞鶴奶茶', name_en: 'Honey Flavored Milk Tea', category: '奶茶', price: 60, store: 'MOREiN沫飲' },
  { name: '香韻青蘋', name_en: 'Apple Taiwanese Ching Tea', category: '鮮果', price: 69, store: 'MOREiN沫飲' },
  { name: '青森蜜桃烏龍', name_en: 'Apple Peach Oolong Tea', category: '鮮果', price: 75, store: 'MOREiN沫飲' },
  { name: '雙柚熱烏龍', name_en: 'Double Pomelo Oolong Tea', category: '鮮果', price: 65, store: 'MOREiN沫飲' },
  { name: '香橙翡翠綠', name_en: 'Orange Green Tea', category: '鮮果', price: 65, store: 'MOREiN沫飲' },
  { name: '甘蔗四季青', name_en: 'Sugar Cane Four Seasons Tea', category: '鮮果', price: 65, store: 'MOREiN沫飲' },
  { name: '舞鶴焦糖燉奶', name_en: 'Panna Cotta Honey Flavored Black Tea', category: '鮮果', price: 60, store: 'MOREiN沫飲' },
  { name: '手工冬瓜露', name_en: 'Winter Melon Tea', category: '鮮果', price: 35, store: 'MOREiN沫飲' },
  { name: '黃金蕎麥冬露', name_en: 'Winter Melon Buckwheat Tea', category: '鮮果', price: 45, store: 'MOREiN沫飲' },
  { name: '香韻冬露', name_en: 'Winter Melon Gardenia Four Seasons Tea', category: '鮮果', price: 45, store: 'MOREiN沫飲' },
  { name: '冬露紅茶', name_en: 'Winter Melon Black Tea', category: '鮮果', price: 40, store: 'MOREiN沫飲' },
  { name: '冬露青茶', name_en: 'Winter Melon Four Seasons Tea', category: '鮮果', price: 40, store: 'MOREiN沫飲' },
  { name: '鮮檸冬露', name_en: 'Lemon Winter Melon Tea', category: '鮮果', price: 55, store: 'MOREiN沫飲' },

  // 大茗本位 (26筆)
  { name: '玉露青茶', name_en: 'Taiwanese Ching Tea', category: '原味茶', price: 40, store: '大茗本位' },
  { name: '桂花青茶', name_en: 'Osmanthus Ching Tea', category: '原味茶', price: 45, store: '大茗本位' },
  { name: '炭燒青茶', name_en: 'Oolong Tea', category: '原味茶', price: 40, store: '大茗本位' },
  { name: '翡翠綠茶', name_en: 'Jasmine Green Tea', category: '原味茶', price: 40, store: '大茗本位' },
  { name: '紅玉紅茶', name_en: 'Taiwanese Black Tea', category: '原味茶', price: 40, store: '大茗本位' },
  { name: '御品冬瓜露', name_en: 'Winter Melon Drink', category: '原味茶', price: 40, store: '大茗本位' },
  { name: '熟成油切蕎麥', name_en: 'Buckwheat Tea', category: '原味茶', price: 40, store: '大茗本位' },
  { name: '冷萃東方美人', name_en: 'Cold Brew Oriental Beauty Tea', category: '原味茶', price: 59, store: '大茗本位' },
  { name: '冷萃半熟金萱', name_en: 'Cold Brew Jin Xuan Tea', category: '原味茶', price: 59, store: '大茗本位' },
  { name: '紅茶拿鐵', name_en: 'Black Tea Latte', category: '拿鐵', price: 70, store: '大茗本位' },
  { name: '翡翠拿鐵', name_en: 'Jasmine Green Tea Latte', category: '拿鐵', price: 70, store: '大茗本位' },
  { name: '鐵觀音拿鐵', name_en: 'Oolong Tea Latte', category: '拿鐵', price: 70, store: '大茗本位' },
  { name: '玉露奶青', name_en: 'Taiwanese Ching Milk Tea', category: '拿鐵', price: 65, store: '大茗本位' },
  { name: '桂花奶青', name_en: 'Osmanthus Ching Milk Tea', category: '拿鐵', price: 65, store: '大茗本位' },
  { name: '懷舊經典奶茶', name_en: 'Milk Tea', category: '拿鐵', price: 60, store: '大茗本位' },
  { name: '翡翠奶綠', name_en: 'Green Milk Tea', category: '拿鐵', price: 60, store: '大茗本位' },
  { name: '鐵觀音奶茶', name_en: 'Oolong Milk Tea', category: '拿鐵', price: 60, store: '大茗本位' },
  { name: '熟成蕎麥奶茶', name_en: 'Buckwheat Milk Tea', category: '拿鐵', price: 65, store: '大茗本位' },
  { name: '蘋果玉露青', name_en: 'Apple Taiwanese Ching Tea', category: '拿鐵', price: 70, store: '大茗本位' },
  { name: '老奶奶的鳳梨田', name_en: 'Pineapple Juice Taiwanese Ching Tea', category: '拿鐵', price: 70, store: '大茗本位' },
  { name: '甘蔗玉露青', name_en: 'Sugar Cane Taiwanese Ching Tea', category: '拿鐵', price: 65, store: '大茗本位' },
  { name: '冬瓜玉露青', name_en: 'Winter Melon Taiwanese Ching Tea', category: '拿鐵', price: 50, store: '大茗本位' },
  { name: '纖檸冬瓜露', name_en: 'Lemon Winter Melon Drink', category: '拿鐵', price: 55, store: '大茗本位' },
  { name: '翡翠多多青', name_en: 'Yakult Jasmine Green Tea', category: '拿鐵', price: 60, store: '大茗本位' },
  { name: '檸檬桂花青', name_en: 'Lemon Osmanthus Ching Tea', category: '拿鐵', price: 69, store: '大茗本位' },
  { name: '柳橙翡翠青', name_en: 'Orange Jasmine Green Tea', category: '拿鐵', price: 70, store: '大茗本位' },

  // 麻古茶坊 (19筆)
  { name: '橙香紅萱', name_en: 'Orange With Red Ooling Tea', category: '鮮果', price: 75, store: '麻古茶坊' },
  { name: '柚香紅萱', name_en: 'Grapefruit With Red Ooling Tea', category: '鮮果', price: 75, store: '麻古茶坊' },
  { name: '百香綠茶', name_en: 'Passion Fruit Green Tea', category: '鮮果', price: 65, store: '麻古茶坊' },
  { name: '翡翠柳橙', name_en: 'Orange Jasmine Green Tea', category: '鮮果', price: 70, store: '麻古茶坊' },
  { name: '冰萃檸檬', name_en: 'Lemonade', category: '鮮果', price: 55, store: '麻古茶坊' },
  { name: '蜂蜜檸檬', name_en: 'Honey Lemonade', category: '鮮果', price: 65, store: '麻古茶坊' },
  { name: '柚香翡翠茶', name_en: 'Grapefruit Jasmine Green Tea', category: '鮮果', price: 70, store: '麻古茶坊' },
  { name: '紅萱烏龍', name_en: 'Red Oolong Tea', category: '原味茶', price: 45, store: '麻古茶坊' },
  { name: '高山金萱', name_en: 'Alishan Jinhsuan Tea', category: '原味茶', price: 40, store: '麻古茶坊' },
  { name: '翡翠綠茶', name_en: 'Green Tea', category: '原味茶', price: 40, store: '麻古茶坊' },
  { name: '錫蘭紅茶', name_en: 'Ceylon Black Tea', category: '原味茶', price: 40, store: '麻古茶坊' },
  { name: '蜜桃紅茶', name_en: 'Peach Black Tea', category: '原味茶', price: 45, store: '麻古茶坊' },
  { name: '錫蘭奶茶', name_en: 'Ceylon Milk Tea', category: '奶茶', price: 55, store: '麻古茶坊' },
  { name: '玫瑰奶茶', name_en: 'Rose Black Tea Latte', category: '奶茶', price: 65, store: '麻古茶坊' },
  { name: '阿華田', name_en: 'Ovaltine', category: '奶茶', price: 60, store: '麻古茶坊' },
  { name: '蕎麥綠寶石', name_en: 'Emerald Buckwheat Tea', category: '原味茶', price: 45, store: '麻古茶坊' },
  { name: '紅茶拿鐵', name_en: 'Black Tea Latte', category: '拿鐵', price: 70, store: '麻古茶坊' },
  { name: '阿華田拿鐵', name_en: 'Ovaltine Latte', category: '拿鐵', price: 70, store: '麻古茶坊' },
  { name: '玫瑰紅茶拿鐵', name_en: 'Rose Black Tea Latte', category: '拿鐵', price: 75, store: '麻古茶坊' },

  // 上宇林 (44筆)
  { name: '上宇林青茶', name_en: 'Highland Tea', category: '原味茶', price: 35, store: '上宇林' },
  { name: '上宇林紅茶', name_en: 'Black Tea', category: '原味茶', price: 35, store: '上宇林' },
  { name: '三窨花綠茶', name_en: 'Green Tea', category: '原味茶', price: 35, store: '上宇林' },
  { name: '蟲蝕烏龍茶', name_en: 'Oolong Tea', category: '原味茶', price: 35, store: '上宇林' },
  { name: '東方美人', name_en: 'Oriental Beauty Tea', category: '原味茶', price: 35, store: '上宇林' },
  { name: '紅龍茗茶', name_en: 'Oolong Black Tea', category: '原味茶', price: 35, store: '上宇林' },
  { name: '綠龍茗茶', name_en: 'Oolong Green Tea', category: '原味茶', price: 35, store: '上宇林' },
  { name: '青龍茗茶', name_en: 'Oolong Highland Tea', category: '原味茶', price: 35, store: '上宇林' },
  { name: '雪浮奶紅茶', name_en: 'Black Tea with Cheese Foam', category: '奶蓋茶', price: 60, store: '上宇林' },
  { name: '雪浮奶綠茶', name_en: 'Green Tea with Cheese Foam', category: '奶蓋茶', price: 60, store: '上宇林' },
  { name: '雪浮奶青茶', name_en: 'Highland Tea with Cheese Foam', category: '奶蓋茶', price: 60, store: '上宇林' },
  { name: '雪浮奶烏龍茶', name_en: 'Oolong Tea with Cheese Foam', category: '奶蓋茶', price: 60, store: '上宇林' },
  { name: '雪浮奶美人', name_en: 'Oriental Beauty Tea with Cheese Foam', category: '奶蓋茶', price: 60, store: '上宇林' },
  { name: '鼎極鮮奶茶', name_en: 'Signature Milk Tea', category: '拿鐵', price: 60, store: '上宇林' },
  { name: '紅龍鮮奶茶', name_en: 'Oolong Milk Tea', category: '拿鐵', price: 60, store: '上宇林' },
  { name: '鐵觀音鮮奶茶', name_en: 'Iron Guanyin Milk Tea', category: '拿鐵', price: 60, store: '上宇林' },
  { name: '鮮奶綠茶', name_en: 'Green Milk Tea', category: '拿鐵', price: 60, store: '上宇林' },
  { name: '鮮奶青茶', name_en: 'Highland Milk Tea', category: '拿鐵', price: 60, store: '上宇林' },
  { name: '烏龍鮮奶茶', name_en: 'Oolong Milk Tea', category: '拿鐵', price: 60, store: '上宇林' },
  { name: '美人鮮奶茶', name_en: 'Oriental Beauty Milk Tea', category: '拿鐵', price: 60, store: '上宇林' },
  { name: '冬瓜鮮奶', name_en: 'White Gourd Milk Tea', category: '拿鐵', price: 60, store: '上宇林' },
  { name: '冬瓜鮮奶茶', name_en: 'White Gourd with Milk Tea', category: '拿鐵', price: 70, store: '上宇林' },
  { name: '冰淇淋鮮奶茶', name_en: 'Ice Cream Milk Tea', category: '特調', price: 80, store: '上宇林' },
  { name: '甘蔗拿鐵', name_en: 'Sugarcane Milk Tea', category: '拿鐵', price: 80, store: '上宇林' },
  { name: '梅香綠茶', name_en: 'Plum Green Tea', category: '鮮果', price: 50, store: '上宇林' },
  { name: '脆梅綠茶', name_en: 'Pickled Plum Green Tea', category: '鮮果', price: 55, store: '上宇林' },
  { name: '冬瓜茶', name_en: 'White Gourd Drink', category: '原味茶', price: 35, store: '上宇林' },
  { name: '冬瓜紅茶', name_en: 'White Gourd Black Tea', category: '特調', price: 45, store: '上宇林' },
  { name: '冬瓜青茶', name_en: 'White Gourd Highland Tea', category: '特調', price: 45, store: '上宇林' },
  { name: '冬瓜綠茶', name_en: 'White Gourd Green Tea', category: '特調', price: 45, store: '上宇林' },
  { name: '冬瓜檸檬', name_en: 'White Gourd Lemon', category: '鮮果', price: 60, store: '上宇林' },
  { name: '檸檬紅茶', name_en: 'Black Tea Lemonade', category: '鮮果', price: 60, store: '上宇林' },
  { name: '檸檬青茶', name_en: 'Highland Lemonade', category: '鮮果', price: 60, store: '上宇林' },
  { name: '檸檬綠茶', name_en: 'Green Tea Lemonade', category: '鮮果', price: 60, store: '上宇林' },
  { name: '香橙青茶', name_en: 'Orange Highland Tea', category: '鮮果', price: 60, store: '上宇林' },
  { name: '香橙綠茶', name_en: 'Orange Green Tea', category: '鮮果', price: 60, store: '上宇林' },
  { name: '葡萄柚青', name_en: 'Grapefruit Highland Tea', category: '鮮果', price: 60, store: '上宇林' },
  { name: '葡萄柚綠茶', name_en: 'Grapefruit Green Tea', category: '鮮果', price: 60, store: '上宇林' },
  { name: '蔓越莓紅茶', name_en: 'Cranberry Black Tea', category: '鮮果', price: 55, store: '上宇林' },
  { name: '蔓越莓青茶', name_en: 'Cranberry Highland Tea', category: '鮮果', price: 55, store: '上宇林' },
  { name: '蔓越莓綠茶', name_en: 'Cranberry Green Tea', category: '鮮果', price: 55, store: '上宇林' },
  { name: '甘蔗紅茶', name_en: 'Sugarcane Black Tea', category: '鮮果', price: 60, store: '上宇林' },
  { name: '甘蔗青茶', name_en: 'Sugarcane Highland Tea', category: '鮮果', price: 60, store: '上宇林' },
  { name: '甘蔗綠茶', name_en: 'Sugarcane Green Tea', category: '鮮果', price: 60, store: '上宇林' },
  { name: '甘蔗烏龍茶', name_en: 'Sugarcane Oolong Tea', category: '鮮果', price: 60, store: '上宇林' },
  { name: '甘蔗柳橙', name_en: 'Sugarcane Orange', category: '鮮果', price: 70, store: '上宇林' },
  { name: '甘蔗檸檬', name_en: 'Sugarcane Lemon', category: '鮮果', price: 70, store: '上宇林' },
  { name: '甘蔗蔓越莓', name_en: 'Sugarcane Cranberry', category: '鮮果', price: 70, store: '上宇林' },
  { name: '泰式奶茶', name_en: 'Thai Milk Tea', category: '奶茶', price: 65, store: '上宇林' },

  // 清原芋圓 (10筆)
  { name: '綠豆沙牛奶', name_en: 'Mung Bean Milk Smoothie', category: '特調', price: 70, store: '清原芋圓' },
  { name: '懷舊綠豆沙', name_en: 'Mung Bean Smoothie', category: '特調', price: 55, store: '清原芋圓' },
  { name: '濃芋純鮮奶', name_en: 'Pure Taro Fresh Milk', category: '特調', price: 90, store: '清原芋圓' },
  { name: '鮮奶紅茶', name_en: 'Black Tea Latte', category: '拿鐵', price: 70, store: '清原芋圓' },
  { name: '鮮奶青茶', name_en: 'Four Seasons Tea Latte', category: '拿鐵', price: 75, store: '清原芋圓' },
  { name: '熟成紅茶', name_en: 'Aged Black Tea', category: '原味茶', price: 30, store: '清原芋圓' },
  { name: '茉香綠茶', name_en: 'Jasmine Green Tea', category: '原味茶', price: 35, store: '清原芋圓' },
  { name: '四季青茶', name_en: 'Four Seasons Oolong Tea', category: '原味茶', price: 35, store: '清原芋圓' },
  { name: '輕焙米香烏龍', name_en: 'Light-Oolong Tea', category: '原味茶', price: 30, store: '清原芋圓' },
  { name: '冬瓜青茶', name_en: 'White Gourd Highland Tea', category: '特調', price: 35, store: '清原芋圓' }
];

// ==========================================
// 4. 自動化交叉組裝：生成合法且具備完備外鍵的 mockDrinks 陣列
// ==========================================
const mockDrinks = rawDrinks.map((drink, index) => {
  const meta = storeMeta[drink.store];
  return {
    id: index + 1,
    ...drink,
    // 雙向相容地圖標記經緯度欄位
    lat: meta.lat,
    latitude: meta.lat,
    lng: meta.lng,
    longitude: meta.lng,
    rating: meta.rating,
    color: meta.color,
    brand_color: meta.color,
    logo: meta.logo,
    feature: meta.feature,
    address: meta.address,
    hours: meta.hours,
    toppings: meta.toppings
  };
});

export default mockDrinks;