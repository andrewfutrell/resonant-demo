export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-12 gap-10 border-t border-paper/10 pt-14">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="10" stroke="#F5F1EA" strokeWidth="1.2" />
                <circle cx="11" cy="11" r="4.5" fill="#D94A1F" />
              </svg>
              <span className="font-display text-[22px] font-medium tracking-tightest">
                Resonant
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-[1.65] text-paper/60">
              Meeting notes that actually sound like you. Built in Brooklyn.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40">
              Product
            </div>
            <ul className="mt-5 space-y-3 text-[13px]">
              <li><a href="#features" className="text-paper/80 hover:text-accent">Features</a></li>
              <li><a href="#pricing" className="text-paper/80 hover:text-accent">Pricing</a></li>
              <li><a href="#" className="text-paper/80 hover:text-accent">Changelog</a></li>
              <li><a href="#" className="text-paper/80 hover:text-accent">Integrations</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40">
              Company
            </div>
            <ul className="mt-5 space-y-3 text-[13px]">
              <li><a href="#" className="text-paper/80 hover:text-accent">About</a></li>
              <li><a href="#" className="text-paper/80 hover:text-accent">Careers</a></li>
              <li><a href="#" className="text-paper/80 hover:text-accent">Journal</a></li>
              <li><a href="#" className="text-paper/80 hover:text-accent">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40">
              Legal
            </div>
            <ul className="mt-5 space-y-3 text-[13px]">
              <li><a href="#" className="text-paper/80 hover:text-accent">Privacy</a></li>
              <li><a href="#" className="text-paper/80 hover:text-accent">Terms</a></li>
              <li><a href="#" className="text-paper/80 hover:text-accent">Security</a></li>
              <li><a href="#" className="text-paper/80 hover:text-accent">DPA</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-8 md:flex-row md:items-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40">
            © 2026 Resonant, Inc.
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40">
            Made with care.
          </div>
        </div>
      </div>
    </footer>
  );
}
