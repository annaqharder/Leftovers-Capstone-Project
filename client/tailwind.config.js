/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'zinc': '#171717',
      'red': '#B23822',
      'white': '#fafafa',
      'tan': '#CC7F25',
      'green': '#57644F'
    },

    extend: {
      backgroundImage: {
        'restaurant': "url('/Users/annaharder/Development/code/final-project/final-project/client/public/images/restaurant20.jpg')",
        'bar':"url('/Users/annaharder/Development/code/final-project/final-project/client/public/images/bar20.jpg')",
        'coffee': "url('/Users/annaharder/Development/code/final-project/final-project/client/public/images/coffee20.jpg')"
      }
    },
  },

  plugins: [],
}
