import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Heart, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind UrbanShine Mobile Valeting — a London-based service built from a love of cars and a frustration with wasted time.",
};

const boroughs = [
  "Barking & Dagenham", "Barnet", "Bexley", "Brent", "Bromley",
  "Camden", "City of London", "Croydon", "Ealing", "Enfield",
  "Greenwich", "Hackney", "Hammersmith & Fulham", "Haringey", "Harrow",
  "Havering", "Hillingdon", "Hounslow", "Islington", "Kensington & Chelsea",
  "Kingston upon Thames", "Lambeth", "Lewisham", "Merton", "Newham",
  "Redbridge", "Richmond upon Thames", "Southwark", "Sutton", "Tower Hamlets",
  "Waltham Forest", "Wandsworth", "Westminster",
];

const values = [
  {
    icon: Shield,
    title: "Reliable",
    desc: "We show up when we say we will, fully equipped and ready to work. No-shows, no excuses — your time is as valuable as your car.",
  },
  {
    icon: Heart,
    title: "Friendly",
    desc: "We're people people. Every customer gets a genuine, no-pressure service. We take pride in leaving you smiling as much as your car.",
  },
  {
    icon: Star,
    title: "Professional",
    desc: "We use industry-grade products and proven techniques. Everything we do is executed to a standard we'd be proud of on our own vehicles.",
  },
];

export default function AboutPage() {
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
            Our Story
          </p>
          <h1 className="chrome-text text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight">
            About UrbanShine
          </h1>
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p
              className="text-[#00A3FF] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              Detailing,<br />Your Way
            </h2>
            <div
              className="text-[#A0A0A0] text-base leading-relaxed space-y-4"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <p>
                UrbanShine was born from two things: a love of well-kept cars and a frustration with how
                much time Londoners waste at the car wash. Between queues, travel time, and mediocre
                results, the whole experience felt broken.
              </p>
              <p>
                So we fixed it. We bring the professional detail bay directly to your driveway, office
                car park, or wherever your car happens to be. No travel, no waiting, no compromising on
                quality.
              </p>
              <p>
                We built UrbanShine on three pillars: reliability, friendliness, and professionalism.
                Every booking — from a quick exterior wash to a full premium detail — is treated with
                the same care and attention. We don&apos;t cut corners because we know you&apos;ll
                notice.
              </p>
              <p>
                We work across all 33 London boroughs and cover everything from city hatchbacks to
                prestige SUVs. If it&apos;s got wheels, we&apos;ll make it shine.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&q=80"
              alt="Professional car detailing — close-up of paint treatment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#0D0D0D] border-y border-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-[#00A3FF] text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              What Drives Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#111111] border-t-2 border-[#00A3FF] rounded p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#00A3FF]/10 rounded mb-5">
                  <Icon className="text-[#00A3FF]" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-3">{title}</h3>
                <p
                  className="text-[#A0A0A0] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE AREA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <p
            className="text-[#00A3FF] text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Service Area
          </p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            All of London
          </h2>
          <p
            className="text-[#A0A0A0] text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            We cover all 33 London boroughs. If you&apos;re in London, we come to you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {boroughs.map((borough) => (
            <div
              key={borough}
              className="bg-[#111111] border border-[#1A1A1A] rounded px-3 py-2 text-center"
            >
              <span
                className="text-[#A0A0A0] text-xs"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {borough}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
