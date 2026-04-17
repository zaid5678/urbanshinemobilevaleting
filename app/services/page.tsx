import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Transparent pricing, premium results. View all UrbanShine Mobile Valeting packages — from exterior washes to full premium details across London.",
};

// TODO: confirm pricing with client
const packages = [
  {
    id: "exterior-wash",
    name: "Exterior Wash",
    price: "from £25",
    priceAmount: 2500,
    tagline: "The quick refresh",
    includes: [
      "Full hand wash & rinse",
      "Wheel & tyre clean",
      "Hand dry & streak-free finish",
      "Window exterior clean",
    ],
    msg: "Hi UrbanShine, I'd like to book the Exterior Wash package.",
    highlight: false,
  },
  {
    id: "mini-valet",
    name: "Mini Valet",
    price: "from £45",
    priceAmount: 4500,
    tagline: "Inside & out",
    includes: [
      "Everything in Exterior Wash",
      "Interior vacuum (seats, floors, boot)",
      "Dashboard wipe-down",
      "Door sills cleaned",
    ],
    msg: "Hi UrbanShine, I'd like to book the Mini Valet package.",
    highlight: false,
  },
  {
    id: "full-valet",
    name: "Full Valet",
    price: "from £75",
    priceAmount: 7500,
    tagline: "Our most popular",
    includes: [
      "Everything in Mini Valet",
      "Interior deep clean",
      "All window interior & exterior",
      "Door pockets & cup holders",
      "Odour neutraliser treatment",
    ],
    msg: "Hi UrbanShine, I'd like to book the Full Valet package.",
    highlight: true,
  },
  {
    id: "premium-detail",
    name: "Premium Detail",
    price: "from £120",
    priceAmount: 12000,
    tagline: "The full treatment",
    includes: [
      "Everything in Full Valet",
      "Hand wax application",
      "Tyre dressing & trim shine",
      "Leather conditioning",
      "Ceramic spray sealant",
    ],
    msg: "Hi UrbanShine, I'd like to book the Premium Detail package.",
    highlight: false,
  },
  {
    id: "interior-deep-clean",
    name: "Interior Deep Clean",
    price: "from £90",
    priceAmount: 9000,
    tagline: "For stubborn stains",
    includes: [
      "Full interior vacuum",
      "Upholstery shampoo & extraction",
      "Stain removal treatment",
      "Carpet deep clean",
      "Interior plastics dressed",
    ],
    msg: "Hi UrbanShine, I'd like to book the Interior Deep Clean package.",
    highlight: false,
  },
  {
    id: "van-4x4-valet",
    name: "Van / 4x4 Valet",
    price: "from £95",
    priceAmount: 9500,
    tagline: "Larger vehicles",
    includes: [
      "Full exterior wash & dry",
      "Interior vacuum & wipe-down",
      "Load area cleaned",
      "All windows cleaned",
      "Wheel & arch clean",
    ],
    msg: "Hi UrbanShine, I'd like to book the Van / 4x4 Valet package.",
    highlight: false,
  },
];

// TODO: confirm add-on pricing with client
const addons = [
  { name: "Pet Hair Removal", price: "from £20" },
  { name: "Headlight Restoration", price: "from £30" },
  { name: "Engine Bay Clean", price: "from £35" },
  { name: "Ceramic Spray Sealant", price: "from £25" },
  { name: "Ozone Odour Treatment", price: "from £30" },
  { name: "Tar & Iron Fallout Removal", price: "from £25" },
];

export default function ServicesPage() {
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
            What We Offer
          </p>
          <h1 className="chrome-text text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight">
            Our Services
          </h1>
          <p
            className="text-[#A0A0A0] text-base sm:text-lg mt-5 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Transparent pricing. Premium results. No hidden fees.
          </p>
        </div>
      </section>

      {/* ── PACKAGES GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col bg-[#111111] rounded p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,163,255,0.1)] ${
                pkg.highlight
                  ? "border border-[#00A3FF] shadow-[0_0_24px_rgba(0,163,255,0.1)]"
                  : "border-t-2 border-t-[#00A3FF] border border-transparent"
              }`}
            >
              {pkg.highlight && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00A3FF] text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Most Popular
                </span>
              )}

              <p
                className="text-[#00A3FF] text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {pkg.tagline}
              </p>
              <h2 className="text-white text-2xl font-bold uppercase tracking-wide mb-1">{pkg.name}</h2>
              <p className="text-[#E8E8E8] text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {pkg.price}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#A0A0A0]"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    <CheckCircle2 size={16} className="text-[#00A3FF] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <AddToCartButton product={{
                id: pkg.id,
                name: pkg.name,
                description: pkg.tagline,
                price: pkg.priceAmount,
                imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
                unit: "1 booking",
              }} fullWidth />
            </div>
          ))}
        </div>

        <p
          className="text-center text-[#606060] text-sm mt-10"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Prices vary by vehicle size and condition. Message us for a tailored quote.
        </p>
      </section>

      {/* ── ADD-ONS ── */}
      <section className="bg-[#0D0D0D] border-y border-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-[#00A3FF] text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Enhance Your Package
            </p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Optional Add-Ons
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addons.map(({ name, price }) => (
              <div
                key={name}
                className="flex items-center justify-between bg-[#111111] border border-[#1A1A1A] rounded px-6 py-4"
              >
                <span
                  className="text-[#E8E8E8] text-sm font-medium"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {name}
                </span>
                <span
                  className="text-[#00A3FF] text-sm font-bold ml-4 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {price}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-[#00A3FF] text-white font-semibold tracking-widest uppercase px-10 py-4 rounded text-sm transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_24px_rgba(0,163,255,0.5)]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
