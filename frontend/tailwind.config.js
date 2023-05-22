/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
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

