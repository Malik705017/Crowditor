# Crowditor 專案架構說明

## 專案架構

目前專案架構拆成：

- components: 撰寫 UI 元件的地方
- pages: 一個頁面就在底下創一個資料夾，例如首頁（LandingPage）就建立一個，而一個頁面會對應一個 route 路徑。
- config: 一些專案的設定，像是 route 的設定會寫在這邊，預計未來 API endpoint 的設定也會寫在這。
- resources: 如果有一些資料是要寫死在前端（如一些 json 檔案），或像是網站上的圖片等，都會放在這邊。其中資料存放在 data 資料夾，圖片存放在 image 資料夾。
- store: redux 的 reducer/action 會寫在這邊，每個 reducer 建議開一個資料夾。

## 協作規範

- commit message 參考 angular commit rule
- 專案設定了 setting.json 檔案，使用 prettier 確保 coding style，請確認 vscode 有安裝好 prettier extension。
