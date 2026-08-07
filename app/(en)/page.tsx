import type { Metadata } from "next";
import { Benefits } from "@/components/home/Benefits";
import { FeaturedBuilds } from "@/components/home/FeaturedBuilds";
import { FinalCta } from "@/components/home/FinalCta";
import { GuidesPreview } from "@/components/home/GuidesPreview";
import { Hero } from "@/components/home/Hero";
import { Workshop } from "@/components/home/Workshop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  canonicalUrl,
  languageAlternates,
  SITE_LOCALES,
  SITE_NAME,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: `Restored & Upgraded iPod Classic | ${SITE_NAME}`,
  },
  description:
    "Explore professionally restored iPod Classic devices with flash storage, extended batteries and carefully selected finishes.",

  alternates: {
    canonical: canonicalUrl("/"),
    languages: languageAlternates("/", "/ro"),
  },

  openGraph: {
    type: "website",
    title: "Clickwheel | Restored & Upgraded iPod Classic",
    description:
      "Classic on the outside. Modern on the inside. Explore restored iPod Classic devices with flash storage and extended batteries.",
    url: canonicalUrl("/"),
    siteName: SITE_NAME,
    locale: SITE_LOCALES.en.openGraph,
    alternateLocale: SITE_LOCALES.ro.openGraph,
  },

  twitter: {
    card: "summary_large_image",
    title: "Clickwheel | Restored & Upgraded iPod Classic",
    description:
      "Classic on the outside. Modern on the inside. Explore restored iPod Classic devices with flash storage and extended batteries.",
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
