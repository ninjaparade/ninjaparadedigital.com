/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          '50': '#fef2f3',
          '100': '#fee2e4',
          '200': '#ffc9cd',
          '300': '#fda4ab',
          '400': '#f9707b',
          '500': '#f14250',
          '600': '#de2433',
          '700': '#bb1a27',
          '800': '#a81c27',
          '900': '#801c24',
          '950': '#46090e',
        },
        'secondary' : '#12110F',
      }
    },
  },
  plugins: [],
}
