import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  clickwheelStorageLabels,
  products,
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
            <p className="rounded bg-blue-600 px-2 py-1 text-white">Music</p>
            <p className="mt-2">Videos</p>
            <p>Photos</p>
            <p>Settings</p>
          </div>
        </div>

        <div
          className={`absolute bottom-7 left-1/2 h-[106px] w-[106px] -translate-x-1/2 rounded-full ${style.wheel}`}
        >
          <div className="absolute left-1/2 top-1/2 h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100" />
        </div>
      </div>

      <div className="absolute bottom-6 right-6 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-black backdrop-blur">
        Professionally Restored
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

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="px-6 pb-8 pt-10 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href="/shop"
            className="text-sm font-semibold text-neutral-600 transition hover:text-black"
          >
            ← Back to collection
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
              {product.shortDescription}
            </p>

            <div className="mt-8 rounded-[24px] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Indicative build price
              </p>

              <p className="mt-3 text-4xl font-semibold tracking-[-0.05em]">
                {formatStartingPriceFromEurCents(product.priceEurCents, "en")}
              </p>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Final parts, availability and price are confirmed before
                payment.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/build"
                className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Build a similar classic →
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
              >
                Explore restoration
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Overview
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
              A modern classic,
              <br />
              built with intention.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">
              {product.overview}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
              Best suited for: {product.idealFor}
            </p>
          </div>

          <div className="rounded-[28px] bg-[#f4f1eb] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Key configuration
            </p>

            <div className="mt-7 space-y-5 text-sm">
              <div className="flex justify-between gap-5 border-b border-black/10 pb-4">
                <span className="text-neutral-500">Clickwheel storage</span>
                <span className="text-right font-semibold">
                  {clickwheelStorageLabels["128gb"]} included
                </span>
              </div>

              {product.availableStorageUpgradeIds.length > 0 && (
                <div className="flex justify-between gap-5 border-b border-black/10 pb-4">
                  <span className="text-neutral-500">
                    Available storage upgrades
                  </span>
                  <span className="text-right font-semibold">
                    {product.availableStorageUpgradeIds
                      .map((id) => clickwheelStorageLabels[id])
                      .join(", ")}
                  </span>
                </div>
              )}

              <div className="flex justify-between gap-5 border-b border-black/10 pb-4">
                <span className="text-neutral-500">Battery</span>
                <span className="text-right font-semibold">
                  {product.battery}
                </span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="text-neutral-500">Finish</span>
                <span className="text-right font-semibold">
                  {product.finish}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-2">
          <article className="rounded-[28px] border border-black/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Highlights
            </p>

            <ul className="mt-7 space-y-4 text-base text-neutral-700">
              {product.highlights.map((highlight) => (
                <li key={highlight}>✓ {highlight}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[28px] bg-[#111111] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Included with the build
            </p>

            <ul className="mt-7 space-y-4 text-base text-white/75">
              {product.includes.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px] rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Make it your own
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                Change the storage, finish, software or accessories.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
                This is a reference configuration. Use Build Yours to prepare a
                version around your own music library and preferences.
              </p>
            </div>

            <Link
              href="/build"
              className="w-fit rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Build Yours →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
