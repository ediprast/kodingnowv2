/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./works.html", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-bold": "#262262",
        "blue-medium": "#0078BD",
        "blue-regular": "#197BFF",
        "blue-light": "#F3F7FF",
        "purple-bold": "#262262",
        "purple-light": "#8777FC",
        "white-light": "#FCFCFC",
      },
    },
  },
  plugins: [],
};
