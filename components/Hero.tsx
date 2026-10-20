import Reveal from "./Reveal";

const floaters = [
  { e: "🎀", top: "14%", left: "6%", r: "-12deg", d: "0s", s: "text-4xl" },
  { e: "✨", top: "22%", left: "88%", r: "8deg", d: "1s", s: "text-3xl" },
  { e: "🌸", top: "68%", left: "4%", r: "14deg", d: "2s", s: "text-4xl" },
  { e: "🍓", top: "78%", left: "90%", r: "-8deg", d: "0.6s", s: "text-4xl" },
  { e: "🦋", top: "10%", left: "58%", r: "10deg", d: "1.6s", s: "text-3xl" },
  { e: "💖", top: "50%", left: "94%", r: "0deg", d: "2.4s", s: "text-2xl" },
  { e: "☁️", top: "40%", left: "2%", r: "0deg", d: "3s", s: "text-5xl" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32">
      {floaters.map((f, i) => (
        <span
          key={i}
          aria-hidden
          className={`absolute animate-float select-none ${f.s}`}
          style={{ top: f.top, left: f.left, animationDelay: f.d, ["--r" as string]: f.r }}
        >
          {f.e}
        </span>
      ))}

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-rose bg-white/70 px-4 py-1.5 font-hand text-xl text-berry dark:border-bubble dark:bg-grape/70 dark:text-bubble">
              <span className="animate-heartbeat">💗</span> hello, world! i&apos;m
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-6xl font-extrabold leading-[1.02] text-mauve sm:text-7xl dark:text-white">
              Pallavi
              <br />
              <span className="squiggle text-berry dark:text-bubble">Shan</span>
              <span className="ml-2 inline-block animate-twinkle text-4xl">✦</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-3 font-script text-3xl text-rose">graphic designer & doodle enthusiast</p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mauve/80 dark:text-petal/80">
              I make soft, sparkly, story-filled brands, packaging and illustrations that feel like a hug for the
              eyes. Currently designing pretty things from a desk covered in washi tape and chai cups.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full border-2 border-berry bg-rose px-7 py-3 font-bold text-white shadow-cute transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#D6457F] active:translate-y-0 dark:border-bubble dark:shadow-cuteDark"
              >
                See my work 🍰
              </a>
              <a
                href="#contact"
                className="rounded-full border-2 border-rose bg-white/80 px-7 py-3 font-bold text-berry transition hover:-translate-y-1 hover:bg-petal dark:border-bubble dark:bg-grape dark:text-bubble dark:hover:bg-mauve"
              >
                Say hi 💌
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 animate-blob bg-gradient-to-br from-bubble via-lilac to-peach opacity-80 blur-sm dark:from-berry dark:via-mauve dark:to-grape" />
            <div className="relative flex h-72 w-72 animate-blob items-center justify-center border-4 border-white bg-gradient-to-br from-petal via-blush to-lilac shadow-cute sm:h-80 sm:w-80 dark:border-mauve dark:from-mauve dark:via-grape dark:to-plum dark:shadow-cuteDark">
              <span className="font-script text-7xl text-berry drop-shadow dark:text-bubble">P.S.</span>
            </div>
            <span className="absolute -right-3 top-4 rotate-12 rounded-xl bg-peach px-3 py-1 font-hand text-xl text-berry shadow">
              open for work!
            </span>
            <span className="absolute -left-4 bottom-6 -rotate-6 rounded-xl bg-mint px-3 py-1 font-hand text-xl text-mauve shadow">
              4+ yrs exp ★
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
