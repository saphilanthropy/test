# MATW Project USA — website recreation

A faithful rebuild of [matwprojectusa.org](https://matwprojectusa.org) in
**Next.js (App Router) + Tailwind CSS**.

## Scope: homepage

This project recreates the matwprojectusa.org **homepage**, extracted from the
original page's markup and asset export. The original is a Tailwind site, so the
utility classes reconstruct the styling directly. (Inner pages are intentionally
out of scope for this build.)

### What's faithful
- Gradient header with full mega-menu (Give Now / Zakat / Islamic Giving /
  Amanah / About Us), language switcher, cart badge, Donate CTA
- Announcement marquee, quick-donate bar (currency, presets, program select)
- Hero slider, Urgent Appeals cards, Ali Banat legacy + video, Get Involved
  cards, trust/payment strip
- Full footer: 4 link columns, social, country switcher, 501(c)(3) copyright
- Responsive (mobile drawer nav, stacked layouts)

### Notes / minor substitutions
- **Real assets** from the original `_files/` export are wired in (logo, nav
  icons, hero banners, get-involved photos, payment/social icons, footer logos).
- The **4 Urgent-Appeals card photos** were lazy-loaded from a CDN on the
  original and weren't in the export, so each is mapped to its matching hero
  image as a stand-in (`lib/siteData.js`).
- **Fonts** load from Google Fonts via `<link>`; the original's script font
  ("gotcha") is substituted with Dancing Script.
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
components/   Header, Footer, QuickDonateBar, HeroSlider
lib/          siteData.js — nav, appeals, footer content (single source of truth)
public/       assets/ — logos, hero + card images, payment/social icons
```
