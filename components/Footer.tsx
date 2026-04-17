import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.18 8.18 0 0 0 4.78 1.52V7.06a4.85 4.85 0 0 1-1.01-.37z" />
    </svg>
  );
}

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#00A3FF] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.jpg"
              alt="UrbanShine Mobile Valeting"
              height={48}
              width={160}
              className="h-12 w-auto object-contain"
            />
            <p className="text-[#A0A0A0] text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              We Clean While You Relax.<br />
              London&apos;s mobile car valeting specialists.
            </p>
            <p className="text-[#606060] text-xs mt-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              © 2026 UrbanShine Mobile Valeting. All rights reserved.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3
              className="text-[#E8E8E8] text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#A0A0A0] hover:text-[#00A3FF] text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3
              className="text-[#E8E8E8] text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+447716087619"
                  className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#00A3FF] text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <Phone size={16} className="flex-shrink-0" />
                  07716 087619
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447716087619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#25D366] text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <WhatsAppIcon size={16} />
                  07716 087619
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/urbanshine_mobile_valeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#00A3FF] text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <InstagramIcon size={16} />
                  @urbanshine_mobile_valeting
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@urbanshine_mobile_valeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#00A3FF] text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <TikTokIcon size={16} />
                  @urbanshine_mobile_valeting
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-[#A0A0A0] text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <MapPin size={16} className="flex-shrink-0" />
                All London Boroughs
              </li>
              <li
                className="flex items-center gap-2 text-[#A0A0A0] text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <Clock size={16} className="flex-shrink-0" />
                Mon–Sat, 7am–7pm
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
