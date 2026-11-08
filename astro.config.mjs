import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.adastrahp.org',
  // Hidden pages: reachable by link only, never in the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/legacy/') })],
});
