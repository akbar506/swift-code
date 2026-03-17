"use client";
import HeroSection from "@/components/Hero/hero-section";
import Header from "@/components/header/page";
import FeaturesSection from "@/components/homepage/features/page";

export default function Home() {

  return (
    <>
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
    </div>
    </>
  );
}
