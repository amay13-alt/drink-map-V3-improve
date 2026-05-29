// 🌐 品類中英對照字典
export const categoryLangMap = {
  'All': { zh: '全部品類分類', en: 'All Categories' },
  '奶茶': { zh: '奶茶系列', en: 'Milk Tea' },
  '奶蓋茶': { zh: '頂級奶蓋', en: 'Milk Foam' },
  '原味茶': { zh: '經典原味茶', en: 'Pure Tea' },
  '拿鐵': { zh: '鮮奶拿鐵', en: 'Latte' },
  '特調': { zh: '工藝特調', en: 'Special Blend' },
  '鮮果': { zh: '新鮮鮮果茶', en: 'Fresh Fruit' }
};

// 🌐 品牌特色中英對照字典
export const brandFeatureEnMap = {
  '50嵐': 'Affordable classic with rich choices',
  'CoCo都可': 'Specialized in fresh fruit & milk teas',
  '清心福全': 'Famous for its signature Yogurt series',
  '迷客夏': 'Premium fresh milk tea selection',
  '可不可': 'Aged black tea specialist ✕ Vintage aesthetics',
  'MOREiN沫飲': 'Signature Bourbon vanilla cream foam',
  '大茗本位': 'Famous for signature Avocado cream foam',
  '麻古茶坊': 'The pioneer of fresh fruit bits tea',
  '上宇林': 'Exquisite cream foam & premium pure tea',
  '清原芋圓': 'Perfect blend of taro desserts and drinks'
};

// 💡 符合 BR-06 與使用者要求：12 種標準化加料大類選單
export const standardToppingsList = [
  { value: 'All', labelZh: '全部配料', labelEn: 'All Toppings' },
  { value: '波霸', labelZh: '波霸系列', labelEn: 'Boba' },
  { value: '椰果', labelZh: '椰果系列', labelEn: 'Coconut Jelly' },
  { value: '燕麥', labelZh: '健康燕麥', labelEn: 'Oats' },
  { value: '冰淇淋', labelZh: '冰淇淋類', labelEn: 'Ice Cream' },
  { value: '布丁', labelZh: '整顆布丁', labelEn: 'Pudding' },
  { value: '仙草凍', labelZh: '古法仙草凍', labelEn: 'Grass Jelly' },
  { value: '茶凍', labelZh: '手工茉莉茶凍', labelEn: 'Tea Jelly' },
  { value: '粉角', labelZh: 'Q彈粉角', labelEn: 'Tapioca Cube' },
  { value: '寒天晶球', labelZh: '寒天晶球(水玉)', labelEn: 'Agar Boba' },
  { value: '粉粿', labelZh: '古早味粉粿', labelEn: 'Jelly Cake' },
  { value: '奶蓋', labelZh: '鹹甜奶蓋', labelEn: 'Cream Foam' },
  { value: '養樂多', labelZh: '正宗養樂多', labelEn: 'Yakult' }
];

// 🌐 📢 全新擴充：品牌實體深度細節中英雙語對照字典 (前端專用，100%不污染後端資料庫規格)
export const brandStaticDetailsMap = {
  '50嵐': {
    zh: { feature: '平價經典手搖，經典配料豐富選擇', intro: '創立多年的台灣珍奶大廠，以極致穩定的茶湯品質與招牌波霸紅茶拿鐵聞名食品路。', address: '新竹市東區食品路 150 號', hours: '10:00 - 22:00' },
    en: { feature: 'Affordable classic with rich choices', intro: 'A legendary bubble tea franchise in Taiwan, famous for its signature Boba Black Tea Latte with premium quality.', address: 'No. 150, Shipin Rd., East Dist., Hsinchu City', hours: '10:00 - 22:00' }
  },
  'CoCo都可': {
    zh: { feature: '活力的代名詞，主打鮮果茶與百香系列', intro: '引領全球的茶飲專家，食品路門市提供最受歡迎的百香雙響炮與季節限定鮮果特調。', address: '新竹市東區食品路 165 號', hours: '10:00 - 21:30' },
    en: { feature: 'Specialized in fresh fruit & milk teas', intro: 'An international beverage leader pioneering fresh fruit infusions and rich, velvety milk tea selection.', address: 'No. 165, Shipin Rd., East Dist., Hsinchu City', hours: '10:00 - 21:30' }
  },
  '清心福全': {
    zh: { feature: '招牌烏龍綠茶與優多系列引領手搖風潮', intro: '以扎實的傳統茗茶深植人心，其隱藏版特調蜂蜜普洱珍珠鮮奶深受在地學生喜愛。', address: '新竹市東區食品路 180 號', hours: '09:30 - 22:00' },
    en: { feature: 'Famous for its signature Yogurt series', intro: 'A milestone brand embedded in Taiwan cup-tea culture, renowned for premium Oolong tea and Yakult twists.', address: 'No. 180, Shipin Rd., East Dist., Hsinchu City', hours: '09:30 - 22:00' }
  },
  '迷客夏': {
    zh: { feature: '自家綠光牧場鮮乳標竿，手作大甲芋頭首選', intro: '堅持天然無添加，採用自家牧場產地直送的優質鮮乳，成分純淨，嚼感手作透明晶球。', address: '新竹市東區食品路 142 號', hours: '10:00 - 22:00' },
    en: { feature: 'Premium fresh milk tea selection', intro: 'A high-end dairy-focused tea specialist delivering real farm-to-cup fresh milk and homemade taro pastes.', address: 'No. 142, Shipin Rd., East Dist., Hsinchu City', hours: '10:00 - 22:00' }
  },
  '可不可': {
    zh: { feature: '經典熟成紅茶專家，引領英倫復古調飲美學', intro: '主打熟成茶香底蘊與優雅的視覺設計，食品路門市展現高質感調飲與獨特水玉配料。', address: '新竹市東區食品路 155 號', hours: '10:00 - 22:00' },
    en: { feature: 'Aged black tea specialist ✕ Vintage aesthetics', intro: 'Mastering the dark arts of aged black tea curation wrapped in elegant British colonial retro designs.', address: 'No. 155, Shipin Rd., East Dist., Hsinchu City', hours: '10:00 - 22:00' }
  },
  'MOREiN沫飲': {
    zh: { feature: '獨家波本香草奶蓋，打造極致綿密層次口感', intro: '網美系時尚茶飲品牌，主打細緻奢華的厚奶蓋茶系列與視覺系工藝水果調飲。', address: '新竹市東區食品路 138 號', hours: '11:00 - 21:00' },
    en: { feature: 'Signature Bourbon vanilla cream foam', intro: 'An aesthetic tea brand emphasizing thick, artisanal cream foams layer and visual craft mocktails.', address: 'No. 138, Shipin Rd., East Dist., Hsinchu City', hours: '11:00 - 21:00' }
  },
  '大茗本位': {
    zh: { feature: '酪梨奶蓋與烤糖蕎麥風靡全台的排隊名店', intro: '以獨特的酪梨奶蓋與蕎麥茶底迅速竄紅，提供食品路最具話題性的高端茶飲體驗。', address: '新竹市東區食品路 172 號', hours: '10:00 - 22:00' },
    en: { feature: 'Famous for signature Avocado cream foam', intro: 'The ultimate trending sensation across Taiwan, introducing revolutionary avocado milk caps and roasted buckwheat base.', address: 'No. 172, Shipin Rd., East Dist., Hsinchu City', hours: '10:00 - 22:00' }
  },
  '麻古茶坊': {
    zh: { feature: '芝芝鮮果粒元祖，嚼感滿分的甜品系茶飲', intro: '將新鮮水果與濃郁起司奶蓋完美結合，飽滿果粒的楊枝甘露掀起全台飲品革命。', address: '新竹市東區食品路 198 號', hours: '10:00 - 22:00' },
    en: { feature: 'The pioneer of fresh fruit bits tea', intro: 'Redefining tea boundaries by presenting thick salted-cheese cheese layers atop chunks of freshly hand-crushed fruits.', address: 'No. 198, Shipin Rd., East Dist., Hsinchu City', hours: '10:00 - 22:00' }
  },
  '上宇林': {
    zh: { feature: '頂級茶道厚鮮奶茶，手工粉角厚實嚼感首選', intro: '專注於優質茶底與厚實鮮奶茶的頂級調配，招牌手工粉角是全台嚼感系熱門首選。', address: '新竹市東區食品路 160 號', hours: '10:00 - 21:30' },
    en: { feature: 'Exquisite cream foam & premium pure tea', intro: 'Crafting heavy-bodied Taiwanese tea leaves paired with unique chewy hand-cut square tapioca cubes.', address: 'No. 160, Shipin Rd., East Dist., Hsinchu City', hours: '10:00 - 21:30' }
  },
  '清原芋圓': {
    zh: { feature: '九份手工芋圓與手搖茶飲完美結合的甜品專家', intro: '主打芋頭滑嫩、古法仙草凍與手搖茶飲，豐富的配料完美滿足正餐後的第二個胃。', address: '新竹市東區食品路 130 號', hours: '10:00 - 22:00' },
    en: { feature: 'Perfect blend of taro desserts and drinks', intro: 'Fusing traditional sweet hot-toppings like taro balls and herbal jellies flawlessly into refreshing iced tea bases.', address: 'No. 130, Shipin Rd., East Dist., Hsinchu City', hours: '10:00 - 22:00' }
  }
};