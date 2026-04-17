"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-[#00A3FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)}>
              <Image
                src="/logo.jpg"
                alt="UrbanShine Mobile Valeting"
                height={48}
                width={160}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-widest uppercase transition-all duration-200 relative group ${
                    pathname === link.href ? "text-white" : "text-[#E8E8E8] hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#00A3FF] transition-all duration-200 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              {/* Cart button */}
              <button
                onClick={openCart}
                className="relative text-[#E8E8E8] hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={`Open cart${itemCount > 0 ? ` — ${itemCount} item${itemCount !== 1 ? "s" : ""}` : ""}`}
              >
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#00A3FF] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              <Link
                href="/contact"
                className="bg-[#00A3FF] text-white text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded transition-all duration-200 hover:bg-[#0077FF] hover:shadow-[0_0_18px_rgba(0,163,255,0.5)]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Contact
              </Link>
            </div>

            {/* Mobile right side */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={openCart}
                className="relative text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={`Open cart${itemCount > 0 ? ` — ${itemCount} items` : ""}`}
              >
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 bg-[#00A3FF] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                className="text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold tracking-[0.2em] uppercase transition-colors duration-200 min-h-[44px] flex items-center ${
                pathname === link.href ? "text-[#00A3FF]" : "text-white hover:text-[#00A3FF]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#00A3FF] text-white text-lg font-semibold tracking-widest uppercase px-10 py-4 rounded mt-4 hover:bg-[#0077FF] hover:shadow-[0_0_20px_rgba(0,163,255,0.5)] transition-all duration-200 min-h-[44px] flex items-center"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
