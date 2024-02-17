/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "transparent-white": "rgba(242, 244, 255, 0.75);",
        "primary": "#8717F8",
        "onPrimary": "white",
        "secondary": "#260056",
        "onSecondary": "white",
        "tertiary": "#D6A3FF",
        "admin-background": "#F6EFFF6B",
        "admin-card": "#F0E4FF",
        "price": "#04D200"
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
