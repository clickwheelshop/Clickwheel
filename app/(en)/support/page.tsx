import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const supportTopics = [
  {
    number: "01",
    title: "Setup and music",
    description:
      "Help with Finder, iTunes, Rockbox, data cables and preparing your music library.",
    href: "/guides/music",
    action: "Music guide →",
  },
  {
    number: "02",
    title: "Troubleshooting",
    description:
      "Connection checks, sync problems, Mac and Windows compatibility, and Rockbox database issues.",
    href: "/guides/troubleshooting",
    action: "Troubleshooting →",
  },
  {
    number: "03",
    title: "Services and upgrades",
    description:
      "Storage upgrades, replacement batteries, housing restoration and diagnostic work.",
    href: "/services/upgrade",
    action: "Request service →",
  },
  {
    number: "04",
    title: "Warranty claim",
    description:
      "For Clickwheel customers with an existing order and a possible faulty-device issue.",
    href: "/support/warranty-claim",
    action: "Start warranty claim →",
  },
  {
    number: "05",
    title: "Cancel an order",
    description:
      "For existing Clickwheel orders that may still be cancelled before dispatch.",
    href: "/support/cancellation-request",
    action: "Request cancellation →",
  },
  {
    number: "06",
    title: "Return an order",
    description:
      "For dispatched or delivered Clickwheel orders that need return or withdrawal review.",
    href: "/support/return-request",
    action: "Request return →",
  },
];

const faqs = [
  {
    question: "My iPod charges but does not appear on my computer.",
    answer:
      "Start with the cable. Some 30-pin replacement cables provide charging only and cannot transfer data. Try a tested data-capable cable and another USB port before changing any settings.",
  },
  {
    question: "Can I use my iPod with both Mac and Windows?",
    answer:
      "It depends on how the device was prepared. A Windows/FAT32 workflow is generally the more flexible option for customers who may use both systems. Check before restoring or formatting the device.",
  },
  {
    question: "Can Clickwheel install Rockbox?",
    answer:
      "Rockbox is offered only for compatible, tested configurations. It is best for customers who want drag-and-drop music folders, wider format support and deeper playback control.",
  },
  {
    question: "Do you support customer-owned iPods?",
    answer:
      "Yes. Clickwheel services are designed for both complete builds and compatible customer-owned iPod Classic devices.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Support
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Help for the
                <br />
                long listen.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Guides, setup help and practical next steps for restoring,
              upgrading and using your iPod Classic.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Start here
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                Find the right next step.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-600">
              Most common questions can be solved through the guides before a
              device needs service.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {supportTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-[28px] border border-black/10 bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  {topic.number}
                </p>

                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                  {topic.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {topic.description}
                </p>

                <Link
                  href={topic.href}
                  className="mt-8 inline-flex text-sm font-semibold text-black transition hover:text-blue-600"
                >
                  {topic.action}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Before you restore or format
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Confirm your workflow first.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Before restoring an iPod, confirm whether it was prepared for Mac,
              Windows, standard iPod OS or Rockbox. Restoring or formatting can
              remove music and change the way the device works with your
              computer.
            </p>
          </div>

          <div>
            <Link
              href="/guides/troubleshooting"
              className="inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Read troubleshooting →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Common questions
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Clear answers before you change anything.
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[24px] border border-black/10 bg-white p-7"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {faq.question}
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px] rounded-[30px] bg-[#e9e2d6] p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Build support
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                Planning a newly configured Clickwheel iPod?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-700">
                Use Build Request for a newly configured restored Clickwheel
                iPod. For paid work on an iPod you already own, use the Service
                / Upgrade Request flow.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/request-build"
                className="inline-flex justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Start Build Request →
              </Link>

              <Link
                href="/services/upgrade"
                className="inline-flex justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
              >
                Request service →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
