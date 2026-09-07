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

export default function Home() {
  return (
    <main>
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
