// import adapter from '@sveltejs/adapter-auto';
// Static site generation import
// import adapter from '@sveltejs/adapter-static';
import netlify from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

// Static site generation configuration
// default options are shown. On some platforms
// these options are set automatically — see below
// {      pages: 'build',
//       assets: 'build',
//       fallback: null,
//       precompress: false,
//       strict: true}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: netlify({
			edge: false,
			fallback: null,
			split: false
		})
	}
};

export default config;
