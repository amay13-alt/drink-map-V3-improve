import React from 'react';

function BrandModal({ brandInfo, language, brandFeatureEnMap, onCopyAddr, onClose }) {
  if (!brandInfo) return null;

  // 🟢 100% 對齊真實資料庫：中文版直接讀取 row.feature，英文版去對照英文字典
  const displayFeature = language === 'zh' 
    ? brandInfo.feature 
    : (brandFeatureEnMap[brandInfo.store] || brandInfo.feature);

  // 💡 雙軌數據防禦：接住店家的顏色變數
  const storeThemeColor = brandInfo.brand_color || brandInfo.color || '#475569';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content standard-card-style" onClick={e => e.stopPropagation()}>
        <button className="modal-close-x" onClick={onClose}>&times;</button>
        <img src={brandInfo.logo} className="modal-logo-centered" alt="logo" />
        
        {/* 💡 修正：將店名顏色同步綁定雙軌顏色變數 */}
        <h2 style={{ color: storeThemeColor, margin: '10px 0' }}>
          {language === 'zh' ? brandInfo.store : brandInfo.store_en}
        </h2>
        
        <div className="google-rating-box-modal" style={{ marginBottom: '10px' }}>
          Google Maps 評分：<span className="stars-accent">⭐ {(brandInfo.rating || 5).toFixed(1)}</span> / 5.0
        </div>
        
        {/* 品牌特色徽章 */}
        <div className="feature-badge-centered">✨ {displayFeature}</div>
        
        {/* 門市地址與營業時間（完全讀取資料庫現有欄位，不發明新規則） */}
        <div className="modal-info-box-clean" style={{ marginTop: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <p style={{ margin: 0, textAlign: 'left', fontSize: '0.85rem', flex: 1 }}>
              <b>{language === 'zh' ? '門市地址：' : 'Chinese Address:'}</b><br/>
              <span style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>{brandInfo.address}</span>
            </p>
            <button className="copy-addr-btn-modern" onClick={() => onCopyAddr(brandInfo.address)}>
              {language === 'zh' ? '📋 複製' : '📋 Copy'}
            </button>
          </div>
          <p style={{ margin: 0, textAlign: 'left', fontSize: '0.85rem' }}>
            <b>{language === 'zh' ? '今日營業時間：' : 'Hours:'}</b><br/>
            {brandInfo.hours}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrandModal;