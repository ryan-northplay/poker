/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-emphasis':'#7893DC',
        'secondary-emphasis':'#CCDAFF',
        'primary-idle':'#AEC1F7',
        'secondary-idle':'#E7ECFC',
        'danger': '#BF4949',
        'grey': '#B3BACD',
        'light-grey': '#D9D9D9',
      },
      borderRadius: {
        '3xl': '30px'
      },
      boxShadow: {
        'button-primary-emphasis': '0px 2px 2px 1px',
        'input-border': '0px 0px 0px 1px',
        'input-border-hover': '0px 0px 0px 2px',
        'card': '-2px 4px 2px rgba(0, 0, 0, 0.25)'
      },
      spacing: {
      }
    }
  },
  plugins: [],
}
