"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type Choice = {
  name: string;
  description: string;
  price: number;
};

const modelOptions: Choice[] = [
  {
    name: "iPod Classic 7th Gen",
    description: "Late-generation Classic platform for a refined everyday build.",
    price: 0,
  },
  {
    name: "iPod Classic 6th Gen",
    description: "A classic aluminium-front platform with a timeless look.",
    price: 0,
  },
  {
    name: "iPod Classic 5.5 Gen",
    description: "An earlier Classic platform, popular with collectors.",
    price: 0,
  },
];

const storageOptions: Choice[] = [
  {
    name: "256GB",
    description: "A strong everyday music library.",
    price: 0,
  },
  {
    name: "512GB",
    description: "More room for lossless music and larger collections.",
    price: 40,
  },
  {
    name: "1TB",
    description: "Maximum supported Clickwheel storage configuration.",
    price: 95,
  },
];

const batteryOptions: Choice[] = [
  {
    name: "2000mAh",
    description: "Balanced everyday battery life.",
    price: 0,
  },
  {
    name: "3000mAh",
    description: "Extended battery for long listening sessions.",
    price: 25,
  },
];

const finishOptions: Choice[] = [
  {
    name: "Silver",
    description: "Clean and timeless.",
    price: 0,
  },
  {
    name: "Matte Black",
    description: "Minimal and understated.",
    price: 15,
  },
  {
    name: "Space Grey",
    description: "A darker modern finish.",
    price: 20,
  },
  {
    name: "Custom Colour",
    description: "Selected colour housing configuration.",
    price: 35,
  },
];

const backplateOptions: Choice[] = [
  {
    name: "Polished Steel",
    description: "Classic stainless steel finish.",
    price: 0,
  },
  {
    name: "Mirror Finish Restoration",
    description: "Restored stainless steel backplate.",
    price: 30,
  },
  {
    name: "Custom Engraving",
    description: "Personalised engraving on the rear plate.",
    price: 45,
  },
];

const softwareOptions: Choice[] = [
  {
    name: "Standard iPod OS",
    description: "Classic Apple interface.",
    price: 0,
  },
  {
    name: "Rockbox Setup",
    description: "Advanced playback and format support.",
    price: 20,
  },
];

const accessoryOptions: Choice[] = [
  {
    name: "30-pin USB Cable",
    description: "Charging and music transfer cable.",
    price: 12,
  },
  {
    name: "Wall Charger",
    description: "Compact USB charging adapter.",
    price: 18,
  },
  {
    name: "Protective Sleeve",
    description: "Soft everyday protection.",
    price: 22,
  },
  {
    name: "Hard Case",
    description: "Structured protective case.",
    price: 29,
  },
  {
    name: "Wired Earphones",
    description: "Simple wired listening setup.",
    price: 35,
  },
  {
    name: "Bluetooth Transmitter",
    description: "Wireless listening accessory.",
    price: 39,
  },
];

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
          {option.price === 0 ? "Included" : `+€${option.price}`}
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
            key={option.name}
            option={option}
            active={selected.name === option.name}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </section>
  );
}

export default function BuildPage() {
  const basePrice = 249;

  const [model, setModel] = useState(modelOptions[0]);
  const [storage, setStorage] = useState(storageOptions[0]);
  const [battery, setBattery] = useState(batteryOptions[0]);
  const [finish, setFinish] = useState(finishOptions[0]);
  const [backplate, setBackplate] = useState(backplateOptions[0]);
  const [software, setSoftware] = useState(softwareOptions[0]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  const accessoryTotal = useMemo(() => {
    return accessoryOptions
      .filter((accessory) => selectedAccessories.includes(accessory.name))
      .reduce((total, accessory) => total + accessory.price, 0);
  }, [selectedAccessories]);

  const totalPrice =
    basePrice +
    model.price +
    storage.price +
    battery.price +
    finish.price +
    backplate.price +
    software.price +
    accessoryTotal;

  const requestUrl = `/request-build?model=${encodeURIComponent(
    model.name,
  )}&storage=${encodeURIComponent(
    storage.name,
  )}&battery=${encodeURIComponent(
    battery.name,
  )}&finish=${encodeURIComponent(
    finish.name,
  )}&backplate=${encodeURIComponent(
    backplate.name,
  )}&software=${encodeURIComponent(
    software.name,
  )}&accessories=${encodeURIComponent(
    selectedAccessories.length > 0
      ? selectedAccessories.join(", ")
      : "None selected",
  )}&total=${totalPrice}`;

  function toggleAccessory(name: string) {
    setSelectedAccessories((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
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
              onSelect={(option) => setModel(option)}
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
                  const isSelected = selectedAccessories.includes(option.name);

                  return (
                    <button
                      key={option.name}
                      type="button"
                      onClick={() => toggleAccessory(option.name)}
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
                          {isSelected ? "Added" : `+€${option.price}`}
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
                      {selectedAccessories.map((item) => (
                        <p key={item} className="font-semibold">
                          {item}
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
                      €{totalPrice}
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