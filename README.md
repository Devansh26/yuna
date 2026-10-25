# YUNA — Japanese Tea, Quietly Made

Contemporary Japanese tea and matcha lifestyle brand e-commerce storefront.
India-focused. Sourced from Japan.

## Stack

- **Next.js 16** (App Router, TypeScript, SSG)
- **Tailwind CSS v4** (CSS-based design system)
- **Zustand** (cart state, localStorage persisted)
- **Lucide React** (icons)

## Getting started

```bash
# Install
npm install

# Copy env template
cp .env.example .env.local
# Edit .env.local with your values

# Dev server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Key files

| Path | Purpose |
|------|---------|
| `src/data/products.ts` | All product data — edit here to add/update products |
| `src/app/globals.css` | Brand design system (colours, fonts, tokens) |
| `src/lib/cart-store.ts` | Zustand cart store |
| `src/lib/types.ts` | TypeScript interfaces |
| `src/lib/utils.ts` | `formatPrice()`, `cn()`, `slugify()` |
| `.env.example` | All required environment variable names |
| `.claude/` | Project documentation for future Claude sessions |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with full editorial experience |
| `/shop` | All products |
| `/matcha` | Matcha collection |
| `/hojicha` | Hojicha collection |
| `/blends` | Flavoured blends |
| `/accessories` | Tools & glassware |
| `/gifts` | Gift sets |
| `/products/[slug]` | Product detail |
| `/cart` | Cart page |
| `/story` | Our story |
| `/search` | Client-side search |

## Adding a product

Edit `src/data/products.ts`. Copy an existing product block and update:
- `id`, `slug`, `name`, `shortDescription`, `description`
- `category`, `productType`
- `images` (place files in `public/images/products/`)
- `variants` (prices in paise: ₹1,290 = `129000`)
- Other optional fields

Run `npm run build` to verify, then deploy.

## Before launch checklist

- [ ] Add real product photos
- [ ] Configure Razorpay (test mode first)
- [ ] Wire up newsletter provider (Klaviyo/Mailchimp)
- [ ] Set environment variables on hosting provider
- [ ] Configure custom domain
- [ ] Enable Razorpay webhook in dashboard
- [ ] Switch payment to production mode after merchant verification

See `.claude/NEXT_ACTIONS.md` for the full implementation roadmap.

## Deployment

Recommended: [Vercel](https://vercel.com) — one-click deploy from GitHub.
See `.claude/DEPLOYMENT.md` for full instructions.

---

*YUNA — Japanese tea, quietly made.*
