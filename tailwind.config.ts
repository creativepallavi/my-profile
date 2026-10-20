import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FFE9F1",
        petal: "#FFD1E3",
        bubble: "#FFB3D1",
        rose: "#FF7EB0",
        berry: "#D6457F",
        lilac: "#E7D7FF",
        peach: "#FFDCCB",
        mint: "#D3F6E8",
        cream: "#FFF8F4",
        plum: "#1F1226",
        grape: "#2E1B3A",
        mauve: "#4A2C5C",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        script: ["Pacifico", "cursive"],
        hand: ["Caveat", "cursive"],
        sans: ["Quicksand", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(calc(var(--r, 0deg) + 6deg))" },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        twinkle: {
          "0%,100%": { opacity: "0.3", transform: "scale(0.7)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pop: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "70%": { transform: "scale(1.08)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blob: {
          "0%,100%": { borderRadius: "60% 40% 55% 45% / 55% 45% 60% 40%" },
          "50%": { borderRadius: "40% 60% 45% 55% / 45% 60% 40% 55%" },
        },
        trail: {
          "0%": { opacity: "1", transform: "translate(-50%,-50%) scale(1)" },
          "100%": { opacity: "0", transform: "translate(-50%,-120%) scale(0.2)" },
        },
        heartbeat: {
          "0%,100%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.2)" },
          "60%": { transform: "scale(0.95)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
        twinkle: "twinkle 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        pop: "pop 0.5s ease-out both",
        blob: "blob 9s ease-in-out infinite",
        trail: "trail 0.9s ease-out forwards",
        heartbeat: "heartbeat 1.6s ease-in-out infinite",
      },
      boxShadow: {
        cute: "6px 6px 0 0 #FF7EB0",
        cuteDark: "6px 6px 0 0 #D6457F",
      },
    },
  },
  plugins: [],
};

export default config;
