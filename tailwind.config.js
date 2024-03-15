/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "md": "3px 3px 0 rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
