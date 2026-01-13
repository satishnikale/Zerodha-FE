/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        lightGray: "#c4c4c4",
        lightblack: "#545f6e",
        lightBlue: "#387ed1",
      },
    },
  },
  plugins: [],
};
