import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sage: "#8BA888",
        peach: "#F4B185",
        teal: "#2C5F5D",
        charcoal: "#333333",
        sand: "#E5E1DA",
        cream: "#FAF9F6"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Inter", "sans-serif"],
        body: ["var(--font-body)", "'Source Sans Pro'", "sans-serif"],
        accent: ["var(--font-accent)", "Merriweather", "serif"]
      },
      boxShadow: {
        soft: "0 10px 40px rgba(44, 95, 93, 0.12)"
      }
    }
  },
  plugins: [typography]
};

export default config;
