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
					"primary": "#191E29",
					"secondary": "#02A879",
					"accent": "#FF0000",
					"neutral": "#696E79",
					"base-100": "#ffffff",
				},
			},
		],
	},
	safelist: ["bg-primary", "bg-secondary", "btn-primary", "btn-secondary"],
};
