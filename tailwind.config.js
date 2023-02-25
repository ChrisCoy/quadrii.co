/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
      background: "#F8F8F8",
    },
    keyframes: {
      effect: {
        "0%, 100%": { transform: "rotate(-180deg)" },
        "25%": { transform: "rotate(90deg) scale(0.5)" },
        "50%": { transform: "translate(-20%, -20%) rotate(-90deg)" },
        "100%": { transform: "rotate(0deg)" },
      },
      "effect-2": {
        "0%, 100%": {
          transform: "scale(0.7) translate(100%, -100%) rotate(-50deg)",
        },
        "50%": { transform: "translate(50%, -50%) scale(1.2) rotate(-20deg)" },
        "100%": { transform: "translate(0) scale(1) rotate(0deg)" },
      },
    },
    animation: {
      effect: "effect 1s ease-in-out",
      "effect-2": "effect-2 1.5s ease-in-out",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
