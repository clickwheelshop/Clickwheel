import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const differences = [
  {
    title: "Rear housing depth",
    thin: "Slimmer rear housing with less internal room.",
    thick: "Deeper rear housing with more internal room.",
  },
  {
    title: "Battery options",
    thin: "Usually better suited to balanced battery configurations.",
    thick: "Often gives more room for larger battery setups.",
  },
  {
    title: "Original storage",
    thin: "Commonly associated with lower-capacity original hard drives.",
    thick: "Often found with larger original hard drives.",
  },
  {
    title: "External feel",
    thin: "Closer to the lighter, slimmer iPod Classic profile.",
    thick: "Feels more substantial in the hand and slightly heavier.",
  },
];

const chooseThin = [
  "You prefer the slimmer iPod Classic silhouette.",
  "You want a lighter everyday carry device.",
  "You are building around a balanced battery and flash-storage setup.",
  "You value the cleanest possible external profile.",
];

const chooseThick = [
  "You want the most internal flexibility.",
  "You are considering a larger battery configuration.",
  "You prefer the more substantial classic iPod feel.",
  "Your selected parts require additional internal depth.",
];

export default function ThinVsThickGuidePage() {
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
            Restoration
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Thin vs thick iPod Classic:
            <br />
            what is the difference?
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            The rear housing depth affects how an iPod looks, feels and what
            parts can fit inside it.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              “Thin” and “thick” refer to the depth of the iPod&apos;s rear
              housing. From the front, both can look very similar. The important
              difference is the internal space available behind the front plate.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              This matters when choosing a battery, storage setup and rear
              plate. The best option is not always the thinnest or the largest:
              it depends on the build you want.
            </p>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Thin housing
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">
                Slim, clean, everyday.
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-600">
                A thin iPod Classic keeps the familiar compact profile. It is a
                strong choice for customers who want an elegant daily device
                with a lighter feel in the hand.
              </p>

              <div className="mt-8 h-24 rounded-[18px] bg-gradient-to-r from-[#c7c7c7] via-[#f7f7f7] to-[#9b9b9b] shadow-inner" />
            </article>

            <article className="rounded-[30px] bg-[#111111] p-8 text-white md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                Thick housing
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">
                More room, more flexibility.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65">
                A thick housing provides more internal depth. It can be useful
                when a build needs additional room for selected batteries,
                storage hardware or other internal components.
              </p>

              <div className="mt-8 h-32 rounded-[18px] bg-gradient-to-r from-[#303030] via-[#777777] to-[#1e1e1e] shadow-inner" />
            </article>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Side-by-side comparison
            </p>

            <div className="mt-7 overflow-hidden rounded-[28px] border border-black/10 bg-white">
              <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-black/10 bg-[#f1eee8] px-6 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                <p>Feature</p>
                <p>Thin</p>
                <p>Thick</p>
              </div>

              {differences.map((difference) => (
                <div
                  key={difference.title}
                  className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 border-b border-black/10 px-6 py-6 last:border-b-0"
                >
                  <p className="text-sm font-semibold text-black">
                    {difference.title}
                  </p>

                  <p className="text-sm leading-6 text-neutral-600">
                    {difference.thin}
                  </p>

                  <p className="text-sm leading-6 text-neutral-600">
                    {difference.thick}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[30px] bg-[#e9e2d6] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Choose thin if
              </p>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
                {chooseThin.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Choose thick if
              </p>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
                {chooseThick.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="mt-14 rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Important compatibility note
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Not every combination fits every iPod.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
              iPod generations, rear plates, batteries and storage assemblies
              do not all share the same compatibility. Clickwheel should
              confirm the exact model and intended components before a build is
              prepared.
            </p>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Build around your priorities
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Choose the right housing for your configuration.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Select your model, battery, storage and finish in the Clickwheel
              configurator. Housing compatibility can then be checked around
              the build.
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