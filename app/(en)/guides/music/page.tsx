import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const standardSteps = [
  {
    number: "01",
    title: "Prepare your music library",
    description:
      "Keep your music files organised before syncing. Correct artist names, album titles, track numbers and artwork make the iPod library much easier to browse.",
  },
  {
    number: "02",
    title: "Use a data-capable 30-pin cable",
    description:
      "Some replacement cables charge the iPod but do not support data transfer. Use a cable that supports both charging and syncing.",
  },
  {
    number: "03",
    title: "Connect the iPod directly to your computer",
    description:
      "Avoid unreliable USB hubs where possible. Connect the iPod directly to your Mac or Windows computer and wait for it to appear.",
  },
  {
    number: "04",
    title: "Choose your sync workflow",
    description:
      "On modern Macs, iPod syncing is handled through Finder. On Windows, iPod Classic syncing is handled through iTunes.",
  },
  {
    number: "05",
    title: "Select music and sync",
    description:
      "Choose your full library or selected artists, albums and playlists. Click Apply or Sync, then wait until transfer finishes before disconnecting.",
  },
];

const tips = [
  "Use playlists to create simple listening categories.",
  "Check album artwork before syncing for a cleaner library.",
  "Do not disconnect the iPod during sync.",
  "Keep a backup of your music library on your computer.",
];

export default function MusicGuidePage() {
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
            Getting Started
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            How to add music
            <br />
            to an iPod Classic.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Learn the difference between standard iPod syncing, Rockbox
            transfers, Mac and Windows formatting, and the cables you need.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              There are two main ways to put music on a Clickwheel build:
              standard iPod OS syncing or Rockbox file transfer. The best
              option depends on your computer, music format and how you prefer
              to organise your library.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              Choose your workflow before the build is prepared. Formatting and
              operating-system compatibility are easier to handle before music
              is added.
            </p>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-black/10 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Standard iPod OS
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                Classic sync workflow.
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-600">
                Best for customers who want the familiar Apple iPod experience,
                playlists, album artwork and a traditional music library.
              </p>

              <div className="mt-7 space-y-4 text-sm text-neutral-700">
                <p>
                  <span className="font-semibold">Mac:</span> use Finder on
                  modern macOS versions.
                </p>

                <p>
                  <span className="font-semibold">Windows:</span> use iTunes
                  for iPod Classic syncing.
                </p>
              </div>
            </article>

            <article className="rounded-[28px] bg-[#111111] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                Rockbox
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                Direct file transfer.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Rockbox is alternative firmware for compatible music players.
                It is useful for folder-based libraries, direct drag-and-drop
                transfers and wider audio-format support.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/65">
                It is best for customers who are comfortable managing folders
                and want more control over playback and file formats.
              </p>
            </article>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Standard iPod OS: step by step
            </p>

            <div className="mt-7 space-y-5">
              {standardSteps.map((step) => (
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

          <section className="mt-14 rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Choosing your format
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Mac and Windows are not always interchangeable.
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-neutral-600">
              <p>
                A Windows-prepared iPod commonly uses FAT32 formatting. This is
                usually the best practical option for customers who may use
                both Windows and macOS.
              </p>

              <p>
                A Mac-formatted iPod may not be recognised natively on Windows.
                Tell Clickwheel which computer you use before your build is
                prepared.
              </p>

              <p>
                For Rockbox builds, we recommend confirming your intended
                computer workflow before setup. We can prepare the device around
                your preferred system.
              </p>
            </div>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#e9e2d6] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Cable check
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Charging does not always mean syncing.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-700">
              Some 30-pin cables are charging-only. They may power the iPod but
              will not make it appear in Finder or iTunes and cannot transfer
              music. Use a tested cable that supports both charging and data
              transfer.
            </p>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Troubleshooting pages will be added later with checks for cables,
              sync errors, format problems and devices that are not detected.
            </p>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#f4f1eb] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Clickwheel tips
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Keep your library clean from the beginning.
            </h2>

            <ul className="mt-7 grid gap-4 text-sm leading-7 text-neutral-700 md:grid-cols-2">
              {tips.map((tip) => (
                <li key={tip}>✓ {tip}</li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Need a better starting point?
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Build a restored classic around your music library.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Choose your generation, storage, battery, finish, software and
              accessories in the Clickwheel configurator.
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