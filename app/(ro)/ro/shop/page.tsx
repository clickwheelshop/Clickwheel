import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { products, type ProductTone } from "@/data/products";
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

const romanianCopy = {
  "the-studio": {
    description:
      "Un iPod Video restaurat pentru ascultare zilnica, cu stocare flash 128GB inclusa si configuratii cu capacitate mai mare disponibile.",
    storage: "Stocare flash 128GB inclusa",
    battery: "Baterie 3000mAh",
    finish: "Negru mat",
  },
  "the-collector": {
    description:
      "Un iPod Video late-2006 restaurat, cu stocare flash 128GB inclusa si finisaj din otel polisat.",
    storage: "Stocare flash 128GB inclusa",
    battery: "Baterie 3000mAh",
    finish: "Otel polisat",
  },
  "the-heritage": {
    description:
      "Un iPod Classic 6th Generation restaurat, cu stocare flash 128GB si limita maxima de 128GB.",
    storage: "Stocare flash 128GB inclusa",
    battery: "Baterie 2000mAh",
    finish: "Argintiu",
  },
  "the-signature": {
    description:
      "Un iPod Classic 7th Generation restaurat, cu stocare flash 128GB inclusa si optiuni de personalizare.",
    storage: "Stocare flash 128GB inclusa",
    battery: "Baterie 3000mAh",
    finish: "Gravura personalizata",
  },
} as const;

function ProductVisual({ tone }: { tone: ProductTone }) {
  const style = productStyles[tone];

  return (
    <div
      className={`relative h-80 overflow-hidden rounded-[24px] bg-gradient-to-br ${style.background}`}
    >
      <div
        className={`absolute left-1/2 top-1/2 h-56 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[30px] border-[7px] ${style.device} shadow-2xl`}
      >
        <div
          className={`absolute left-4 right-4 top-5 h-24 rounded-lg border-[4px] border-black ${style.screen}`}
        >
          <div className="px-3 py-3 text-[8px] font-semibold leading-4 text-black">
            <p className="rounded bg-blue-600 px-1.5 py-0.5 text-white">
              Muzică
            </p>
            <p className="mt-1">Videoclipuri</p>
            <p>Fotografii</p>
            <p>Setări</p>
          </div>
        </div>

        <div
          className={`absolute bottom-5 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full ${style.wheel}`}
        >
          <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100" />
        </div>
      </div>

      <div className="absolute right-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-black">
        Configurație recomandată
      </div>
    </div>
  );
}

export default function RomanianShopPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Magazin
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Clasice restaurate.
                <br />
                Pregătite pentru mai multă muzică.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Descoperă configurațiile Clickwheel cu stocare flash modernă,
              opțiuni de baterie extinsă și finisaje atent alese.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Colecția Clickwheel
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                Alege clasicul tău.
              </h2>
            </div>

            <Link
              href="/ro/build"
              className="w-fit rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Configurează-l →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => {
              const copy = romanianCopy[product.slug as keyof typeof romanianCopy];

              return (
                <article
                  key={product.slug}
                  className="rounded-[28px] border border-black/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
                >
                  <ProductVisual tone={product.tone} />

                  <div className="px-3 pb-3 pt-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                          {product.name}
                        </h3>

                        <p className="mt-2 text-xs font-semibold tracking-[0.08em] text-blue-600">
                          {product.secondaryLine}
                        </p>
                      </div>

                      <p className="text-lg font-semibold">
                        {formatStartingPriceFromEurCents(
                          product.priceEurCents,
                          "ro",
                        )}
                      </p>
                    </div>

                    <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600">
                      {copy.description}
                    </p>

                    <div className="mt-6 grid gap-3 text-sm text-neutral-600 sm:grid-cols-3">
                      <p>{copy.storage}</p>
                      <p>{copy.battery}</p>
                      <p>{copy.finish}</p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        href={`/ro/shop/${product.slug}`}
                        className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                      >
                        Vezi configuratia →
                      </Link>

                      <Link
                        href="/ro/build"
                        className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold transition hover:border-black"
                      >
                        Configureaza unul similar
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Nu ești sigur ce ți se potrivește?
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Construiește un clasic în jurul bibliotecii tale.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Alege stocarea, bateria, finisajul, software-ul și accesoriile în
              configuratorul Clickwheel.
            </p>
          </div>

          <Link
            href="/ro/build"
            className="w-fit rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Configurează-l →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
