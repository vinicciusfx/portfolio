import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./types/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 24px 80px -32px rgba(38, 63, 138, 0.35)",
      },
      colors: {
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
        line: "var(--color-line)",
        accent: "var(--color-accent)",
        accentSoft: "var(--color-accent-soft)",
        sun: "var(--color-sun)",
      },
      fontFamily: {
        display: [
          "\"Iowan Old Style\"",
          "\"Palatino Linotype\"",
          "\"Book Antiqua\"",
          "Georgia",
          "serif",
        ],
        body: [
          "\"Avenir Next\"",
          "\"Segoe UI\"",
          "\"Helvetica Neue\"",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
