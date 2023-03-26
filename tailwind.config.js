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
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'background': 'rgb(var(--color-background) / <alpha-value>)',
        'secondary-background': 'rgb(var(--color-background-secondary) / <alpha-value>)',
      },
      screens: {
        md: '850px',
      },
      fontFamily: {
        geometos: 'Geometos',
        bender: 'Bender-Bold',
        gilroy: 'Gilroy-ExtraBold',
      },
      listStyleType: {
        square: 'square',
      },
      keyframes: {
        flash: {
          '0%': { opacity: 0.5 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.5 },
        },
      },
      animation: {
        flash: 'flash 1s infinite ease',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/typography')],
}
