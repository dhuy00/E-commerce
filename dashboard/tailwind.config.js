/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet-medium' : '#A7A3FF',
        'violet-dark' : '#4D47C3',
        'violet-light': '#F0EFFF'
      },
      dropShadow: {
        'dark': '0 4px 61px rgba(77, 71, 195, 0.4)',
      },
    },
    fontFamily: {
      'poppins' : 'Poppins',
    },
  },

  plugins: [],
}