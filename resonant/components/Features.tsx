export default function Features() {
  return (
    <section id="features" className="border-y border-line bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="mb-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-paper/40" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">
                § 03 — The details
              </span>
            </div>
          </div>
          <h2 className="col-span-12 font-display text-[clamp(36px,5.5vw,68px)] font-light leading-[1] tracking-tightest md:col-span-8">
            Built for the people who <em className="italic text-accent">read their notes</em> twice.
          </h2>
        </div>

        <div className="grid gap-px bg-paper/10 md:grid-cols-6">
          {/* Big feature — spans 4 */}
          <div className="bg-ink p-10 md:col-span-4 md:p-14">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Feature 01
            </div>
            <h3 className="mt-4 font-display text-[38px] font-medium leading-[1.05] tracking-tight">
              A summary you can read <br />in under a minute.
            </h3>
            <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-paper/70">
              Most note-takers dump a transcript and call it a day. Resonant
              writes two short paragraphs that tell you what the meeting was
              actually about — the kind of summary you&apos;d send a colleague who
              missed it.
            </p>
            <div className="mt-10 rounded-lg border border-paper/10 bg-paper/5 p-6 font-display text-[17px] italic leading-[1.6] text-paper/90">
              &ldquo;The team chose the faster integration path despite the higher
              maintenance cost, with a plan to revisit in Q3. Dan owns the
              rollout.&rdquo;
            </div>
          </div>

          {/* Medium — spans 2 */}
          <div className="bg-ink p-10 md:col-span-2 md:p-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Feature 02
            </div>
            <h3 className="mt-4 font-display text-[26px] font-medium leading-[1.15]">
              Speaker-aware, actually.
            </h3>
            <p className="mt-5 text-[14px] leading-[1.65] text-paper/70">
              Resonant learns your team&apos;s voices over a few meetings. After
              that, attribution just works — no tagging, no cleanup.
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-ink p-10 md:col-span-2 md:p-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Feature 03
            </div>
            <h3 className="mt-4 font-display text-[26px] font-medium leading-[1.15]">
              Follow-ups, assigned.
            </h3>
            <p className="mt-5 text-[14px] leading-[1.65] text-paper/70">
              Every action item gets an owner and a due date, pushed to Linear,
              Asana, or Notion the moment the meeting ends.
            </p>
          </div>

          <div className="bg-ink p-10 md:col-span-2 md:p-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Feature 04
            </div>
            <h3 className="mt-4 font-display text-[26px] font-medium leading-[1.15]">
              Search the conversation.
            </h3>
            <p className="mt-5 text-[14px] leading-[1.65] text-paper/70">
              Ask &ldquo;when did we agree to move pricing?&rdquo; and jump straight to
              the moment it was decided. No scrubbing.
            </p>
          </div>

          <div className="bg-ink p-10 md:col-span-2 md:p-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Feature 05
            </div>
            <h3 className="mt-4 font-display text-[26px] font-medium leading-[1.15]">
              Private by default.
            </h3>
            <p className="mt-5 text-[14px] leading-[1.65] text-paper/70">
              End-to-end encrypted. Your audio is deleted within 24 hours. We
              don&apos;t train on your data. Full stop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
