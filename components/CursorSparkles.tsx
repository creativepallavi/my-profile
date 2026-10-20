"use client";

import { useEffect } from "react";

const glyphs = ["✨", "💖", "🌸", "⭐", "🎀", "🦋"];

/** Little sparkles that follow the cursor. Skipped on touch devices. */
export default function CursorSparkles() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 70) return;
      last = now;
      const s = document.createElement("span");
      s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      s.className = "pointer-events-none fixed z-[60] select-none animate-trail";
      s.style.left = `${e.clientX}px`;
      s.style.top = `${e.clientY}px`;
      s.style.fontSize = `${10 + Math.random() * 10}px`;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 900);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
