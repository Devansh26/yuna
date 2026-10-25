# Deployment Guide

## Status: Locally implemented and build-verified. Not yet deployed.

## Prerequisites

- Node.js 18 or later (tested on v22.15.0)
- npm 9 or later
- Git

## Local development

```bash
# Install dependencies
npm install

# Start dev server (port 3000, or 3002 if 3000 is taken)
npm run dev

# Build for production
npm run build

# Start production server locally
npm start
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in values.
Never commit `.env.local`.

Required for checkout:
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` — Razorpay test key (rzp_test_...)
- `RAZORPAY_KEY_SECRET` — Secret key (server-side only, never expose to browser)

Required for newsletter:
- `EMAIL_PROVIDER_API_KEY`

Optional:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics
- `SHIPPING_API_KEY` — Shiprocket or similar

## Deployment: Vercel (recommended)

1. Push code to GitHub (already done)
2. Import repo at vercel.com/new
3. Framework preset: Next.js (auto-detected)
4. Add environment variables in Vercel dashboard
5. Deploy

Vercel automatically:
- Runs `npm run build`
- Serves static pages from CDN
- Handles `/api` routes as serverless functions
- Provides HTTPS

**Estimated cost**: Free tier for launch scale.

## Deployment: Other options

### Netlify
- Same process as Vercel
- Use `npm run build` and publish `.next` dir

### Self-hosted (VPS)
- Build with `npm run build`
- Start with `npm start`
- Use nginx as reverse proxy
- Use PM2 for process management
- Provision HTTPS with Let's Encrypt

## Pre-deployment checklist

- [ ] `npm run build` passes with 0 errors
- [ ] All environment variables set in hosting dashboard
- [ ] Razorpay in TEST mode until merchant account verified
- [ ] Custom domain configured
- [ ] HTTPS enabled
- [ ] Payment webhook URL set in Razorpay dashboard
- [ ] Newsletter provider connected
- [ ] Real product photos uploaded
- [ ] Announcement bar content reviewed

## Production domain

Placeholder: `yunatea.in`
Update `metadataBase` in `src/app/layout.tsx` once domain is confirmed.
