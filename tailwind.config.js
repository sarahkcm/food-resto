/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        xs: "372px",
      },
      colors: {
        primary: "#EA7C69",
        secondary: "#9288E0",
        white: "#FFFFFF",
        baseDark: "#252836",
        baseDark2: "#1F1D2B",
        textLight: "#ABBBC2",
        bgGrey: "#2D303E",
      },
      fontFamily: {
        barlow: ["Barlow", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
