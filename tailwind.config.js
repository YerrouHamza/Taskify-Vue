/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'gray': {
        50: '#efefef',
        100: '#d5d5d5',
        200: '#adadad',
        300: '#979797',
        400: '#747474',
        500: '#5c5c5c',
        600: '#494949',
        700: '#373737',
        800: '#252424',
        900: '#181818',
      },
      'error': '#c53333'
    }
  },
  plugins: [],
}

