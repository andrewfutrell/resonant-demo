const LOGOS = [
  "Linework", "Parallel", "Monograph", "Northfield", "Kettle & Co.",
  "Arbor", "Cloudhaus", "Mercer Labs", "Oxide", "Perrin",
];

export default function LogoStrip() {
  return (
    <section className="border-y border-line/60 py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Already being used at
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />
          <div className="marquee flex gap-16 whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={i}
                className="font-display text-[22px] font-light italic text-ink/60"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
