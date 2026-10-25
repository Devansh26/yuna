# Known Issues & Limitations

## Critical (blocking launch)

### KI-001: Payment not integrated
**Impact**: Checkout button is disabled. No real transactions possible.
**Fix**: Implement Razorpay. See NEXT_ACTIONS.md #1.

### KI-002: No real product photography
**Impact**: Product cards and detail pages show ivory placeholder blocks where photos should be.
**Fix**: Add photos to `public/images/products/` and update `src/data/products.ts` image `src` fields.

## Important (affects experience)

### KI-003: No order management
**Impact**: No way to view, fulfil, or manage orders.
**Fix**: Either use Razorpay dashboard for order visibility, or build a simple admin page (requires auth).

### KI-004: Newsletter not wired up
**Impact**: Newsletter signup form shows success but doesn't actually subscribe.
**Fix**: Add Klaviyo/Mailchimp API. See NEXT_ACTIONS.md #4.

### KI-005: Cart not synced across devices
**Impact**: Cart items are stored in localStorage — clearing cookies loses the cart.
**Fix**: Acceptable for launch. Sync to server session after payment integration is added.

### KI-006: No shipping calculation
**Impact**: Shipping costs are shown as "calculated at checkout" but no rate is fetched.
**Fix**: Add Shiprocket integration. See NEXT_ACTIONS.md #6.

## Minor (low priority)

### KI-007: No 404 page customization
**Impact**: Uses Next.js default not-found styles.
**Fix**: Create `src/app/not-found.tsx` with YUNA branding.

### KI-008: No sitemap.ts
**Impact**: Search engines must crawl manually.
**Fix**: Create `src/app/sitemap.ts` using Next.js metadata API.

### KI-009: No robots.txt
**Fix**: Create `public/robots.txt`.

### KI-010: Google Fonts loaded via @import in CSS (not next/font)
**Impact**: Minor FOUT risk; slightly slower font loading vs next/font optimization.
**Fix**: Migrate to `next/font/google` in layout.tsx for automatic optimization.
