# Ad Astra website: notes for Claude

- Static Astro site on Cloudflare Pages; pushing to `main` deploys.
- Business facts, packages, prices, links and FAQs live in `src/site.config.ts`. Edit there, not in page markup.
- Brand: dark (#070908 / forest #0f2318), silver metallic headings (`.metal`), one green (#3fc46c; text uses #4dce7a). Display font Montserrat uppercase for h1, Inter for body. Use only the logo files in `public/brand/`; never redraw or recolor the mark.
- Voice: direct, calm, specific, like a good coach. No hype, no emoji.
- Every page needs a title and description (SEO). FAQ page emits FAQPage schema from `faqs`.
- Run `npm run build` before pushing; it must pass.
