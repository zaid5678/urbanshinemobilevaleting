import type { Metadata } from "next";
import { Star, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Rated 5 stars by London customers. Read genuine reviews of UrbanShine Mobile Valeting — real results, real people.",
};

const WHATSAPP_BASE = "https://wa.me/447716087619";

// TODO: replace with real customer reviews
const reviews = [
  {
    text: "Absolutely brilliant service. Left my BMW looking better than when I drove it off the forecourt. Turned up on time, got on with it, and the result was immaculate. Will 100% be booking again.",
    name: "James",
    area: "Clapham",
    date: "January 2025",
  },
  {
    text: "I had no idea mobile valeting could be this good. Booked a Full Valet while I worked from home. By lunch my car was spotless — inside and out. Couldn't believe how different it looked.",
    name: "Priya",
    area: "Canary Wharf",
    date: "February 2025",
  },
  {
    text: "They got stains out of my back seats that I was convinced were permanent. The attention to detail is genuinely impressive. Really reasonable price for the quality. Highly recommend.",
    name: "Tom",
    area: "Islington",
    date: "March 2025",
  },
  {
    text: "Best valet I've ever had, full stop. Interior was showroom fresh and the exterior gleamed. Punctual, friendly, professional throughout — everything you want from a service like this.",
    name: "Sophie",
    area: "Richmond",
    date: "January 2025",
  },
  {
    text: "Used UrbanShine twice now and both times were perfect. They even dressed the tyres which just finishes the whole thing off. My neighbour saw the car and immediately asked for the number!",
    name: "Marcus",
    area: "Hackney",
    date: "February 2025",
  },
  {
    text: "Had the Premium Detail done on my Range Rover before I sold it. The buyer actually commented on how well-presented the car was. Pretty sure it helped me get the asking price. Great investment.",
    name: "Andrew",
    area: "Wimbledon",
    date: "February 2025",
  },
  {
    text: "Quick, professional, and the car came up gleaming. Did my Full Valet while I was in back-to-back meetings. Didn't even have to leave the house. This is exactly what busy people need.",
    name: "Emma",
    area: "Shoreditch",
    date: "March 2025",
  },
  {
    text: "Booked the exterior wash for a quick refresh before a road trip. Done in under an hour and the result looked fantastic. Very fair price. I'll definitely be going for the full valet next time.",
    name: "Kieran",
    area: "Lewisham",
    date: "March 2025",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
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
            Customer Reviews
          </p>
          <h1 className="chrome-text text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight mb-5">
            What Our Customers Say
          </h1>
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span
              className="text-[#E8E8E8] text-sm ml-2"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Rated 5.0 across dozens of happy customers
            </span>
          </div>
        </div>
      </section>

      {/* ── REVIEWS GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name + review.area}
              className="bg-[#111111] border border-[#1A1A1A] border-t-2 border-t-[#00A3FF] rounded p-8 flex flex-col gap-4"
            >
              <StarRating />
              <p
                className="text-[#D0D0D0] text-sm leading-relaxed italic flex-1"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[#1A1A1A]">
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">
                    {review.name}
                  </p>
                  <p
                    className="text-[#00A3FF] text-xs"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {review.area}
                  </p>
                </div>
                <p
                  className="text-[#606060] text-xs"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEAVE A REVIEW CTA ── */}
      <section className="bg-[#0D0D0D] border-y border-[#1A1A1A] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-4">
            Had a Valet With Us?
          </h2>
          <p
            className="text-[#A0A0A0] text-base mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            We&apos;d love to hear from you. Send us a message on WhatsApp with your feedback — your
            review helps other Londoners find us and helps us keep standards high.
          </p>
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi UrbanShine, I'd like to leave a review for my recent valet.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00A3FF] text-white font-semibold tracking-widest uppercase px-8 py-4 rounded text-sm transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_24px_rgba(0,163,255,0.5)]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <MessageCircle size={18} />
            Leave a Review on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
