# 🥤 新竹食品路 · 飲品快搜系統 (Full-Stack)

本系統為資料庫管理期末專案，專門針對新竹食品路周邊連鎖手搖飲店進行多維度檢索。系統採用 **React (Vite)** 作為展示層、**Node.js (Express)** 作為應用層，並對接 **MySQL** 雙軌關聯式資料庫架構開發，完整實現 3NF 正規化設計與異質資料整合。

---

## 🛠️ 開發人員與助教本機運行指南

請確保您的電腦已安裝好 **VS Code**、**Node.js環境** 與 **MySQL Workbench**。

### 🗄️ 第一步：還原 MySQL 資料庫

1. 打開 **MySQL Workbench**，點擊進入您的資料庫連線（如 `Local instance MySQL80`）。
2. 點擊左側選單的 **Data Import/Restore**。
3. 選擇 **Import from Self-Contained File**，並選取專案目錄底下的 `DBA.sql`。
4. 在 *Default Schema to Import To* 點擊 **New**，新增一個名為 `beverage_db` 的 Schema。
5. 點擊右下角 **Start Import**。看到成功字樣後，即完成 403 筆飲品與多表關聯數據還原。

### 🚀 第二步：配置並啟動 Application Layer (後端)

1. 在 `backend` 資料夾中建立 `.env` 檔案，並依您的本地 MySQL 密碼進行設定：

```env
# 後端伺服器埠號
PORT=3000

# 本地 MySQL 資料庫連線設定
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=您的MySQL密碼  # 👈 請替換成您安裝 MySQL 時設定的 root 密碼
DB_NAME=beverage_db      # 👈 請替換成您還原的 Schema 名稱 (預設為 beverage_db)
```
2. 使用 VS Code 開啟終端機，切換至後端目錄並安裝依賴套件：

```Bash
cd backend
npm install
```

3. 啟動後端 API 伺服器：

```Bash
node server.js
```
當畫面顯示 `🚀 雙軌配料真 API 已成功啟動：http://localhost:3000` 即代表後端已成功與 MySQL 連線。

### 💻 第三步：啟動 Presentation Layer (前端)
1. 在 VS Code 中開啟「第二個終端機視窗」（請保留後端伺服器持續運行）。

2. 切換至前端目錄並安裝網頁依賴套件：

```Bash
cd frontend
npm install
```

3. 啟動 React 本機開發伺服器：

```Bash
npm run dev
```

4. 按住 `Ctrl` 並點擊終端機顯示的 `http://localhost:5173` 網址，即可進入飲品快搜系統進行操作驗收。
___

### 🌐 關於 Vercel 線上部署的重要說明

本專案之前端（Frontend）支援透過 Vercel 進行靜態頁面託管與展示。然而，由於本專案的核心業務邏輯與 403 筆飲品菜單皆安全儲存於本地 MySQL 資料庫中，線上的 Vercel 預覽版在未連接雲端資料庫的情況下，無法直接對接本地端資料。

#### 📢 評分建議：

建請助教與評審老師依照上方 【🛠️ **開發人員與助教本機運行指南**】 之步驟，將後端 API 與 MySQL 資料庫於本機環境跑起，即可完美體驗全功能之動態資料庫查詢、中英文動態語系查表及隨機隨機抽籤系統。
