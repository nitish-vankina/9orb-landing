import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "9orb — Infrastructure for the digital asset economy",
    template: "%s · 9orb",
  },
  description:
    "9orb develops security software, blockchain infrastructure, and proprietary digital-asset research. 9orb Protect is our non-custodial security and recovery-readiness platform for Bitcoin, Ethereum, and Solana.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "9orb — Infrastructure for the digital asset economy",
    description:
      "Security software, blockchain infrastructure, and proprietary digital-asset research.",
    url: siteConfig.siteUrl,
    siteName: "9orb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "9orb — Infrastructure for the digital asset economy",
    description:
      "Security software, blockchain infrastructure, and proprietary digital-asset research.",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:text-base-950 focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
