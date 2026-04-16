"use client";

// TODO: replace Unsplash placeholders with real UrbanShine customer photos

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "all" | "exterior" | "interior" | "before-after";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
  width: number;
  height: number;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Professional foam car wash on black car",
    category: "exterior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    alt: "Dark luxury car exterior after valet",
    category: "exterior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&q=80",
    alt: "Close-up of buffed car paint finish",
    category: "before-after",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
    alt: "Car being washed with pressure water",
    category: "exterior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80",
    alt: "Professional car detailing close-up",
    category: "before-after",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    alt: "Silver sports car after exterior clean",
    category: "exterior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    alt: "Sports car front exterior shine",
    category: "exterior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    alt: "Luxury car exterior detail result",
    category: "exterior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1484723091739-30990cefc5af?w=800&q=80",
    alt: "Hand wax polishing car paintwork",
    category: "before-after",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
    alt: "Clean car interior after valet",
    category: "interior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
    alt: "Car dashboard and interior cleaned",
    category: "interior",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1580274455191-1c62238fa1c9?w=800&q=80",
    alt: "Sports car exterior detail and shine",
    category: "exterior",
    width: 800,
    height: 600,
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Exterior", value: "exterior" },
  { label: "Interior", value: "interior" },
  { label: "Before & After", value: "before-after" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "all" ? images : images.filter((img) => img.category === activeFilter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

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
            Our Work
          </p>
          <h1 className="chrome-text text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight">
            The Results Speak<br />For Themselves
          </h1>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`px-6 py-2 rounded text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${
                activeFilter === value
                  ? "bg-[#00A3FF] text-white shadow-[0_0_16px_rgba(0,163,255,0.4)]"
                  : "border border-[#333] text-[#A0A0A0] hover:border-[#00A3FF] hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ── IMAGE GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, idx) => (
            <button
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00A3FF]"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`View ${img.alt} in fullscreen`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span
                  className="text-white text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#00A3FF] px-4 py-2 rounded"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  View
                </span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            className="text-center text-[#606060] py-20"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            No images in this category yet.
          </p>
        )}
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:text-[#00A3FF] transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:text-[#00A3FF] transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:text-[#00A3FF] transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src.replace("w=800", "w=1200")}
              alt={filtered[lightboxIndex].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh] rounded"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>

          <p
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#A0A0A0] text-sm"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {lightboxIndex + 1} / {filtered.length}
          </p>
        </div>
      )}
    </>
  );
}
