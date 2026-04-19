"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 border-b border-line/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
            <circle cx="11" cy="11" r="10" stroke="#1A1915" strokeWidth="1.2" />
            <circle cx="11" cy="11" r="4.5" fill="#D94A1F" />
          </svg>
          <span className="font-display text-[22px] font-medium tracking-tightest text-ink">
            Resonant
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <a href="#how" className="link-underline text-[13px] text-ink">
            How it works
          </a>
          <a href="#features" className="link-underline text-[13px] text-ink">
            Features
          </a>
          <a href="#pricing" className="link-underline text-[13px] text-ink">
            Pricing
          </a>
          <a href="#faq" className="link-underline text-[13px] text-ink">
            FAQ
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="text-[13px] text-muted hover:text-ink">
            Sign in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-paper transition hover:bg-accent"
          >
            Start free
          </a>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 17h16" stroke="#1A1915" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line/60 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a href="#how" className="text-sm" onClick={() => setOpen(false)}>
              How it works
            </a>
            <a href="#features" className="text-sm" onClick={() => setOpen(false)}>
              Features
            </a>
            <a href="#pricing" className="text-sm" onClick={() => setOpen(false)}>
              Pricing
            </a>
            <a href="#faq" className="text-sm" onClick={() => setOpen(false)}>
              FAQ
            </a>
            <a
              href="#cta"
              className="mt-2 rounded-full bg-ink px-5 py-2.5 text-center text-sm text-paper"
            >
              Start free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
