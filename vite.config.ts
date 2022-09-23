import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: [
			"@fortawesome/free-solid-svg-icons",
			"@fortawesome/free-brands-svg-icons",
		],
	},
};

export default config;
