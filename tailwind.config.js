/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",

    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
      extend: {
      flex:{
        '3': '3'
      }

    },

    fontFamily:{
      sans:['Inter','sans-serif']
    }
  },
  plugins: [require('flowbite/plugin')
],
}
