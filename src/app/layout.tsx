import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Navbar from "@/components/common/navbar";
import localFont from "next/font/local";
import Footer from '@/components/common/footer'
import "./globals.css";
import { cn } from "@/lib/utils";
import BottomBlur from "@/components/common/bottomBlur";
import { ReactLenis } from "@/lib/lenis"
import { Toaster } from 'sonner';

const helveticaNeue = localFont({
  src: "../../public/Assests/Fonts/HelveticaNeueMedium.otf",
  variable: "--font-sans",
});

const didot = localFont({
  src: "../../public/Assests/Fonts/Didot Medium.ttf",
  variable: "--font-didot",
})
const halfre = localFont({
  src: "../../public/Assests/Fonts/halfre.ttf",
  variable: "--font-halfre",
})

const franie = localFont({
  src: [
    {
      path: "../../public/Assests/Fonts/Franie-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Assests/Fonts/Franie-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Assests/Fonts/Franie-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Assests/Fonts/Franie-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-franie",
})

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: "--font-mulish",
})


export const metadata: Metadata = {
  metadataBase: new URL("https://drydash.in"),
  title: {
    default: "DryDash | Same-Day Dry Cleaning & Shoe Care in Delhi NCR",
    template: "%s | DryDash",
  },
  description:
    "Same-day dry cleaning, luxury shoe spa, car wash, and garment restoration with free doorstep pickup and delivery in Delhi, Gurugram, Noida, and Ghaziabad. Zero hidden charges.",
  applicationName: "DryDash",
  keywords: [
    "same-day dry cleaning",
    "dry cleaning Delhi NCR",
    "dry cleaning Gurgaon",
    "dry cleaning Noida",
    "shoe spa Delhi",
    "sneaker laundry Delhi NCR",
    "doorstep dry cleaner",
    "express dry cleaning 8 hours",
    "shoe cleaning near me",
    "DryDash",
  ],
  authors: [{ name: "DryDash", url: "https://drydash.in" }],
  creator: "DryDash",
  publisher: "DryDash",
  alternates: {
    canonical: "https://drydash.in/",
  },
  openGraph: {
    title: "DryDash | Same-Day Dry Cleaning & Shoe Care in Delhi NCR",
    description:
      "Get your shoes and apparel restored the same day, with free pickup, delivery, and zero hidden charges across Delhi NCR.",
    url: "https://drydash.in/",
    siteName: "DryDash",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/Assests/Images/Hero_charater.png",
        width: 1200,
        height: 630,
        alt: "DryDash - Same-Day Dry Cleaning & Shoe Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DryDash | Same-Day Dry Cleaning & Shoe Care",
    description:
      "Same-day dry cleaning and luxury shoe spa with free doorstep pickup & delivery in Delhi NCR.",
    images: ["/Assests/Images/Hero_charater.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi, Gurugram, Noida, Ghaziabad",
    "geo.position": "28.6139;77.2090",
    ICBM: "28.6139, 77.2090",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DryCleaningOrLaundry",
      "@id": "https://drydash.in/#localbusiness",
      name: "DryDash",
      url: "https://drydash.in/",
      logo: "https://drydash.in/Assests/Logo/logo.svg",
      image: "https://drydash.in/Assests/Images/Hero_charater.png",
      description:
        "Same-day dry cleaning, luxury shoe spa, car wash, and on-site cleaning with free doorstep pickup & delivery in Delhi NCR.",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
      areaServed: [
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Gurugram" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Ghaziabad" },
        { "@type": "City", name: "Greater Noida" },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.6139,
        longitude: 77.209,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "22:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://drydash.in/#website",
      url: "https://drydash.in/",
      name: "DryDash",
      publisher: { "@id": "https://drydash.in/#localbusiness" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={cn("antialiased", helveticaNeue.variable, didot.variable, halfre.variable, franie.variable, mulish.className, "font-sans")}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <ReactLenis root options={{ autoResize: true }}>
          <Navbar />
          {children}
          <BottomBlur />
          <Footer />
          <Toaster />
        </ReactLenis>
      </body>
    </html>
  );
}
