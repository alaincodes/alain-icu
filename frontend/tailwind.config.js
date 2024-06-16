/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				beige: "#efe0ca",
				blue: "#001233",
				"coral-red": "#ff595a",
			},
		},
	},
	plugins: [],
};
