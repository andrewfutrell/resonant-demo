# Resonant — AI Meeting Notes Landing Page

A production-ready Next.js 14 landing page for a fictional AI meeting notes SaaS. Built as a portfolio piece showcasing editorial design, responsive layout, and modern frontend stack.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Fraunces, Geist, JetBrains Mono) — loaded via CSS import

## Design

Editorial/publication aesthetic — warm paper background, Fraunces serif display font with italic accents, single terracotta accent color, grain texture overlay, animated audio waveform. Intentionally avoids the generic "purple gradient SaaS" template.

## Sections

1. Nav
2. Hero (with animated demo card)
3. Logo strip (marquee)
4. How it works (3 steps)
5. Features (asymmetric bento grid)
6. Testimonial
7. Pricing (3 tiers)
8. FAQ (accordion)
9. CTA (email capture)
10. Footer

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Vercel auto-detects Next.js
4. Deploy (no env vars needed)
5. Add your custom domain in project settings

## Customization

- **Brand colors**: `tailwind.config.ts` — `paper`, `ink`, `accent`, `muted`, `line`
- **Fonts**: `app/globals.css` — swap the Google Fonts URL
- **Copy**: all text lives in the component files under `/components`
- **Metadata / SEO**: `app/layout.tsx`

## License

MIT — yours to use, modify, and ship.
