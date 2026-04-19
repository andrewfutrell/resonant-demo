"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What meeting platforms does Resonant work with?",
    a: "Zoom, Google Meet, and Microsoft Teams out of the box. We also have a desktop recorder for in-person meetings or platforms we don't natively support yet.",
  },
  {
    q: "Do my teammates have to install anything?",
    a: "No. Resonant joins as a regular meeting participant via calendar invite. Your guests won't need to install an extension, sign up, or do anything differently.",
  },
  {
    q: "How accurate is the transcription, really?",
    a: "For standard meetings in clear audio, we consistently hit 94–97% word accuracy. Accents, technical jargon, and overlapping speech still cause hiccups — we don't pretend otherwise.",
  },
  {
    q: "What happens to my audio?",
    a: "Audio is encrypted in transit and at rest, processed for transcription, and then deleted within 24 hours. The text summary stays in your workspace. Your data is never used for model training.",
  },
  {
    q: "Can I edit the notes afterwards?",
    a: "Yes. Every summary is fully editable. If you make corrections, Resonant learns from them — your notes get more accurate to your team's style over time.",
  },
  {
    q: "Is there a free trial?",
    a: "The Solo plan is free forever for up to 5 meetings a month. Team plans include a 30-day free trial with no credit card required.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="sticky top-10">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-ink/40" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  § 06 — FAQ
                </span>
              </div>
              <h2 className="font-display text-[clamp(36px,4.5vw,52px)] font-light leading-[1.02] tracking-tightest text-ink">
                Questions, before you ask.
              </h2>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="divide-y divide-line border-y border-line">
              {FAQS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="group block w-full py-6 text-left"
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="font-display text-[20px] font-medium leading-snug text-ink md:text-[22px]">
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 text-accent transition-transform ${
                        open === i ? "rotate-45" : ""
                      }`}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18">
                        <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </span>
                  </div>
                  {open === i && (
                    <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-ink/75">
                      {item.a}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
