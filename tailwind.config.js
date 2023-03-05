/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
      },
      fontFamily: {
        geometos: 'Geometos',
        bender: 'Bender-Bold',
        gilroy: 'Gilroy-ExtraBold',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/typography')],
}
