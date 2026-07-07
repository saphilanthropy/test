/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MATW brand palette extracted from the original site
        matwBlue: "#00a3da",
        matwBlueDark: "#093484",
        DarkerBlue: "#093686",
        pink: "#f60362",
        pinkAlt: "#FE278C",
        skyLight: "#e2eff3",
        skySoft: "#c6e9ff",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        asap: ["Asap", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        gotcha: ["'Dancing Script'", "cursive"],
      },
      maxWidth: {
        "screen-2xl": "1920px",
      },
    },
  },
  plugins: [],
};
