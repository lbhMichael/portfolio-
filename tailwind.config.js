/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    tablet: "1480px",
    mobile: "980px",

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
