/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#43C651",
        primaryBold: "#056526",
        primaryText: "#555",
        secondary: "#2b4522",
        secondaryone: "#ACB5BE",
      },
    },
  },
  plugins: [],
};
