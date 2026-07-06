import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const storageOptions = [
  {
    size: "256GB",
    title: "A practical everyday library.",
    description:
      "A balanced option for most listeners who want a substantial collection without building an extreme-size library.",
    bestFor: [
      "Everyday listening",
      "Standard-quality music libraries",
      "A first restored iPod Classic",
    ],
  },
  {
    size: "512GB",
    title: "More room for serious music collections.",
    description:
      "A strong choice for listeners with larger libraries, more albums and higher-quality files.",
    bestFor: [
      "Large personal collections",
      "More lossless music",
      "Long-term daily use",
    ],
  },
  {
    size: "1TB",
    title: "The maximum Clickwheel configuration.",
    description:
      "Our highest supported storage option, intended for collectors and listeners who want to keep a very large music library in one device.",
    bestFor: [
      "Very large music libraries",
      "Collectors",
      "High-capacity reference builds",
    ],
  },
] as const;

export default function StorageGuidePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <Link
            href="/guides"
            className="text-sm font-semibold text-neutral-600 transition hover:text-black"
          >
            ← Back to guides
          </Link>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Storage Guide
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            How much iPod storage
            <br />
            do you actually need?
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            A simple guide to choosing between 256GB, 512GB and 1TB for your
            restored iPod Classic.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              Storage is one of the most important choices in a Clickwheel
              build. The right size depends on how much music you own, the file
              quality you use and whether you want one device for everything or
              a simpler everyday library.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              Every Clickwheel model starts with 128GB included. Storage
              upgrades are available in 256GB, 512GB and 1TB.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {storageOptions.map((option) => (
              <section
                key={option.size}
                className="rounded-[28px] border border-black/10 bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                  {option.size}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                  {option.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-neutral-600">
                  {option.description}
                </p>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Best for
                </p>

                <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                  {option.bestFor.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Clickwheel recommendation
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Start with the library you actually use.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              For most people, 256GB or 512GB is more than enough. Choose 1TB
              when you know you have a very large library and want maximum
              capacity in a single device.
            </p>

            <Link
              href="/build"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Build Yours →
            </Link>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
