/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // list theme you want to use in your project.
      "light",
      "dark",
      "retro",
      "aqua ",
      "pastel",
    ],
  },
};
