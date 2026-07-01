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
    name: "iPod Classic generația 7",
    description:
      "Platformă Classic din generațiile târzii, potrivită pentru o configurație modernă de zi cu zi.",
    price: 0,
  },
  {
    name: "iPod Classic generația 6",
    description:
      "Platformă clasică cu față din aluminiu și un aspect atemporal.",
    price: 0,
  },
  {
    name: "iPod Classic generația 5.5",
    description:
      "O platformă Classic mai veche, apreciată de colecționari.",
    price: 0,
  },
];

const storageOptions: Choice[] = [
  {
    name: "256GB",
    description: "O bibliotecă muzicală excelentă pentru utilizarea de zi cu zi.",
    price: 0,
  },
  {
    name: "512GB",
    description: "Mai mult spațiu pentru muzică lossless și colecții mai mari.",
    price: 40,
  },
  {
    name: "1TB",
    description: "Configurația maximă de stocare suportată de Clickwheel.",
    price: 95,
  },
];

const batteryOptions: Choice[] = [
  {
    name: "2000mAh",
    description: "Autonomie echilibrată pentru utilizare zilnică.",
    price: 0,
  },
  {
    name: "3000mAh",
    description: "Baterie extinsă pentru sesiuni lungi de ascultare.",
    price: 25,
  },
];

const finishOptions: Choice[] = [
  {
    name: "Argintiu",
    description: "Curat și atemporal.",
    price: 0,
  },
  {
    name: "Negru mat",
    description: "Minimal și discret.",
    price: 15,
  },
  {
    name: "Gri spațial",
    description: "Un finisaj modern, mai închis.",
    price: 20,
  },
  {
    name: "Culoare personalizată",
    description: "Configurație cu carcasă într-o culoare aleasă.",
    price: 35,
  },
];

const backplateOptions: Choice[] = [
  {
    name: "Oțel polisat",
    description: "Finisaj clasic din oțel inoxidabil.",
    price: 0,
  },
  {
    name: "Restaurare finisaj oglindă",
    description: "Capac spate din oțel inoxidabil restaurat.",
    price: 30,
  },
  {
    name: "Gravură personalizată",
    description: "Gravură personalizată pe capacul spate.",
    price: 45,
  },
];

const softwareOptions: Choice[] = [
  {
    name: "iPod OS standard",
    description: "Interfața clasică Apple.",
    price: 0,
  },
  {
    name: "Configurare Rockbox",
    description: "Redare avansată și suport pentru mai multe formate.",
    price: 20,
  },
];

const accessoryOptions: Choice[] = [
  {
    name: "Cablu USB 30-pin",
    description: "Cablu pentru încărcare și transfer de muzică.",
    price: 12,
  },
  {
    name: "Încărcător de priză",
    description: "Adaptor USB compact pentru încărcare.",
    price: 18,
  },
  {
    name: "Husă de protecție",
    description: "Protecție moale pentru utilizare zilnică.",
    price: 22,
  },
  {
    name: "Carcasă rigidă",
    description: "Carcasă structurată de protecție.",
    price: 29,
  },
  {
    name: "Căști cu fir",
    description: "Configurare simplă pentru ascultare cu fir.",
    price: 35,
  },
  {
    name: "Transmițător Bluetooth",
    description: "Accesoriu pentru ascultare wireless.",
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
          {option.price === 0 ? "Inclus" : `+€${option.price}`}
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
          Pasul {step}
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

export default function RomanianBuildPage() {
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

  const requestUrl = `/ro/request-build?model=${encodeURIComponent(
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
      : "Niciun accesoriu selectat",
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
            Configurează-l
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Construiește un clasic
                <br />
                în jurul muzicii tale.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Alege platforma Classic, stocarea, bateria, finisajul,
              software-ul și accesoriile. Fiecare configurație Clickwheel este
              restaurată profesional și pregătită pentru utilizare zilnică.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 xl:grid-cols-[1fr_380px]">
          <div className="space-y-14">
            <ConfigurationSection
              step="1"
              title="Alege platforma Classic."
              description="Disponibilitatea modelelor și compatibilitatea pieselor sunt confirmate înainte de plată."
              options={modelOptions}
              selected={model}
              onSelect={setModel}
            />

            <ConfigurationSection
              step="2"
              title="Alege stocarea."
              options={storageOptions}
              selected={storage}
              onSelect={setStorage}
            />

            <ConfigurationSection
              step="3"
              title="Alege bateria."
              options={batteryOptions}
              selected={battery}
              onSelect={setBattery}
            />

            <ConfigurationSection
              step="4"
              title="Alege finisajul."
              options={finishOptions}
              selected={finish}
              onSelect={setFinish}
            />

            <ConfigurationSection
              step="5"
              title="Alege capacul spate."
              options={backplateOptions}
              selected={backplate}
              onSelect={setBackplate}
            />

            <ConfigurationSection
              step="6"
              title="Alege software-ul."
              options={softwareOptions}
              selected={software}
              onSelect={setSoftware}
            />

            <section>
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                  Pasul 7
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  Completează configurația.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
                  Adaugă accesorii acum, pentru a fi incluse cu configurația
                  ta.
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
                          {isSelected ? "Adăugat" : `+€${option.price}`}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <Link
                href="/ro/accessories"
                className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Vezi toate accesoriile →
              </Link>
            </section>
          </div>

          <aside className="h-fit xl:sticky xl:top-28">
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_55px_rgba(0,0,0,0.08)]">
              <div className="bg-[#141414] px-7 py-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                  Configurația ta
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  Clickwheel Classic
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  iPod Classic restaurat profesional.
                </p>

                <div className="relative mx-auto mt-8 h-64 w-44 rounded-[28px] border-[7px] border-neutral-300 bg-[#f5f1e8] shadow-2xl">
                  <div className="absolute left-4 right-4 top-5 h-24 rounded-lg border-[4px] border-black bg-white">
                    <div className="px-3 py-3 text-[8px] font-semibold leading-4 text-black">
                      <p className="rounded bg-blue-600 px-1.5 py-0.5 text-white">
                        Muzică
                      </p>
                      <p className="mt-1">Videoclipuri</p>
                      <p>Fotografii</p>
                      <p>Setări</p>
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
                  <span className="text-neutral-500">Stocare</span>
                  <span className="text-right font-semibold">
                    {storage.name}
                  </span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-neutral-500">Baterie</span>
                  <span className="text-right font-semibold">
                    {battery.name}
                  </span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-neutral-500">Finisaj</span>
                  <span className="text-right font-semibold">
                    {finish.name}
                  </span>
                </div>

                <div className="flex justify-between gap-5">
                  <span className="text-neutral-500">Capac spate</span>
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
                    <p className="mb-3 text-neutral-500">Accesorii</p>

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
                      <p className="text-neutral-500">Total estimat</p>
                      <p className="mt-1 text-xs text-neutral-500">
                        Prețul final este confirmat înainte de comandă.
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
                  Continuă cu această configurație →
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