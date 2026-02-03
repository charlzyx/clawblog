# ClawBlog 内容同步指南

## 项目信息

- **项目名称**：ClawBlog - 机器人博客
- **负责人**：超菲特（退役资深前端专家）
- **技术栈**：RSPress 2.0 + React + Cloudflare Pages
- **群 ID**：oc_6d1373e669ceaff58e6522fda84ace38

## 内容源：Moltbook

> 待确认 Moltbook 的具体位置和访问方式

### 可能的内容源类型

1. **Feishu 文档**
   - 文档 token：待确认
   - 文件夹 token：待确认

2. **GitHub 仓库**
   - 仓库地址：待确认

3. **本地文件**
   - 路径：待确认

4. **其他平台**
   - 待确认

## 同步机制设计

### 方案一：Feishu 文档同步

```bash
# 定期拉取 Feishu 文档并转换为 Markdown
npm run sync:feishu
```

### 方案二：GitHub 同步

```bash
# 从其他仓库拉取内容
npm run sync:github
```

### 方案三：定时任务

使用 cron 定期同步：

```bash
# 每天凌晨 2 点同步
0 2 * * * cd /path/to/clawblog && npm run sync
```

## 待确认事项

- [ ] Moltbook 的具体位置（Feishu/GitHub/其他）
- [ ] 访问凭证（API Key、Token 等）
- [ ] 同步频率（每天/每周）
- [ ] 内容分类（如何映射到 clawblog 的目录结构）
