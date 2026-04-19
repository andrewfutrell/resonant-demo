export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        {/* Eyebrow */}
        <div className="rise mb-8 flex items-center gap-3" style={{ animationDelay: "0.05s" }}>
          <span className="h-px w-8 bg-ink/40" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Vol. 01 / Now in private beta
          </span>
        </div>

        {/* Headline */}
        <h1
          className="rise font-display text-[clamp(44px,8vw,112px)] font-light leading-[0.96] tracking-tightest text-ink"
          style={{ animationDelay: "0.15s" }}
        >
          Meeting notes
          <br />
          that actually
          <br />
          <span className="italic text-accent">sound like you.</span>
        </h1>

        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <p
            className="rise col-span-12 max-w-xl text-[17px] leading-[1.6] text-ink/80 md:col-span-6 md:col-start-7"
            style={{ animationDelay: "0.3s" }}
          >
            Resonant listens, then writes the meeting down the way a sharp colleague
            would — a clean summary, the decisions, the follow-ups, and nothing
            else. No bullet-point salad. No 2,000-word transcripts nobody reads.
          </p>

          <div
            className="rise col-span-12 flex flex-wrap items-center gap-4 md:col-span-6 md:col-start-7"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-paper transition hover:bg-accent"
            >
              Start free for 30 days
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition group-hover:translate-x-0.5">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </a>
            <a
              href="#how"
              className="text-[14px] text-ink link-underline"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Demo preview */}
        <div
          className="rise mt-20 md:mt-28"
          style={{ animationDelay: "0.6s" }}
        >
          <DemoCard />
        </div>
      </div>

      {/* Big faded number in corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-24 hidden select-none font-display text-[280px] font-light leading-none text-ink/[0.035] md:block"
      >
        01
      </div>
    </section>
  );
}

function DemoCard() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="grid overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_80px_-40px_rgba(26,25,21,0.25)] md:grid-cols-12">
        {/* Left: listening state */}
        <div className="col-span-12 border-b border-line bg-ink p-8 text-paper md:col-span-5 md:border-b-0 md:border-r md:p-10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent blink" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70">
              Listening · 00:12:43
            </span>
          </div>

          <div className="mt-10 flex h-14 items-center gap-1.5">
            {[0.5, 0.8, 0.3, 0.9, 0.6, 1, 0.4, 0.7, 0.85, 0.3, 0.9, 0.55, 0.7, 0.4, 0.9, 0.6, 0.3, 0.85, 0.5, 0.7].map((h, i) => (
              <span
                key={i}
                className="bar w-1 rounded-full bg-paper"
                style={{
                  height: `${h * 100}%`,
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            ))}
          </div>

          <div className="mt-10 space-y-3">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-paper/50">Maya</div>
              <div className="mt-1 text-[13px] leading-relaxed text-paper/90">
                Let&apos;s push the Shopify integration to Q2 — we need Dan&apos;s team to scope the webhooks first.
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-paper/50">Jordan</div>
              <div className="mt-1 text-[13px] leading-relaxed text-paper/90">
                Agreed. I&apos;ll send the brief Friday.
              </div>
            </div>
          </div>
        </div>

        {/* Right: the note */}
        <div className="col-span-12 p-8 md:col-span-7 md:p-10">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Meeting note · Q2 planning
            </span>
            <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
              Auto
            </span>
          </div>

          <h3 className="mt-6 font-display text-[28px] font-medium leading-tight text-ink">
            Shopify integration bumped to Q2.
          </h3>

          <p className="mt-4 text-[14px] leading-[1.7] text-ink/75">
            Team aligned on pushing the Shopify integration into next quarter pending
            webhook scoping from Dan&apos;s team. Brief to follow Friday.
          </p>

          <div className="mt-6 border-t border-line pt-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Action items
            </div>
            <ul className="mt-3 space-y-2.5 text-[13px] text-ink/85">
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-accent" />
                Jordan to send integration brief — <span className="text-muted">Friday</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-accent" />
                Dan&apos;s team to scope webhooks — <span className="text-muted">this week</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-accent" />
                Revisit timeline — <span className="text-muted">next planning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
