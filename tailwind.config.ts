import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
          hover: "var(--bg-hover)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          warning: "var(--accent-warning)",
          danger: "var(--accent-danger)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        border: {
          DEFAULT: "var(--border)",
          accent: "var(--border-accent)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1", fontWeight: "800" }],
        section: ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        "card-title": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};
export default config;
