/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customColor: 'rgba(230, 218, 206, 1)',
        customColor2: 'rgba(200,200,180,1)',
        customColor3: 'rgba(10, 25, 47, 1)',
      },
    },
  },
  plugins: [require("rippleui")],
}