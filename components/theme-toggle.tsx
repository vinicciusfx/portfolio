"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pedro-vinicius-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.toggle("dark", nextTheme === "dark");
    root.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      className="inline-flex items-center gap-3 rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-semibold text-ink transition hover:[border-color:var(--color-accent)] dark:bg-white/5"
    >
      <span
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
          isDark ? "bg-accent" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute h-5 w-5 rounded-full bg-white shadow transition ${
            isDark ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
      <span>{isDark ? "Black theme ativo" : "Ligar black theme"}</span>
    </button>
  );
}
