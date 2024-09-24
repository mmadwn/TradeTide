/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "rgb(240,185,11)",
        darkBackground: "rgb(24,26,32)",
        darkTable: "rgb(30,35,41)",
        darkText: "rgb(255,255,255)",
        lightBackground: "rgb(255,255,255)", // Light background color
        lightTable: "rgb(250,250,250)", // Light table color
        lightText: "rgb(0,0,0)", // Light text color
      },
    },
  },
  plugins: [],
};
