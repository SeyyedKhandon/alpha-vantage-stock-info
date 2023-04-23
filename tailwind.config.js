/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1d27",
        light: "#ecf1fd",
        primary: "#ff013c",
        primaryDark: "#ffcb75",
      },
    },
  },
  plugins: [],
};
