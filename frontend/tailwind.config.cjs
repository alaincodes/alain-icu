/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'forest-green': '#2C5F2D',
        'old-lace': '#fcf6e3',
        'gold': '#FFE77A',
        'prussian-blue': '#00334E',
				'sage': '#CBD18F',
      },
		},
	},
	plugins: [],
}
