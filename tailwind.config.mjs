/** @type {import('tailwindcss').Config} */
export default {
	darkMode: null,
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				SourceSerif: ["SourceSerif", "Helvetica Neue", "Helvetica", "sans-serif"]
			}
		},
	},
	plugins: [
		require('tailwindcss/plugin')(function ({ addVariant }) {
			addVariant('dark', '@media not print { :is(:where(.dark) &) }')
		  }),
	],
	extend: {
		screens: {
		  print: { raw: 'print' },
		  screen: { raw: 'screen' },
		},
	}
}
