import type { Metadata } from "next";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Car Care Shop",
  description:
    "Professional-grade car care products used by UrbanShine. Snow foam shampoos, ceramic sealants, microfibre cloths and more — delivered across the UK.",
};

// TODO: replace Unsplash placeholder images with real product photography
// TODO: confirm final product range and pricing with client before going live
export const products = [
  {
    id: "snow-foam-shampoo",
    name: "Snow Foam Shampoo",
    tagline: "Pre-wash & contact wash",
    description: "Ultra-thick pH-neutral snow foam for a scratch-free pre-wash. 1L concentrate makes up to 10 litres of working solution.",
    price: 1299,
    unit: "1L",
    imageUrl: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?w=600&q=80",
    imageAlt: "Snow foam shampoo product",
    badge: null,
  },
  {
    id: "ceramic-spray-sealant",
    name: "Ceramic Spray Sealant",
    tagline: "6-month protection",
    description: "Professional SiO₂ ceramic spray sealant. Bonds to paintwork in minutes, repels water and UV for up to 6 months.",
    price: 2499,
    unit: "500ml",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
    imageAlt: "Ceramic spray sealant bottle",
    badge: "Best Seller",
  },
  {
    id: "interior-detailing-spray",
    name: "Interior Detailing Spray",
    tagline: "Dashboard, plastics & trim",
    description: "Anti-static formula cleans and conditions all interior plastics, vinyl, and rubber. Leaves a natural matte finish.",
    price: 999,
    unit: "500ml",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    imageAlt: "Interior detailing spray",
    badge: null,
  },
  {
    id: "microfibre-cloth-set",
    name: "Microfibre Cloth Set",
    tagline: "400 GSM — 10 pack",
    description: "Professional 400 GSM microfibre cloths. Scratch-free on all surfaces, colour-coded for paint, glass, and interior use.",
    price: 1499,
    unit: "10 pack",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    imageAlt: "Microfibre cloth set",
    badge: null,
  },
  {
    id: "tyre-dressing-gel",
    name: "Tyre Dressing Gel",
    tagline: "Satin black finish",
    description: "Water-based tyre dressing gel for a rich, long-lasting satin finish. Non-sling formula — stays on tyres, not your arches.",
    price: 1199,
    unit: "500ml",
    imageUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
    imageAlt: "Tyre dressing gel product",
    badge: null,
  },
  {
    id: "all-purpose-cleaner",
    name: "All-Purpose Cleaner",
    tagline: "Dilutable concentrate",
    description: "Highly concentrated APC. Dilute 10:1 for interior, 5:1 for wheel arches, 3:1 for engine bays. One bottle, every job.",
    price: 899,
    unit: "1L",
    imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=80",
    imageAlt: "All-purpose cleaner concentrate",
    badge: "Great Value",
  },
];

function formatPrice(pence: number) {
  return `£${(pence / 100).toFixed(2)}`;
}

export default function ShopPage() {
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
            Professional Products
          </p>
          <h1 className="chrome-text text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight mb-5">
            Car Care Shop
          </h1>
          <p
            className="text-[#A0A0A0] text-base sm:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            The same products we use on every valet — now available to buy. UK delivery.
          </p>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#111111] border border-[#1A1A1A] rounded overflow-hidden flex flex-col group transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,163,255,0.1)] hover:border-[#00A3FF]/30"
            >
              {/* Product image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 bg-[#00A3FF] text-white text-xs font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product info */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                <p
                  className="text-[#00A3FF] text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {product.tagline}
                </p>
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-white text-xl font-bold uppercase tracking-wide leading-tight">
                    {product.name}
                  </h2>
                  <span
                    className="text-[#E8E8E8] font-bold text-lg whitespace-nowrap"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {formatPrice(product.price)}
                  </span>
                </div>
                <p
                  className="text-[#A0A0A0] text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#1A1A1A]">
                  <span
                    className="text-[#606060] text-xs"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {product.unit}
                  </span>
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping notice */}
        <div className="mt-12 bg-[#111111] border border-[#1A1A1A] rounded p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <ShoppingCart className="text-[#00A3FF] flex-shrink-0" size={24} strokeWidth={1.5} />
          <div>
            <p
              className="text-[#E8E8E8] text-sm font-semibold mb-1"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              UK delivery — £3.99 standard / free over £40
            </p>
            <p
              className="text-[#606060] text-xs"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Orders dispatched within 1–2 business days. Stripe handles payment securely — we never see your card details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
