// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';


import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://time-life3.com',
  output: 'server',
  integrations: [sitemap()],

  adapter: netlify()
});