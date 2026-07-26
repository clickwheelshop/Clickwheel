"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  calculateConfiguratorTotalEurCents,
  getConfiguratorOptions,
  getConfiguratorStorageOptions,
  type ConfiguratorChoice,
} from "@/data/configurator";
import { formatEurCents } from "@/lib/money";

type Choice = ConfiguratorChoice;

const {
  models: modelOptions,
  batteries: batteryOptions,
  finishes: finishOptions,
  backplates: backplateOptions,
  software: softwareOptions,
  accessories: accessoryOptions,
} = getConfiguratorOptions("en");

function OptionCard({
  option,
  active,
  onClick,
}: {
  option: Choice;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border p-5 text-left transition ${
        active
          ? "border-black bg-black text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
          : "border-black/10 bg-white hover:border-black/40"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">{option.name}</h3>

          <p
            className={`mt-2 text-sm leading-6 ${
              active ? "text-white/70" : "text-neutral-600"
            }`}
          >
            {option.description}
          </p>
        </div>

        <span
          className={`whitespace-nowrap text-sm font-semibold ${
            active ? "text-white" : "text-neutral-700"
          }`}
        >
          {option.included
            ? "Included"
            : option.priceEurCents === 0
              ? "Upgrade"
            : `+${formatEurCents(option.priceEurCents)}`}
        </span>
      </div>
    </button>
  );
}

function ConfigurationSection({
  step,
  title,
  description,
  options,
  selected,
  onSelect,
}: {
  step: string;
  title: string;
  description?: string;
  options: Choice[];
  selected: Choice;
  onSelect: (option: Choice) => void;
}) {
  return (
    <section>
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
          Step {step}
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
            {description}
          </p>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            active={selected.id === option.id}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </section>
  );
}

export default function BuildPage() {
  const [model, setModel] = useState(modelOptions[0]);
  const [storage, setStorage] = useState(
    getConfiguratorStorageOptions("en", modelOptions[0].id)[0],
  );
  const [battery, setBattery] = useState(batteryOptions[0]);
  const [finish, setFinish] = useState(finishOptions[0]);
  const [backplate, setBackplate] = useState(backplateOptions[0]);
  const [software, setSoftware] = useState(softwareOptions[0]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const storageOptions = getConfiguratorStorageOptions("en", model.id);

  const selectedAccessoryOptions = accessoryOptions.filter((accessory) =>
    selectedAccessories.includes(accessory.id),
  );

  const totalPriceEurCents = calculateConfiguratorTotalEurCents({
    model,
    storage,
    battery,
    finish,
    backplate,
    software,
    accessories: selectedAccessoryOptions,
  });

  const requestUrl = `/request-build?model=${encodeURIComponent(
    model.id,
  )}&storage=${encodeURIComponent(
    storage.id,
  )}&battery=${encodeURIComponent(
    battery.id,
  )}&finish=${encodeURIComponent(
    finish.id,
  )}&backplate=${encodeURIComponent(
    backplate.id,
  )}&software=${encodeURIComponent(
    software.id,
  )}&accessories=${encodeURIComponent(
    selectedAccessories.join(","),
  )}`;

  function toggleAccessory(id: string) {
    setSelectedAccessories((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function selectModel(option: Choice) {
    const nextStorageOptions = getConfiguratorStorageOptions("en", option.id);

    setModel(option);
    setStorage((current) =>
      nextStorageOptions.some((storageOption) => storageOption.id === current.id)
        ? current
        : nextStorageOptions[0],
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Build Yours
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Build a classic
                <br />
                around your music.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Choose your Classic platform, storage, battery, finish, software
              and accessories. Every Clickwheel build is professionally
              restored and prepared for daily use.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 xl:grid-cols-[1fr_380px]">
          <div className="space-y-14">
            <ConfigurationSection
              step="1"
              title="Choose your Classic platform."
              description="Model availability and compatible parts are confirmed before payment."
              options={modelOptions}
              selected={model}
              onSelect={selectModel}
            />

            <ConfigurationSection
              step="2"
              title="Choose storage."
              options={storageOptions}
              selected={storage}
              onSelect={(option) => setStorage(option)}
            />

            <ConfigurationSection
              step="3"
              title="Choose battery."
              options={batteryOptions}
              selected={battery}
              onSelect={(option) => setBattery(option)}
            />

            <ConfigurationSection
              step="4"
              title="Choose finish."
              options={finishOptions}
              selected={finish}
              onSelect={(option) => setFinish(option)}
            />

            <ConfigurationSection
              step="5"
              title="Choose rear plate."
              options={backplateOptions}
              selected={backplate}
              onSelect={(option) => setBackplate(option)}
            />

            <ConfigurationSection
              step="6"
              title="Choose software."
              options={softwareOptions}
              selected={software}
              onSelect={(option) => setSoftware(option)}
            />

            <section>
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                  Step 7
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  Complete your setup.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
                  Add accessories now so they can be included with your build.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {accessoryOptions.map((option) => {
                  const isSelected = selectedAccessories.includes(option.id);

                  return (
                    <button
                      key={option.name}
                      type="button"
                      onClick={() => toggleAccessory(option.id)}
                      className={`w-full rounded-2xl border p-5 text-left transition ${
                        isSelected
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-black/10 bg-white hover:border-black/40"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-semibold">
                            {option.name}
                          </h3>

                          <p
                            className={`mt-2 text-sm leading-6 ${
                              isSelected
                                ? "text-white/75"
                                : "text-neutral-600"
                            }`}
                          >
                            {option.description}
                          </p>
                        </div>

                        <span className="whitespace-nowrap text-sm font-semibold">
                          {isSelected
                            ? "Added"
                            : `+${formatEurCents(option.priceEurCents)}`}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <Link
                href="/accessories"
                className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Explore all accessories →
              </Link>
            </section>
          </div>

          <aside className="h-fit xl:sticky xl:top-28">
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_55px_rgba(0,0,0,0.08)]">
              <div className="bg-[#141414] px-7 py-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                  Your Build
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  Clickwheel Classic
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  Professionally restored iPod Classic.
                </p>

                <div className="relative mx-auto mt-8 h-64 w-44 rounded-[28px] border-[7px] border-neutral-300 bg-[#f5f1e8] shadow-2xl">
                  <div className="absolute left-4 right-4 top-5 h-24 rounded-lg border-[4px] border-black bg-white">
                    <div className="px-3 py-3 text-[8px] font-semibold leading-4 text-black">
                      <p className="rounded bg-blue-600 px-1.5 py-0.5 text-white">
                        Music
                      </p>
                      <p className="mt-1">Videos</p>
                      <p>Photos</p>
                      <p>Settings</p>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-neutral-800">
                    <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200" />
                  </div>
                </div>
              </div>

              <div className="space-y-5 px-7 py-7 text-sm">
                <div className="flex justify-between gap-5">
                  <span className="text-neutral-500">Model</span>
                  <span className="text-right font-semibold">{model.name}</span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-neutral-500">Storage</span>
                  <span className="text-right font-semibold">
                    {storage.name}
                  </span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-neutral-500">Battery</span>
                  <span className="text-right font-semibold">
                    {battery.name}
                  </span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-neutral-500">Finish</span>
                  <span className="text-right font-semibold">
                    {finish.name}
                  </span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-neutral-500">Rear Plate</span>
                  <span className="text-right font-semibold">
                    {backplate.name}
                  </span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-neutral-500">Software</span>
                  <span className="text-right font-semibold">
                    {software.name}
                  </span>
                </div>

                {selectedAccessories.length > 0 && (
                  <div className="border-t border-black/10 pt-5">
                    <p className="mb-3 text-neutral-500">Accessories</p>

                    <div className="space-y-2">
                      {selectedAccessoryOptions.map((item) => (
                        <p key={item.id} className="font-semibold">
                          {item.name}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-black/10 pt-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-neutral-500">Estimated total</p>
                      <p className="mt-1 text-xs text-neutral-500">
                        Final price confirmed before checkout.
                      </p>
                    </div>

                    <p className="text-3xl font-semibold tracking-[-0.04em]">
                      {formatEurCents(totalPriceEurCents)}
                    </p>
                  </div>
                </div>

                <Link
                  href={requestUrl}
                  className="block w-full rounded-full bg-black px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Continue with this build →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
