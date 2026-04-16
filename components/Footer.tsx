import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Clock } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
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
              © 2025 UrbanShine Mobile Valeting. All rights reserved.
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
                  href="https://wa.me/447716087619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#00A3FF] text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <MessageCircle size={16} className="flex-shrink-0" />
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
