export default function CTA() {
  return (
    <section id="cta" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
              § 07
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h2 className="font-display text-[clamp(48px,8vw,108px)] font-light leading-[0.98] tracking-tightest">
              Stop rewriting
              <br />
              your meeting notes.
              <br />
              <span className="italic text-accent">Let us do it.</span>
            </h2>

            <div className="mt-14 max-w-lg">
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@work.com"
                  className="flex-1 rounded-full border border-paper/20 bg-transparent px-6 py-3.5 text-[14px] text-paper placeholder:text-paper/40 focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-accent px-6 py-3.5 text-[14px] font-medium text-paper transition hover:bg-paper hover:text-ink"
                >
                  Start free
                </button>
              </form>
              <p className="mt-4 text-[12px] text-paper/50">
                30-day free trial on Team. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
