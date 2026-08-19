# MaxLase.com — Site Source

Static site (no build step) for maxlase.com. Plain HTML/CSS/JS, ready to deploy to Netlify.

## Structure

- `index.html` — homepage
- `shop.html` — full product lineup + accessories
- `products/` — individual product pages (100, 150, 200, 230X, 200P)
- `jewelers.html` / `industrial.html` — audience-specific landing pages
- `technology.html` — Nd:YAG / how-it-works explainer
- `support.html` — service, warranty, training
- `about.html` — company story, Weld Solutions tie-in
- `contact.html` — quote request form (wired for Netlify Forms)
- `videos.html` — placeholder for the future video library
- `partials/header.html`, `partials/footer.html` — shared nav/footer, injected via `js/main.js`
- `css/style.css` — single shared stylesheet
- `assets/logos/`, `assets/images/` — optimized logo and product images

## Deploying to Netlify

1. Push this folder to a GitHub repo (recommended), or drag-and-drop the folder into Netlify's "Deploys" tab for a manual deploy.
2. In Netlify: **Add new site → Import from Git** (or drag-and-drop for a one-off).
3. Build command: none. Publish directory: `.` (repo root) — already set in `netlify.toml`.
4. Point your `maxlase.com` domain at the Netlify site in **Domain settings**.
5. The contact form on `contact.html` uses Netlify's built-in form handling (`data-netlify="true"`) — submissions will show up under **Forms** in the Netlify dashboard automatically once deployed. No backend needed.

## Content still to fill in

- Real phone number and email (placeholders: `info@maxlase.com`, a placeholder phone number in the footer/contact page)
- Final pricing confirmation per system (pulled from `MaxLase Master.xlsx` — confirm before launch, especially the 230X and 200P which are flagged "retail to set")
- Video library (`videos.html` is a placeholder until footage is ready)
- eCommerce / checkout flow (Phase 2 — current site is informational + quote-request; a "Buy Now" flow for accessories and a "Request Quote" flow for capital equipment is recommended, e.g. via Snipcart or Stripe Checkout)
- "Coming Soon" 6th product — swap in real name/specs when ready (currently a placeholder card on the homepage and shop page)

## Notes

- All internal links use root-relative paths (`/shop.html`, `/assets/...`) — this works correctly on Netlify regardless of folder depth.
- Header/footer are loaded via `fetch()` in `js/main.js` so you only maintain them in one place. If you later add a build step, consider swapping this for a real templating/SSG tool (11ty, Astro, etc.) for slightly better SEO/performance — the current fetch-based approach works fine for a site this size.
