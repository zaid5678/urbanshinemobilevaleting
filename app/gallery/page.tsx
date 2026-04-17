"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: "/SnapInsta.to_651016692_18060343931433626_3608304060369942912_n.jpg",
    alt: "Before and after interior clean — messy boot transformed to clean dashboard",
  },
  {
    src: "/SnapInsta.to_669377469_18066803840433626_5222591806774433791_n.jpg",
    alt: "Before and after — dirty seat interior to gleaming Audi A1 exterior",
  },
  {
    src: "/SnapInsta.to_669807446_18067493795433626_1570589152011660557_n.jpg",
    alt: "Mercedes AMG exterior shine and spotless leather interior after full valet",
  },
  {
    src: "/SnapInsta.to_670390646_18067645703433626_4556063835841186076_n.jpg",
    alt: "Toyota Hilux before, during foam wash, and after — full exterior clean",
  },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = images;

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

      {/* ── IMAGE GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((img, idx) => (
            <button
              key={img.src}
              className="relative aspect-square overflow-hidden rounded group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00A3FF]"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`View ${img.alt} in fullscreen`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
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
            className="relative w-full max-w-3xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square w-full max-h-[85vh]">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain rounded"
                sizes="(max-width: 1280px) 100vw, 900px"
              />
            </div>
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
