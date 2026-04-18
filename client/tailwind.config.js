/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // We will map Figma design tokens here in upcoming steps.
      colors: {},
      fontFamily: {},
      spacing: {},
    },
  },
  plugins: [],
};
