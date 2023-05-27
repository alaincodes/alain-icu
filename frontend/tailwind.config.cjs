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
			keyframes: {
        pulsate: {
					'100%': { 
						'text-shadow': '0 0 4px #ffa8a8, 0 0 11px #ffa8a8, 0 0 19px #ffa8a8, 0 0 40px #ffa8a8, 0 0 80px #ff595a, 0 0 90px #ff595a, 0 0 100px #ff595a, 0 0 150px #ff595a'
					},
  				'0%': {
    				'text-shadow': '0 0 4px #ffa8a8, 0 0 10px #ffa8a8, 0 0 18px #ffa8a8, 0 0 38px #ffa8a8, 0 0 73px #ff595a, 0 0 80px #ff595a, 0 0 94px #ff595a, 0 0 140px #ff595a'
					},
        }
      },
			animation: {
        pulsate: 'pulsate 1s ease-in-out infinite',
      }
		},
	},
	plugins: [],
}
