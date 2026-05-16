import React, { useState, useEffect } from 'react';
import './App.css';
import MapComponent from "./Components/MapComponent";
import DrinkCard from "./Components/DrinkCard";
import DropdownFilter from "./Components/DropdownFilter";

// 🟢 抽離優化：導入剛寫好的品牌彈窗元件
import BrandModal from "./Components/BrandModal";

// 🚀 導入常數語系設定檔（合併成一行引入，絕不重複宣告！）
import { categoryLangMap, brandFeatureEnMap, standardToppingsList } from './data/langMaps';
// 🚀 導入已對齊欄位的假資料
import mockDrinks from './data/drinks';

function App() {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDbConnected, setIsDbConnected] = useState(null); // null = 檢查中, true = 連線成功, false = 斷線回退假資料
  
  // 🎛️ 複合篩選狀態
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedTopping, setSelectedTopping] = useState('All');
  const [maxPrice, setMaxPrice] = useState(100); 
  const [visibleCount, setVisibleCount] = useState(24);
  
  // 🔍 Autocomplete 提示框狀態
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // 🖥️ 地圖最大化狀態機 (卡片浮動版)
  const [isMapMaximized, setIsMapMaximized] = useState(false);

  // 🚪 雙軌分流彈窗狀態
  const [selectedDrink, setSelectedDrink] = useState(null);       
  const [selectedToppingForCalc, setSelectedToppingForCalc] = useState(null); 
  const [selectedBrandInfo, setSelectedBrandInfo] = useState(null); 
  const [isLuckyPick, setIsLuckyPick] = useState(false);           
  const [language, setLanguage] = useState('zh'); // 🌐 'zh' 或 'en'

  // 🚀 核心容錯連線邏輯：自動偵測斷線並無縫切換至假資料
  useEffect(() => {
    fetch('http://localhost:3000/api/drinks')
      .then(res => {
        if (!res.ok) throw new Error('後端伺服器異常');
        return res.json();
      })
      .then(data => { 
        setDrinks(Array.isArray(data) ? data : []); 
        setIsDbConnected(true); // 🟢 亮綠燈
        setLoading(false); 
      })
      .catch(err => {
        console.warn("⚠️ 偵測到後端資料庫中斷，已為您無縫啟動本地對齊假資料備份！錯誤訊息:", err);
        setDrinks(mockDrinks);  // 🔄 容錯移交
        setIsDbConnected(false); // 🔴 亮紅燈
        setLoading(false);
      });
  }, []);

  useEffect(() => { setVisibleCount(24); }, [searchTerm, selectedCategory, selectedBrand, selectedTopping, maxPrice]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length > 0) {
      const searchLower = value.toLowerCase();
      const matchedPool = new Set();

      drinks.forEach(d => {
        if (d.name && d.name.toLowerCase().includes(searchLower)) matchedPool.add(d.name);
        if (d.name_en && d.name_en.toLowerCase().includes(searchLower)) matchedPool.add(d.name_en);
        if (d.store && d.store.toLowerCase().includes(searchLower)) matchedPool.add(d.store);
        
        if (d.toppings) {
          d.toppings.forEach(t => {
            if (t.name && t.name.toLowerCase().includes(searchLower)) matchedPool.add(t.name);
            if (t.name_en && t.name_en.toLowerCase().includes(searchLower)) matchedPool.add(t.name_en);
            if (t.standard_name && t.standard_name.toLowerCase().includes(searchLower)) matchedPool.add(t.standard_name);
          });
        }
      });

      setSuggestions([...matchedPool].slice(0, 5)); 
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (value) => {
    setSearchTerm(value);
    setShowSuggestions(false);
  };

  const copyAddress = (addressText) => {
    navigator.clipboard.writeText(addressText || '');
    alert(language === 'zh' ? '📋 地址已成功複製至剪貼簿！' : '📋 Chinese address copied!');
  };

  // 資料庫多維交叉過濾演算法
  const filteredDrinks = drinks.filter(d => {
    if (!d) return false;
    const search = searchTerm.toLowerCase();
    
    const name = d.name ? d.name.toLowerCase() : '';
    const nameEn = d.name_en ? d.name_en.toLowerCase() : '';
    const store = d.store ? d.store.toLowerCase() : '';
    const storeEn = d.store_en ? d.store_en.toLowerCase() : '';

    // 💡 關鍵修復：打字搜尋現在完美支援 t.standard_name 欄位！解決「寒天晶球」搜不到的 Bug
    const matchesToppingInput = d.toppings && d.toppings.some(t => 
      (t.name && t.name.toLowerCase().includes(search)) || 
      (t.name_en && t.name_en.toLowerCase().includes(search)) ||
      (t.standard_name && t.standard_name.toLowerCase().includes(search))
    );

    const matchesSearch = name.includes(search) || nameEn.includes(search) || store.includes(search) || storeEn.includes(search) || matchesToppingInput;
    const matchesCategory = selectedCategory === 'All' || d.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || d.store === selectedBrand;
    const matchesToppingSelect = selectedTopping === 'All' || (d.toppings && d.toppings.some(t => t.standard_name === selectedTopping));
    const matchesPrice = (Number(d.price) || 0) <= maxPrice; 

    return matchesSearch && matchesCategory && matchesBrand && matchesToppingSelect && matchesPrice;
  });

  const handleLuckyDraw = () => {
    if (filteredDrinks.length === 0) return;
    const lucky = filteredDrinks[Math.floor(Math.random() * filteredDrinks.length)];
    setIsLuckyPick(true);
    setSelectedDrink(lucky);
    setSelectedToppingForCalc(null); 
    setSearchTerm(language === 'zh' ? lucky.name : lucky.name_en);
  };

  const categoryOptions = [{ value: 'All', labelZh: '全部品類分類', labelEn: 'All Categories' }, ...new Set(drinks.map(d => d.category).filter(Boolean))].map(c => typeof c === 'string' ? { value: c, labelZh: categoryLangMap[c]?.zh || c, labelEn: categoryLangMap[c]?.en || c } : c);
  const brandOptions = [{ value: 'All', labelZh: '全部連鎖品牌', labelEn: 'All Brands' }, ...new Set(drinks.map(d => d.store).filter(Boolean))].map(b => typeof b === 'string' ? { value: b, labelZh: b, labelEn: drinks.find(x => x.store === b)?.store_en || b } : b);

  const modalTotalAmount = selectedDrink ? (Number(selectedDrink.price) || 0) + (selectedToppingForCalc ? (Number(selectedToppingForCalc.price) || 0) : 0) : 0;

  if (loading) return <div className="status-screen"><div className="spinner"></div><p>🍹 資料庫同步中，請稍候...</p></div>;

  return (
    <div className="app-container">
      <header className="centered-header">
        {/* 💡 修正：指示燈靠左，連線亮綠色，斷線亮紅色 */}
        <div className="header-widgets-left">
          <div className={`db-indicator ${isDbConnected === true ? 'connected' : 'fallback'}`}>
            <span className="pulse-dot"></span>
            <span className="indicator-text">
              {isDbConnected === true 
                ? (language === 'zh' ? '資料庫已連線' : 'Connected') 
                : (language === 'zh' ? '斷線：啟動本地備份' : 'Local Backup Mode')}
            </span>
          </div>
        </div>
        {/* 右手邊放置語言切換 */}
        <div className="header-widgets-right">
          <button className="lang-toggle" onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}>
            {language === 'zh' ? '🌐 English' : '🌐 中文'}
          </button>
        </div>

        {/* 💡 修正：更新指定雙語標題與副標題 */}
        <h1>{language === 'zh' ? '喝呵🧋' : 'DrinkMap🧋'}</h1>
        <p>{language === 'zh' ? '簡單查詢✕快速決定' : 'Easy Search ✕ Quick Pick'}</p>
      </header>

      {/* 工作區並排 (控制面板與地圖左右並排) */}
      <div className="top-workspace-row">
        <div className="controls-box-left">
          <div className="autocomplete-wrapper" style={{ position: 'relative' }}>
            <input 
              type="text" 
              className="search-input-modern-fluid" 
              placeholder={language === 'zh' ? "搜尋飲品、品牌或加料關鍵字..." : "Search..."} 
              value={searchTerm} 
              onChange={handleInputChange}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="google-suggestions-list">
                {suggestions.map((s, idx) => (
                  <li key={idx} onMouseDown={() => handleSuggestionClick(s)}>🔍 {s}</li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="dropdowns-row-flex">
            <DropdownFilter label={language === 'zh' ? '品類' : 'Category'} options={categoryOptions} value={selectedCategory} onSelectChange={setSelectedCategory} language={language} />
            <DropdownFilter label={language === 'zh' ? '品牌' : 'Brand'} options={brandOptions} value={selectedBrand} onSelectChange={setSelectedBrand} language={language} />
            <DropdownFilter label={language === 'zh' ? '配料大類' : 'Topping Filter'} options={standardToppingsList} value={selectedTopping} onSelectChange={setSelectedTopping} language={language} />
          </div>

          <div className="slider-box-inline">
            <span className="slider-title-text">{language === 'zh' ? '預算：' : 'Budget:'}</span>
            <input type="range" min="30" max="100" step="5" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="price-slider-fluid" />
            <span className="slider-price-badge">≤${maxPrice}</span>
          </div>

          <div className="control-buttons-row">
            <button className="btn-action-draw" onClick={handleLuckyDraw}>🎲 {language === 'zh' ? '今天喝什麼？' : 'Random'}</button>
            <button className="btn-action-reset" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedBrand('All'); setSelectedTopping('All'); setMaxPrice(100); }}>
              {language === 'zh' ? '重置條件' : 'Reset'}
            </button>
          </div>
        </div>

        {/* 右側大地圖 */}
        <div className="map-box-right">
          <button 
            className="map-fullscreen-toggle" 
            onClick={() => setIsMapMaximized(true)}
            title="放大地圖"
          >
            {'⛶ ' + (language === 'zh' ? '放大地圖' : 'Expand')}
          </button>
          <MapComponent drinks={filteredDrinks} currentLang={language} onCopyAddr={copyAddress} />
        </div>
      </div>

      <div className="results-count-banner">
        {language === 'zh' ? `📊 找到 ${filteredDrinks.length} 筆項目` : `📊 Found ${filteredDrinks.length} matching items`}
      </div>

      {/* 飲料卡片網格 */}
      <div className="drinks-grid-fullwidth">
        {filteredDrinks.slice(0, visibleCount).map(drink => (
          <DrinkCard 
            key={drink.id} 
            drink={drink} 
            language={language} 
            categoryLangMap={categoryLangMap}
            onCardClick={(d) => { setSelectedDrink(d); setSelectedToppingForCalc(null); setIsLuckyPick(false); }}
            onLogoClick={(d) => setSelectedBrandInfo(d)}
          />
        ))}
      </div>

      {filteredDrinks.length > visibleCount && (
        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          <button className="load-more-btn" onClick={() => setVisibleCount(visibleCount + 24)}>
            {language === 'zh' ? '👇 載入更多飲品項目' : '👇 Load More'}
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 💡 拋在最外層的三大獨立彈窗（徹底解決掉到下面的 Stacking Context 排版問題） */}
      {/* ========================================================================= */}

      {/* 🍔 彈窗 A：客製化單選加料計價器 */}
      {selectedDrink && (
        <div className="modal-overlay" onClick={() => { setSelectedDrink(null); setIsLuckyPick(false); }}>
          <div className={`modal-content standard-card-style ${isLuckyPick ? 'lucky-glow' : ''}`} onClick={e => e.stopPropagation()}>
            <button className="modal-close-x" onClick={() => { setSelectedDrink(null); setIsLuckyPick(false); }}>&times;</button>
            {isLuckyPick && <div className="lucky-crown-badge">🎉 {language === 'zh' ? '今日幸運推薦' : "Lucky Pick!"} 🎉</div>}
            <img src={selectedDrink.logo} className="modal-logo-centered" alt="logo" />
            <h2>{language === 'zh' ? selectedDrink.store : selectedDrink.store_en}</h2>
            <span className="category-tag-modal">{language === 'zh' ? selectedDrink.category : (categoryLangMap[selectedDrink.category]?.en || selectedDrink.category)}</span>
            <h3 style={{ color: 'hsl(var(--primary))', margin: '15px 0 5px 0' }}>{language === 'zh' ? selectedDrink.name : selectedDrink.name_en}</h3>
            <p style={{ fontWeight: 700, color: '#555' }}>NT$ {selectedDrink.price}</p>

            <div className="calculator-zone">
              <p className="calc-title">{language === 'zh' ? '🧮 飲品單選加料計價器' : '🧮 Single Topping Calculator'}</p>
              <div className="calc-checkbox-list">
                {selectedDrink.toppings && selectedDrink.toppings.length > 0 ? (
                  <>
                    <label className={`calc-item ${selectedToppingForCalc === null ? 'selected' : ''}`}>
                      <div>
                        <input type="radio" name="topping-select" checked={selectedToppingForCalc === null} onChange={() => setSelectedToppingForCalc(null)} style={{ marginRight: '10px' }} />
                        <span>{language === 'zh' ? '不加料 (原價)' : 'No Topping'}</span>
                      </div>
                      <span className="calc-addon-price">+NT$0</span>
                    </label>

                    {selectedDrink.toppings.map((t, idx) => (
                      <label key={idx} className={`calc-item ${selectedToppingForCalc?.name === t.name ? 'selected' : ''}`}>
                        <div>
                          <input type="radio" name="topping-select" checked={selectedToppingForCalc?.name === t.name} onChange={() => setSelectedToppingForCalc(t)} style={{ marginRight: '10px' }} />
                          <span>{language === 'zh' ? t.name : t.name_en}</span>
                        </div>
                        <span className="calc-addon-price">+NT${t.price}</span>
                      </label>
                    ))}
                  </>
                ) : <p style={{ color: '#999', fontSize: '0.8rem', padding: '15px 0', margin: 0, textAlign: 'center' }}>💡 本品項無設定連動配料</p>}
              </div>
              <div className="calc-result-bar">
                <span>{language === 'zh' ? '計算加總總計：' : 'Total Amount:'}</span>
                <span className="calc-total-num">NT$ {modalTotalAmount}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🏢 獨立彈窗 B：純粹連鎖品牌細節視窗 (100%對齊資料庫欄位，代碼大幅精簡) */}
            <BrandModal 
              brandInfo={selectedBrandInfo} 
              language={language} 
              brandFeatureEnMap={brandFeatureEnMap} 
              onCopyAddr={copyAddress}
              onClose={() => setSelectedBrandInfo(null)} 
            />

      {/* 🗺️ 彈窗 C：卡片浮動式最大化地圖視窗 (拿掉變形打叉，文字改為「飲品資料」) */}
      {isMapMaximized && (
        <div className="modal-overlay-transparent" onClick={() => setIsMapMaximized(false)}>
          <div className="modal-content map-maximized-card standard-card-style" onClick={e => e.stopPropagation()}>
            <h2 className="map-modal-title">{language === 'zh' ? '🗺️ 喝呵飲料地圖' : '🗺️ DrinkMap Hsinchu'}</h2>
            <div className="map-modal-frame">
              <MapComponent drinks={filteredDrinks} currentLang={language} onCopyAddr={copyAddress} />
            </div>
            <div className="map-modal-footer">
              <span className="results-badge-map">
                {language === 'zh' ? `📊 找到 ${filteredDrinks.length} 筆飲品資料` : `Found ${filteredDrinks.length} matching drink items`}
              </span>
              <button className="copy-addr-btn-modern" style={{padding: '8px 16px', fontSize:'0.8rem', background: '#374151'}} onClick={() => setIsMapMaximized(false)}>
                {language === 'zh' ? '↩️ 收回地圖' : '↩️ Minimize'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;