import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import SiteTracker from "@/components/SiteTracker";
import { BUSINESS, SITE_URL } from "@/lib/business";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Windshield Repair & Replacement in Worcester, MA | Affordable Auto Glass",
    template: "%s | Affordable Auto Glass & Repair",
  },
  description:
    "Same-day and next-day auto glass service in Worcester, MA. Windshield repair & replacement, side and rear windows, mobile service. Insurance accepted. Call 508-304-3141.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: "Windshield Repair & Replacement in Worcester, MA",
    description:
      "Same-day and next-day auto glass service. Insurance accepted. Mobile service available. Call 508-304-3141 for a fast quote.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  alternateName: "Affordable Auto Glass & Repair Co",
  url: SITE_URL,
  telephone: BUSINESS.phoneIntl,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  openingHours: BUSINESS.schemaHours,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating.value,
    reviewCount: BUSINESS.rating.count,
  },
  areaServed: BUSINESS.serviceAreas.map((city) => ({
    "@type": "City",
    name: `${city}, MA`,
  })),
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <StickyCallBar />
        <SiteTracker />
      </body>
    </html>
  );
}
