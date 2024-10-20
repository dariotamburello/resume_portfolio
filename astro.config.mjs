import { defineConfig } from 'astro/config';
import { languages, defaultLang } from './src/i18n/utils';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    locales: Object.keys(languages),
    defaultLocale: defaultLang,
    routing: {
      prefixDefaultLocale: true
    }
  },
});