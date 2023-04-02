/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				portfolio: {
					"primary": "#191919",
					"secondary": "#232323",
					"accent": "#0995F1",
					"neutral": "#696E79",
					"base-100": "#ffffff",
				},
			},
		],
	},
	safelist: ["bg-primary", "bg-secondary", "btn-primary", "btn-secondary"],
};
