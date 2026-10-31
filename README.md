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

## Deploy (Cloudflare Workers, one time)

1. Cloudflare dashboard → Workers & Pages → Create → Import a repository → pick this repo.
2. Build command `npm run build`, deploy command `npx wrangler deploy` (it reads `wrangler.jsonc`, which serves `dist/`).
3. After the first deploy: the project → Settings → Domains & Routes → Add → Custom domain → `www.adastrahp.org`, then `adastrahp.org`.

Every push to `main` redeploys automatically.

## Purchase paths

- In-facility packages: Mindbody (`links.mindbody`).
- Train-anywhere packages: Diamond Protocol / Stripe (`links.diamondBook`).
- Questions and leads: Diamond Protocol "Ask about training" form (`links.leadForm`), which drops inquiries into Leads with automatic follow-up.
