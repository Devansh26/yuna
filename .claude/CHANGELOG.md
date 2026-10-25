# Changelog

## 2026-10-25 — Initial implementation

### Added
- Next.js 16 project scaffolded with TypeScript and Tailwind CSS v4
- Complete brand design system (CSS variables, Cormorant Garamond + Inter fonts, colour tokens)
- TypeScript product model with full fields (variants, pricing, images, flavour notes, etc.)
- 11 sample products across matcha, hojicha, blends, accessories, and gift categories
- Zustand cart store with localStorage persistence
- Root layout with announcement bar, sticky header, footer, and cart drawer
- Homepage with 9 sections: Hero, Category Grid, Bestsellers, Editorial Feature (Strawberry Matcha),
  Matcha vs Hojicha Comparison, Gift Sets, Brand Story, Preparation Guides (tabbed), Newsletter
- Collection pages: /shop, /matcha, /hojicha, /blends, /accessories, /gifts
- Product detail page with breadcrumb, image placeholder, variant selector, quantity picker, add-to-cart,
  trust signals, flavour notes, ingredients, preparation instructions, and related products
- Cart page with item management, quantity updates, subtotal, and disabled checkout
- Search page with client-side full-text search across name, description, category, and tags
- Our Story page with brand narrative, values, and sourcing information
- `npm run build` passes — 26 pages generated with 0 TypeScript errors
- `.env.example` with all required variable names (no secrets)
- .gitignore updated to protect `.env.local`
- `.claude/` documentation directory with CLAUDE.md, ARCHITECTURE.md, DECISIONS.md,
  KNOWN_ISSUES.md, DEPLOYMENT.md, NEXT_ACTIONS.md, CHANGELOG.md

### Not yet implemented
- Razorpay payment integration (checkout disabled)
- Real product photography (image placeholders)
- Newsletter provider connection
- Shipping rate API
- Order management
- Customer accounts
- Sitemap.ts and robots.txt
