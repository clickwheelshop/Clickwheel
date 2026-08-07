import type { Metadata } from "next";
import { BenefitsRo } from "@/components/ro/home/BenefitsRo";
import { FeaturedBuildsRo } from "@/components/ro/home/FeaturedBuildsRo";
import { FinalCtaRo } from "@/components/ro/home/FinalCtaRo";
import { GuidesPreviewRo } from "@/components/ro/home/GuidesPreviewRo";
import { HeroRo } from "@/components/ro/home/HeroRo";
import { WorkshopRo } from "@/components/ro/home/WorkshopRo";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  canonicalUrl,
  languageAlternates,
  SITE_LOCALES,
  SITE_NAME,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "iPod Classic restaurat și upgrade-at",
  description:
    "Descoperă iPod Classic restaurate profesional, cu stocare flash, baterii extinse și finisaje atent alese.",

  alternates: {
    canonical: canonicalUrl("/ro"),
    languages: languageAlternates("/", "/ro"),
  },

  openGraph: {
    type: "website",
    title: "Clickwheel | iPod Classic restaurat și upgrade-at",
    description:
      "Clasic la exterior. Modern la interior. Descoperă iPod Classic restaurate cu stocare flash și baterii extinse.",
    url: canonicalUrl("/ro"),
    siteName: SITE_NAME,
    locale: SITE_LOCALES.ro.openGraph,
    alternateLocale: SITE_LOCALES.en.openGraph,
  },

  twitter: {
    card: "summary_large_image",
    title: "Clickwheel | iPod Classic restaurat și upgrade-at",
    description:
      "Clasic la exterior. Modern la interior. Descoperă iPod Classic restaurate cu stocare flash și baterii extinse.",
  },
};

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
