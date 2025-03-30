/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        lightBg: "#dfddfd",
        darkBg: "#212121",
        lightCard: "#ffffff",
        darkCard: "#303030",
        lightText: "#212121",
        darkText: "#d8d8d8",
        lightButton: "#6f42c1",
        darkButton: "#303030",
        lightHover: "#333333",
        darkHover: "#CCCCCC",
      },
    },
  },
  plugins: [],
};
