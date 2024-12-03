/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroyb: ["Gilroy-Bold", "sans-serif"],
        gilroyh: ["Gilroy-Heavy", "sans-serif"],
        gilroym: ["Gilroy-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
