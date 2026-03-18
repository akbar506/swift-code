"use client";
import HeroSection from "@/module/homepage/components/Hero/hero-section";
import Header from "@/module/homepage/components/header/page";
import FeaturesSection from "@/module/homepage/components/features/page";
import HowItWorks from "@/module/homepage/components/howitworks/page";
import ApiKeySection from "@/module/homepage/components/api-key/api-key-section";
import PricingSection from "@/module/homepage/components/pricing/pricing";
import CTA from "@/module/homepage/components/cta/CTA";
import Footer from "@/module/homepage/components/footer/footer";

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
