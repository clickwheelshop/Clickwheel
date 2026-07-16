import Link from "next/link";
import { products } from "@/data/products";
import { formatStartingPriceFromEurCents } from "@/lib/money";

const localizedSpecs = {
  "the-studio": ["Stocare flash 128GB inclusa", "Baterie 3000mAh", "Negru mat"],
  "the-collector": [
    "Stocare flash 128GB inclusa",
    "Baterie 3000mAh",
    "Otel polisat",
  ],
  "the-heritage": ["Stocare flash 128GB inclusa", "Baterie 2000mAh", "Argintiu"],
  "the-signature": [
    "Stocare flash 128GB inclusa",
    "Baterie 3000mAh",
    "Gravura personalizata",
  ],
} as const;

const builds = products.map((product) => ({
  ...product,
  specs: localizedSpecs[product.slug as keyof typeof localizedSpecs],
}));

const visualStyles = {
  dark: {
    background: "from-[#1c1c1c] via-[#484848] to-[#080808]",
    device: "border-neutral-600 bg-[#121212]",
    wheel: "bg-neutral-200",
    screen: "bg-white",
  },
  steel: {
    background: "from-[#e1e1e1] via-[#9d9d9d] to-[#484848]",
    device: "border-neutral-500 bg-[#f2eee7]",
    wheel: "bg-neutral-700",
    screen: "bg-white",
  },
  silver: {
    background: "from-[#f0ece4] via-[#c4beb4] to-[#8f8980]",
    device: "border-neutral-400 bg-[#f7f1e7]",
    wheel: "bg-neutral-200",
    screen: "bg-white",
  },
  warm: {
    background: "from-[#7b4d30] via-[#b7794b] to-[#e5bd8b]",
    device: "border-[#69432a] bg-[#f1e4d2]",
    wheel: "bg-[#3b291f]",
    screen: "bg-white",
  },
};

function BuildVisual({
  tone,
}: {
  tone: keyof typeof visualStyles;
}) {
  const style = visualStyles[tone];

  return (
    <div
      className={`relative h-72 overflow-hidden rounded-[24px] bg-gradient-to-br ${style.background}`}
    >
      <div
        className={`absolute left-1/2 top-1/2 h-52 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border-[7px] ${style.device} shadow-2xl`}
      >
        <div
          className={`absolute left-4 right-4 top-5 h-22 rounded-lg border-[4px] border-black ${style.screen}`}
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
          className={`absolute bottom-5 left-1/2 h-18 w-18 -translate-x-1/2 rounded-full ${style.wheel}`}
        >
          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100" />
        </div>
      </div>

      <div className="absolute right-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-black backdrop-blur">
        Restaurat
      </div>
    </div>
  );
}

export function FeaturedBuildsRo() {
  return (
    <section className="bg-[#f8f6f2] px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Configurații recomandate
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Alege clasicul tău.
            </h2>
          </div>

          <Link
            href="/ro/shop"
            className="w-fit text-sm font-semibold text-black transition hover:text-blue-600"
          >
            Vezi colecția →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {builds.map((build) => (
            <article
              key={build.slug}
              className="group rounded-[28px] border border-black/10 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.09)]"
            >
              <BuildVisual tone={build.tone} />

              <div className="px-2 pb-3 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                      {build.name}
                    </h3>

                    <p className="mt-2 text-xs font-semibold tracking-[0.08em] text-blue-600">
                      {build.secondaryLine}
                    </p>
                  </div>

                  <p className="whitespace-nowrap text-sm font-semibold">
                    {formatStartingPriceFromEurCents(
                      build.priceEurCents,
                      "ro",
                    )}
                  </p>
                </div>

                <div className="mt-5 space-y-2 text-sm text-neutral-600">
                  {build.specs.map((spec) => (
                    <p key={spec}>{spec}</p>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/ro/build"
                    className="rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    Configurează →
                  </Link>

                  <Link
                    href="/ro/shop"
                    className="rounded-full border border-black/10 px-4 py-2.5 text-sm font-semibold transition hover:border-black"
                  >
                    Vezi colecția
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
