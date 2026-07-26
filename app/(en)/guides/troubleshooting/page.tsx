import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const issues = [
  {
    number: "01",
    title: "My iPod charges but does not appear on my computer",
    description:
      "Try a different 30-pin cable first. Some replacement cables provide charging only and do not support data transfer. Then try another USB port and connect directly to the computer instead of through a hub.",
  },
  {
    number: "02",
    title: "My iPod does not appear in Finder or iTunes",
    description:
      "Disconnect and reconnect the iPod, restart Finder or iTunes, then restart the computer if needed. On Mac, check Finder under Locations. On Windows, use iTunes for iPod Classic syncing.",
  },
  {
    number: "03",
    title: "Sync starts but does not finish",
    description:
      "Keep the cable connected and avoid disconnecting the iPod during transfer. Try syncing a smaller playlist first to identify whether one album, file or artwork entry is causing the issue.",
  },
  {
    number: "04",
    title: "My iPod is recognised on Mac but not Windows",
    description:
      "The device may have been prepared for a Mac workflow. A Mac-formatted iPod may not be recognised natively on Windows. Contact Clickwheel before restoring or reformatting the device.",
  },
  {
    number: "05",
    title: "Rockbox does not show newly added music",
    description:
      "If you copy music directly into folders, refresh the Rockbox database after transfer. Check that the files are in your chosen music folder and that the transfer completed before disconnecting.",
  },
];

const quickChecks = [
  "Use a tested cable that supports data and charging.",
  "Try another USB port before assuming the iPod has a fault.",
  "Avoid USB hubs during setup and sync.",
  "Restart Finder, iTunes or your computer before taking further action.",
  "Do not restore or reformat the iPod before confirming the correct workflow.",
];

export default function TroubleshootingGuidePage() {
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
            Troubleshooting
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            iPod Classic troubleshooting.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Simple checks for connection issues, sync problems, Mac and Windows
            compatibility, cables and Rockbox music libraries.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              Most connection problems are not caused by the iPod itself.
              Start with the cable, USB port and computer workflow before
              changing settings or attempting a restore.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              This guide is designed for common setup issues. Avoid formatting,
              restoring or opening the device until you know which workflow and
              operating system the build was prepared for.
            </p>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              First checks
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Start here before changing anything.
            </h2>

            <ul className="mt-8 grid gap-4 text-sm leading-7 text-white/75 md:grid-cols-2">
              {quickChecks.map((check) => (
                <li key={check}>✓ {check}</li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Common issues
            </p>

            <div className="mt-7 space-y-5">
              {issues.map((issue) => (
                <article
                  key={issue.number}
                  className="grid gap-5 rounded-[24px] border border-black/10 bg-white p-7 md:grid-cols-[90px_1fr]"
                >
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-blue-600">
                    {issue.number}
                  </p>

                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                      {issue.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                      {issue.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[30px] bg-[#e9e2d6] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Mac workflow
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em]">
                Finder on modern macOS.
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-700">
                Connect the iPod using a data-capable cable, then look for it
                in Finder under Locations. If it does not appear, test another
                cable and USB port before trying more advanced steps.
              </p>
            </article>

            <article className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Windows workflow
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em]">
                iTunes for iPod Classic.
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-700">
                Connect the iPod directly to the PC, then open iTunes and look
                for the device button. Check the cable, USB port and iTunes
                installation before assuming there is a hardware problem.
              </p>
            </article>
          </section>

          <section className="mt-14 rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Before restoring or formatting
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Stop and confirm the intended workflow.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
              Restoring or formatting can remove your music and change the way
              the device works with your computer. If you are unsure whether
              your iPod was prepared for Mac, Windows, standard iPod OS or
              Rockbox, contact Clickwheel before taking that step.
            </p>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Need another starting point?
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Read the setup guides before changing your build.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/guides/music"
                className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Music setup →
              </Link>

              <Link
                href="/guides/rockbox"
                className="rounded-full border border-white/25 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white"
              >
                Rockbox guide →
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}