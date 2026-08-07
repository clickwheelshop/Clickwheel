import type { Metadata } from "next";
import {
  canonicalUrl,
  languageAlternates,
  SITE_LOCALES,
  SITE_NAME,
} from "@/lib/seo";

const buildTitle = "Configureaza-ti iPod-ul Classic";
const buildDescription =
  "Configureaza un iPod Classic restaurat alegand modelul, stocarea si optiunile de upgrade.";

export const metadata: Metadata = {
  title: buildTitle,
  description: buildDescription,
  alternates: {
    canonical: canonicalUrl("/ro/build"),
    languages: languageAlternates("/build", "/ro/build"),
  },
  openGraph: {
    type: "website",
    url: canonicalUrl("/ro/build"),
    siteName: SITE_NAME,
    locale: SITE_LOCALES.ro.openGraph,
    alternateLocale: SITE_LOCALES.en.openGraph,
    title: buildTitle,
    description: buildDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle,
    description: buildDescription,
  },
};

export default function RomanianBuildLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
