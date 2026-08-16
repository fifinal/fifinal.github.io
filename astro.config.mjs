// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Situs pengguna GitHub Pages — dilayani dari akar domain, jadi `base`
  // tidak perlu diisi. Ganti bila nanti pindah ke domain sendiri.
  site: 'https://fifinal.github.io',
  build: { inlineStylesheets: 'auto' },
});
