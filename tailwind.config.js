/** @type {import('tailwindcss').Config} */
import vikas from './src/images/Landing_background.png'
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'my-img': "url('/src/images/Landing_background.png')",
         'show-room':"url('/src/images/showroom.png')",
      },
      colors: {
        'my-gray': '#979BA1',
        'my-blue':'#4D9EEA',
        'my-green':'#447345',
        'my-blue-2': '#204E98',
        'my-border':'#4F6395'

      },
      blur: {
        20: '20px', // Adding a custom blur of 20px
      },
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

