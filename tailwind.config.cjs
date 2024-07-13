const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "muted": "#8D8375",
        "cream": "#fceed1"
      }
    },
  },
  plugins: [plugin(({ addVariant }) => {
    addVariant('child', '& > *');
  })],
}
