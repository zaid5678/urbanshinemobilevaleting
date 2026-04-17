import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartContext";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UrbanShine Mobile Valeting | London's Mobile Car Cleaning Specialists",
    template: "%s | UrbanShine Mobile Valeting",
  },
  description:
    "Professional mobile car valeting across all London boroughs. We come to your home or workplace — reliable, friendly, and fully insured. Book on WhatsApp.",
  keywords: ["mobile car valeting London", "car cleaning London", "mobile valet", "car detailing London"],
  openGraph: {
    title: "UrbanShine Mobile Valeting | London's Mobile Car Cleaning Specialists",
    description:
      "Professional mobile car valeting across all London boroughs. We come to your home or workplace.",
    url: "https://urbanshinemobilevaleting.co.uk",
    siteName: "UrbanShine Mobile Valeting",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "UrbanShine Mobile Valeting — Professional car cleaning in London",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  // favicon is served from app/icon.jpg — Next.js detects it automatically
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F5F5] antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
