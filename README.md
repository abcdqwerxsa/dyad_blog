# 现代博客 (Modern Blog)

这是一个基于 React 和 TypeScript 构建的现代博客应用，使用 Tailwind CSS 和 shadcn/ui 进行美观且响应式的设计。后端数据和功能通过 Supabase 实现，包括文章管理、邮件订阅和 Edge Function 驱动的邮件通知。

## 🚀 功能特性

*   **文章浏览:** 浏览所有文章和分类。
*   **文章详情:** 查看文章内容，支持评论区（目前为模拟数据）。
*   **响应式设计:** 完美适配桌面和移动设备。
*   **主题切换:** 支持亮色/暗色模式切换。
*   **邮件订阅:** 用户可以订阅博客更新，通过 Supabase 数据库和 Edge Function 发送欢迎邮件。
*   **管理员发布 (`/new-post`):** 受密钥保护的页面，用于发布新文章，并自动触发邮件摘要通知给所有订阅者。

## 🛠️ 技术栈

*   **前端:** React, TypeScript, Vite
*   **路由:** React Router DOM
*   **样式:** Tailwind CSS, shadcn/ui
*   **状态管理/数据获取:** TanStack Query
*   **后端/数据库/认证:** Supabase
*   **邮件服务:** Resend (通过 Supabase Edge Function 调用)

## ⚙️ 本地运行

### 1. 克隆仓库

```bash
git clone [您的仓库地址]
cd dyad_blog
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

为了连接 Supabase 和启用管理员功能，您需要在项目根目录创建 `.env` 文件，并添加以下变量：

```
# Supabase URL 和 Anon Key 已经在 src/integrations/supabase/client.ts 中硬编码，
# 但为了 Edge Function 部署，您可能需要在 Supabase 控制台设置这些环境变量。

# 管理员密钥：用于访问 /new-post 页面
VITE_ADMIN_SECRET_KEY="your_secure_admin_key" 
```

> **注意:** 请将 `your_secure_admin_key` 替换为您自己的安全密钥。

### 4. 启动应用

```bash
npm run dev
```

应用将在 `http://localhost:5173` (或控制台显示的端口) 运行。

## 📝 管理员发布文章

### 访问路径

要发布新文章，请访问以下路径：

`/new-post`

### 访问控制

该页面受 `VITE_ADMIN_SECRET_KEY` 保护。您需要输入在 `.env` 文件中设置的密钥才能访问文章发布表单。

### 发布流程

1.  输入管理员密钥解锁页面。
2.  填写文章标题、摘要和内容。
3.  点击“发布文章”。
4.  文章将插入到 Supabase 的 `posts` 表中。
5.  **自动化:** Supabase 数据库触发器将自动调用 Edge Function (`send-post-digest`)，向所有订阅者发送包含文章摘要的邮件通知。

## 部署到 GitHub Pages

本项目已配置为支持部署到 GitHub Pages 的子路径。

1.  确保 `package.json` 中的 `build` 脚本包含 `cp dist/index.html dist/404.html`。
2.  确保 `vite.config.ts` 中的 `base` 设置正确（例如 `/dyad_blog/`）。
3.  使用 GitHub Actions (如 `.github/workflows/deploy.yml`) 进行部署。

> **重要:** `404.html` 文件是确保客户端路由（如直接访问 `/posts/1` 或 `/new-post`）在 GitHub Pages 上正常工作的关键。