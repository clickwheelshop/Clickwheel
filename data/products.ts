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
  rearConfiguration?: string;
  modelSpecificNote?: string;
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
      "A restored iPod Video built for everyday listening, with 128GB flash storage included and higher-capacity configurations available.",
    overview:
      "The iPod Video keeps the familiar classic format and adds flash storage, a 3000mAh battery configuration and a matte black finish.",
    idealFor:
      "daily listening, commuting and personal music libraries.",
    highlights: [
      "128GB flash storage included",
      "Storage upgrades up to 1TB",
      "3000mAh battery configuration",
      "Matte black finish",
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
      "A restored late-2006 iPod Video with 128GB flash storage included, higher-capacity configurations and a polished steel finish.",
    overview:
      "The iPod Video Enhanced combines the late-2006 Wolfson DAC model with flash storage, a 3000mAh battery configuration and a polished steel rear plate.",
    idealFor:
      "collectors and listeners who want a larger library in a classic iPod form.",
    highlights: [
      "128GB flash storage included",
      "Storage upgrades up to 1TB",
      "3000mAh battery configuration",
      "Polished steel rear plate",
    ],
    includes: [
      "Restored iPod Video Enhanced",
      "USB 30-pin cable",
      "Build configuration record",
      "Clickwheel warranty information",
    ],
    rearConfiguration: "Polished steel rear plate",
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
      "A restored 6th-generation iPod Classic with 128GB flash storage and a silver finish.",
    overview:
      "The 6th-generation iPod Classic keeps the familiar 2007–2008 silver design with 128GB flash storage and a 2000mAh battery configuration.",
    idealFor:
      "listeners who want a straightforward restored iPod Classic with a fixed 128GB storage configuration.",
    highlights: [
      "128GB flash storage included",
      "Limited to 128GB maximum",
      "2000mAh battery configuration",
      "Silver housing finish",
    ],
    includes: [
      "Restored iPod Classic",
      "USB 30-pin cable",
      "Build configuration record",
      "Clickwheel warranty information",
    ],
    modelSpecificNote:
      "This model is limited to 128GB and does not support storage upgrades.",
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
      "A restored 7th-generation iPod Classic with 128GB flash storage included, higher-capacity configurations and personalization options.",
    overview:
      "The 7th-generation iPod Classic pairs the late-2009 model with flash storage, a 3000mAh battery configuration and a custom engraving option.",
    idealFor:
      "collectors, gifts and listeners who want a personalized iPod Classic built around their library.",
    highlights: [
      "128GB flash storage included",
      "Storage upgrades up to 1TB",
      "3000mAh battery configuration",
      "Custom engraving option",
    ],
    includes: [
      "Restored iPod Classic",
      "USB 30-pin cable",
      "Build configuration record",
      "Clickwheel warranty information",
    ],
    rearConfiguration: "Custom engraving option",
  },
];
