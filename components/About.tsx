import Reveal from "./Reveal";

const skills = [
  { n: "Branding", e: "🎀" },
  { n: "Illustration", e: "🖍️" },
  { n: "Packaging", e: "📦" },
  { n: "Lettering", e: "✒️" },
  { n: "Motion", e: "🎞️" },
  { n: "Social Design", e: "📱" },
];

const tools = ["Figma", "Illustrator", "Photoshop", "Procreate", "After Effects", "Canva"];

const stats = [
  { v: "60+", l: "happy clients", c: "bg-petal" },
  { v: "120", l: "projects done", c: "bg-lilac" },
  { v: "4 yrs", l: "of designing", c: "bg-peach" },
  { v: "∞", l: "cups of chai", c: "bg-mint" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-center font-display text-5xl font-extrabold text-mauve dark:text-white">
          About <span className="font-script font-normal text-rose">me</span> 🌷
        </h2>
      </Reveal>

      <div className="mt-14 grid items-start gap-10 md:grid-cols-2">
        <Reveal>
          <div className="dots relative rounded-[2rem] border-2 border-rose bg-white/80 p-8 shadow-cute dark:border-berry dark:bg-grape/80 dark:shadow-cuteDark">
            <span className="absolute -top-5 left-8 rotate-[-4deg] bg-bubble px-4 py-1 font-hand text-2xl text-white">
              my story
            </span>
            <p className="leading-relaxed text-mauve/90 dark:text-petal/90">
              Hi! I&apos;m Pallavi, a graphic designer based in India with a soft spot for pastel palettes, hand-drawn
              details and tiny surprises. I started doodling in the margins of my school notebooks and never really
              stopped.
            </p>
            <p className="mt-4 leading-relaxed text-mauve/90 dark:text-petal/90">
              I help small brands, cafés and creators look as lovable as they feel, from logos and packaging to social
              media worlds. When I&apos;m not designing, I&apos;m collecting stickers, baking, or sketching clouds. ☁️
            </p>

            <h3 className="mt-6 font-hand text-2xl text-berry dark:text-bubble">my toolbox</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border-2 border-dashed border-rose px-3 py-1 text-sm font-semibold text-berry transition hover:-rotate-3 hover:bg-petal dark:border-bubble dark:text-bubble dark:hover:bg-mauve"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((s, i) => (
                <div
                  key={s.n}
                  className="group flex flex-col items-center rounded-3xl border-2 border-petal bg-white/80 p-4 text-center transition hover:-translate-y-1 hover:border-rose dark:border-mauve dark:bg-grape/80 dark:hover:border-bubble"
                  style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
                >
                  <span className="text-3xl transition group-hover:animate-wiggle">{s.e}</span>
                  <span className="mt-1 text-sm font-bold text-mauve dark:text-petal">{s.n}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className={`${s.c} rounded-3xl p-4 text-center text-mauve transition hover:scale-105`}
                >
                  <div className="font-display text-3xl font-extrabold">{s.v}</div>
                  <div className="font-hand text-xl">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
