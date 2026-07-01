import { BenefitsRo } from "@/components/ro/home/BenefitsRo";
import { FeaturedBuildsRo } from "@/components/ro/home/FeaturedBuildsRo";
import { FinalCtaRo } from "@/components/ro/home/FinalCtaRo";
import { GuidesPreviewRo } from "@/components/ro/home/GuidesPreviewRo";
import { HeroRo } from "@/components/ro/home/HeroRo";
import { WorkshopRo } from "@/components/ro/home/WorkshopRo";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function RomanianHomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <HeroRo />

      <BenefitsRo />

      <FeaturedBuildsRo />

      <WorkshopRo />

      <GuidesPreviewRo />

      <FinalCtaRo />

      <Footer />
    </main>
  );
}