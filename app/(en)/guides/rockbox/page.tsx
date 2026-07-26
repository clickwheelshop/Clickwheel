import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const benefits = [
  {
    title: "Direct file transfer",
    description:
      "You can organise music in folders and copy files directly to the device instead of relying only on the traditional iTunes or Finder sync workflow.",
  },
  {
    title: "More audio formats",
    description:
      "Rockbox supports a wider range of music formats than the standard iPod software, which is useful for listeners with FLAC and folder-based libraries.",
  },
  {
    title: "More playback control",
    description:
      "Themes, playback settings, database options and deeper customisation make Rockbox attractive to advanced users.",
  },
];

const considerations = [
  "Rockbox is better suited to users who are comfortable managing music folders.",
  "The standard iPod interface is usually simpler for customers who want a classic Apple-style experience.",
  "Compatibility and installation method depend on the exact iPod generation.",
  "Clickwheel should only offer Rockbox setups that have been tested on the specific build configuration.",
];

export default function RockboxGuidePage() {
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
            Software
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Rockbox on iPod Classic:
            <br />
            what it is and why it matters.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Rockbox is an alternative music-player firmware for compatible
            devices. It gives advanced users more control over music files,
            playback and interface customisation.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              Standard iPod software is designed around a traditional music
              library and sync workflow. Rockbox is different: it is aimed at
              people who want more flexibility, folder-based music management
              and support for additional file formats.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              It is not automatically the best option for every Clickwheel
              customer. The right choice depends on how you use music, what
              files you own and whether you prefer simplicity or deeper control.
            </p>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[28px] border border-black/10 bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                  Rockbox benefit
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                  {benefit.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-neutral-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <article className="rounded-[30px] bg-[#111111] p-8 text-white md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                Rockbox may suit you if
              </p>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-white/75">
                <li>✓ You prefer drag-and-drop music folders.</li>
                <li>✓ You use FLAC or other non-standard audio formats.</li>
                <li>✓ You want themes and deeper playback control.</li>
                <li>✓ You are comfortable with a more technical workflow.</li>
              </ul>
            </article>

            <article className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Standard iPod OS may suit you if
              </p>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
                <li>✓ You want the familiar Apple iPod interface.</li>
                <li>✓ You prefer Finder or iTunes sync workflows.</li>
                <li>✓ You use playlists, album artwork and simple libraries.</li>
                <li>✓ You want the least technical setup.</li>
              </ul>
            </article>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#e9e2d6] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Important before choosing Rockbox
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Installation depends on the exact iPod generation.
            </h2>

            <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
              {considerations.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Clickwheel approach
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              We only prepare Rockbox where it makes sense.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
              Rockbox should not be treated as a checkbox for every build.
              Clickwheel will offer it only on compatible, tested configurations
              and will confirm the intended workflow before setup.
            </p>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Configure your software
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Choose standard iPod OS or Rockbox in your build.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              The Clickwheel configurator lets you select the software
              preference for your build request.
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