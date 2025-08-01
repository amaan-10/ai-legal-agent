/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        urbanist: ["var(--font-urbanist)"],
      },
    },
    screens: {
      md: "810px",
      lg: "1200px",
      portrait: {
        raw: "(orientation: portrait)",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
};
