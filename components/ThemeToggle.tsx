"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative h-10 w-[76px] rounded-full border-2 border-rose bg-petal p-1 transition-colors dark:border-berry dark:bg-grape"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow transition-transform duration-500 dark:bg-mauve ${
          mounted && dark ? "translate-x-[36px]" : "translate-x-0"
        }`}
      >
        {mounted && dark ? "🌙" : "🌸"}
      </span>
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] opacity-70 dark:opacity-0">
        ✨
      </span>
      <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[10px] opacity-0 dark:opacity-70">
        ⭐
      </span>
    </button>
  );
}
