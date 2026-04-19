const STEPS = [
  {
    num: "I",
    title: "It joins the meeting.",
    body: "Connect your Zoom, Meet, or Teams once. Resonant shows up on time, every time — no extension installs for your guests, no awkward bot in the corner.",
  },
  {
    num: "II",
    title: "It listens, the way you would.",
    body: "Our model doesn't just transcribe — it follows the thread. What was decided, what got parked, who's on the hook, and what's still open.",
  },
  {
    num: "III",
    title: "It writes the note.",
    body: "Two minutes after the meeting ends, you get a short, readable summary in your inbox. Decisions, action items, and the three paragraphs that matter. Nothing more.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="mb-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ink/40" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                § 02 — How it works
              </span>
            </div>
          </div>
          <h2 className="col-span-12 font-display text-[clamp(36px,5.5vw,68px)] font-light leading-[1] tracking-tightest text-ink md:col-span-8">
            The whole thing takes <em className="italic text-accent">about as long</em> as pouring a coffee.
          </h2>
        </div>

        <div className="grid gap-0 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`relative border-t border-line py-10 pr-6 md:py-12 ${
                i > 0 ? "md:border-l md:pl-10" : ""
              }`}
            >
              <div className="font-display text-[48px] font-light leading-none text-accent">
                {step.num}
              </div>
              <h3 className="mt-8 font-display text-[26px] font-medium leading-[1.15] tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-5 max-w-sm text-[15px] leading-[1.65] text-ink/75">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
