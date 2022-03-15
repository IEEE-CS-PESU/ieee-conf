const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'xs': '355px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'ourBlue': '#393185',
        'ourRed': '#D6A2FF',
        'ourYellow': '#EDBF68',
        cmtblue: '#1496BC'
      }
    },
    fontFamily: {
      ourFont: ["Merriweather"],
    },
    inset: {
      '400': '45%',
    },


  },
  plugins: [],
}