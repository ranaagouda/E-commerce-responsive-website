/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
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
  corePlugins: {
    preflight: false,
  },
};
