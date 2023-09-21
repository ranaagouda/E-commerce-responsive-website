/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f24e29",
        infoColor: "#359aa7",
        primaryText: "#000",
        secondaryText: "#777",
      },
      fontFamily: {
        body: ["Cairo"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
