module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        pic: "12rem",
      },
      colors: {
        "navbar-grey": "#72757E",
      },
    },
  },
  plugins: [],
};
