import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://resonant.ai"),
  title: {
    default: "Resonant — Meeting notes that actually sound like you",
    template: "%s · Resonant",
  },
  description:
    "Resonant listens to your meetings and writes the notes your team will actually read. No bullet-point salad. No 2,000-word transcripts. Just the meeting, distilled.",
  keywords: [
    "AI meeting notes",
    "meeting transcription",
    "automated meeting summaries",
    "team notes",
    "productivity",
  ],
  authors: [{ name: "Resonant" }],
  openGraph: {
    title: "Resonant — Meeting notes that actually sound like you",
    description:
      "The AI note-taker built for people who read their notes twice. Launching soon.",
    url: "https://resonant.ai",
    siteName: "Resonant",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resonant — Meeting notes that actually sound like you",
    description:
      "The AI note-taker built for people who read their notes twice.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
