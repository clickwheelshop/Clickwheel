import type { Metadata } from "next";
import {
  canonicalUrl,
  languageAlternates,
  SITE_LOCALES,
  SITE_NAME,
} from "@/lib/seo";

const buildTitle = "Build Your iPod Classic";
const buildDescription =
  "Configure a refurbished iPod Classic with your preferred model, storage and upgrade options.";

export const metadata: Metadata = {
  title: buildTitle,
  description: buildDescription,
  alternates: {
    canonical: canonicalUrl("/build"),
    languages: languageAlternates("/build", "/ro/build"),
  },
  openGraph: {
    type: "website",
    url: canonicalUrl("/build"),
    siteName: SITE_NAME,
    locale: SITE_LOCALES.en.openGraph,
    alternateLocale: SITE_LOCALES.ro.openGraph,
    title: buildTitle,
    description: buildDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle,
    description: buildDescription,
  },
};

export default function BuildLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
