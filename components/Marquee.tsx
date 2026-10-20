const items = [
  "Branding",
  "Illustration",
  "Packaging",
  "Typography",
  "Social Media",
  "Editorial",
  "Stickers",
  "Logo Design",
  "UI Moodboards",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="-rotate-1 overflow-hidden border-y-2 border-rose bg-petal py-3 dark:border-berry dark:bg-grape">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-2xl font-semibold italic text-berry dark:text-bubble">
            {t} <span className="not-italic">✿</span>
          </span>
        ))}
      </div>
    </div>
  );
}
