import type {
  ConfiguratorAccessoryId,
  ConfiguratorBackplateId,
  ConfiguratorBatteryId,
  ConfiguratorFinishId,
  ConfiguratorLocale,
  ConfiguratorModelId,
  ConfiguratorSoftwareId,
  ConfiguratorStorageId,
} from "@/data/configurator";

/** Locales supported by the build-request workflow. */
export type BuildRequestLocale = ConfiguratorLocale;

/**
 * Untrusted configuration values received from a URL or future form action.
 * Values stay unknown until the trusted resolver validates them as IDs.
 */
export type RawBuildRequestConfigurationInput = Readonly<{
  model?: unknown;
  storage?: unknown;
  battery?: unknown;
  finish?: unknown;
  backplate?: unknown;
  software?: unknown;
  accessories?: unknown;
}>;

/** IDs normalized against the shared configurator catalogue. */
export type NormalizedBuildRequestConfigurationIds = Readonly<{
  model: ConfiguratorModelId;
  storage: ConfiguratorStorageId;
  battery: ConfiguratorBatteryId;
  finish: ConfiguratorFinishId;
  backplate: ConfiguratorBackplateId;
  software: ConfiguratorSoftwareId;
  accessories: readonly ConfiguratorAccessoryId[];
}>;

/** A trusted selected option captured at request time. */
export type SelectedItemSnapshot<Id extends string> = Readonly<{
  id: Id;
  label: string;
  priceEurCents: number;
}>;

export type SelectedModelSnapshot = SelectedItemSnapshot<ConfiguratorModelId> &
  Readonly<{
    technicalSecondaryLine: string;
  }>;

/** Immutable, localized configuration data saved with a build request. */
export type BuildRequestConfigurationSnapshot = Readonly<{
  schemaVersion: 1;
  locale: BuildRequestLocale;
  normalizedIds: NormalizedBuildRequestConfigurationIds;
  selected: Readonly<{
    model: SelectedModelSnapshot;
    storage: SelectedItemSnapshot<ConfiguratorStorageId>;
    battery: SelectedItemSnapshot<ConfiguratorBatteryId>;
    finish: SelectedItemSnapshot<ConfiguratorFinishId>;
    backplate: SelectedItemSnapshot<ConfiguratorBackplateId>;
    software: SelectedItemSnapshot<ConfiguratorSoftwareId>;
    accessories: readonly SelectedItemSnapshot<ConfiguratorAccessoryId>[];
  }>;
}>;

export type BuildRequestDisplayCurrency = "EUR" | "RON";

/** Integer-only trusted pricing captured at request time. */
export type ItemizedTrustedPriceSnapshot = Readonly<{
  schemaVersion: 1;
  sourceCurrency: "EUR";
  modelBaseEurCents: number;
  storageUpgradeEurCents: number;
  batteryEurCents: number;
  finishEurCents: number;
  backplateEurCents: number;
  softwareEurCents: number;
  accessoriesTotalEurCents: number;
  totalEurCents: number;
  display: Readonly<{
    currency: BuildRequestDisplayCurrency;
    totalMinor: number;
  }>;
  ronConversion: Readonly<{
    ronPerEurScaled: number;
    rateScale: number;
    rateVersion: string;
    rateEffectiveAt: string;
  }>;
}>;

/** Complete immutable configuration and pricing payload for persistence. */
export type ImmutableBuildRequestSnapshot = Readonly<{
  configuration: BuildRequestConfigurationSnapshot;
  pricing: ItemizedTrustedPriceSnapshot;
}>;

export type BuildRequestNormalizationField =
  | "model"
  | "storage"
  | "battery"
  | "finish"
  | "backplate"
  | "software";

/** Small machine-readable account of corrections made to untrusted input. */
export type BuildRequestNormalizationSummary = Readonly<{
  normalizationApplied: boolean;
  fallbackApplied: boolean;
  fallbackFields: readonly BuildRequestNormalizationField[];
  compatibilityCorrectionApplied: boolean;
  accessoriesNormalized: boolean;
  removedUnknownAccessoryIds: number;
  removedDuplicateAccessoryIds: number;
}>;

export type BuildRequestConfigurationResolverResult = Readonly<{
  normalizedIds: NormalizedBuildRequestConfigurationIds;
  snapshot: ImmutableBuildRequestSnapshot;
  normalization: BuildRequestNormalizationSummary;
}>;
