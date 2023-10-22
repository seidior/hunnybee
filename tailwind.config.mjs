import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        whiteDaisy: "#ffffff",
        greenTea: "#F7FBF6",
        greenGrass: "#368157",
        honeyBrown: "#94660A",
        blackBee: "#000000"
      },
      fontFamily: () => ({
        heading: ["Oswald", ...defaultTheme.fontFamily.sans]
      })
    }
  },
  plugins: []
};
