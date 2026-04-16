import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import WhychoosDD from "@/components/landing/whychoosDD";
import Howtouse from "@/components/landing/howtouse";
import Faq from "@/components/landing/faq";
import Testimonials from "@/components/landing/testimonials";
import Downloadwall from "@/components/landing/downloadwall";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhychoosDD />
      <Howtouse />
      <Faq />
      <Testimonials />
      <Downloadwall />
    </main>
  );
}
