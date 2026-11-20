# DAYFLOW 日序

手機優先的行程規劃與生活紀錄 App。支援旅遊、工作及日常行程、照片筆記、五語言、十種布景與夜間主色。

## 本機開發

需要 Node.js 24，不需安裝 npm 套件。

```sh
node scripts/verify.mjs
node server.mjs
```

開啟 `http://localhost:4178/`。程式放在 `dist/`，測試放在 `tests/`。

## GitHub 雲端開發

在此儲存庫選擇 **Code → Codespaces → Create codespace on main**。環境建立時會檢查程式並執行測試，啟動後自動提供 4178 預覽連接埠。請維持連接埠為 Private；程式碼公開與 App 預覽存取權限是不同設定。

在雲端編輯 `dist/` 檔案後重新整理預覽即可查看；完成後 Commit／Push 才會保存到 GitHub。Codespaces 是開發環境，停止後不提供常駐正式網站。

## 自動檢查與公開試用部署

`.github/workflows/ci.yml` 在 Push、Pull request 或手動執行時，自動檢查語法、檔案與現有測試；通過後保存可下載的前端壓縮包。主分支 `main` 通過檢查後，會將 `dist/` 部署到 GitHub Pages。

公開試用網址：https://tailyu898.github.io/DayFlow/

2026-11-20 已由擁有者確認允許公開試用。GitHub Pages 不需登入，任何人均可開啟此 App；行程與照片仍保存在各自瀏覽器。Codespaces 預覽仍為私人。

原有私人 Sites 網址是另一個部署；此 workflow 不會修改該站的存取權限，也不會自動同步該站。GitHub Pages 的發布來源須在 Settings → Pages 設為 GitHub Actions，不能繼續使用根目錄的分支發布，否則會顯示 README 而非 App。

## 資料

行程與照片存於各自瀏覽器的 IndexedDB，偏好設定存於 localStorage。公開原始碼不包含實際行程。不同網址、Codespace 或手機不會自動同步；請用 App 的備份匯出／匯入搬移。

## 參考

- [GitHub Actions 工作流程](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
- [Node.js 開發容器](https://github.com/devcontainers/images/tree/main/src/javascript-node)
