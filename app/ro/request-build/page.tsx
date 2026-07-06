"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  calculateConfiguratorTotalEurCents,
  findConfiguratorChoice,
  getConfiguratorOptions,
  getConfiguratorStorageOptions,
  parseAccessoryIds,
} from "@/data/configurator";
import { formatRonFromEurCents } from "@/lib/money";

const {
  models: modelOptions,
  batteries: batteryOptions,
  finishes: finishOptions,
  backplates: backplateOptions,
  software: softwareOptions,
  accessories: accessoryOptions,
} = getConfiguratorOptions("ro");

function BuildRequestContent() {
  const searchParams = useSearchParams();

  const model = findConfiguratorChoice(modelOptions, searchParams.get("model"));
  const storageOptions = getConfiguratorStorageOptions("ro", model.id);
  const storage = findConfiguratorChoice(
    storageOptions,
    searchParams.get("storage"),
  );
  const battery = findConfiguratorChoice(
    batteryOptions,
    searchParams.get("battery"),
  );
  const finish = findConfiguratorChoice(
    finishOptions,
    searchParams.get("finish"),
  );
  const backplate = findConfiguratorChoice(
    backplateOptions,
    searchParams.get("backplate"),
  );
  const software = findConfiguratorChoice(
    softwareOptions,
    searchParams.get("software"),
  );
  const accessoryIds = parseAccessoryIds(
    searchParams.get("accessories"),
    accessoryOptions,
  );
  const accessories = accessoryOptions.filter((accessory) =>
    accessoryIds.includes(accessory.id),
  );
  const totalPriceEurCents = calculateConfiguratorTotalEurCents({
    model,
    storage,
    battery,
    finish,
    backplate,
    software,
    accessories,
  });

  return (
    <section className="px-6 py-14 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_380px]">
        <form className="rounded-[28px] border border-black/10 bg-white p-7 md:p-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em]">
            Datele tale
          </h2>

          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Această solicitare nu creează o comandă și nu implică nicio plată.
          </p>

          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">
              Nume complet
              <input
                type="text"
                placeholder="Numele tău"
                className="rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Adresă de email
              <input
                type="email"
                placeholder="tu@exemplu.com"
                className="rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Țară
              <input
                type="text"
                placeholder="România"
                className="rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Detalii despre configurația ta
              <textarea
                rows={5}
                placeholder="De exemplu: culoare preferată, text pentru gravură, întrebări despre livrare..."
                className="resize-none rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-full bg-black px-5 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Solicitările de configurare vor fi disponibile în curând
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
            Pregătim sistemul oficial de contact Clickwheel.
          </p>
        </form>

        <aside className="h-fit rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_20px_55px_rgba(0,0,0,0.08)] lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
            Configurația selectată
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
            Clickwheel Classic
          </h2>

          <div className="mt-7 space-y-5 text-sm">
            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Model</span>
              <span className="text-right font-semibold">{model.name}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Stocare</span>
              <span className="text-right font-semibold">{storage.name}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Baterie</span>
              <span className="text-right font-semibold">{battery.name}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Finisaj</span>
              <span className="text-right font-semibold">{finish.name}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Capac spate</span>
              <span className="text-right font-semibold">{backplate.name}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Software</span>
              <span className="text-right font-semibold">{software.name}</span>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="text-neutral-500">Accesorii</p>
              <p className="mt-2 font-semibold leading-6">
                {accessories.length > 0
                  ? accessories.map((accessory) => accessory.name).join(", ")
                  : "Niciun accesoriu selectat"}
              </p>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="text-neutral-500">Total estimat</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                {formatRonFromEurCents(totalPriceEurCents)}
              </p>
            </div>
          </div>

          <Link
            href="/ro/build"
            className="mt-8 block text-center text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            ← Modifică configurația
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default function RomanianRequestBuildPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Solicitare configurație
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Clasicul tău,
            <br />
            pregătit pentru analiză.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Trimite-ne configurația preferată. Vom verifica disponibilitatea,
            vom confirma prețul final și te vom contacta înainte de orice plată.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="px-6 py-20 text-center text-sm text-neutral-500">
            Se încarcă configurația ta…
          </div>
        }
      >
        <BuildRequestContent />
      </Suspense>

      <Footer />
    </main>
  );
}
