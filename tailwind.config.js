/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        custom: {
          black: "#19181c",
          white: "#F1F1F1",
          gray: "#575e6b",
          darkGray: "#87868A",
          card: "#222128",
        },
      },
      fontFamily: {
        sans: ["var(--font-geomanist)"],
        jaapokki: ["var(--font-jaapokki)"],
      },
    },
  },
  plugins: [],
};
