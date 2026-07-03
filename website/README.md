# MATW Project USA — website recreation

A faithful rebuild of [matwprojectusa.org](https://matwprojectusa.org) in
**Next.js (App Router) + Tailwind CSS**.

## Status: homepage proof-of-concept

This first pass recreates the **homepage** structure, layout, navigation and
content, extracted from the original page's markup. The original is a Tailwind
site, so the utility classes reconstruct the styling directly.

### What's faithful
- Gradient header with full mega-menu (Give Now / Zakat / Islamic Giving /
  Amanah / About Us), language switcher, cart badge, Donate CTA
- Announcement marquee, quick-donate bar (currency, presets, program select)
- Hero slider, Urgent Appeals cards, Ali Banat legacy + video, Get Involved
  cards, trust/payment strip
- Full footer: 4 link columns, social, country switcher, 501(c)(3) copyright
- Responsive (mobile drawer nav, stacked layouts)

### What's still needed for a pixel-exact match
- **Real images** — the original `_files/` asset folder (logos, hero banners,
  appeal photos, icons) was not part of the source upload. All images are
  currently branded placeholders (`components/Placeholder.jsx`). Drop the real
  assets into `public/` and swap the placeholders for `<img>`/`next/image`.
- **Remaining pages** — 60+ inner pages (zakat, sadaqah, appeals, calculators,
  policies, contact, FAQ, etc.). Provide each page's export to rebuild them.
- **Fonts** loaded from Google Fonts via `<link>`; the original also uses a
  script font ("gotcha") substituted here with Dancing Script.
- Currency defaults to **USD** for the US site (the saved snapshot showed GBP).

## Run locally

```bash
cd website
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure
```
app/          layout, globals.css, page.jsx (homepage)
components/   Header, Footer, QuickDonateBar, HeroSlider, Placeholder
lib/          siteData.js — nav, appeals, footer content (single source of truth)
```
