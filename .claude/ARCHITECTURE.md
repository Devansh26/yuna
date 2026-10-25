# Architecture

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 (CSS-based config in globals.css) |
| State | Zustand (cart), persisted to localStorage |
| Fonts | Cormorant Garamond (serif/editorial) + Inter (sans) via Google Fonts |
| Icons | Lucide React |
| Build | Next.js static generation (SSG) |

## Directory structure

```
src/
  app/                    # Next.js App Router pages
    layout.tsx            # Root layout: announcement bar, header, footer, cart drawer
    page.tsx              # Homepage
    shop/page.tsx         # All products
    matcha/page.tsx       # Matcha collection
    hojicha/page.tsx      # Hojicha collection
    blends/page.tsx       # Blends collection
    accessories/page.tsx  # Accessories & glassware
    gifts/page.tsx        # Gift sets
    products/[slug]/      # Product detail page (SSG)
      page.tsx            # Server component
      AddToCartWrapper.tsx # Client component for variant/cart
    cart/                 # Cart page
    story/page.tsx        # Our story page
    search/               # Search (client-side)
    globals.css           # Tailwind + brand design system

  components/
    layout/               # AnnouncementBar, Header, Footer, CartDrawer
    ui/                   # Button, Container, ProductCard
    home/                 # Hero, CategoryGrid, Bestsellers, EditorialFeature,
                          # Comparison, GiftSets, BrandStory, PrepGuide, Newsletter
    product/              # VariantSelector, AddToCart

  data/
    products.ts           # All product data (source of truth)

  lib/
    types.ts              # TypeScript interfaces
    utils.ts              # formatPrice, cn, slugify
    cart-store.ts         # Zustand cart store
```

## Key patterns

- **Prices in paise**: All `price` fields are `number` representing Indian paise (INR × 100).
  Use `formatPrice(paise)` to render as ₹ string.
- **Cart persistence**: Zustand + `persist` middleware writes cart to `localStorage['yuna-cart']`.
- **Product data**: Centralized in `src/data/products.ts`. No API or database yet.
  Add/update products by editing that file and running `npm run build`.
- **Static generation**: All product pages are pre-generated at build time via `generateStaticParams`.
- **Client boundary**: `'use client'` is used only where interactivity is needed (cart, search, variants).
