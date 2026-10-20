"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Category = "Branding" | "Packaging" | "Illustration" | "Social";

interface Project {
  title: string;
  category: Category;
  year: string;
  blurb: string;
  emoji: string;
  gradient: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Berry Bliss Café",
    category: "Branding",
    year: "2026",
    blurb: "A strawberry-themed café identity with a playful wordmark, menu and sticker set.",
    emoji: "🍓",
    gradient: "from-rose to-bubble",
    tags: ["Logo", "Menu", "Stickers"],
  },
  {
    title: "Cloud Nine Candles",
    category: "Packaging",
    year: "2026",
    blurb: "Dreamy soy candle boxes in soft gradients with foil-stamped clouds.",
    emoji: "🕯️",
    gradient: "from-lilac to-petal",
    tags: ["Box design", "Foil", "Labels"],
  },
  {
    title: "Tiny Garden Zine",
    category: "Illustration",
    year: "2025",
    blurb: "A 24-page illustrated zine about balcony gardens and slow mornings.",
    emoji: "🌷",
    gradient: "from-mint to-lilac",
    tags: ["Zine", "Procreate", "Editorial"],
  },
  {
    title: "Mochi Moon Bakery",
    category: "Branding",
    year: "2025",
    blurb: "Kawaii branding for a late-night mochi bakery, including mascot and packaging.",
    emoji: "🌙",
    gradient: "from-peach to-bubble",
    tags: ["Mascot", "Identity", "Packaging"],
  },
  {
    title: "Glow Up Skincare",
    category: "Social",
    year: "2025",
    blurb: "A cohesive Instagram system: carousels, reels covers and story templates.",
    emoji: "💄",
    gradient: "from-petal to-peach",
    tags: ["Instagram", "Templates", "Motion"],
  },
  {
    title: "Sweet Tooth Tea Co.",
    category: "Packaging",
    year: "2024",
    blurb: "Illustrated tea tins and pouches with a dessert-inspired flavor palette.",
    emoji: "🍵",
    gradient: "from-mint to-peach",
    tags: ["Tins", "Pattern", "Illustration"],
  },
];

const filters: ("All" | Category)[] = ["All", "Branding", "Packaging", "Illustration", "Social"];

export default function Projects() {
  const [active, setActive] = useState<"All" | Category>("All");
  const shown = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-center font-display text-5xl font-extrabold text-mauve dark:text-white">
          Pretty <span className="font-script font-normal text-rose">projects</span> 🍰
        </h2>
        <p className="mt-3 text-center font-hand text-2xl text-berry dark:text-bubble">
          a few of my favourite things i&apos;ve made
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border-2 px-5 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${
                active === f
                  ? "border-berry bg-rose text-white shadow-cute dark:border-bubble dark:shadow-cuteDark"
                  : "border-petal bg-white/80 text-berry hover:border-rose dark:border-mauve dark:bg-grape dark:text-bubble"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <article
            key={p.title}
            style={{ animationDelay: `${i * 70}ms` }}
            className="group animate-pop overflow-hidden rounded-[2rem] border-2 border-rose bg-white/90 shadow-cute transition duration-300 hover:-translate-y-2 hover:rotate-1 dark:border-berry dark:bg-grape/90 dark:shadow-cuteDark"
          >
            <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${p.gradient}`}>
              <span className="text-7xl transition duration-300 group-hover:scale-125 group-hover:animate-wiggle">
                {p.emoji}
              </span>
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-berry">
                {p.category}
              </span>
              <span className="absolute bottom-2 right-3 font-hand text-xl text-white drop-shadow">{p.year}</span>
              <span className="absolute right-4 top-3 animate-twinkle text-lg">✦</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-2xl font-bold text-mauve dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mauve/80 dark:text-petal/80">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-blush px-3 py-1 text-xs font-semibold text-berry dark:bg-mauve dark:text-petal"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <button className="mt-5 font-bold text-berry transition group-hover:translate-x-1 dark:text-bubble">
                View case study →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
