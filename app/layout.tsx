import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const headingFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"]
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const accentFont = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-accent",
  weight: ["300", "400", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gutglow.com"),
  title: {
    default: "Gut Glow | Science-Backed Gut Health Support",
    template: "%s | Gut Glow"
  },
  description:
    "Gut Glow is your trusted source for digestive wellness education, supplements, and community support.",
  keywords: [
    "gut health",
    "digestive wellness",
    "probiotics",
    "IBS support",
    "gut supplements"
  ],
  openGraph: {
    title: "Gut Glow | Science-Backed Gut Health Support",
    description:
      "Explore expert resources, evidence-based supplements, and supportive community programs to help you feel your best.",
    url: "https://www.gutglow.com",
    siteName: "Gut Glow",
    images: [{ url: "/images/og-gut-glow.svg", width: 1200, height: 630, alt: "Gut Glow" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Gut Glow | Science-Backed Gut Health Support",
    description:
      "Digestive wellness resources, personalized quiz insights, and clean supplements to support your gut health.",
    images: ["/images/og-gut-glow.svg"],
    creator: "@gutglow"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${accentFont.variable}`}
    >
      <body className="min-h-screen bg-cream text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-teal focus:shadow-soft"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
