/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        black: '#333333',
        primary: '#006A7A',
        'black-lighter': '#CCCCCC',
        'blue-dark': '#006A7A',
        'white-dark': '#F7F7F7',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
};
