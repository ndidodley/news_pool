/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html, js}'],
  theme: {
    fontFamily:{
      'heading': ['Montserrat'],
      'body': ['Poppins']
    },
    extend: {
      colors:{
        accent: '#F22929',
      }
    },

  },
  plugins: [],
}
