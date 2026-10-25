# Technical Decisions

## 1. Next.js App Router with Static Generation
**Decision**: Use Next.js 16 with App Router and SSG (not SSR or a headless CMS).
**Rationale**: Fastest possible page loads, cheapest hosting, SEO-friendly. Product data is managed in
`src/data/products.ts` and rebuilt on deploy — no runtime database queries needed for browsing.
**Trade-off**: Adding a product requires a rebuild and redeploy. Acceptable at launch scale.
**Future**: Move to Shopify Storefront API or a headless CMS if catalogue exceeds ~200 products or
merchant wants a no-code admin interface.

## 2. Client-side cart with Zustand + localStorage
**Decision**: Cart state lives in the browser (Zustand persisted to localStorage).
**Rationale**: No backend required for cart browsing. Fast, no API round-trips for add/remove/update.
**Trade-off**: Cart is not synced across devices. Acceptable for launch.
**Security**: Cart items are display-only. Server recalculates totals at checkout via Razorpay order creation.
Never trust client-submitted prices.

## 3. Razorpay for payments (India-focused)
**Decision**: Razorpay as the payment provider.
**Rationale**: Best Indian e-commerce payment gateway; supports UPI, cards, net banking, EMI; INR native;
reasonable fees; strong developer APIs.
**Status**: NOT yet integrated. Checkout is disabled in `CartPageClient.tsx` pending merchant account setup.

## 4. Product data in TypeScript source file
**Decision**: `src/data/products.ts` is the single source of truth for products, not a database or CMS.
**Rationale**: Zero infrastructure cost, full type safety, version-controlled product history.
**Trade-off**: Non-technical team members cannot update products without a code change.
**Future path**: Migrate to Sanity, Contentful, or Shopify admin when non-technical updates are needed.

## 5. Tailwind v4 with CSS-based config
**Decision**: Using Tailwind CSS v4 which configures via `@theme` in CSS (no `tailwind.config.ts`).
**Rationale**: This is the project's installed version. CSS variables approach is cleaner.
**Note**: Brand tokens live in `src/app/globals.css` under `@theme inline {}`.

## 6. No dark mode
**Decision**: Brand uses warm ivory/charcoal palette. Dark mode is not implemented.
**Rationale**: The warm ivory (#F6F3EC) and porcelain (#FCFAF6) backgrounds define the brand aesthetic.
Dark mode would require a full secondary palette and significant design work.

## 7. India-only launch
**Decision**: Site is configured for INR, India shipping, and India-focused payment.
**Rationale**: Per brief. All prices in ₹ using `formatPrice()` with `en-IN` locale.
**Future**: Multi-currency support would require significant changes to pricing model.
