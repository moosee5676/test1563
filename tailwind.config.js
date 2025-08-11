/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gradientLightStart: '#a1c4fd',
        gradientLightEnd: '#c2e9fb',
        gradientDarkStart: '#0f2027',
        gradientDarkEnd: '#203a43',
      },
    },
  },
  plugins: [],
};
