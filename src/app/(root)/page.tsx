"use client";
import HeroSection from "@/components/Hero/hero-section";
import Header from "@/components/header/page";
import FeaturesSection from "@/components/homepage/features/page";
import HowItWorks from "@/components/homepage/howitworks/page";
import ApiKeySection from "@/components/homepage/api-key/api-key-section";
import PricingSection from "@/components/homepage/pricing/pricing";
import CTA from "@/components/homepage/cta/CTA";
import Footer from "@/components/homepage/footer/footer";

export default function Home() {

  return (
    <>
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <ApiKeySection />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
    </>
  );
}
