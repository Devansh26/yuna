# Next Actions (Priority Order)

## P0 — Required before any real transactions

### 1. Razorpay integration
- Create Razorpay account at dashboard.razorpay.com
- Add test keys to `.env.local`: `NEXT_PUBLIC_RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`
- Create `/api/orders/create` route: accepts cart items, calculates total server-side, creates Razorpay order
- Create `/api/orders/verify` route: verifies webhook signature before fulfilling order
- Enable checkout button in `src/app/cart/CartPageClient.tsx`
- Files to create: `src/app/api/orders/create/route.ts`, `src/app/api/orders/verify/route.ts`

### 2. Real product photography
- Replace placeholder image paths with actual product photos
- Recommended: 800×1000 px minimum, JPEG or WebP
- Place in `public/images/products/` and `public/images/categories/`
- Update `src/data/products.ts` image paths

### 3. Deploy to production
- Recommended: Vercel (one-click, Next.js native)
- Run `npm run build` locally first to verify
- Set environment variables in Vercel dashboard
- Configure custom domain (yunatea.in or similar)
- Add `metadataBase` URL in `src/app/layout.tsx` once domain is confirmed

## P1 — Important enhancements

### 4. Email / newsletter
- Choose provider: Klaviyo (recommended for e-commerce) or Mailchimp
- Add API key to `.env.local`
- Wire up `src/components/home/Newsletter.tsx` `handleSubmit` to provider API
- Create `/api/newsletter/subscribe` route

### 5. Order confirmation emails
- Trigger from the webhook verify route after successful payment
- Use Resend or SendGrid for transactional email

### 6. Shipping integration
- Shiprocket or Delhivery for India shipping
- Add shipping rate API to checkout flow
- Create `/api/shipping/rates` route

### 7. Analytics
- Add Google Analytics 4 measurement ID to `.env.local`
- Create `src/components/Analytics.tsx` with gtag events
- Fire events: page_view, view_item, add_to_cart, begin_checkout, purchase

## P2 — Growth features

- Customer accounts (NextAuth.js)
- Product reviews (once real orders exist)
- Wishlist
- Subscription / recurring orders
- Wholesale pricing
- Bundle builder for custom gift sets

## Operational

- Add robots.txt and sitemap.xml (Next.js 13+ supports `app/sitemap.ts`)
- Set up error monitoring (Sentry free tier)
- Enable Vercel Analytics for Core Web Vitals
