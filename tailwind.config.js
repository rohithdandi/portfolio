/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        azeret: ["Azeret Mono", "monospace"],
        cutive: ["Cutive Mono", "monospace"],
      },
      boxShadow: {
        "yellow-highlight": "0 4px 10px rgba(255, 255, 0, 0.5)", // Adjust this to make it centered
      },
    },
  },
  plugins: [],
};
