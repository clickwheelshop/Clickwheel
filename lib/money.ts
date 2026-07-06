import { pricingConfig } from "@/config/pricing";

export type PricingLocale = "en" | "ro";

const englishNumberFormatter = new Intl.NumberFormat("en-IE", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const romanianWholeNumberFormatter = new Intl.NumberFormat("ro-RO", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function convertEurCentsToRonBani(eurCents: number) {
  return Math.round(
    (eurCents * pricingConfig.ronPerEurScaled) / pricingConfig.rateScale,
  );
}

export function formatEurCents(eurCents: number) {
  return `€${englishNumberFormatter.format(eurCents / 100)}`;
}

export function formatRonFromEurCents(eurCents: number) {
  const ronBani = convertEurCentsToRonBani(eurCents);

  return `${romanianWholeNumberFormatter.format(ronBani / 100)} lei`;
}

export function formatPriceFromEurCents(
  eurCents: number,
  locale: PricingLocale,
) {
  return locale === "ro"
    ? formatRonFromEurCents(eurCents)
    : formatEurCents(eurCents);
}

export function formatStartingPriceFromEurCents(
  eurCents: number,
  locale: PricingLocale,
) {
  const price = formatPriceFromEurCents(eurCents, locale);

  return locale === "ro" ? `De la ${price}` : `From ${price}`;
}
