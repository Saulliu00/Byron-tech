# 浙江拜伦智能科技有限公司 — 官方网站

Official website for **Byron Intelligence** (浙江拜伦智能科技有限公司).

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed as a static site.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro v4 |
| Styling | Tailwind CSS v3 |
| Forms | Web3Forms |
| Testing | Playwright |
| Node | v20+ |

---

## Getting Started

**Requirements:** Node.js v20+

```bash
# Install dependencies
npm install

# Start dev server (with hot reload)
npm run dev
# → http://localhost:4321
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm test` | Run Playwright regression tests |
| `npm run test:ui` | Run tests with list reporter |

---

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # Hero, ServicesOverview, ContactForm, etc.
│   └── ui/            # Button, ProductCard, ServiceCard, SectionHeader
├── data/
│   ├── company.ts     # Company info, tagline, contact details, ICP
│   ├── navigation.ts  # Nav items and dropdown structure
│   ├── products.ts    # Product catalogue
│   └── services.ts    # Three core service definitions
├── layouts/
│   └── BaseLayout.astro  # HTML shell, meta/OG tags
└── pages/
    ├── index.astro
    ├── about.astro
    ├── contact.astro
    ├── products.astro
    └── services/
        ├── index.astro
        ├── automation-parts.astro
        ├── vision-solutions.astro
        └── ai-solutions.astro

public/
├── logo.png           # Byron Intelligence logo (transparent background)
├── og-image.png       # Open Graph image (1200×630)
├── favicon.svg        # Browser favicon
└── robots.txt
```

---

## Content Updates

All site content is managed through `src/data/` — no template changes needed for routine updates.

| File | What to edit |
|---|---|
| `company.ts` | Company name, tagline, phone, email, address, ICP number |
| `services.ts` | Three core service titles, descriptions, and features |
| `products.ts` | Product catalogue, specs, and categories |
| `navigation.ts` | Nav links and dropdown structure |

---

## Assets

| File | Usage |
|---|---|
| `public/logo.png` | Header and footer logo (transparent PNG) |
| `public/og-image.png` | Social share preview image (1200×630 PNG) |
| `public/favicon.svg` | Browser tab icon |

To regenerate `og-image.png` after a logo change:
```bash
python3 -c "
from PIL import Image, ImageDraw, ImageFont
# See og-image generation script in project git history
"
```

---

## Contact Form

Forms are handled by [Web3Forms](https://web3forms.com) (free, no server required).

To change the recipient email:
1. Visit https://web3forms.com and enter your email
2. Copy the **Access Key** from the confirmation page
3. Replace the key in `src/components/sections/ContactForm.astro`

---

## Regression Tests

Tests live in [`tests/regression.spec.ts`](tests/regression.spec.ts) and cover:

- All pages return HTTP 200
- Navigation links and dropdown menus
- Header/footer logo rendering and branding text
- Homepage hero headline, description, service cards
- Contact form fields and accessibility attributes (`role="alert"`, `aria-live`)
- SEO meta tags (`og:url`, `og:image`, `canonical`, `lang`)
- Branding consistency — no stale copy, no typos

```bash
# Terminal 1 — start dev server
npm run dev

# Terminal 2 — run tests
npm test
```

---

## Deployment

Build and deploy the `dist/` folder to any static host:

- **Vercel / Netlify** — connect Git repo, auto-builds on push
- **阿里云 OSS / 腾讯云 COS** — upload `dist/` directly
- **Nginx** — point root to `dist/`

---

## ICP

备案号：**6E3862C7-4810AC**　　[工业和信息化部备案管理系统](https://beian.miit.gov.cn)
