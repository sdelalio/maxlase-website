# MaxLase.com — Site Source

Static site (no build step) for maxlase.com. Plain HTML/CSS/JS, ready to deploy to Netlify.

## Structure

- `index.html` — homepage
- `shop.html` — full product lineup + accessories
- `products/` — individual product pages (100, 150, 200, 230X, 200P)
- `jewelers.html` / `industrial.html` — audience-specific landing pages
- `technology.html` — Nd:YAG / how-it-works explainer, incl. why Nd:YAG vs. fiber for reflective metals
- `support.html` — service, warranty, training
- `about.html` — company story, Weld Solutions tie-in
- `resources.html` — video library, weld parameter quick-reference, bench tips
- `contact.html` — quote request form (wired for Netlify Forms)
- `partials/header.html`, `partials/footer.html` — shared nav/footer, inlined directly into every page (no fetch/JS dependency, works even opened via file://)
- `css/style.css` — single shared stylesheet
- `assets/logos/`, `assets/images/`, `assets/videos/` — optimized logo, product, and video assets (photos pulled from the real sales sheets; videos re-encoded for web delivery)

## Deploying to Netlify

1. Push this folder to your GitHub repo (`maxlase-website`), replacing the existing files.
2. Netlify will auto-redeploy on push if it's already connected — no action needed there.
3. Build command: none. Publish directory: `.` (repo root) — already set in `netlify.toml`.
4. The contact form on `contact.html` uses Netlify's built-in form handling (`data-netlify="true"`) — submissions show up under **Forms** in the Netlify dashboard automatically.

## The online quote builder (quote.maxlase.com)

Every "Buy Online" button sitewide links to `https://quote.maxlase.com` — your existing quote-builder tool (`quoter/website/` in your MaxLase folder). That tool is a **separate site with its own deploy** per its own README: a separate GitHub repo (`maxlase-quote`) and Netlify project, with the custom domain `quote.maxlase.com`. It is NOT part of this repo — keep it separate since it has its own encrypted back-office logic. If `quote.maxlase.com` isn't live yet, those buttons will 404 until that site is deployed.

## Content still to fill in

- Real phone number in the footer/contact page (currently a placeholder)
- Final pricing confirmation on the 230X and 200P (flagged "retail to set" in `MaxLase Master.xlsx`)
- Deploy `quote.maxlase.com` (see above) so the "Buy Online" buttons work
- "Coming Soon" 6th product — swap in real name/specs on the homepage/shop page when ready
- Resources page: keep adding videos/tips over time — drop new files in `assets/videos/` and add a card in `resources.html`

## Notes

- All internal links use root-relative paths (`/shop.html`, `/assets/...`) — works correctly on Netlify regardless of folder depth.
- Header/footer are duplicated into every page's HTML (not fetched via JS) — edit `partials/header.html` / `partials/footer.html` as the source of truth, then re-run the same find/replace across all pages if you hand-edit them again (ask Claude to do this in one pass rather than editing each page individually).
