// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
const primary = '#CC2D4A'
const secondary = '#8FA206'
const tertiary = '#61AEC9'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '360px',
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../public/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../public/img/sanFranciscoDesktop.jpg')",
        bali: "url('../public/img/bali.jpg')",
        chicago: "url('../public/img/chicago.jpg')",
        europe: "url('../public/img/europe.jpg')",
        iceland: "url('../public/img/iceland.jpg')",
        LA: "url('../public/img/LA.jpg')",
        miami: "url('../public/img/miami.jpg')",
        new_york: "url('../public/img/new_york.jpg')",
        norway: "url('../public/img/norway.jpg')",
        seattle: "url('../public/img/seattle.jpg')",
        switzerland: "url('../public/img/switzerland.jpg')",
        sydney: "url('../public/img/sydney.jpg')",
        yosemite: "url('../public/img/yosemite.jpg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        primary,
        secondary,
        tertiary
      }),
      textColor: {
        primary,
        secondary,
        tertiary
      },
      fontFamily: {
        sans: ['Montserrat', defaultTheme.fontFamily.sans]
      },
      colors: {
        primary,
        secondary,
        tertiary
      }
    }
  },
  plugins: []
}
