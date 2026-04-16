"use client";

import { useState } from "react";
import type { CheckoutPayload } from "@/app/api/create-checkout/route";

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function BuyButton({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setLoading(true);
    setError(null);

    try {
      const payload: CheckoutPayload = {
        name: product.name,
        description: product.description,
        unitAmount: product.price,
        quantity: 1,
        imageUrl: product.imageUrl,
      };

      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Failed to create checkout session");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        onClick={handleBuy}
        disabled={loading}
        className="bg-[#00A3FF] text-white text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_14px_rgba(0,163,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed min-h-[36px] min-w-[90px] flex items-center justify-center"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {loading ? (
          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          "Buy Now"
        )}
      </button>
      {error && (
        <p className="text-red-400 text-[10px] max-w-[120px] text-right" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          {error}
        </p>
      )}
    </div>
  );
}
