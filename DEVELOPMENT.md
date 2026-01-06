# Development Guide

個人開發筆記與使用指南

---

## Portfolio Auto-Sync 使用指南

### 如何新增專案到 Portfolio 頁面

專案會自動從 GitHub 同步，只需要在 GitHub repo 設定：

#### 1. 添加 GitHub Topics
進入你的 GitHub repo → Settings → About section → Topics

**必需的 Topic**:
- `portfolio-display` - 讓專案顯示在 portfolio 頁面

**可選的 Topics**:
- `portfolio-featured` - 標記為精選專案（會排在前面）
- `react`, `python`, `scss` 等 - 技術標籤（會自動顯示）

**範例**:
```
portfolio-display portfolio-featured react scss wordpress-api github-api vercel
```

#### 2. 設定 Homepage URL
Settings → About → Website
- 填入線上 Demo 網址
- 這會變成 "Live Demo" 按鈕

#### 3. 設定專案描述
Settings → About → Description
- 這會成為卡片的描述文字
- 範例: "Responsive personal portfolio website built with React 19, featuring WordPress blog integration, GitHub API stats, and Apple Liquid Glass design system"

#### 4. 添加專案截圖（選用）

在你的專案 repo 中創建 `.github/portfolio.json`:

```json
{
  "image": "https://raw.githubusercontent.com/你的帳號/專案名稱/master/docs/preview.png",
  "blogPostUrl": "https://jasonmablog.wordpress.com/你的文章",
  "customDescription": "自訂描述（會覆蓋 GitHub 描述）"
}
```

**圖片位置建議**:
- 在專案中建立 `docs/` 資料夾
- 截圖存為 `preview.png` 或 `screenshot.png`
- 使用 GitHub Raw URL

#### 5. 觸發更新

Portfolio 資料在 **build time** 更新：
- 本地測試: `npm run fetch-portfolios`
- Production: Push 到 GitHub（Vercel 會自動 build）

---

## 常用指令

### 開發
```bash
npm start                  # 啟動開發伺服器
npm run build              # Production build
npm test                   # 執行測試
```

### Portfolio 相關
```bash
npm run fetch-portfolios   # 手動從 GitHub 抓取 portfolio 資料
```

### 部署
```bash
npm run deploy            # 部署到 GitHub Pages
# Vercel 會自動部署（push 到 master 就會觸發）
```

### Git
```bash
git status
git add .
git commit -m "feat: 你的提交訊息"
git push
```

---

## Portfolio Sync 工作原理

### Build Time Flow
```
1. npm run build
   ↓
2. prebuild script 執行
   ↓
3. scripts/fetchPortfolios.js 運行
   ↓
4. 從 GitHub API 抓取所有 repos
   ↓
5. 篩選有 'portfolio-display' topic 的 repos
   ↓
6. 嘗試讀取每個 repo 的 .github/portfolio.json
   ↓
7. 合併 GitHub 資料 + 自訂 metadata
   ↓
8. 寫入 public/portfolios-data.json
   ↓
9. React build 繼續
```

### Runtime Flow
```
1. User 造訪 /portfolios 頁面
   ↓
2. PortfoliosPage 載入
   ↓
3. useEffect 嘗試 fetch('/portfolios-data.json')
   ↓
4. 成功 → 使用 build-time 產生的資料
   失敗 → fallback 到 src/data/portfoliosData.js
```

### 資料優先順序
1. **Image**: `.github/portfolio.json` 的 image
2. **Description**: `.github/portfolio.json` 的 customDescription > GitHub repo description
3. **Technologies**: GitHub topics (過濾掉 portfolio-display/portfolio-featured) + repo.language
4. **Live URL**: GitHub repo homepage
5. **Blog URL**: `.github/portfolio.json` 的 blogPostUrl
6. **Featured**: 是否有 `portfolio-featured` topic

---

## 檔案結構說明

### 重要檔案
- `scripts/fetchPortfolios.js` - Build-time 抓取 GitHub 資料的腳本
- `public/portfolios-data.json` - 產生的靜態資料（gitignore）
- `src/data/portfoliosData.js` - Fallback 靜態資料
- `src/Pages/PortfoliosPage.js` - Portfolio 頁面（會先嘗試載入產生的 JSON）

### 需要在每個專案 repo 建立的檔案（選用）
- `.github/portfolio.json` - 自訂 metadata（圖片、部落格連結、描述）
- `docs/preview.png` - 專案截圖

---

## Troubleshooting

### 專案沒有出現在 Portfolio 頁面
1. 確認 repo 有 `portfolio-display` topic
2. 本地執行 `npm run fetch-portfolios` 看有沒有錯誤
3. 檢查 `public/portfolios-data.json` 是否有產生
4. Vercel 重新 deploy

### 圖片沒有顯示
1. 確認 `.github/portfolio.json` 已經 push 到 GitHub
2. 確認圖片路徑正確（使用 GitHub Raw URL）
3. 重新 build: `npm run fetch-portfolios`

### Technology 標籤重複
- fetchPortfolios.js 已經有 case-insensitive 去重
- 如果還是重複，檢查 GitHub topics 和 repo.language 是否有大小寫不同的重複

---

## Configuration

### 更改 GitHub Username
編輯 `scripts/fetchPortfolios.js`:
```javascript
const GITHUB_USERNAME = 'jasonma1127';  // 改成你的 username
```

### 更改 Control Topics
編輯 `scripts/fetchPortfolios.js`:
```javascript
const DISPLAY_TOPIC = 'portfolio-display';    // 控制顯示的 topic
const FEATURED_TOPIC = 'portfolio-featured';  // 控制精選的 topic
```

---

## 效能說明

### Build Time
- 每次 build 會呼叫 GitHub API（1-5 個 requests）
- Vercel 一天 build 1-3 次 → 完全不會碰到 rate limit
- Build 時間增加 3-5 秒（可接受）

### Runtime
- **零** GitHub API calls（使用者不會呼叫 API）
- 讀取靜態 JSON（超快）
- 完全沒有效能影響

### API Rate Limits
- Unauthenticated: 60 requests/hour
- 目前用量: 每次 build 約 5 requests
- 完全不需要擔心

---

## 未來改進

- [ ] 支援多語言描述（中英文）
- [ ] 自動產生 OpenGraph 圖片
- [ ] 支援 video demo
- [ ] 按技術分類的進階篩選

---

最後更新: 2026-01-07
