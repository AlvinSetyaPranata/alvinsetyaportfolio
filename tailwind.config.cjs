/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx", "./src/components/*.jsx"],
  theme: {
    extend: {
      'colors': {
        'lavender-600': '#7871EE',
        'lavender-500': '#9690F3',
        'lavender-400': '#B1ADFB'
      }
    },
  },
  plugins: [],
}
