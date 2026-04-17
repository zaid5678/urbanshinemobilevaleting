"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart, type CartItem } from "./CartContext";

type Product = Omit<CartItem, "quantity">;

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      onClick={handleAdd}
      className={`flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded transition-all duration-200 min-h-[36px] min-w-[80px] justify-center ${
        added
          ? "bg-green-600/20 text-green-400 border border-green-600/40"
          : "bg-[#00A3FF] text-white hover:bg-[#0077FF] hover:shadow-[0_0_14px_rgba(0,163,255,0.5)]"
      }`}
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
      aria-label={`Add ${product.name} to cart`}
    >
      {added ? (
        <>
          <Check size={12} />
          Added
        </>
      ) : (
        <>
          <ShoppingCart size={12} />
          Add
        </>
      )}
    </button>
  );
}
