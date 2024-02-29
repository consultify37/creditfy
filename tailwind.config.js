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
        "primary": "#FF7A00",
        "onPrimary": "#FFF",
        "secondary": "#00071E",
        "onSecondary": "#FFF",
        "tertiary": "#1D2C5B",
        "onTertiary": "#FFF",
        "lightBrown": "#AE5400",
        "onLightBrown": "#FFF",
        "darkBrown": "#7D3E03",
        "onDarkBrown": "#FFF",
        "lightOrange": "#FFC188",
        "onLightOrange": "#000",
        "admin-background": "#F8F9FA",
        "admin-card": "#EFEFEF",
        "price": "#04D200"
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
