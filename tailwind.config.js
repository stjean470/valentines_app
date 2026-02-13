/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  darkMode: false, // This disables dark mode entirely
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}