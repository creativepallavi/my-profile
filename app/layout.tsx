import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pallavi Shan ✿ Graphic Designer",
  description:
    "Portfolio of Pallavi Shan, a graphic designer making soft, sparkly, joyful brands, packaging and illustrations.",
};

const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Pacifico&family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
