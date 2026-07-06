export type ProductTone = "dark" | "steel" | "silver" | "warm";

export const clickwheelStorageLabels = {
  "128gb": "128GB",
  "256gb": "256GB",
  "512gb": "512GB",
  "1tb": "1TB",
} as const;

export type ClickwheelStorageId = keyof typeof clickwheelStorageLabels;
export type StorageUpgradeId = Exclude<ClickwheelStorageId, "128gb">;

export const storageUpgradeIds = [
  "256gb",
  "512gb",
  "1tb",
] as const satisfies readonly StorageUpgradeId[];

export type IpodModelId =
  | "ipod-video"
  | "classic-5-5-gen"
  | "classic-6th-gen"
  | "classic-7th-gen";

export type ClickwheelProduct = {
  slug: string;
  modelId: IpodModelId;
  name: string;
  secondaryLine: string;
  storage: string;
  availableStorageUpgradeIds: readonly StorageUpgradeId[];
  battery: string;
  finish: string;
  priceEurCents: number;
  tone: ProductTone;
  shortDescription: string;
  overview: string;
  idealFor: string;
  highlights: string[];
  includes: string[];
};

export const products: ClickwheelProduct[] = [
  {
    slug: "the-studio",
    modelId: "ipod-video",
    name: "iPod Video",
    secondaryLine: "5th Generation · 2005 · Wolfson DAC",
    storage: "128GB Flash Storage Included",
    availableStorageUpgradeIds: storageUpgradeIds,
    battery: "3000mAh Battery",
    finish: "Matte Black",
    priceEurCents: 27900,
    tone: "dark",
    shortDescription:
      "A clean, focused everyday iPod with flash storage and extended battery life.",
    overview:
      "The iPod Video is designed as a modern daily listener. It combines a matte black finish with flash storage and a high-capacity battery for a quiet, reliable music library.",
    idealFor:
      "Listeners who want a minimal, durable iPod for daily music, commuting and long listening sessions.",
    highlights: [
      "128GB flash storage included",
      "3000mAh extended battery",
      "Matte black housing",
      "Professionally restored internals",
    ],
    includes: [
      "Restored iPod Video",
      "USB 30-pin cable",
      "Build configuration record",
      "Clickwheel warranty information",
    ],
  },
  {
    slug: "the-collector",
    modelId: "classic-5-5-gen",
    name: "iPod Video Enhanced",
    secondaryLine: "Late 2006 · Wolfson DAC",
    storage: "128GB Flash Storage Included",
    availableStorageUpgradeIds: storageUpgradeIds,
    battery: "3000mAh Battery",
    finish: "Polished Steel",
    priceEurCents: 32900,
    tone: "steel",
    shortDescription:
      "A restored configuration for large music collections, with extended battery life and a polished steel finish.",
    overview:
      "The iPod Video Enhanced combines flash storage, extended battery life and a polished steel rear finish.",
    idealFor:
      "Collectors and lossless-music listeners who want a large library in a classic iPod form.",
    highlights: [
      "128GB flash storage included",
      "3000mAh extended battery",
      "Polished steel rear plate",
      "Professionally restored internals",
    ],
    includes: [
      "Restored iPod Video Enhanced",
      "USB 30-pin cable",
      "Build configuration record",
      "Clickwheel warranty information",
    ],
  },
  {
    slug: "the-heritage",
    modelId: "classic-6th-gen",
    name: "iPod Classic",
    secondaryLine: "6th Generation · 2007–2008 · Cirrus Logic",
    storage: "128GB Flash Storage Included",
    availableStorageUpgradeIds: [],
    battery: "2000mAh Battery",
    finish: "Silver",
    priceEurCents: 24900,
    tone: "silver",
    shortDescription:
      "A timeless silver classic with a balanced storage and battery configuration.",
    overview:
      "The 6th-generation iPod Classic keeps the familiar look while replacing ageing internal storage and battery components with a practical modern setup.",
    idealFor:
      "Anyone who wants a straightforward restored iPod Classic with room for a substantial everyday library.",
    highlights: [
      "128GB flash storage included",
      "2000mAh upgraded battery",
      "Silver housing finish",
      "Balanced everyday configuration",
    ],
    includes: [
      "Restored iPod Classic",
      "USB 30-pin cable",
      "Build configuration record",
      "Clickwheel warranty information",
    ],
  },
  {
    slug: "the-signature",
    modelId: "classic-7th-gen",
    name: "iPod Classic",
    secondaryLine: "7th Generation · Late 2009 · Cirrus Logic",
    storage: "128GB Flash Storage Included",
    availableStorageUpgradeIds: storageUpgradeIds,
    battery: "3000mAh Battery",
    finish: "Custom Engraving",
    priceEurCents: 39900,
    tone: "warm",
    shortDescription:
      "A premium build intended for collectors, gifts and personal customisation.",
    overview:
      "The 7th-generation iPod Classic is a premium Clickwheel reference build with extended battery life and a personalised rear plate configuration.",
    idealFor:
      "Collectors and music enthusiasts who want a personal iPod Classic built around their library.",
    highlights: [
      "128GB flash storage included",
      "3000mAh extended battery",
      "Custom engraving option",
      "Premium restoration configuration",
    ],
    includes: [
      "Restored iPod Classic",
      "USB 30-pin cable",
      "Build configuration record",
      "Clickwheel warranty information",
    ],
  },
];
