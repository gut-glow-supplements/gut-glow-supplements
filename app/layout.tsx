import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

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
    <html lang="en">
      <body className="min-h-screen bg-cream text-charcoal">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
