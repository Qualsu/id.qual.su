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
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          light: "#221621",
          dark: "#191118"
        },
        qual: {
          Q: "#C178FF",
          S: "#8365FF",
          U: "#76A4FF"
        }
      },
    },
  },
};
export default config;
