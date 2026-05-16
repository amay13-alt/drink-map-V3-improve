const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); 
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
});
const db = pool.promise();

app.get('/api/drinks', async (req, res) => {
  try {
    // 🚀 核心升級：在 CONCAT 中加入 st.standard_name，完美實作雙軌配料對接
    const [rows] = await db.query(`
      SELECT 
        d.drink_id AS id,
        d.drink_name AS name,
        d.drink_eng_name AS name_en, 
        c.category_name AS category,
        d.price AS price,
        b.brand_name AS store,
        b.brand_eng_name AS store_en,
        b.logo_path AS logo,
        b.brand_color AS color,
        b.lat AS lat,
        b.lng AS lng,
        b.rating AS rating,
        b.feature AS feature,
        s.address AS address,
        s.opening_hours AS hours,
        GROUP_CONCAT(CONCAT(t.topping_name, ':', t.extra_price, ':', COALESCE(t.topping_eng_name, ''), ':', st.standard_name)) AS topping_details
      FROM DRINK d
      JOIN BRAND b ON d.brand_id = b.brand_id
      JOIN CATEGORY c ON d.category_id = c.category_id
      LEFT JOIN STORE s ON b.brand_id = s.brand_id
      LEFT JOIN DRINK_TOPPING dt ON d.drink_id = dt.drink_id
      LEFT JOIN TOPPING t ON dt.topping_id = t.topping_id
      LEFT JOIN STANDARD_TOPPING st ON t.standard_id = st.standard_id
      GROUP BY d.drink_id, s.store_id
      ORDER BY d.drink_id ASC
    `);

    const formattedDrinks = rows.map(drink => ({
      id: drink.id,
      name: drink.name,
      name_en: drink.name_en || drink.name,
      category: drink.category,
      price: Number(drink.price),
      store: drink.store,
      store_en: drink.store_en || drink.store,
      lat: Number(drink.lat),
      lng: Number(drink.lng),
      rating: Number(drink.rating) || 5.0,
      logo: drink.logo,
      color: drink.color || '#6366f1',
      address: drink.address || '新竹市食品路',
      hours: drink.hours || '10:00 - 22:00',
      feature: drink.feature || '',
      toppings: drink.topping_details ? drink.topping_details.split(',').map(str => {
        const [tName, tPrice, tEn, stName] = str.split(':');
        return { name: tName, price: Number(tPrice), name_en: tEn || tName, standard_name: stName };
      }) : []
    }));

    res.json(formattedDrinks); 
  } catch (err) {
    console.error("資料庫查詢失敗：", err);
    res.status(500).json({ error: '資料庫進階查詢失敗' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 專業後端 API 運作中：http://localhost:${PORT}`));