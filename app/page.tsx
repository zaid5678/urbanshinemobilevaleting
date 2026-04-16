import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Droplets, Sparkles, Award, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "UrbanShine Mobile Valeting | London's Mobile Car Cleaning Specialists",
  description:
    "Reliable, friendly, professional mobile car valeting across London. We come to your home or workplace — you don't lift a finger.",
};

const WHATSAPP_BASE = "https://wa.me/447716087619";
const BOOK_MSG = encodeURIComponent("Hi UrbanShine, I'd like to book a valet.");

const services = [
  {
    icon: Droplets,
    name: "Exterior Wash",
    desc: "A thorough hand wash, rinse, and dry — your paint looking pristine without the queues at the car wash.",
    href: "/services",
  },
  {
    icon: Sparkles,
    name: "Full Valet",
    desc: "Complete inside and out. Deep interior clean, dashboard, windows, and a showroom-quality exterior finish.",
    href: "/services",
  },
  {
    icon: Award,
    name: "Premium Detail",
    desc: "Our flagship treatment. Full valet plus wax, tyre dressing, and leather conditioning for the full detail bay experience.",
    href: "/services",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Car foam wash detailing",
  },
  {
    src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80",
    alt: "Dark luxury car exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&q=80",
    alt: "Car paint close-up detailing",
  },
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80",
    alt: "Professional car wash",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center" style={{ minHeight: "calc(100vh - 64px)" }}>
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
          alt="Professional mobile car valeting with foam wash on a dark car"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p
            className="text-[#00A3FF] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            London&apos;s Mobile Valeting Specialists
          </p>
          <h1 className="chrome-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-none tracking-tight mb-6">
            We Clean<br />While You Relax
          </h1>
          <p
            className="text-[#E8E8E8] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Reliable, friendly, professional mobile car valeting across London.
            We come to your home or workplace — you don&apos;t lift a finger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`${WHATSAPP_BASE}?text=${BOOK_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00A3FF] text-white font-semibold tracking-wide uppercase px-8 py-4 rounded text-sm transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_24px_rgba(0,163,255,0.5)] min-w-[200px] text-center"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Book on WhatsApp
            </a>
            <Link
              href="/services"
              className="border border-[#00A3FF] text-[#00A3FF] font-semibold tracking-wide uppercase px-8 py-4 rounded text-sm transition-all duration-200 hover:bg-[#00A3FF]/10 min-w-[200px] text-center"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="bg-[#111111] border-y border-[#00A3FF]/20 py-5">
        <div
          className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm text-[#E8E8E8]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {["Fully Mobile", "All London Boroughs", "Eco-Friendly Products", "Fully Insured"].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-[#00A3FF] font-bold">✓</span> {item}
              {i < arr.length - 1 && <span className="text-[#444] ml-8 hidden sm:inline">•</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES PREVIEW ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p
            className="text-[#00A3FF] text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Built to Impress
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, name, desc, href }) => (
            <div
              key={name}
              className="bg-[#111111] border-t-2 border-[#00A3FF] p-8 rounded transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,163,255,0.12)] group"
            >
              <Icon className="text-[#00A3FF] mb-5" size={32} strokeWidth={1.5} />
              <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-3">{name}</h3>
              <p
                className="text-[#A0A0A0] text-sm leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {desc}
              </p>
              <Link
                href={href}
                className="text-[#00A3FF] text-sm font-semibold tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="border border-[#00A3FF]/40 text-[#E8E8E8] text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded hover:border-[#00A3FF] hover:text-white transition-all duration-200"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            See All Packages
          </Link>
        </div>
      </section>

      {/* ── WHY URBANSHINE ── */}
      <section className="bg-[#0D0D0D] border-y border-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <p
                className="text-[#00A3FF] text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Why Choose Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
                Built for Busy Londoners
              </h2>
              <p
                className="text-[#A0A0A0] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                You shouldn&apos;t have to waste your weekend waiting at a car wash. UrbanShine brings a
                professional detail service directly to your driveway or office car park.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {[
                { title: "We Come to You", desc: "Home, office, or wherever your car is — we bring the full kit." },
                { title: "Flexible Booking", desc: "Early mornings, weekday slots — designed around your schedule." },
                { title: "Eco-Friendly Products", desc: "Professional-grade, biodegradable products safe for your paintwork." },
                { title: "Fully Insured", desc: "Complete peace of mind. Your vehicle is always protected." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#00A3FF] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-white font-semibold uppercase tracking-wide text-sm">{title}</p>
                    <p
                      className="text-[#A0A0A0] text-sm mt-1 leading-relaxed"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p
              className="text-[#00A3FF] text-xs font-semibold tracking-[0.3em] uppercase mb-2"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              The Results
            </p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              See the Work
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-[#00A3FF] text-sm font-semibold tracking-wide hover:text-white transition-colors duration-200 whitespace-nowrap"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            See the full gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map(({ src, alt }) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA BAND ── */}
      <section className="bg-[#00A3FF]/5 border-y border-[#00A3FF]/20 py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            Ready for a<br />Spotless Car?
          </h2>
          <p
            className="text-[#A0A0A0] text-lg mb-10"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Message us on WhatsApp and we&apos;ll get you booked in — fast.
          </p>
          <a
            href={`${WHATSAPP_BASE}?text=${BOOK_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00A3FF] text-white font-semibold tracking-widest uppercase px-10 py-5 rounded text-sm transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_32px_rgba(0,163,255,0.5)]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
