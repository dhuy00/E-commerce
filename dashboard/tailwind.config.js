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
        'violet-light': '#F0EFFF',
        'gray-light': '#7D7D7D',
        'gray-medium': '#526581',
        'blue-medium': "#1E6EE5",
        'blue-dark': "#1C5387",
      },
      dropShadow: {
        'dark': '0 4px 61px rgba(77, 71, 195, 0.4)',
      },
    },
    fontFamily: {
      'poppins' : 'Poppins',
      'inter': "Inter",
      'montserrat': "Montserrat",
      'outfit': "Outfit",
      'mulish': "Mulish",
    },
  },

  plugins: [],
}