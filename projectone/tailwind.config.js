/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vuejs: '#42b883',
      },
      fontSize: {
        african: '100px'
      }
    },
  },
  plugins: [],
}
