const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../public/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../public/sanFranciscoDesktop.jpg')",
        'bali': "url('../public/img/bali.jpg')",
        'chicago': "url('../public/img/chicago.jpg')",
        'europe': "url('../public/img/europe.jpg')",
        'iceland': "url('../public/img/iceland.jpg')",
        'LA': "url('../public/img/LA.jpg')",
        'miami': "url('../public/img/miami.jpg')",
        'new_york': "url('../public/img/new_york.jpg')",
        'norway': "url('../public/img/norway.jpg')",
        'seattle': "url('../public/img/seattle.jpg')",
        'switzerland': "url('../public/img/switzerland.jpg')",
        'sydney': "url('../public/img/sydney.jpg')",
        'yosemite': "url('../public/img/yosemite.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9'
      },
      screens: {
        'xs': '360px',
        ...defaultTheme.screens
      },
      fontFamily: {
        sans: ['Montserrat', defaultTheme.fontFamily.sans]
      },
      gridTemplateRows: {
        '20': 'repeat(20, minmax(0,1fr))'
      },
      gridRowStart: {
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridRowEnd: {
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
      },
    },

  },
  plugins: [],
};
