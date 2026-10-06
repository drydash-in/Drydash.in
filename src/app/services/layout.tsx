import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dry Cleaning & Shoe Care Services in Delhi NCR",
  description:
    "Explore DryDash's same-day dry cleaning, luxury shoe spa, car wash, onsite upholstery cleaning, and 8-hour express delivery services with free doorstep pickup across Delhi NCR.",
  alternates: {
    canonical: "https://drydash.in/services/",
  },
  openGraph: {
    title: "Our Services | DryDash Dry Cleaning & Shoe Care",
    description:
      "Same-day garment dry cleaning, luxury sneaker spa, car wash, and on-site cleaning with free doorstep pickup across Delhi, Gurugram, Noida, and Ghaziabad.",
    url: "https://drydash.in/services/",
    siteName: "DryDash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/Assests/Images/Services/DryCleaning.png",
        width: 1200,
        height: 630,
        alt: "DryDash Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | DryDash",
    description:
      "Same-day dry cleaning, luxury shoe spa, and express delivery in Delhi NCR.",
    images: ["/Assests/Images/Services/DryCleaning.png"],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DryDash Cleaning & Restoration Services",
  provider: {
    "@type": "LocalBusiness",
    name: "DryDash",
    url: "https://drydash.in/",
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Ghaziabad" },
    { "@type": "City", name: "Greater Noida" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "DryDash Main Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dry Cleaning",
          description:
            "Same-day premium eco-friendly dry cleaning for designer apparel, suits, lehengas, and everyday wear with free pickup and delivery.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shoe Spa",
          description:
            "Luxury sneaker and formal shoe restoration, deep cleaning, odor elimination, and sole rejuvenation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Wash",
          description: "Convenient doorstep car wash and exterior/interior detailing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Site Cleaning",
          description:
            "Specialized onsite deep cleaning for sofas, carpets, curtains, and mattresses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "8-Hours Express Delivery",
          description:
            "Guaranteed 8-hour turnaround express service for urgent garment and shoe cleaning needs.",
        },
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      {children}
    </>
  );
}
