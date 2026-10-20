# Pallavi Shan · Portfolio ✿

A single-page, pink-pastel portfolio for a graphic designer. Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.

## Features
- Navbar with light/dark theme toggle (remembers your choice, respects system preference)
- Hero, skills marquee, about, filterable projects grid and a dummy contact form
- Cute animations: floating stickers, wiggling icons, morphing blob, scroll reveals, cursor sparkle trail
- Fonts: Playfair Display, Pacifico, Caveat and Quicksand (loaded from Google Fonts)

## Run it
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Customise
- Colors and animations: `tailwind.config.ts`
- Projects data: `components/Projects.tsx`
- Text and contact details: `components/Hero.tsx`, `About.tsx`, `Contact.tsx`

All content is dummy data. The contact form does not send anything.
