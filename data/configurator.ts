import {
  products,
  type ClickwheelStorageId,
  type IpodModelId,
} from "@/data/products";

export type ConfiguratorLocale = "en" | "ro";

type LocalizedText = Record<ConfiguratorLocale, string>;

type ConfiguratorChoiceDefinition = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  priceEurCents: number;
  included?: boolean;
};

export type ConfiguratorChoice = {
  id: string;
  name: string;
  description: string;
  priceEurCents: number;
  included: boolean;
};

export const configuratorBasePriceEurCents = 24900;

function getModelPriceAdjustmentEurCents(modelId: IpodModelId) {
  const product = products.find((item) => item.modelId === modelId);

  if (!product) {
    throw new Error(`Missing product pricing for model: ${modelId}`);
  }

  return product.priceEurCents - configuratorBasePriceEurCents;
}

export function getAllowedStorageIdsForModel(
  modelId: string,
): ClickwheelStorageId[] {
  const product =
    products.find((item) => item.modelId === modelId) ?? products[0];

  return ["128gb", ...product.availableStorageUpgradeIds];
}

const modelDefinitions = [
  {
    id: "ipod-video",
    name: {
      en: "iPod Video",
      ro: "iPod Video",
    },
    description: {
      en: "5th Generation · 2005 · Wolfson DAC",
      ro: "5th Generation · 2005 · Wolfson DAC",
    },
    priceEurCents: getModelPriceAdjustmentEurCents("ipod-video"),
  },
  {
    id: "classic-5-5-gen",
    name: {
      en: "iPod Video Enhanced",
      ro: "iPod Video Enhanced",
    },
    description: {
      en: "Late 2006 · Wolfson DAC",
      ro: "Late 2006 · Wolfson DAC",
    },
    priceEurCents: getModelPriceAdjustmentEurCents("classic-5-5-gen"),
  },
  {
    id: "classic-6th-gen",
    name: {
      en: "iPod Classic",
      ro: "iPod Classic",
    },
    description: {
      en: "6th Generation · 2007–2008 · Cirrus Logic",
      ro: "6th Generation · 2007–2008 · Cirrus Logic",
    },
    priceEurCents: getModelPriceAdjustmentEurCents("classic-6th-gen"),
  },
  {
    id: "classic-7th-gen",
    name: {
      en: "iPod Classic",
      ro: "iPod Classic",
    },
    description: {
      en: "7th Generation · Late 2009 · Cirrus Logic",
      ro: "7th Generation · Late 2009 · Cirrus Logic",
    },
    priceEurCents: getModelPriceAdjustmentEurCents("classic-7th-gen"),
  },
] as const satisfies readonly ConfiguratorChoiceDefinition[];

const storageDefinitions = [
  {
    id: "128gb",
    name: { en: "128GB", ro: "128GB" },
    description: {
      en: "Included with every Clickwheel model.",
      ro: "Inclus cu fiecare model Clickwheel.",
    },
    priceEurCents: 0,
    included: true,
  },
  {
    id: "256gb",
    name: { en: "256GB", ro: "256GB" },
    description: {
      en: "A strong everyday music library.",
      ro: "O bibliotecă muzicală excelentă pentru utilizarea de zi cu zi.",
    },
    priceEurCents: 0,
    included: false,
  },
  {
    id: "512gb",
    name: { en: "512GB", ro: "512GB" },
    description: {
      en: "More room for lossless music and larger collections.",
      ro: "Mai mult spațiu pentru muzică lossless și colecții mai mari.",
    },
    priceEurCents: 4000,
  },
  {
    id: "1tb",
    name: { en: "1TB", ro: "1TB" },
    description: {
      en: "Maximum supported Clickwheel storage configuration.",
      ro: "Configurația maximă de stocare suportată de Clickwheel.",
    },
    priceEurCents: 9500,
  },
] as const satisfies readonly ConfiguratorChoiceDefinition[];

const batteryDefinitions = [
  {
    id: "2000mah",
    name: { en: "2000mAh", ro: "2000mAh" },
    description: {
      en: "Balanced everyday battery life.",
      ro: "Autonomie echilibrată pentru utilizare zilnică.",
    },
    priceEurCents: 0,
  },
  {
    id: "3000mah",
    name: { en: "3000mAh", ro: "3000mAh" },
    description: {
      en: "Extended battery for long listening sessions.",
      ro: "Baterie extinsă pentru sesiuni lungi de ascultare.",
    },
    priceEurCents: 2500,
  },
] as const satisfies readonly ConfiguratorChoiceDefinition[];

const finishDefinitions = [
  {
    id: "silver",
    name: { en: "Silver", ro: "Argintiu" },
    description: { en: "Clean and timeless.", ro: "Curat și atemporal." },
    priceEurCents: 0,
  },
  {
    id: "matte-black",
    name: { en: "Matte Black", ro: "Negru mat" },
    description: { en: "Minimal and understated.", ro: "Minimal și discret." },
    priceEurCents: 1500,
  },
  {
    id: "space-grey",
    name: { en: "Space Grey", ro: "Gri spațial" },
    description: {
      en: "A darker modern finish.",
      ro: "Un finisaj modern, mai închis.",
    },
    priceEurCents: 2000,
  },
  {
    id: "custom-colour",
    name: { en: "Custom Colour", ro: "Culoare personalizată" },
    description: {
      en: "Selected colour housing configuration.",
      ro: "Configurație cu carcasă într-o culoare aleasă.",
    },
    priceEurCents: 3500,
  },
] as const satisfies readonly ConfiguratorChoiceDefinition[];

const backplateDefinitions = [
  {
    id: "polished-steel",
    name: { en: "Polished Steel", ro: "Oțel polisat" },
    description: {
      en: "Classic stainless steel finish.",
      ro: "Finisaj clasic din oțel inoxidabil.",
    },
    priceEurCents: 0,
  },
  {
    id: "mirror-restoration",
    name: {
      en: "Mirror Finish Restoration",
      ro: "Restaurare finisaj oglindă",
    },
    description: {
      en: "Restored stainless steel backplate.",
      ro: "Capac spate din oțel inoxidabil restaurat.",
    },
    priceEurCents: 3000,
  },
  {
    id: "custom-engraving",
    name: { en: "Custom Engraving", ro: "Gravură personalizată" },
    description: {
      en: "Personalised engraving on the rear plate.",
      ro: "Gravură personalizată pe capacul spate.",
    },
    priceEurCents: 4500,
  },
] as const satisfies readonly ConfiguratorChoiceDefinition[];

const softwareDefinitions = [
  {
    id: "standard-ipod-os",
    name: { en: "Standard iPod OS", ro: "iPod OS standard" },
    description: {
      en: "Classic Apple interface.",
      ro: "Interfața clasică Apple.",
    },
    priceEurCents: 0,
  },
  {
    id: "rockbox-setup",
    name: { en: "Rockbox Setup", ro: "Configurare Rockbox" },
    description: {
      en: "Advanced playback and format support.",
      ro: "Redare avansată și suport pentru mai multe formate.",
    },
    priceEurCents: 2000,
  },
] as const satisfies readonly ConfiguratorChoiceDefinition[];

const accessoryDefinitions = [
  {
    id: "30-pin-usb-cable",
    name: { en: "30-pin USB Cable", ro: "Cablu USB 30-pin" },
    description: {
      en: "Charging and music transfer cable.",
      ro: "Cablu pentru încărcare și transfer de muzică.",
    },
    priceEurCents: 1200,
  },
  {
    id: "wall-charger",
    name: { en: "Wall Charger", ro: "Încărcător de priză" },
    description: {
      en: "Compact USB charging adapter.",
      ro: "Adaptor USB compact pentru încărcare.",
    },
    priceEurCents: 1800,
  },
  {
    id: "protective-sleeve",
    name: { en: "Protective Sleeve", ro: "Husă de protecție" },
    description: {
      en: "Soft everyday protection.",
      ro: "Protecție moale pentru utilizare zilnică.",
    },
    priceEurCents: 2200,
  },
  {
    id: "hard-case",
    name: { en: "Hard Case", ro: "Carcasă rigidă" },
    description: {
      en: "Structured protective case.",
      ro: "Carcasă structurată de protecție.",
    },
    priceEurCents: 2900,
  },
  {
    id: "wired-earphones",
    name: { en: "Wired Earphones", ro: "Căști cu fir" },
    description: {
      en: "Simple wired listening setup.",
      ro: "Configurare simplă pentru ascultare cu fir.",
    },
    priceEurCents: 3500,
  },
  {
    id: "bluetooth-transmitter",
    name: { en: "Bluetooth Transmitter", ro: "Transmițător Bluetooth" },
    description: {
      en: "Wireless listening accessory.",
      ro: "Accesoriu pentru ascultare wireless.",
    },
    priceEurCents: 3900,
  },
] as const satisfies readonly ConfiguratorChoiceDefinition[];

function localizeChoices(
  definitions: readonly ConfiguratorChoiceDefinition[],
  locale: ConfiguratorLocale,
): ConfiguratorChoice[] {
  return definitions.map((choice) => ({
    id: choice.id,
    name: choice.name[locale],
    description: choice.description[locale],
    priceEurCents: choice.priceEurCents,
    included: choice.included ?? choice.priceEurCents === 0,
  }));
}

export function getConfiguratorOptions(locale: ConfiguratorLocale) {
  return {
    models: localizeChoices(modelDefinitions, locale),
    storage: localizeChoices(storageDefinitions, locale),
    batteries: localizeChoices(batteryDefinitions, locale),
    finishes: localizeChoices(finishDefinitions, locale),
    backplates: localizeChoices(backplateDefinitions, locale),
    software: localizeChoices(softwareDefinitions, locale),
    accessories: localizeChoices(accessoryDefinitions, locale),
  };
}

export function getConfiguratorStorageOptions(
  locale: ConfiguratorLocale,
  modelId: string,
) {
  const allowedStorageIds = new Set(getAllowedStorageIdsForModel(modelId));

  return localizeChoices(storageDefinitions, locale).filter((choice) =>
    allowedStorageIds.has(choice.id as ClickwheelStorageId),
  );
}

export function findConfiguratorChoice(
  choices: ConfiguratorChoice[],
  id: string | null,
) {
  return choices.find((choice) => choice.id === id) ?? choices[0];
}

export function parseAccessoryIds(
  value: string | null,
  choices: ConfiguratorChoice[],
) {
  if (!value) {
    return [];
  }

  const validIds = new Set(choices.map((choice) => choice.id));

  return value.split(",").filter((id) => validIds.has(id));
}

export function calculateConfiguratorTotalEurCents({
  model,
  storage,
  battery,
  finish,
  backplate,
  software,
  accessories,
}: {
  model: ConfiguratorChoice;
  storage: ConfiguratorChoice;
  battery: ConfiguratorChoice;
  finish: ConfiguratorChoice;
  backplate: ConfiguratorChoice;
  software: ConfiguratorChoice;
  accessories: ConfiguratorChoice[];
}) {
  const storagePriceEurCents = getAllowedStorageIdsForModel(model.id).includes(
    storage.id as ClickwheelStorageId,
  )
    ? storage.priceEurCents
    : 0;

  return (
    configuratorBasePriceEurCents +
    model.priceEurCents +
    storagePriceEurCents +
    battery.priceEurCents +
    finish.priceEurCents +
    backplate.priceEurCents +
    software.priceEurCents +
    accessories.reduce(
      (total, accessory) => total + accessory.priceEurCents,
      0,
    )
  );
}
