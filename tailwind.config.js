/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js, html}', './pages/**/*.{js, html}'],
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
