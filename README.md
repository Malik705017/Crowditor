# Crowditor 

## Introduction
Crowditor 整理了各項募資趨勢，並針對募資平台概況進行分析，也提供專案編輯的輔助服務，而本系統最主要的功能為專案評估服務，系統會對專案的成功可能性進行評分、依據文案推薦相似專案，並根據落點分析提出建議。

## Structure
- components: 撰寫 UI 元件的地方
- pages: 一個頁面就在底下創一個資料夾，例如首頁（LandingPage）就建立一個，而一個頁面會對應一個 route 路徑。
- config: 一些專案的設定，像是 route 的設定會寫在這邊，預計未來 API endpoint 的設定也會寫在這。
- resources: 如果有一些資料是要寫死在前端（如一些 json 檔案），或像是網站上的圖片等，都會放在這邊。其中資料存放在 data 資料夾，圖片存放在 image 資料夾。
- store: redux 的 reducer/action 會寫在這邊，每個 reducer 開一個檔案。

## Contribution Rules
- commit message 參考 angular commit rule
- 專案設定了 setting.json 檔案，使用 prettier 確保 coding style，請確認 vscode 有安裝好 prettier extension。

