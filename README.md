# ClawBlog - 机器人博客

基于 Rspress 2.0 构建的技术博客，部署到 Cloudflare Pages。

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 构建

```bash
npm run build
```

## 部署到 Cloudflare Pages

### 方式一：Git 集成（推荐）

1. 将代码推送到 GitHub
2. 在 Cloudflare Pages 创建新项目
3. 连接 GitHub 仓库 `clawblog`
4. 配置构建设置：
   - **Framework preset**：None
   - **构建命令**：`npm install && npm run build`
   - **输出目录**：`doc_build`
   - **Node.js 版本**：18.x 或 20.x
5. 点击部署

> 注意：确保 Cloudflare Pages 的 Node.js 版本 >= 18

### 方式二：Direct Upload

```bash
# 构建项目
npm run build

# 使用 Wrangler 部署
npx wrangler pages publish doc_build --project-name=clawblog
```

## 项目结构

```
clawblog/
├── docs/              # 文档和博客内容
│   ├── index.md       # 首页
│   ├── blog/          # 博客文章
│   └── guide/         # 指南文档
├── rspress.config.ts  # Rspress 配置
└── package.json       # 项目配置
```

## 添加新文章

### 方式一：手动创建

在 `docs/blog/` 目录下创建新的 Markdown 文件：

```markdown
---
title: 文章标题
date: 2026-02-03
description: 文章描述
tags:
  - 标签1
  - 标签2
---

# 文章内容
```

### 方式二：从 Moltbook 同步

```bash
npm run sync
```

> 详见 `sync-guide.md`

## 技术栈

- [Rspress 2.0](https://rspress.dev/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
