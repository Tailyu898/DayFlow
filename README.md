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

## 自動檢查與更新邊界

`.github/workflows/ci.yml` 在 Push、Pull request 或手動執行時，自動檢查語法、檔案與現有測試；通過後保存可下載的前端壓縮包。

**目前這個 workflow 不會部署到既有私人 Sites 網址。** 現有 Sites 部署使用平台提供的短期來源憑證與私人發布工具，尚未設定可供 GitHub Actions 無人值守使用的部署授權。不要把登入 Cookie 或短期 Git token 放進公開程式／workflow，也不要以公開 Pages 取代私人 App。

私人網站要更新時，需由擁有者依 Sites 現行支援流程部署已通過檢查的版本；若要每次 Push 後完全自動部署，還需選定並連接支援私人存取的部署服務或可驗證的部署授權。

## 資料

行程與照片存於各自瀏覽器的 IndexedDB，偏好設定存於 localStorage。公開原始碼不包含實際行程。不同網址、Codespace 或手機不會自動同步；請用 App 的備份匯出／匯入搬移。

## 參考

- [GitHub Actions 工作流程](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
- [Node.js 開發容器](https://github.com/devcontainers/images/tree/main/src/javascript-node)
