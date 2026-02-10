# 浙江拜伦智能科技有限公司 — 官方网站

基于 [Astro](https://astro.build) 构建的全静态企业官网。

## 快速开始

### 前提条件
- Node.js 18+（推荐 LTS 版本）
- npm / pnpm / bun

### 安装与运行

```bash
# 安装依赖
npm install

# 本地开发（热更新）
npm run dev

# 构建静态文件（输出至 dist/）
npm run build

# 预览构建产物
npm run preview
```

## 项目结构

```
src/
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # 页面区块（Hero, Services, CtaBanner…）
│   └── ui/            # 原子组件（Button, Card, SectionHeader…）
├── data/              # 内容数据（公司信息、服务、产品）
├── layouts/           # 基础布局 BaseLayout.astro
├── pages/             # 路由页面
│   ├── index.astro       首页
│   ├── about.astro       关于我们
│   ├── products.astro    产品中心
│   ├── contact.astro     联系我们
│   └── services/
│       ├── index.astro
│       ├── automation-parts.astro
│       ├── vision-solutions.astro
│       └── ai-solutions.astro
└── styles/
    └── global.css
```

## 内容更新

所有业务内容集中在 `src/data/` 目录下：

| 文件 | 说明 |
|------|------|
| `company.ts` | 公司名称、联系方式、统计数据 |
| `services.ts` | 三大业务领域描述与特性 |
| `products.ts` | 产品目录与规格参数 |
| `navigation.ts` | 导航菜单结构 |

## 部署

构建后将 `dist/` 目录部署到任意静态托管平台：

- **Vercel** / **Netlify**：连接 Git 仓库，自动构建
- **阿里云 OSS** / **腾讯云 COS**：上传 `dist/` 即可
- **Nginx**：将根目录指向 `dist/`

## 联系表单

当前表单使用 Netlify Forms 属性（`data-netlify="true"`）。
若部署到其他平台，请修改 `src/components/sections/ContactForm.astro` 中的表单处理方式。
