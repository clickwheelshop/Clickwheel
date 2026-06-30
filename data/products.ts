export type ProductTone = "dark" | "steel" | "silver" | "warm";

export type ClickwheelProduct = {
  slug: string;
  name: string;
  model: string;
  storage: string;
  battery: string;
  finish: string;
  price: string;
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
    name: "The Studio",
    model: "iPod Classic 7th Gen",
    storage: "512GB Flash Storage",
    battery: "3000mAh Battery",
    finish: "Matte Black",
    price: "From €279",
    tone: "dark",
    shortDescription:
      "A clean, focused everyday classic with generous storage and extended battery life.",
    overview:
      "The Studio is designed as a modern daily listener. It combines a matte black finish with flash storage and a high-capacity battery for a quiet, reliable music library.",
    idealFor:
      "Listeners who want a minimal, durable iPod Classic for daily music, commuting and long listening sessions.",
    highlights: [
      "512GB flash storage",
      "3000mAh extended battery",
      "Matte black housing",
      "Professionally restored internals",
    ],
    includes: [
      "Restored iPod Classic",
      "USB 30-pin cable",
      "Build configuration record",
      "Clickwheel warranty information",
    ],
  },
  {
    slug: "the-collector",
    name: "The Collector",
    model: "iPod Classic 5.5 Gen",
    storage: "1TB Flash Storage",
    battery: "3000mAh Battery",
    finish: "Polished Steel",
    price: "From €329",
    tone: "steel",
    shortDescription:
      "A high-capacity configuration for large music collections and classic 5.5 Gen character.",
    overview:
      "The Collector combines the sought-after 5.5 Gen platform with 1TB of flash storage, extended battery life and a polished steel rear finish.",
    idealFor:
      "Collectors and lossless-music listeners who want a large library in a classic iPod form.",
    highlights: [
      "1TB flash storage",
      "3000mAh extended battery",
      "Polished steel rear plate",
      "Classic 5.5 Gen platform",
    ],
    includes: [
      "Restored iPod Classic",
      "USB 30-pin cable",
      "Build configuration record",
      "Clickwheel warranty information",
    ],
  },
  {
    slug: "the-heritage",
    name: "The Heritage",
    model: "iPod Classic 6th Gen",
    storage: "256GB Flash Storage",
    battery: "2000mAh Battery",
    finish: "Silver",
    price: "From €249",
    tone: "silver",
    shortDescription:
      "A timeless silver classic with a balanced storage and battery configuration.",
    overview:
      "The Heritage keeps the familiar iPod Classic look while replacing ageing internal storage and battery components with a practical modern setup.",
    idealFor:
      "Anyone who wants a straightforward restored iPod Classic with room for a substantial everyday library.",
    highlights: [
      "256GB flash storage",
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
    name: "The Signature",
    model: "iPod Classic 7th Gen",
    storage: "1TB Flash Storage",
    battery: "3000mAh Battery",
    finish: "Custom Engraving",
    price: "From €399",
    tone: "warm",
    shortDescription:
      "A premium 1TB build intended for collectors, gifts and personal customisation.",
    overview:
      "The Signature is a premium Clickwheel reference build with maximum supported storage, extended battery life and a personalised rear plate configuration.",
    idealFor:
      "Collectors and music enthusiasts who want a personal, high-capacity iPod Classic built around their library.",
    highlights: [
      "1TB maximum supported flash storage",
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