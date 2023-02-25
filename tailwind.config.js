/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: {
        100: "#ede6fb",
        200: "#dacdf6",
        300: "#c8b5f2",
        400: "#b59ced",
        500: "#a383e9",
        600: "#8269ba",
        700: "#624f8c",
        800: "#41345d",
        900: "#211a2f",
      },
      orange: {
        100: "#fee5d6",
        200: "#fecbae",
        300: "#fdb085",
        400: "#fd965d",
        500: "#fc7c34",
        600: "#ca632a",
        700: "#974a1f",
        800: "#653215",
        900: "#32190a",
      },
      gray: {
        100: "#dedede",
        200: "#bebebe",
        300: "#9d9d9d",
        400: "#7d7d7d",
        500: "#5c5c5c",
        600: "#4a4a4a",
        700: "#373737",
        800: "#252525",
        900: "#121212",
      },
      red: {
        500: "#F42424",
      },
      blue: {
        500: "#297FFF",
      },
    },
  },
  plugins: [],
};
