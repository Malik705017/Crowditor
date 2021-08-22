# Crowditor 專案架構說明

目前專案架構拆成：

- components: 撰寫 UI 元件的地方
- layouts: 一個頁面就在底下創一個資料夾，例如首頁（LandingPage）就建立一個，而一個頁面會對應一個 route 路徑。
- config: 一些專案的設定，像是 route 的設定會寫在這邊，預計未來 API endpoint 的設定也會寫在這。
- resources: 如果有一些資料是要寫死在前端（如一些 json 檔案），都會放在這。
- store: redux 的 reducer/action 會寫在這邊，每個 reducer 建議開一個資料夾。
