/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height:{
        'nav':'90%',
        'header':'10%',
        'layout':'90%'
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'main':'#3F51B2',
        'back':'#E5E5E5'
      },
      width:{
        'num':'90%',
      },
      screens:{
        'tablet':'900px',
      }
    },
  },
  plugins: [],
}
