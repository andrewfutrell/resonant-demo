const TIERS = [
  {
    name: "Solo",
    price: "$0",
    period: "forever",
    tag: "For trying it out",
    cta: "Start free",
    features: [
      "Up to 5 meetings / month",
      "Summaries + action items",
      "Personal workspace",
      "Community support",
    ],
    highlight: false,
  },
  {
    name: "Team",
    price: "$18",
    period: "per seat / month",
    tag: "Most teams land here",
    cta: "Start 30-day trial",
    features: [
      "Unlimited meetings",
      "Speaker recognition",
      "Linear / Asana / Notion sync",
      "Shared team library",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Studio",
    price: "Custom",
    period: "annual billing",
    tag: "For 50+ seats",
    cta: "Talk to us",
    features: [
      "Everything in Team",
      "SSO + SCIM provisioning",
      "Custom retention policies",
      "Dedicated success manager",
      "Security review support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="mb-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-ink/40" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                § 05 — Pricing
              </span>
            </div>
          </div>
          <h2 className="col-span-12 font-display text-[clamp(36px,5.5vw,68px)] font-light leading-[1] tracking-tightest text-ink md:col-span-8">
            Honest pricing. <em className="italic text-accent">No per-minute fees.</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-4">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-lg border p-8 md:p-10 ${
                tier.highlight
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-white text-ink"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
                  Popular
                </span>
              )}
              <div
                className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                  tier.highlight ? "text-paper/60" : "text-muted"
                }`}
              >
                {tier.tag}
              </div>
              <h3 className="mt-4 font-display text-[32px] font-medium">
                {tier.name}
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-[48px] font-light leading-none">
                  {tier.price}
                </span>
                <span
                  className={`text-[13px] ${
                    tier.highlight ? "text-paper/60" : "text-muted"
                  }`}
                >
                  {tier.period}
                </span>
              </div>

              <ul
                className={`mt-8 space-y-3 text-[14px] ${
                  tier.highlight ? "text-paper/85" : "text-ink/80"
                }`}
              >
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1 shrink-0">
                      <path
                        d="M2 7l3.5 3.5L12 3"
                        stroke={tier.highlight ? "#D94A1F" : "#D94A1F"}
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-[13px] font-medium transition ${
                  tier.highlight
                    ? "bg-accent text-paper hover:bg-paper hover:text-ink"
                    : "bg-ink text-paper hover:bg-accent"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
