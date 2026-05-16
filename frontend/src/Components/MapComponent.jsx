import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const createColoredIcon = (color) => {
  const finalColor = color || '#6366f1';
  return L.divIcon({
    html: `<svg width="30" height="42" viewBox="0 0 24 24" fill="none"><path d="M12 0C7.58 0 4 3.58 4 8C4 13.5 12 22 12 22C12 22 20 13.5 20 8C20 3.58 16.42 0 12 0Z" fill="${finalColor}" stroke="white" stroke-width="1.5"/></svg>`,
    className: 'custom-marker',
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -40],
  });
};

function MapComponent({ drinks, currentLang, onCopyAddr }) {
  const center = [24.7966, 120.9758];

  const storeGroups = {};
  drinks.forEach(drink => {
    if (drink.lat && drink.lng) {
      if (!storeGroups[drink.store]) {
        storeGroups[drink.store] = {
          store: drink.store,
          store_en: drink.store_en, // 接住英譯欄位
          lat: Number(drink.lat),
          lng: Number(drink.lng),
          address: drink.address,
          hours: drink.hours,
          color: drink.color
        };
      }
    }
  });

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer center={center} zoom={17} style={{ height: '100%', width: '100%' }}>
        <TileLayer 
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" 
          attribution='© Google Maps'
        />
        
        {Object.values(storeGroups).map((shop, index) => (
          <Marker key={index} position={[shop.lat, shop.lng]} icon={createColoredIcon(shop.color)}>
            <Popup>
              <div style={{ minWidth: '185px', padding: '5px' }}>
                {/* 🌐 修正：地圖 Popup 品牌名稱完美英文化 */}
                <h3 style={{ margin: '0 0 8px 0', color: shop.color, fontSize: '1.1rem', fontWeight: 'bold' }}>
                  {currentLang === 'zh' ? shop.store : shop.store_en}
                </h3>
                
                <div style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '8px' }}>
                  <p style={{ margin: '4px 0' }}>🏠 <b>{currentLang === 'zh' ? '地址：' : 'Address:'}</b><br/>{shop.address}</p>
                  <p style={{ margin: '4px 0', color: '#555' }}>⏰ <b>時間：</b><br/>{shop.hours}</p>
                </div>
                
                {/* 📋 地圖視窗內同樣綁定一鍵複製按鈕 */}
                <button 
                  onClick={() => onCopyAddr(shop.address)}
                  style={{ width: '100%', padding: '5px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', marginBottom: '6px', fontWeight: 600 }}
                >
                  📋 {currentLang === 'zh' ? '複製地址文字' : 'Copy Address'}
                </button>

                <button 
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${shop.lat},${shop.lng}`)}
                  style={{ width: '100%', padding: '6px', cursor: 'pointer', backgroundColor: shop.color, color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.8rem' }}
                >
                  {currentLang === 'zh' ? 'Google 導航' : 'Navigate'}
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapComponent;