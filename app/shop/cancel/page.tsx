import type { Metadata } from "next";
import Link from "next/link";
import { XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Order Cancelled",
  description: "Your order was cancelled. No payment has been taken.",
};

export default function CancelPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-32 min-h-[60vh]">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-[#333]/50 rounded-full mb-8">
        <XCircle className="text-[#606060]" size={40} strokeWidth={1.5} />
      </div>

      <h1 className="text-white text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-4">
        Order Cancelled
      </h1>

      <p
        className="text-[#A0A0A0] text-base sm:text-lg max-w-md mb-10 leading-relaxed"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        No payment has been taken. Head back to the shop if you&apos;d like to try again.
      </p>

      <Link
        href="/shop"
        className="bg-[#00A3FF] text-white font-semibold tracking-widest uppercase px-8 py-4 rounded text-sm transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_20px_rgba(0,163,255,0.5)]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        Back to Shop
      </Link>
    </section>
  );
}
