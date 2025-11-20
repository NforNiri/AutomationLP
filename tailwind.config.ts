import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom Palette
        "void-navy": "#0B1120",
        "porcelain-white": "#F8FAFC",
        "core-blue": {
          DEFAULT: "#3B82F6",
          500: "#3B82F6",
          600: "#2563EB",
        },
        "electric-cyan": "#22D3EE",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          500: "#64748b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #8080800a 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
