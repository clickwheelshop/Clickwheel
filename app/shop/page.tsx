import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const products = [
  {
    name: "The Studio",
    model: "iPod Classic 7th Gen",
    storage: "512GB Flash Storage",
    battery: "3000mAh Battery",
    finish: "Matte Black",
    price: "From €279",
    tone: "dark",
  },
  {
    name: "The Collector",
    model: "iPod Classic 5.5 Gen",
    storage: "1TB Flash Storage",
    battery: "3000mAh Battery",
    finish: "Polished Steel",
    price: "From €329",
    tone: "steel",
  },
  {
    name: "The Heritage",
    model: "iPod Classic 6th Gen",
    storage: "256GB Flash Storage",
    battery: "2000mAh Battery",
    finish: "Silver",
    price: "From €249",
    tone: "silver",
  },
  {
    name: "The Signature",
    model: "iPod Classic 7th Gen",
    storage: "2TB Flash Storage",
    battery: "3000mAh Battery",
    finish: "Custom Engraving",
    price: "From €399",
    tone: "warm",
  },
] as const;

const productStyles = {
  dark: {
    background: "from-[#1f1f1f] via-[#444] to-[#0b0b0b]",
    device: "bg-[#111111] border-neutral-600",
    wheel: "bg-neutral-200",
    screen: "bg-[#f8f8f8]",
  },
  steel: {
    background: "from-[#d6d6d6] via-[#9c9c9c] to-[#4a4a4a]",
    device: "bg-[#f3f0ea] border-neutral-500",
    wheel: "bg-neutral-700",
    screen: "bg-white",
  },
  silver: {
    background: "from-[#ede9df] via-[#c9c4ba] to-[#8f8980]",
    device: "bg-[#f7f1e7] border-neutral-400",
    wheel: "bg-neutral-200",
    screen: "bg-white",
  },
  warm: {
    background: "from-[#7a4d2f] via-[#b77b4e] to-[#e4b880]",
    device: "bg-[#f2e8d6] border-[#6f4a2d]",
    wheel: "bg-[#3d2b20]",
    screen: "bg-white",
  },
};

function ProductVisual({
  tone,
}: {
  tone: keyof typeof productStyles;
}) {
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
              Music
            </p>
            <p className="mt-1">Videos</p>
            <p>Photos</p>
            <p>Settings</p>
          </div>
        </div>

        <div
          className={`absolute bottom-5 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full ${style.wheel}`}
        >
          <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100" />
        </div>
      </div>

      <div className="absolute right-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-black">
        Restored
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Shop
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Restored classics.
                <br />
                Ready for more music.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Professionally restored iPod Classics with modern flash storage,
              extended battery options and carefully selected finishes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Clickwheel Collection
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                Choose your classic.
              </h2>
            </div>

            <Link
              href="/build"
              className="w-fit rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Build Yours →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-[28px] border border-black/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <ProductVisual tone={product.tone} />

                <div className="px-3 pb-3 pt-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                        {product.model}
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-lg font-semibold">{product.price}</p>
                  </div>

                  <div className="mt-6 grid gap-3 text-sm text-neutral-600 sm:grid-cols-3">
                    <p>{product.storage}</p>
                    <p>{product.battery}</p>
                    <p>{product.finish}</p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/build"
                      className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                    >
                      Configure yours →
                    </Link>

                    <Link
                      href="/services"
                      className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold transition hover:border-black"
                    >
                      Learn about restoration
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Not sure which one fits?
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Build a classic around your library.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Choose storage, battery, finish, software and accessories in the
              Clickwheel configurator.
            </p>
          </div>

          <Link
            href="/build"
            className="w-fit rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Build Yours →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}