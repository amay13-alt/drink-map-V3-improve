import React from 'react';
// 從 react-icons 的 FontAwesome (fa) 分類中引入星星
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function DrinkCard({ drink, language, categoryLangMap, onCardClick, onLogoClick }) {
  if (!drink) return null;

  // 🌟 星星精準渲染邏輯 (使用 SVG 向量圖示替換純文字)
  const renderStars = (rating = 5) => {
    const stars = [];
    const safeRating = Number(rating) || 5;
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(safeRating)) {
        // 實心星
        stars.push(<FaStar key={i} style={{ color: '#FFD700', fontSize: '1.1rem', marginRight: '2px' }} />);
      } else if (i === Math.ceil(safeRating) && safeRating % 1 >= 0.5) {
        // 半顆星
        stars.push(<FaStarHalfAlt key={i} style={{ color: '#FFD700', fontSize: '1.1rem', marginRight: '2px' }} />); 
      } else {
        // 空心星
        stars.push(<FaRegStar key={i} style={{ color: '#ccc', fontSize: '1.1rem', marginRight: '2px' }} />);
      }
    }
    return stars;
  };

  // 💡 雙軌數據防禦：接住資料庫的 brand_color 或本地的 color
  const cardBorderColor = drink.brand_color || drink.color || '#6366f1';

  return (
    <div 
      className="drink-card-interactive" 
      style={{ borderTop: `4px solid ${cardBorderColor}` }}
      onClick={() => onCardClick(drink)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
        {/* 點擊 Logo 觸發品牌故事視窗 */}
        <img 
          src={drink.logo} 
          className="card-logo" 
          alt={drink.store}
          onClick={() => onLogoClick(drink)} 
          style={{ cursor: 'pointer', width: '45px', height: '45px', borderRadius: '50%', border: '1px solid #eee' }}
        />
        <div className="card-rating" style={{ display: 'flex', alignItems: 'center' }}>
          {renderStars(drink.rating)} 
          <span style={{fontSize:'0.8rem', color:'#555', marginLeft: '4px'}}>
            ({(drink.rating || 5).toFixed(1)})
          </span>
        </div>
      </div>
      
      <h3 style={{ fontWeight: 700, marginTop: '12px', marginBottom: '4px', textAlign: 'left' }}>
        {language === 'zh' ? drink.name : drink.name_en}
      </h3>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
        <p style={{ fontSize: '0.85rem', color: '#4b5563', fontWeight: 600, margin: 0 }}>
          📍 {language === 'zh' ? drink.store : drink.store_en}
        </p>
        <span className="category-tag">
          {language === 'zh' ? drink.category : (categoryLangMap[drink.category]?.en || drink.category)}
        </span>
      </div>
      <div className="price-tag-styled">NT$ {drink.price}</div>
    </div>
  );
}

export default DrinkCard;