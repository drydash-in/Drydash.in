import type { Metadata } from "next";
import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import WhychoosDD from "@/components/landing/whychoosDD";
import Howtouse from "@/components/landing/howItsWorks";
import Faq from "@/components/landing/faq";
import Testimonials from "@/components/landing/testimonials";
import Delivery from "@/components/landing/delivery";
import Banner from "@/components/landing/banner";
import ReferAndEarn from "@/components/landing/referAndEarn";
import HowItsWorks from "@/components/landing/howItsWorks";
import AutoScrollTop from "@/components/landing/autoScrollTop";

export const metadata: Metadata = {
  title: "Same-Day Dry Cleaning & Shoe Care in Delhi NCR",
  description:
    "Get your shoes and apparel restored the same day with free doorstep pickup, express delivery, and zero hidden charges across Delhi NCR, Gurugram, Noida, and Ghaziabad.",
  alternates: {
    canonical: "https://drydash.in/",
  },
  openGraph: {
    title: "DryDash | Same-Day Dry Cleaning & Shoe Care in Delhi NCR",
    description:
      "Get your shoes and apparel restored the same day, with free pickup, delivery, and zero hidden charges.",
    url: "https://drydash.in/",
    siteName: "DryDash",
    locale: "en_IN",
    type: "website",
  },
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does DryDash work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our process is simple: Schedule a pickup through the DryDash app, our specialist collects your garments or shoes, we clean them with premium eco-friendly care, and deliver them back to your doorstep within 24 hours (or 8 hours with express delivery).",
      },
    },
    {
      "@type": "Question",
      name: "What pricing plans are available for DryDash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer transparent, fixed pricing with zero hidden charges. Check our app for live rates in your city (Delhi, Gurugram, Noida, Ghaziabad).",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of using DryDash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Benefits include professional-grade cleaning, eco-friendly solvents, convenient doorstep pickup, same-day delivery, and our express delivery guarantee.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas does DryDash serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DryDash currently serves Delhi NCR including New Delhi, South Delhi, Gurugram, Noida, Ghaziabad, and Greater Noida.",
      },
    },
    {
      "@type": "Question",
      name: "Does DryDash offer same-day shoe cleaning and sneaker spa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, DryDash offers comprehensive luxury shoe spa and sneaker restoration services with same-day and express turnaround options.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqSchema),
        }}
      />
      <AutoScrollTop />
      <Hero />
      <Banner />
      <WhychoosDD />
      <Testimonials />
      <Services />
      {/* <Delivery /> */}
      {/* <Howtouse /> */}
      <HowItsWorks />
      <Faq />
      <ReferAndEarn />

    </main>
  );
}
