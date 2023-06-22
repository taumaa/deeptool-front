/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue-custom': '#4431e9',
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'outfit': ['Outfit', 'sans-serif'],
			},
			height: {
				'128': '32rem',
			  }
		},
	},
	plugins: [],
}