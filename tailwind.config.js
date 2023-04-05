/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#86BC24",
        secondary: "#2B76DF",
        dark: "#1e2865",
        bg: "#4C5C67",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
