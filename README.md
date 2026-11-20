# Lighthouse v2.0 Demo

一个简体中文、本地优先的情绪自助网页。无账号、无分析 SDK、无内容上传。该工具不提供诊断或治疗。

## 本地启动

需要 Node.js 20 或更高版本（自带 npm）。无需第三方依赖：

```bash
npm install
npm run dev
```

打开 http://127.0.0.1:5173/。`npm run build` 生成 `dist/`；`npm test` 或 `npm run test` 运行自动化测试。项目采用原生 ES modules 和 CSS，保持零依赖；不是 React/TypeScript 实现。请通过 HTTP 访问，而不要双击 HTML 文件。支持的浏览器应具备 IndexedDB、ES modules 和现代 CSS。

首次在线访问后，Service Worker 会缓存静态资源，后续可离线打开；私密浏览模式和浏览器策略可能限制缓存或存储。记录优先写入 IndexedDB；不可用时尝试 localStorage 并提醒，写入失败会提示。数据属于当前浏览器及设备，不自动同步。清理浏览器数据可能删除记录，请定期导出。

## 备份

设置 → 数据管理：完整备份 TXT 实际为格式化 JSON，可用 TXT/JSON 导回；阅读版 TXT 仅供阅读。导入先验证版本和记录格式，合并按 ID 去重；覆盖需要再次确认。建议先导出原有数据。

## 自定义

- Logo：`src/main.js` 中 `logo` SVG，可替换为自己的原创标志。
- 插画：`public/assets/counting/` 和 `public/assets/memory/`。现有 SVG 是原创示例；替换成 PNG/JPG/WebP 时，需同时修改 `src/main.js` 的图片路径和 `sw.js` 缓存列表。
- 原因、情绪、方法、短句和主题：`src/data/`；主题颜色及样式在 `src/style.css`。
- 关于页与版本日期：`src/main.js` 的 `about()`。

## GitHub Pages

将项目推送到 GitHub 仓库的 `main` 分支，在仓库 Settings → Pages → Build and deployment 将 Source 设置为 **GitHub Actions**。工作流 `.github/workflows/deploy.yml` 将测试、构建并发布 `dist/`。使用相对资源路径，兼容仓库项目页和自定义域名；无需硬编码仓库名。实际 URL 以 GitHub Actions 的部署结果为准。项目尚未自动创建仓库或在线发布。

## 后续扩展

存储适配器在 `src/lib/storage.js`；后续可以拆分记录、草稿和偏好存储并增加迁移。可加入 manifest、安装图标及更新提示，完善 PWA 安装体验。未来小程序或原生 App 可复用内容模型和导出格式，另行实现界面与存储适配。请在正式上线前完成不同设备、浏览器、键盘与屏幕阅读器的完整验收。

## V2 交互

设置中可选择五种主题。方法卡支持左右滑动、方向键和随机选择。呼吸工具默认每分钟 6 次，滑块可调节；关闭或切后台时可暂停。首次提示可以关闭，也可以选择不再提示。
