"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const fieldClass =
  "w-full rounded-2xl border-2 border-petal bg-white/90 px-4 py-3 text-mauve outline-none transition placeholder:text-mauve/40 focus:border-rose focus:ring-4 focus:ring-bubble/40 dark:border-mauve dark:bg-plum dark:text-petal dark:placeholder:text-petal/40 dark:focus:border-bubble dark:focus:ring-berry/40";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setName(String(data.get("name") ?? ""));
    // Dummy form: nothing is actually sent anywhere.
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-center font-display text-5xl font-extrabold text-mauve dark:text-white">
          Let&apos;s <span className="font-script font-normal text-rose">work together</span> 💌
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-mauve/80 dark:text-petal/80">
              Got a dreamy idea or a brand that needs a little sparkle? Drop me a note, I reply within 2 days!
            </p>
            {[
              { e: "📧", l: "hello@pallavishan.design" },
              { e: "📸", l: "@pallavi.designs" },
              { e: "🎨", l: "behance.net/pallavishan" },
              { e: "📍", l: "India · working worldwide" },
            ].map((c) => (
              <div
                key={c.l}
                className="flex items-center gap-4 rounded-2xl border-2 border-petal bg-white/80 px-4 py-3 transition hover:translate-x-1 hover:border-rose dark:border-mauve dark:bg-grape/80 dark:hover:border-bubble"
              >
                <span className="text-2xl">{c.e}</span>
                <span className="font-semibold text-mauve dark:text-petal">{c.l}</span>
              </div>
            ))}
            <p className="font-hand text-2xl text-berry dark:text-bubble">can&apos;t wait to hear from you ♡</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative rounded-[2rem] border-2 border-rose bg-white/85 p-6 shadow-cute sm:p-8 dark:border-berry dark:bg-grape/85 dark:shadow-cuteDark">
            <span className="absolute -right-3 -top-5 animate-wiggle text-4xl">🧸</span>

            {sent ? (
              <div className="animate-pop py-12 text-center">
                <div className="text-6xl animate-heartbeat">💖</div>
                <h3 className="mt-4 font-script text-3xl text-berry dark:text-bubble">
                  Thank you{name ? `, ${name}` : ""}!
                </h3>
                <p className="mt-2 text-mauve/80 dark:text-petal/80">
                  This is a demo form, so no message was really sent, but Pallavi would have loved it!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border-2 border-rose px-6 py-2 font-bold text-berry transition hover:bg-petal dark:border-bubble dark:text-bubble dark:hover:bg-mauve"
                >
                  Send another ✿
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder="Your name" className={fieldClass} />
                  <input name="email" type="email" required placeholder="Email address" className={fieldClass} />
                </div>
                <select name="type" defaultValue="" required className={fieldClass}>
                  <option value="" disabled>
                    What are you dreaming of?
                  </option>
                  <option>Branding & logo</option>
                  <option>Packaging design</option>
                  <option>Illustration</option>
                  <option>Social media design</option>
                  <option>Something else ✨</option>
                </select>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={fieldClass}
                />
                <button
                  type="submit"
                  className="w-full rounded-full border-2 border-berry bg-rose py-3 font-bold text-white shadow-cute transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#D6457F] active:translate-y-0 dark:border-bubble dark:shadow-cuteDark"
                >
                  Send with love 💌
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
