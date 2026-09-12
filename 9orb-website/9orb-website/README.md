# 9orb — Corporate Website

Marketing/corporate site for 9orb. This is **not** the authenticated 9orb
Protect application — it links out to it.

## Stack

- Next.js 14 (App Router) + TypeScript (strict)
- Tailwind CSS
- No external UI/animation libraries — motion is CSS-only and respects
  `prefers-reduced-motion`.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_PROTECT_APP_URL` to point at the Protect application
(defaults to `http://localhost:3001` in development). Every "Launch
Protect" and "Sign In" action reads from `lib/config.ts` — nothing is
hardcoded per-component.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (`next/core-web-vitals`)
- `npm run typecheck` — `tsc --noEmit`

## Structure

```
app/                Route segments (App Router)
  protect/           Protect product page + /protect/pricing
  infrastructure/     Infrastructure page
  research/           Research / principal-capital page
  company/            Company page
  security/           Security page
  privacy/, terms/    Legal placeholders (need legal review)
components/
  layout/             Navbar, Footer, Logo
  ui/                 Design-system primitives (Button, Container, etc.)
  diagrams/           Product UI mockups and architecture diagrams
lib/
  config.ts           Centralized env-driven app URLs
  metadata.ts          Shared SEO metadata builder
```

## Notes

- No performance, uptime, node-count, or user-count statistics are
  invented anywhere in this codebase. Where real numbers don't yet
  exist, copy is deliberately qualitative.
- Proprietary trading / principal-capital content never uses
  investment-style CTAs ("Invest", "Deposit", "Join the Fund", etc.)
  and includes an explicit non-solicitation disclosure on `/research`.
- `/privacy` and `/terms` are structural placeholders and are marked
  as requiring legal review before publishing.
