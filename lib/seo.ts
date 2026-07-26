import type { Metadata } from "next";

export const PRODUCTION_ORIGIN = "https://www.clickwheel.shop";
export const SITE_NAME = "Clickwheel";

export const SITE_LOCALES = {
  en: {
    html: "en",
    openGraph: "en_US",
  },
  ro: {
    html: "ro",
    openGraph: "ro_RO",
  },
} as const;

export type SiteLocale = keyof typeof SITE_LOCALES;

const localeMetadata = {
  en: {
    defaultTitle: "Clickwheel | Restored & Upgraded iPod Classic",
    description:
      "Restored and upgraded iPod Classic devices with flash storage, extended batteries and carefully selected finishes.",
    socialTitle: "Clickwheel | Restored & Upgraded iPod Classic",
    socialDescription:
      "Classic on the outside. Modern on the inside. Restored iPod Classic devices with flash storage and extended batteries.",
    keywords: [
      "iPod Classic",
      "restored iPod Classic",
      "upgraded iPod Classic",
      "iPod flash storage upgrade",
      "iPod battery replacement",
      "iPod restoration",
      "Clickwheel",
    ],
  },
  ro: {
    defaultTitle: "Clickwheel | iPod Classic restaurat si upgrade-at",
    description:
      "iPod Classic restaurate si upgrade-ate cu stocare flash, baterii extinse si finisaje atent alese.",
    socialTitle: "Clickwheel | iPod Classic restaurat si upgrade-at",
    socialDescription:
      "Clasic la exterior. Modern la interior. iPod Classic restaurate cu stocare flash si baterii extinse.",
    keywords: [
      "iPod Classic",
      "iPod Classic restaurat",
      "iPod Classic upgrade-at",
      "upgrade stocare flash iPod",
      "inlocuire baterie iPod",
      "restaurare iPod",
      "Clickwheel",
    ],
  },
} as const;

export function canonicalUrl(pathname: string) {
  return new URL(pathname, `${PRODUCTION_ORIGIN}/`).toString();
}

export function languageAlternates(englishPath: string, romanianPath: string) {
  return {
    en: canonicalUrl(englishPath),
    ro: canonicalUrl(romanianPath),
    "x-default": canonicalUrl(englishPath),
  };
}

export function createRootMetadata(locale: SiteLocale): Metadata {
  const copy = localeMetadata[locale];

  return {
    metadataBase: new URL(PRODUCTION_ORIGIN),
    icons: {
      icon: [
        {
          url: "/favicon.ico?v=11",
          type: "image/x-icon",
        },
      ],
    },
    title: {
      default: copy.defaultTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: copy.description,
    keywords: [...copy.keywords],
    openGraph: {
      type: "website",
      locale: SITE_LOCALES[locale].openGraph,
      siteName: SITE_NAME,
      title: copy.socialTitle,
      description: copy.socialDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.socialTitle,
      description: copy.socialDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
