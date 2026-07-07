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

## Localization (English + Spanish)

The site is bilingual:
- **English** at `/` · **Spanish** at `/es`
- All copy lives in `lib/content.js` as a per-locale dictionary
  (`getContent('en' | 'es')`); components are locale-agnostic and receive a
  `content` object. Spanish strings come from the site's own translation.
- The header language switcher links English → `/` and Español → `/es`
  (other languages are listed but not yet translated).
- `<html lang>` is set per locale.

To add another language: add a locale object to `lib/content.js` and a
`app/<locale>/page.jsx` that renders `<HomePage content={getContent('<locale>')} locale="<locale>" />`.

## Donations (Stripe)

Donate buttons use **Stripe Checkout** (hosted, PCI-compliant redirect):
- The Quick Donate bar supports **one-time** and **monthly** giving, preset or
  custom amounts, and a program selector.
- Header "Donate" and each appeal card's button start a one-time checkout.
- `app/api/checkout/route.js` creates the Checkout Session; the client is sent
  to Stripe's hosted page. On completion Stripe redirects to
  `/donate/success` (or `/donate/cancel`).

### Setup (required to take real donations)
1. Create a free Stripe account → copy your secret key from
   https://dashboard.stripe.com/apikeys
2. `cp .env.example .env.local` and set `STRIPE_SECRET_KEY` (use `sk_test_…`
   while testing). **`.env.local` is git-ignored — never commit real keys.**
3. `npm run dev`, click a donate button, and pay with Stripe's test card
   `4242 4242 4242 4242`, any future expiry, any CVC.
4. In production, set `STRIPE_SECRET_KEY` (a `sk_live_…` key) in your host's
   environment variables (e.g. Vercel → Project → Settings → Environment
   Variables) — not in a committed file.

### Webhook (records donations server-side)
`app/api/webhook/route.js` verifies Stripe's signature and handles
`checkout.session.completed` (one-time + first subscription payment) and
`invoice.paid` (monthly renewals). It calls `recordDonation()` in
`lib/donations.js`, which currently logs a structured record — swap that for a
database write, receipt email, or CRM push.

Set `STRIPE_WEBHOOK_SECRET` (see `.env.example`).

**Test locally** with the Stripe CLI:
```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhook   # prints whsec_… → .env.local
stripe trigger checkout.session.completed               # in another terminal
```
Watch the `[donation]` line appear in your dev server logs.

**Production:** create the endpoint at
https://dashboard.stripe.com/webhooks with URL `https://YOUR_DOMAIN/api/webhook`,
subscribe to `checkout.session.completed` and `invoice.paid`, and copy its
signing secret into your host's env vars.

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
