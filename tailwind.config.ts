import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeDarkBlue: "#19202F",
        themeGreen: "#01CBA3",
        themePink: "#FFBFBF",
        themeBlue: "#A7D4FE",
        themeGray: "#F5F5F5",
        themeMainBlue: "66BAFE",
      },
    },
  },
  plugins: [],
};
export default config;
