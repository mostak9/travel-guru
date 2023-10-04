/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      colors: {
        'primary-color': '#F9A51A'
      },
      extend: {
      },
    },
    plugins: [require("daisyui")],
  }
)

