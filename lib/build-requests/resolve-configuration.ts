import { pricingConfig } from "@/config/pricing";
import {
  calculateConfiguratorTotalEurCents,
  configuratorBasePriceEurCents,
  findConfiguratorChoice,
  getConfiguratorOptions,
  getConfiguratorStorageOptions,
  parseAccessoryIds,
  type ConfiguratorAccessoryId,
  type ConfiguratorBackplateId,
  type ConfiguratorBatteryId,
  type ConfiguratorChoice,
  type ConfiguratorFinishId,
  type ConfiguratorModelId,
  type ConfiguratorSoftwareId,
  type ConfiguratorStorageId,
} from "@/data/configurator";
import { convertEurCentsToRonBani } from "@/lib/money";
import type {
  BuildRequestConfigurationResolverResult,
  BuildRequestLocale,
  BuildRequestNormalizationField,
  NormalizedBuildRequestConfigurationIds,
  RawBuildRequestConfigurationInput,
} from "@/lib/build-requests/types";

function readId(value: unknown) {
  return typeof value === "string" ? value : null;
}

function resolveChoice(
  choices: ConfiguratorChoice[],
  value: unknown,
): { choice: ConfiguratorChoice; usedFallback: boolean } {
  const requestedId = readId(value);
  const choice = findConfiguratorChoice(choices, requestedId);

  return {
    choice,
    usedFallback: requestedId === null || choice.id !== requestedId,
  };
}

/**
 * Resolves untrusted configuration IDs entirely from shared trusted data.
 * Extra input properties and all browser-provided prices, labels or totals are
 * ignored because this function reads only the declared ID fields.
 */
export function resolveBuildRequestConfiguration(
  locale: BuildRequestLocale,
  rawInput: RawBuildRequestConfigurationInput = {},
): BuildRequestConfigurationResolverResult {
  const options = getConfiguratorOptions(locale);
  const fallbackFields: BuildRequestNormalizationField[] = [];

  const resolvedModel = resolveChoice(options.models, rawInput.model);
  if (resolvedModel.usedFallback) {
    fallbackFields.push("model");
  }

  const storageOptions = getConfiguratorStorageOptions(
    locale,
    resolvedModel.choice.id,
  );
  const requestedStorageId = readId(rawInput.storage);
  const resolvedStorage = resolveChoice(storageOptions, rawInput.storage);
  if (resolvedStorage.usedFallback) {
    fallbackFields.push("storage");
  }

  const compatibilityCorrectionApplied =
    requestedStorageId !== null &&
    options.storage.some((choice) => choice.id === requestedStorageId) &&
    !storageOptions.some((choice) => choice.id === requestedStorageId);

  const resolvedBattery = resolveChoice(options.batteries, rawInput.battery);
  if (resolvedBattery.usedFallback) {
    fallbackFields.push("battery");
  }

  const resolvedFinish = resolveChoice(options.finishes, rawInput.finish);
  if (resolvedFinish.usedFallback) {
    fallbackFields.push("finish");
  }

  const resolvedBackplate = resolveChoice(
    options.backplates,
    rawInput.backplate,
  );
  if (resolvedBackplate.usedFallback) {
    fallbackFields.push("backplate");
  }

  const resolvedSoftware = resolveChoice(options.software, rawInput.software);
  if (resolvedSoftware.usedFallback) {
    fallbackFields.push("software");
  }

  const rawAccessoryValue = readId(rawInput.accessories);
  const rawAccessoryIds = rawAccessoryValue
    ? rawAccessoryValue.split(",").filter((id) => id.length > 0)
    : [];
  const parsedAccessoryIds = parseAccessoryIds(
    rawAccessoryValue,
    options.accessories,
  );
  const validAccessoryIds = new Set(
    options.accessories.map((choice) => choice.id),
  );
  const uniqueAccessoryIds = new Set(parsedAccessoryIds);
  const selectedAccessories = options.accessories.filter((choice) =>
    uniqueAccessoryIds.has(choice.id),
  );
  const removedUnknownAccessoryIds = rawAccessoryIds.filter(
    (id) => !validAccessoryIds.has(id),
  ).length;
  const removedDuplicateAccessoryIds =
    parsedAccessoryIds.length - uniqueAccessoryIds.size;

  const malformedAccessoryInput =
    rawInput.accessories !== undefined &&
    rawInput.accessories !== null &&
    rawAccessoryValue === null;
  const accessoriesNormalized =
    malformedAccessoryInput ||
    removedUnknownAccessoryIds > 0 ||
    removedDuplicateAccessoryIds > 0;

  const normalizedIds: NormalizedBuildRequestConfigurationIds = {
    model: resolvedModel.choice.id as ConfiguratorModelId,
    storage: resolvedStorage.choice.id as ConfiguratorStorageId,
    battery: resolvedBattery.choice.id as ConfiguratorBatteryId,
    finish: resolvedFinish.choice.id as ConfiguratorFinishId,
    backplate: resolvedBackplate.choice.id as ConfiguratorBackplateId,
    software: resolvedSoftware.choice.id as ConfiguratorSoftwareId,
    accessories: selectedAccessories.map(
      (choice) => choice.id as ConfiguratorAccessoryId,
    ),
  };

  const modelBaseEurCents =
    configuratorBasePriceEurCents + resolvedModel.choice.priceEurCents;
  const accessoriesTotalEurCents = selectedAccessories.reduce(
    (total, accessory) => total + accessory.priceEurCents,
    0,
  );
  const totalEurCents = calculateConfiguratorTotalEurCents({
    model: resolvedModel.choice,
    storage: resolvedStorage.choice,
    battery: resolvedBattery.choice,
    finish: resolvedFinish.choice,
    backplate: resolvedBackplate.choice,
    software: resolvedSoftware.choice,
    accessories: selectedAccessories,
  });
  const displayCurrency = locale === "ro" ? "RON" : "EUR";
  const displayTotalMinor =
    locale === "ro"
      ? convertEurCentsToRonBani(totalEurCents)
      : totalEurCents;

  const fallbackApplied = fallbackFields.length > 0;
  const normalizationApplied =
    fallbackApplied ||
    compatibilityCorrectionApplied ||
    accessoriesNormalized;

  return {
    normalizedIds,
    snapshot: {
      configuration: {
        schemaVersion: 1,
        locale,
        normalizedIds,
        selected: {
          model: {
            id: normalizedIds.model,
            label: resolvedModel.choice.name,
            technicalSecondaryLine: resolvedModel.choice.description,
            priceEurCents: modelBaseEurCents,
          },
          storage: {
            id: normalizedIds.storage,
            label: resolvedStorage.choice.name,
            priceEurCents: resolvedStorage.choice.priceEurCents,
          },
          battery: {
            id: normalizedIds.battery,
            label: resolvedBattery.choice.name,
            priceEurCents: resolvedBattery.choice.priceEurCents,
          },
          finish: {
            id: normalizedIds.finish,
            label: resolvedFinish.choice.name,
            priceEurCents: resolvedFinish.choice.priceEurCents,
          },
          backplate: {
            id: normalizedIds.backplate,
            label: resolvedBackplate.choice.name,
            priceEurCents: resolvedBackplate.choice.priceEurCents,
          },
          software: {
            id: normalizedIds.software,
            label: resolvedSoftware.choice.name,
            priceEurCents: resolvedSoftware.choice.priceEurCents,
          },
          accessories: selectedAccessories.map((accessory) => ({
            id: accessory.id as ConfiguratorAccessoryId,
            label: accessory.name,
            priceEurCents: accessory.priceEurCents,
          })),
        },
      },
      pricing: {
        schemaVersion: 1,
        sourceCurrency: "EUR",
        modelBaseEurCents,
        storageUpgradeEurCents: resolvedStorage.choice.priceEurCents,
        batteryEurCents: resolvedBattery.choice.priceEurCents,
        finishEurCents: resolvedFinish.choice.priceEurCents,
        backplateEurCents: resolvedBackplate.choice.priceEurCents,
        softwareEurCents: resolvedSoftware.choice.priceEurCents,
        accessoriesTotalEurCents,
        totalEurCents,
        display: {
          currency: displayCurrency,
          totalMinor: displayTotalMinor,
        },
        ronConversion: {
          ronPerEurScaled: pricingConfig.ronPerEurScaled,
          rateScale: pricingConfig.rateScale,
          rateVersion: pricingConfig.rateVersion,
          rateEffectiveAt: pricingConfig.rateEffectiveAt,
        },
      },
    },
    normalization: {
      normalizationApplied,
      fallbackApplied,
      fallbackFields,
      compatibilityCorrectionApplied,
      accessoriesNormalized,
      removedUnknownAccessoryIds,
      removedDuplicateAccessoryIds,
    },
  };
}
