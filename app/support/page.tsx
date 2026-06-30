import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const helpTopics = [
  {
    number: "01",
    title: "Order & Build Requests",
    description:
      "Questions about a custom Clickwheel build, accessories, pricing estimates or the request process.",
    action: "Start a build request",
    href: "/build",
  },
  {
    number: "02",
    title: "Repairs & Upgrades",
    description:
      "Need help with your own iPod Classic? Explore upgrade options, restoration services and repair requests.",
    action: "Explore services",
    href: "/services",
  },
  {
    number: "03",
    title: "Music & Rockbox Help",
    description:
      "Guides for adding music, using Rockbox, managing storage and getting more from your device.",
    action: "Read guides",
    href: "/guides",
  },
];

const faqItems = [
  {
    question: "Can I send my own iPod for an upgrade?",
    answer:
      "Yes. Clickwheel will support upgrades and restoration work for customer-owned iPod Classics. Final options are confirmed after the device is reviewed.",
  },
  {
    question: "Do you offer worldwide shipping?",
    answer:
      "Shipping availability and cost will be confirmed before payment, based on the destination and the selected build.",
  },
  {
    question: "Can I choose a custom colour or engraving?",
    answer:
      "Selected custom colours and rear engraving options are planned for Clickwheel builds. Availability depends on compatible housing parts and stock.",
  },
  {
    question: "Can I buy accessories without an iPod?",
    answer:
      "Yes. Accessories are planned as separate products and can also be added to a custom Clickwheel build as a bundle.",
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
                Help for every
                <br />
                listening journey.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Find help with custom builds, upgrades, repairs, accessories,
              music setup and caring for your restored iPod Classic.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              How can we help?
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Start in the right place.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {helpTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <p className="text-sm font-semibold text-blue-600">
                  {topic.number}
                </p>

                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">
                  {topic.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {topic.description}
                </p>

                <Link
                  href={topic.href}
                  className="mt-8 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  {topic.action} →
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
              Contact Clickwheel
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              A proper support inbox is coming soon.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              We are preparing the official Clickwheel email system for build
              requests, support and sales enquiries. Until then, use the build
              configurator or service pages to prepare your request.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-white/5 p-8">
            <p className="text-sm font-semibold">Planned contact addresses</p>

            <div className="mt-6 space-y-4 text-sm text-white/70">
              <p>
                <span className="font-semibold text-white">General:</span>{" "}
                contact@clickwheel.shop
              </p>

              <p>
                <span className="font-semibold text-white">Support:</span>{" "}
                support@clickwheel.shop
              </p>

              <p>
                <span className="font-semibold text-white">Sales:</span>{" "}
                sales@clickwheel.shop
              </p>
            </div>

            <Link
              href="/build"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Build Yours →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Common Questions
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Before you ask.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[24px] border border-black/10 bg-white p-7"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {item.question}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}