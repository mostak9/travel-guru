/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-color': '#F9A51A'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

