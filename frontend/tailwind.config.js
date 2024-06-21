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
			keyframes: {
				heartbeat: {
					from: {
						transform: "scale(1)",
						"transform-origin": "center center",
						"animation-timing-function": "ease-out",
					},
					"10%": {
						transform: "scale(0.91)",
						"animation-timing-function": "ease-in",
					},
					"17%": {
						transform: "scale(0.98);",
						"animation-timing-function": "ease-out;",
					},
					"33%": {
						transform: "scale(0.87);",
						"animation-timing-function": "ease-in;",
					},
					"45%": {
						transform: "scale(1);",
						"animation-timing-function": "ease-out;",
					},
				},
			},
			animation: {
				heartbeat: "heartbeat 2s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
