/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "4px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        seccondary: "#64738b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
