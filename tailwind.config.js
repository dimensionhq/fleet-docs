module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          100: "#6B341C",
          200: "#5B3F33",
        },
        brown: {
          200: "#1D1F20",
        },
        black: {
          100: "#1B110D",
          200: "#242120",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
