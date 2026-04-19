import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <LogoStrip />
      <HowItWorks />
      <Features />
      <Testimonial />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
