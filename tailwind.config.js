/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
    colors: {
      "primary": "#0064a0",
      "secondary": "#00aaf0",
      "primary-light": "rgb(18, 130, 199)",
      "primary-lighter": "rgb(27, 144, 216)",
      "primary-lightest": "rgb(25, 143, 216)",
      "gray": "#444950",
      "gray-mid": "rgb(209, 213 ,219)",
      "gray-light": "#ebedf0",
      "black": "#000",
      "white": "#fff"
    },
  },
  plugins: [],
}

