import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "100": "25rem",
        "110": "27.5rem",
        120: "30rem",
        130:"32.5rem",
        140:"35rem",
        150:"37.5rem",
        160:"40rem"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          DEFAULT: "#ffffff",
          dark: "#f4f5f7",
        },
        black: {
          light: "#383a45",
          dark: "#262626",
        },
        // white: "#ffffff",
        gray: {
          DEFAULT: "#838daa",
          light: "#0003",
          dark: "##d7d7d7",
        },
      },
      borderWidth: {
        1: "1px",
        "0.5": "0.5px",
      },
      width: {
        "100": "25rem",
        "110": "27.5rem",
      },
      margin: {},
    },
  },
  plugins: [],
};
export default config;
