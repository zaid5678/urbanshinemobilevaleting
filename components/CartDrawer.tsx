"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Minus, Plus, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "./CartContext";

function formatPrice(pence: number) {
  return `£${(pence / 100).toFixed(2)}`;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount, clearCart } =
    useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  async function handleCheckout() {
    setCheckingOut(true);
    setCheckoutError(null);
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            name: item.name,
            description: `${item.description} (${item.unit})`,
            unitAmount: item.price,
            quantity: item.quantity,
            imageUrl: item.imageUrl,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Checkout failed");
      window.location.href = data.url;
    } catch (err) {
      setCheckoutError(err instanceof Error ? err.message : "Something went wrong");
      setCheckingOut(false);
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 bg-[#0F0F0F] border-l border-[#1A1A1A] flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A1A1A]">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} className="text-[#00A3FF]" />
            <h2 className="text-white text-lg font-bold uppercase tracking-wide">Cart</h2>
            {itemCount > 0 && (
              <span
                className="bg-[#00A3FF] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-[#A0A0A0] hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingCart size={48} className="text-[#2A2A2A]" strokeWidth={1} />
              <p
                className="text-[#606060] text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Your cart is empty
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 bg-[#111111] rounded p-3">
                  <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-bold uppercase tracking-wide truncate">
                      {item.name}
                    </p>
                    <p
                      className="text-[#606060] text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {item.unit} · {formatPrice(item.price)} each
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center bg-[#1A1A1A] hover:bg-[#252525] rounded text-[#A0A0A0] hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={11} />
                        </button>
                        <span
                          className="w-7 text-center text-white text-sm font-semibold"
                          style={{ fontFamily: "var(--font-inter), sans-serif" }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center bg-[#1A1A1A] hover:bg-[#252525] rounded text-[#A0A0A0] hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[#E8E8E8] text-sm font-bold"
                          style={{ fontFamily: "var(--font-inter), sans-serif" }}
                        >
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#444] hover:text-red-400 transition-colors p-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#1A1A1A] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span
                className="text-[#A0A0A0] text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>
              <span
                className="text-white text-xl font-bold"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {formatPrice(subtotal)}
              </span>
            </div>
            <p
              className="text-[#606060] text-xs"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Shipping calculated at checkout. UK delivery only.
            </p>
            {checkoutError && (
              <p
                className="text-red-400 text-xs"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {checkoutError}
              </p>
            )}
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="flex items-center justify-center gap-2 bg-[#00A3FF] text-white font-semibold tracking-widest uppercase px-6 py-4 rounded text-sm transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_20px_rgba(0,163,255,0.5)] w-full disabled:opacity-60 disabled:cursor-not-allowed min-h-[52px]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {checkingOut ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Checkout <ArrowRight size={16} />
                </>
              )}
            </button>
            <button
              onClick={clearCart}
              className="text-[#606060] hover:text-[#A0A0A0] text-xs font-semibold tracking-widest uppercase text-center transition-colors"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
