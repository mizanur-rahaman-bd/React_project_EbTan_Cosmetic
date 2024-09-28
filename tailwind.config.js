/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand_color': '#E52525',
        'heading_color': '#333333'
      },
    },
    container:{
      center: true,
      padding:{
        lg:'47px'
      }
    },
    fontFamily:{
      'inter': ["Inter", "sans-serif"],
      'pt_serif': ["PT Serif", "serif"],

    },

  },
  plugins: [],
}