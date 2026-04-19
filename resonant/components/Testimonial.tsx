export default function Testimonial() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              § 04
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="font-display text-[clamp(30px,4.2vw,52px)] font-light leading-[1.15] tracking-tight text-ink">
              <span className="text-accent">&ldquo;</span>I used to spend twenty minutes
              after every sync rewriting my own scribbles into something the team
              could actually use. That whole chore is gone. Resonant writes better
              notes than I ever did — and it&apos;s writing them while I get coffee.
              <span className="text-accent">&rdquo;</span>
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-ink" />
              <div>
                <div className="text-[13px] font-medium text-ink">Maya Okafor</div>
                <div className="text-[12px] text-muted">Head of Product · Linework</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
