/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(26, 152, 255)", // custom color
      },
    },
  },
  plugins: [],
};
