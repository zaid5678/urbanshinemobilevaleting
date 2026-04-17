import type { Metadata } from "next";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Real reviews from real UrbanShine customers across London. Coming soon.",
};

const WHATSAPP_BASE = "https://wa.me/447716087619";

export default function ReviewsPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        className="relative flex items-center justify-center bg-[#0A0A0A] py-20 md:py-28 overflow-hidden"
        style={{ minHeight: "40vh" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,163,255,0.04)_0%,transparent_100%)]" />
        <div className="relative z-10 text-center px-4">
          <p
            className="text-[#00A3FF] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Customer Reviews
          </p>
          <h1 className="chrome-text text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight">
            What Our Customers Say
          </h1>
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-[#111111] border border-[#00A3FF]/30 flex items-center justify-center">
            <Clock className="text-[#00A3FF]" size={36} strokeWidth={1.5} />
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4">
          Coming Soon
        </h2>
        <p
          className="text-[#A0A0A0] text-base leading-relaxed max-w-md mx-auto"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          We&apos;re collecting reviews from our customers. Check back soon — or reach out on WhatsApp if you&apos;d like to leave feedback from a recent valet.
        </p>
        <a
          href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi UrbanShine, I'd like to leave a review for my recent valet.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-[#00A3FF] text-white font-semibold tracking-widest uppercase px-8 py-4 rounded text-sm transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_24px_rgba(0,163,255,0.5)]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Leave a Review on WhatsApp
        </a>
      </section>
    </>
  );
}
