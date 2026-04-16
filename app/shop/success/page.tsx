import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Your order has been placed successfully.",
};

export default function SuccessPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-32 min-h-[60vh]">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00A3FF]/10 rounded-full mb-8">
        <CheckCircle2 className="text-[#00A3FF]" size={40} strokeWidth={1.5} />
      </div>

      <h1 className="chrome-text text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-4">
        Order Confirmed
      </h1>

      <p
        className="text-[#A0A0A0] text-base sm:text-lg max-w-md mb-10 leading-relaxed"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        Thanks for your purchase! You&apos;ll receive a confirmation email shortly. We&apos;ll dispatch your order within 1–2 business days.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link
          href="/shop"
          className="bg-[#00A3FF] text-white font-semibold tracking-widest uppercase px-8 py-4 rounded text-sm transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_20px_rgba(0,163,255,0.5)]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Back to Shop
        </Link>
        <Link
          href="/"
          className="border border-[#333] text-[#A0A0A0] font-semibold tracking-widest uppercase px-8 py-4 rounded text-sm hover:border-[#00A3FF] hover:text-white transition-all duration-200"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
