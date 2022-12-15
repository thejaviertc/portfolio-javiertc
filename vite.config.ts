import { sveltekit } from "@sveltejs/kit/vite";
/** @type {import('vite').UserConfig} */

const config = {
	plugins: [sveltekit()],
	// TODO: Check if this is needed now that Sveltekit is stable
	ssr: {
		noExternal: [
			"@fortawesome/free-solid-svg-icons",
			"@fortawesome/free-brands-svg-icons",
		],
	},
};

export default config;
