"use client";

import { useState, FormEvent } from "react";
import { MessageCircle, MapPin, Clock, Send } from "lucide-react";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const WHATSAPP_BASE = "https://wa.me/447716087619";

const serviceOptions = [
  "Exterior Wash",
  "Mini Valet",
  "Full Valet",
  "Premium Detail",
  "Interior Deep Clean",
  "Van / 4x4 Valet",
  "Not sure — send me a quote",
];

interface FormState {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  date: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  vehicle: "",
  service: "",
  date: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.vehicle.trim()) newErrors.vehicle = "Vehicle make/model is required";
    if (!form.service) newErrors.service = "Please select a service";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `Hi UrbanShine, I'd like to get a quote / book a valet.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Vehicle: ${form.vehicle}`,
      `Service: ${form.service}`,
      form.date ? `Preferred date: ${form.date}` : null,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(lines)}`, "_blank", "noopener,noreferrer");
  }

  function field(name: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  const inputClass =
    "w-full bg-[#111111] border border-[#2A2A2A] rounded px-4 py-3 text-[#F5F5F5] text-sm placeholder-[#606060] focus:outline-none focus:border-[#00A3FF] transition-colors duration-200";
  const labelClass = "block text-[#E8E8E8] text-xs font-semibold tracking-[0.15em] uppercase mb-2";
  const errorClass = "text-red-400 text-xs mt-1";

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
            Book a Valet
          </p>
          <h1 className="chrome-text text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* ── TWO COLUMN ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT: Contact info */}
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-8">
              Contact Info
            </h2>

            <ul className="flex flex-col gap-6 mb-12">
              <li>
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi UrbanShine, I'd like to book a valet.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#00A3FF]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A3FF]/20 transition-colors">
                    <MessageCircle size={20} className="text-[#00A3FF]" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold tracking-[0.15em] uppercase text-[#606060] mb-0.5"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      WhatsApp
                    </p>
                    <p
                      className="text-[#E8E8E8] group-hover:text-[#00A3FF] transition-colors"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      07716 087619
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/urbanshine_mobile_valeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#00A3FF]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A3FF]/20 transition-colors">
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold tracking-[0.15em] uppercase text-[#606060] mb-0.5"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Instagram
                    </p>
                    <p
                      className="text-[#E8E8E8] group-hover:text-[#00A3FF] transition-colors"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      @urbanshine_mobile_valeting
                    </p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#00A3FF]/10 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#00A3FF]" />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.15em] uppercase text-[#606060] mb-0.5"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Service Area
                  </p>
                  <p className="text-[#E8E8E8]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    All London Boroughs
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#00A3FF]/10 rounded flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[#00A3FF]" />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.15em] uppercase text-[#606060] mb-0.5"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Hours
                  </p>
                  <p className="text-[#E8E8E8]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    Mon–Sat, 7am–7pm
                  </p>
                </div>
              </li>
            </ul>

            <div className="bg-[#00A3FF]/5 border border-[#00A3FF]/20 rounded p-6">
              <p
                className="text-[#E8E8E8] text-sm leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Prefer to skip the form? Just message us directly on WhatsApp — we&apos;ll get back to
                you quickly with availability and pricing.
              </p>
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi UrbanShine, I'd like to book a valet.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00A3FF] text-white font-semibold tracking-widest uppercase px-6 py-3 rounded text-xs transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_20px_rgba(0,163,255,0.5)]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <MessageCircle size={16} />
                Message Us on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT: Quick quote form */}
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-8">
              Quick Quote
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div>
                <label htmlFor="name" className={labelClass} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => field("name", e.target.value)}
                  placeholder="John Smith"
                  className={inputClass}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  autoComplete="name"
                />
                {errors.name && <p className={errorClass} style={{ fontFamily: "var(--font-inter), sans-serif" }}>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => field("phone", e.target.value)}
                  placeholder="07700 000000"
                  className={inputClass}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  autoComplete="tel"
                />
                {errors.phone && <p className={errorClass} style={{ fontFamily: "var(--font-inter), sans-serif" }}>{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="vehicle" className={labelClass} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Vehicle Make &amp; Model *
                </label>
                <input
                  id="vehicle"
                  type="text"
                  value={form.vehicle}
                  onChange={(e) => field("vehicle", e.target.value)}
                  placeholder="e.g. BMW 3 Series, VW Golf"
                  className={inputClass}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                />
                {errors.vehicle && <p className={errorClass} style={{ fontFamily: "var(--font-inter), sans-serif" }}>{errors.vehicle}</p>}
              </div>

              <div>
                <label htmlFor="service" className={labelClass} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Service Interested In *
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => field("service", e.target.value)}
                  className={`${inputClass} appearance-none`}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <option value="" disabled>Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className={errorClass} style={{ fontFamily: "var(--font-inter), sans-serif" }}>{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="date" className={labelClass} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={(e) => field("date", e.target.value)}
                  className={`${inputClass} [color-scheme:dark]`}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => field("message", e.target.value)}
                  placeholder="Any extra info — pet hair, specific stains, parking notes, etc."
                  className={`${inputClass} resize-none`}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#00A3FF] text-white font-semibold tracking-widest uppercase px-8 py-4 rounded text-sm transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_24px_rgba(0,163,255,0.5)] min-h-[52px]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <Send size={16} />
                Send via WhatsApp
              </button>

              <p
                className="text-[#606060] text-xs text-center"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Submitting opens WhatsApp with your details pre-filled. No data is stored.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
