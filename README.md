# Ad Astra Human Performance website

The public site for www.adastrahp.org. Built with [Astro](https://astro.build) as a static site and hosted on Cloudflare Pages.

## Change something

Almost everything lives in `src/site.config.ts`: business details, location, purchase links, packages and prices, and FAQs. Change a value there, push to `main`, and Cloudflare Pages rebuilds the site in about a minute.

Pages are in `src/pages/`, shared pieces in `src/components/`, colors and type in `src/styles/global.css`, logos in `public/brand/`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (Cloudflare Pages, one time)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Framework preset: **Astro**. Build command `npm run build`, output directory `dist`.
3. After the first deploy: the project → Custom domains → add `www.adastrahp.org` (and `adastrahp.org`). Cloudflare adds the DNS records since the domain is already there.
4. Redirect the bare domain to www: Rules → Redirect Rules → `adastrahp.org/*` → `https://www.adastrahp.org/${1}`, 301.

## Purchase paths

- In-facility packages: Mindbody (`links.mindbody`).
- Train-anywhere packages: Diamond Protocol / Stripe (`links.diamondBook`).
- Questions and leads: Diamond Protocol "Ask about training" form (`links.leadForm`), which drops inquiries into Leads with automatic follow-up.
