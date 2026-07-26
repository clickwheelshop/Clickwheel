import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const factors = [
  {
    title: "Storage type",
    description:
      "Flash storage generally uses less power and avoids the mechanical activity of an original hard drive.",
  },
  {
    title: "Battery capacity",
    description:
      "A higher-capacity replacement battery can increase runtime, especially in builds designed around flash storage.",
  },
  {
    title: "Screen and backlight",
    description:
      "Frequent screen use and long backlight settings reduce battery life.",
  },
  {
    title: "Music format and usage",
    description:
      "Large libraries, frequent browsing, volume level and playback habits all affect real-world battery performance.",
  },
];

const options = [
  {
    size: "2000mAh",
    title: "Balanced everyday option.",
    description:
      "A practical replacement battery for customers who want reliable daily listening without building an extreme configuration.",
    bestFor: [
      "Everyday listening",
      "Balanced builds",
      "Standard storage configurations",
    ],
  },
  {
    size: "3000mAh",
    title: "Extended listening option.",
    description:
      "A higher-capacity battery for customers who want longer time between charges and a more performance-focused build.",
    bestFor: [
      "Flash-storage builds",
      "Long listening sessions",
      "Large music libraries",
    ],
  },
] as const;

export default function BatteryGuidePage() {
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
            Battery Guide
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            How long does an
            <br />
            upgraded iPod battery last?
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            A practical guide to replacement batteries, capacity choices and
            the factors that affect real-world battery life.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              Battery life is one of the biggest reasons to restore an iPod
              Classic. Original batteries may still work, but age and repeated
              charging cycles can make runtime unpredictable.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              A modern battery replacement improves reliability, but exact
              runtime depends on the full build and the way the device is used.
              Clickwheel focuses on balanced, tested configurations rather than
              unrealistic battery-life promises.
            </p>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Battery options
            </p>

            <div className="mt-7 grid gap-6 lg:grid-cols-2">
              {options.map((option) => (
                <article
                  key={option.size}
                  className="rounded-[28px] border border-black/10 bg-white p-8"
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
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              What affects battery life
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Capacity is only one part of the picture.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {factors.map((factor) => (
                <article
                  key={factor.title}
                  className="rounded-[22px] border border-white/15 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    {factor.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {factor.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Clickwheel recommendation
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Choose battery capacity around your intended build.
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-neutral-600">
              <p>
                A 2000mAh battery is a good fit for a balanced, everyday build.
              </p>

              <p>
                A 3000mAh battery makes more sense when paired with flash
                storage and a customer who values longer listening time between
                charges.
              </p>

              <p>
                Final compatibility depends on the selected model, storage setup
                and internal space available for the specific build.
              </p>
            </div>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#e9e2d6] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Good battery habits
            </p>

            <ul className="mt-7 grid gap-4 text-sm leading-7 text-neutral-700 md:grid-cols-2">
              <li>✓ Use a reliable charging cable and USB power source.</li>
              <li>✓ Avoid leaving a fully discharged device unused for long periods.</li>
              <li>✓ Charge the iPod before long trips or initial setup sessions.</li>
              <li>✓ Ask for support if charging becomes inconsistent.</li>
            </ul>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Configure your battery
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Choose the battery option that fits your listening habits.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Select your model, storage, battery and accessories in the
              Clickwheel configurator.
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