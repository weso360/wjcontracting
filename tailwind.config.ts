import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        navy: "#0B172A",
        charcoal: "#1F2937",
        amber: "#D89B22",
        gold: "#F2C14E",
        stone: "#F7F4EE"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 23, 42, 0.12)",
        lift: "0 24px 70px rgba(11, 23, 42, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-inter)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
