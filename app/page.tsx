import { Benefits } from "@/components/home/Benefits";
import { FeaturedBuilds } from "@/components/home/FeaturedBuilds";
import { FinalCta } from "@/components/home/FinalCta";
import { GuidesPreview } from "@/components/home/GuidesPreview";
import { Hero } from "@/components/home/Hero";
import { Workshop } from "@/components/home/Workshop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <Hero />

      <Benefits />

      <FeaturedBuilds />

      <Workshop />

      <GuidesPreview />

      <FinalCta />

      <Footer />
    </main>
  );
}