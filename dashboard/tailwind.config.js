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
        'violet-main': '#8741E2',
        'violet-light': '#F0EFFF',
        'gray-border': "#D1D1D1",
        'gray-light': '#7D7D7D',
        'gray-medium': '#526581',
        'blue-light': "#B0CCF6",
        'blue-medium': "#1E6EE5",
        'blue-dark': "#1C5387",
        'blue-darker': "#263377",
        'pink-main': "#FB2E86"
      },
      dropShadow: {
        'dark': '0 4px 61px rgba(77, 71, 195, 0.4)',
        'around-light': '0 0 5px rgba(184, 184, 184, 1)',
        'around-medium': '0 0 8px rgba(184, 184, 184, 1)',
      },
      boxShadow: {
        'dark': '0 4px 61px rgba(77, 71, 195, 0.4)',
        'around-light': '0 0 5px rgba(184, 184, 184, 1)',
        'around-medium': '0 0 8px rgba(184, 184, 184, 1)',
      },
    },
    fontFamily: {
      'poppins' : 'Poppins',
      'inter': "Inter",
      'montserrat': "Montserrat",
      'outfit': "Outfit",
      'mulish': "Mulish",
      'manrope': "Manrope",
      'mplus': ['"M PLUS Rounded 1c"', 'sans-serif'],
      'roboto': "Roboto",
      'patua-one': "Patua One"
    },
  },

  plugins: [],
}