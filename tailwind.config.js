/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      grayscale: {
        70: '70%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
