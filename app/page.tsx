import type { Metadata } from "next";
import { Benefits } from "@/components/home/Benefits";
import { FeaturedBuilds } from "@/components/home/FeaturedBuilds";
import { FinalCta } from "@/components/home/FinalCta";
import { GuidesPreview } from "@/components/home/GuidesPreview";
import { Hero } from "@/components/home/Hero";
import { Workshop } from "@/components/home/Workshop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Restored & Upgraded iPod Classic",
  description:
    "Explore professionally restored iPod Classic devices with flash storage, extended batteries and carefully selected finishes.",

  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ro: "/ro",
    },
  },

  openGraph: {
    title: "Clickwheel | Restored & Upgraded iPod Classic",
    description:
      "Classic on the outside. Modern on the inside. Explore restored iPod Classic devices with flash storage and extended batteries.",
    url: "/",
    locale: "en_US",
  },
};

export default function HomePage() {
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