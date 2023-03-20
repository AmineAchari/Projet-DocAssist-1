/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/img/background-dent.jpeg ')",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
