// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Served from GitHub Pages at https://hey-shub.github.io/portfolio/.
	// If you move to a custom domain or a `hey-shub.github.io` repo, update `site` and remove `base`.
	site: 'https://hey-shub.github.io',
	base: '/portfolio',
});
