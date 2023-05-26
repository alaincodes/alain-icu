/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'beige': '#efe0ca',
        'blue': '#001233',
        'coral-red': '#ff595a'
      },
		},
	},
	plugins: [],
}
