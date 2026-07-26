import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const careSteps = [
  {
    number: "01",
    title: "Use a soft microfiber cloth",
    description:
      "Use a clean, dry microfiber cloth for regular cleaning. It is the safest starting point for the front plate, click wheel and rear housing.",
  },
  {
    number: "02",
    title: "Avoid spraying liquid directly on the iPod",
    description:
      "Never spray cleaning liquid directly onto the device. Moisture can enter around the click wheel, screen, dock connector and headphone port.",
  },
  {
    number: "03",
    title: "Clean the screen gently",
    description:
      "Use light pressure and avoid abrasive materials. A restored screen can still pick up scratches from rough cloths, paper towels or keys.",
  },
  {
    number: "04",
    title: "Protect the polished rear plate",
    description:
      "Stainless steel backs can show fingerprints and light marks quickly. A sleeve or case helps protect the finish during daily carry.",
  },
];

const avoidItems = [
  "Paper towels or abrasive cloths",
  "Strong solvents or harsh cleaning products",
  "Spraying liquid directly onto the device",
  "Keeping the iPod loose with keys or coins",
  "Leaving the device in very hot cars or damp places",
];

const storageTips = [
  "Store the iPod in a dry, cool place.",
  "Use a sleeve or case when carrying it daily.",
  "Charge it occasionally if it will not be used for long periods.",
  "Keep dust away from the dock connector and headphone jack.",
];

export default function CareGuidePage() {
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
            Care
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            How to clean and protect
            <br />
            a restored iPod.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Simple habits that help keep your screen, click wheel and rear
            housing looking better for longer.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              A restored iPod is designed to be used, but a little care makes a
              big difference over time. The front plate, click wheel and rear
              steel housing all benefit from simple cleaning and safer daily
              storage.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              The goal is not to keep it untouched. The goal is to avoid
              unnecessary scratches, moisture exposure and wear caused by the
              wrong accessories or cleaning methods.
            </p>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Everyday care
            </p>

            <div className="mt-7 space-y-5">
              {careSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[24px] border border-black/10 bg-white p-7 md:grid-cols-[90px_1fr]"
                >
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-blue-600">
                    {step.number}
                  </p>

                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                      {step.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[30px] bg-[#e9e2d6] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Avoid
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em]">
                Small mistakes that cause unnecessary wear.
              </h2>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
                {avoidItems.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Store it well
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em]">
                A good storage routine protects the finish.
              </h2>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
                {storageTips.map((tip) => (
                  <li key={tip}>✓ {tip}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Daily carry recommendation
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Use protection that fits the way you carry your iPod.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              A soft sleeve is ideal for light everyday protection. A hard case
              is better when the iPod travels in a bag with cables, keys or
              other devices.
            </p>

            <Link
              href="/accessories"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Explore Accessories →
            </Link>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}