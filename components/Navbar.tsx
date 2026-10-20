"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border-2 px-5 py-2.5 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-rose bg-white/80 shadow-cute dark:border-berry dark:bg-grape/80 dark:shadow-cuteDark"
            : "border-petal bg-white/50 dark:border-mauve dark:bg-grape/50"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 font-script text-xl text-berry dark:text-bubble">
          <span className="inline-block animate-wiggle">🎀</span> pallavi
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-1.5 text-sm font-semibold text-mauve transition hover:bg-petal hover:text-berry dark:text-petal dark:hover:bg-mauve dark:hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-petal text-lg md:hidden dark:bg-mauve"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "♡"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl animate-pop rounded-3xl border-2 border-rose bg-white/95 p-3 shadow-cute md:hidden dark:border-berry dark:bg-grape/95">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-semibold text-mauve hover:bg-petal dark:text-petal dark:hover:bg-mauve"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
