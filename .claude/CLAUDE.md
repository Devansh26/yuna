# YUNA — Claude Code Project Context

YUNA is a Japanese tea and matcha lifestyle e-commerce brand targeting India.
Before modifying code, read the relevant context files in this directory.

## Quick navigation

| File | Contents |
|------|----------|
| PROJECT_CONTEXT.md | Business goals, customer journeys, priorities |
| ARCHITECTURE.md | Tech stack, file structure, entry points |
| PRODUCT_SPEC.md | Product catalogue, data model |
| DESIGN_SYSTEM.md | Brand tokens, typography, components |
| DEPLOYMENT.md | Build, env vars, hosting notes |
| NEXT_ACTIONS.md | Immediate next steps |
| KNOWN_ISSUES.md | Current limitations |
| DECISIONS.md | Technical decisions with rationale |
| CHANGELOG.md | Implementation milestones |

## Critical rules

1. Never commit `.env.local` or real credentials.
2. All prices stored in paise (INR × 100). Format with `formatPrice()` from `@/lib/utils`.
3. Payment integration is NOT live — checkout is disabled until Razorpay is configured.
4. Product data lives in `src/data/products.ts` — edit there to add/update products.
5. The site is static-first (Next.js SSG). Server components unless interactivity is required.
6. Verify changes with `npm run build` before pushing. All 26 pages must pass.
