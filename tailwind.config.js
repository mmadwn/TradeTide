/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "rgb(24,26,32)",
        darkTable: "rgb(30,35,41)",
        secondary: "rgb(252,213,53)",
        lightBackground: "rgb(255,255,255)", // Light background color
        lightTable: "rgb(240,240,240)", // Light table color
        lightText: "rgb(0,0,0)", // Light text color
      },
    },
  },
  plugins: [],
};
