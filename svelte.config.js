import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// vite: {
		// 	optimizeDeps: {
		// 		include: ['@silintl/ui-components']
		// 	}
		// },

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	vitePlugin: {
		experimental: {
			prebundleSvelteLibraries: true
		}
	}
};

export default config;
