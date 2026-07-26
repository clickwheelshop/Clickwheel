import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  clickwheelStorageLabels,
  products,
  type ClickwheelProduct,
  type ProductTone,
} from "@/data/products";
import { formatStartingPriceFromEurCents } from "@/lib/money";

const productStyles: Record<
  ProductTone,
  {
    background: string;
    device: string;
    wheel: string;
    screen: string;
  }
> = {
  dark: {
    background: "from-[#1f1f1f] via-[#444444] to-[#0b0b0b]",
    device: "border-neutral-600 bg-[#111111]",
    wheel: "bg-neutral-200",
    screen: "bg-white",
  },
  steel: {
    background: "from-[#d6d6d6] via-[#9c9c9c] to-[#4a4a4a]",
    device: "border-neutral-500 bg-[#f3f0ea]",
    wheel: "bg-neutral-700",
    screen: "bg-white",
  },
  silver: {
    background: "from-[#ede9df] via-[#c9c4ba] to-[#8f8980]",
    device: "border-neutral-400 bg-[#f7f1e7]",
    wheel: "bg-neutral-200",
    screen: "bg-white",
  },
  warm: {
    background: "from-[#7a4d2f] via-[#b77b4e] to-[#e4b880]",
    device: "border-[#6f4a2d] bg-[#f2e8d6]",
    wheel: "bg-[#3d2b20]",
    screen: "bg-white",
  },
};

type RomanianProductCopy = {
  description: string;
  overview: string;
  idealFor: string;
  battery: string;
  finish: string;
  highlights: readonly string[];
  includes: readonly string[];
  rearConfiguration?: string;
  modelSpecificNote?: string;
};

const romanianProductCopy: Record<string, RomanianProductCopy> = {
  "the-studio": {
    description:
      "Un iPod Video restaurat pentru ascultare zilnica, cu stocare flash 128GB inclusa si configuratii cu capacitate mai mare disponibile.",
    overview:
      "iPod Video pastreaza formatul clasic si adauga stocare flash, baterie 3000mAh si finisaj negru mat.",
    idealFor:
      "ascultare zilnica, naveta si biblioteci muzicale personale.",
    battery: "Baterie 3000mAh",
    finish: "Negru mat",
    highlights: [
      "Stocare flash 128GB inclusa",
      "Upgrade-uri de stocare pana la 1TB",
      "Baterie 3000mAh",
      "Finisaj negru mat discret",
    ],
    includes: [
      "iPod Video restaurat",
      "Cablu USB 30-pin",
      "Fisa de configuratie",
      "Informatii garantie Clickwheel",
    ],
  },
  "the-collector": {
    description:
      "Un iPod Video late-2006 restaurat, cu stocare flash 128GB inclusa, configuratii cu capacitate mai mare si finisaj din otel polisat.",
    overview:
      "iPod Video Enhanced combina modelul late-2006 cu Wolfson DAC, stocare flash, baterie 3000mAh si capac spate din otel polisat.",
    idealFor:
      "colectionari si ascultatori care vor o biblioteca mai mare intr-un format iPod clasic.",
    battery: "Baterie 3000mAh",
    finish: "Otel polisat",
    highlights: [
      "Stocare flash 128GB inclusa",
      "Upgrade-uri de stocare pana la 1TB",
      "Baterie 3000mAh",
      "Capac spate din otel polisat",
    ],
    includes: [
      "iPod Video Enhanced restaurat",
      "Cablu USB 30-pin",
      "Fisa de configuratie",
      "Informatii garantie Clickwheel",
    ],
    rearConfiguration: "Capac spate din otel polisat",
  },
  "the-heritage": {
    description:
      "Un iPod Classic 6th Generation restaurat, cu stocare flash 128GB si finisaj argintiu.",
    overview:
      "iPod Classic 6th Generation pastreaza designul argintiu 2007–2008 cu stocare flash 128GB si baterie 2000mAh.",
    idealFor:
      "ascultatori care vor un iPod Classic restaurat, cu configuratie fixa de stocare 128GB.",
    battery: "Baterie 2000mAh",
    finish: "Argintiu",
    highlights: [
      "Stocare flash 128GB inclusa",
      "Limitat la 128GB maxim",
      "Baterie 2000mAh",
      "Finisaj argintiu",
    ],
    includes: [
      "iPod Classic restaurat",
      "Cablu USB 30-pin",
      "Fisa de configuratie",
      "Informatii garantie Clickwheel",
    ],
    modelSpecificNote:
      "Acest model este limitat la 128GB si nu suporta upgrade-uri de stocare.",
  },
  "the-signature": {
    description:
      "Un iPod Classic 7th Generation restaurat, cu stocare flash 128GB inclusa, configuratii cu capacitate mai mare si optiuni de personalizare.",
    overview:
      "iPod Classic 7th Generation combina modelul late-2009 cu stocare flash, baterie 3000mAh si optiune de gravura personalizata.",
    idealFor:
      "colectionari, cadouri si ascultatori care vor un iPod Classic personalizat in jurul bibliotecii lor.",
    battery: "Baterie 3000mAh",
    finish: "Gravura personalizata",
    highlights: [
      "Stocare flash 128GB inclusa",
      "Upgrade-uri de stocare pana la 1TB",
      "Baterie 3000mAh",
      "Optiune de gravura personalizata",
    ],
    includes: [
      "iPod Classic restaurat",
      "Cablu USB 30-pin",
      "Fisa de configuratie",
      "Informatii garantie Clickwheel",
    ],
    rearConfiguration: "Optiune de gravura personalizata",
  },
};

type SpecificationSection = {
  title: string;
  rows?: {
    label: string;
    value: ReactNode;
  }[];
  items?: readonly string[];
};

function buildSpecificationSections(
  product: ClickwheelProduct,
  copy: RomanianProductCopy,
): SpecificationSection[] {
  const availableStorageUpgrades =
    product.availableStorageUpgradeIds.length > 0
      ? product.availableStorageUpgradeIds
          .map((id) => clickwheelStorageLabels[id])
          .join(", ")
      : "Nu sunt suportate pentru acest model";

  return [
    {
      title: "Specificatii principale",
      rows: [
        { label: "Model", value: product.name },
        { label: "Linie tehnica", value: product.secondaryLine },
        {
          label: "Stocare de baza inclusa",
          value: `${clickwheelStorageLabels["128gb"]} stocare flash`,
        },
        { label: "Configuratie baterie", value: copy.battery },
        { label: "Finisaj", value: copy.finish },
      ],
    },
    {
      title: "Optiuni configurabile",
      rows: [
        {
          label: "Upgrade-uri de stocare disponibile",
          value: availableStorageUpgrades,
        },
        {
          label: "Configuratie software",
          value:
            "iPod OS standard sau configurare Rockbox pot fi selectate in configurator.",
        },
        ...(copy.rearConfiguration
          ? [
              {
                label: "Capac spate sau gravura",
                value: copy.rearConfiguration,
              },
            ]
          : []),
      ],
    },
    {
      title: "Ce este inclus",
      items: copy.includes,
    },
    {
      title: "Restaurare si testare",
      rows: [
        {
          label: "Pregatire",
          value:
            "Restaurat si testat inainte de livrare. Piesele finale si disponibilitatea sunt confirmate inainte de plata.",
        },
      ],
    },
    {
      title: "Note specifice modelului",
      rows: [
        {
          label: "Nota stocare",
          value:
            copy.modelSpecificNote ??
            "Upgrade-urile de stocare sunt disponibile unde sunt compatibile si confirmate inainte de plata.",
        },
      ],
    },
    {
      title: "Garantie si retururi",
      rows: [
        {
          label: "Politica",
          value: (
            <>
              Consulta politica de{" "}
              <Link className="underline" href="/ro/warranty">
                garantie
              </Link>{" "}
              si politica de{" "}
              <Link className="underline" href="/ro/returns">
                retur
              </Link>
              .
            </>
          ),
        },
      ],
    },
  ];
}

function ProductVisual({ tone }: { tone: ProductTone }) {
  const style = productStyles[tone];

  return (
    <div
      className={`relative min-h-[440px] overflow-hidden rounded-[34px] bg-gradient-to-br ${style.background}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.42),transparent_38%)]" />

      <div
        className={`absolute left-1/2 top-1/2 h-[320px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-[36px] border-[8px] ${style.device} shadow-[0_30px_60px_rgba(0,0,0,0.36)]`}
      >
        <div
          className={`absolute left-5 right-5 top-7 h-[132px] rounded-xl border-[5px] border-black ${style.screen}`}
        >
          <div className="px-4 py-4 text-[10px] font-semibold leading-5 text-black">
            <p className="rounded bg-blue-600 px-2 py-1 text-white">Muzică</p>
            <p className="mt-2">Videoclipuri</p>
            <p>Fotografii</p>
            <p>Setări</p>
          </div>
        </div>

        <div
          className={`absolute bottom-7 left-1/2 h-[106px] w-[106px] -translate-x-1/2 rounded-full ${style.wheel}`}
        >
          <div className="absolute left-1/2 top-1/2 h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100" />
        </div>
      </div>

      <div className="absolute bottom-6 right-6 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-black backdrop-blur">
        Restaurat profesional
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RomanianProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);
  const copy = romanianProductCopy[slug];

  if (!product || !copy) {
    notFound();
  }

  const specificationSections = buildSpecificationSections(product, copy);

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="px-6 pb-8 pt-10 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href="/ro/shop"
            className="text-sm font-semibold text-neutral-600 transition hover:text-black"
          >
            ← Înapoi la colecție
          </Link>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <ProductVisual tone={product.tone} />

          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-3 text-sm font-semibold tracking-[0.08em] text-blue-600">
              {product.secondaryLine}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              {copy.description}
            </p>

            <div className="mt-8 rounded-[24px] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Preț orientativ pentru configurație
              </p>

              <p className="mt-3 text-4xl font-semibold tracking-[-0.05em]">
                {formatStartingPriceFromEurCents(product.priceEurCents, "ro")}
              </p>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Piesele finale, disponibilitatea și prețul sunt confirmate
                înainte de plată.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/ro/build"
                className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Configurează un Classic similar →
              </Link>

              <Link
                href="/ro/services"
                className="rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
              >
                Vezi restaurarea
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Prezentare
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
              Un clasic modern,
              <br />
              construit cu intenție.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">
              {copy.overview}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
              Potrivit pentru: {copy.idealFor}
            </p>
          </div>

          <div className="rounded-[28px] bg-[#f4f1eb] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Configurație principală
            </p>

            <div className="mt-7 space-y-5 text-sm">
              <div className="flex justify-between gap-5 border-b border-black/10 pb-4">
                <span className="text-neutral-500">Stocare Clickwheel</span>
                <span className="text-right font-semibold">
                  {clickwheelStorageLabels["128gb"]} inclusă
                </span>
              </div>

              {product.availableStorageUpgradeIds.length > 0 ? (
                <div className="flex justify-between gap-5 border-b border-black/10 pb-4">
                  <span className="text-neutral-500">
                    Upgrade-uri de stocare disponibile
                  </span>
                  <span className="text-right font-semibold">
                    {product.availableStorageUpgradeIds
                      .map((id) => clickwheelStorageLabels[id])
                      .join(", ")}
                  </span>
                </div>
              ) : (
                <div className="flex justify-between gap-5 border-b border-black/10 pb-4">
                  <span className="text-neutral-500">
                    Upgrade-uri de stocare
                  </span>
                  <span className="max-w-xs text-right font-semibold">
                    {copy.modelSpecificNote ??
                      "Aceasta configuratie nu suporta upgrade-uri de stocare selectabile."}
                  </span>
                </div>
              )}

              <div className="flex justify-between gap-5 border-b border-black/10 pb-4">
                <span className="text-neutral-500">Baterie</span>
                <span className="text-right font-semibold">{copy.battery}</span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="text-neutral-500">Finisaj</span>
                <span className="text-right font-semibold">{copy.finish}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Specificatii
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Detalii pentru aceasta configuratie de referinta.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {specificationSections.map((section) => (
              <article
                key={section.title}
                className="rounded-[24px] border border-black/10 bg-white p-6"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em]">
                  {section.title}
                </h3>

                {section.rows && (
                  <dl className="mt-5 space-y-4 text-sm">
                    {section.rows.map((row) => (
                      <div
                        key={`${section.title}-${row.label}`}
                        className="border-t border-black/10 pt-4"
                      >
                        <dt className="text-neutral-500">{row.label}</dt>
                        <dd className="mt-1 font-semibold leading-6 text-black">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {section.items && (
                  <ul className="mt-5 space-y-3 border-t border-black/10 pt-4 text-sm leading-6 text-neutral-700">
                    {section.items.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-2">
          <article className="rounded-[28px] border border-black/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Puncte forte
            </p>

            <ul className="mt-7 space-y-4 text-base text-neutral-700">
              {copy.highlights.map((highlight) => (
                <li key={highlight}>✓ {highlight}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[28px] bg-[#111111] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Inclus în configurație
            </p>

            <ul className="mt-7 space-y-4 text-base text-white/75">
              {copy.includes.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px] rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Fă-l al tău
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                Schimbă stocarea, finisajul, software-ul sau accesoriile.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
                Aceasta este o configurație de referință. Folosește
                configuratorul pentru a pregăti o variantă în jurul bibliotecii
                tale muzicale și preferințelor tale.
              </p>
            </div>

            <Link
              href="/ro/build"
              className="w-fit rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Configurează-l →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
