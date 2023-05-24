/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'forest-green': '#0B421A',
        'old-lace': '#fcf6e3',
        'philippine-orange': '#e67219',
        'prussian-blue': '#00334E',
      },
		},
		screens: {
      'xs': '480px',
    },
	},
	plugins: [],
}
