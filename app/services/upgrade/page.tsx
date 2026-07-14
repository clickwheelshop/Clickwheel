import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const requestChecklist = [
  "Name",
  "Email",
  "Country",
  "iPod model, if known",
  "Current storage, if known",
  "Requested service or upgrade",
  "Symptoms or issue description",
  "Does the device power on?",
  "Was it exposed to liquid or impact?",
];

const serviceCategories = [
  {
    title: "Storage upgrades",
    description:
      "Flash storage upgrades up to Clickwheel's supported 1TB maximum.",
  },
  {
    title: "Battery replacement",
    description:
      "Replace an ageing battery after compatibility and condition checks.",
  },
  {
    title: "Housing replacement",
    description:
      "Front plates, rear housings, click wheels and cosmetic refresh work.",
  },
  {
    title: "Controls and ports",
    description:
      "Click wheel, buttons, headphone jack, hold switch and related faults.",
  },
  {
    title: "Charging and sync",
    description:
      "Charging, computer connection, sync issues and software restore help.",
  },
  {
    title: "Unknown faults",
    description:
      "Diagnosis for iPods that behave inconsistently or need inspection first.",
  },
];

const processSteps = [
  "Tell us what iPod you have.",
  "Describe the issue or upgrade.",
  "Wait for confirmation before shipping.",
  "We inspect, confirm options, and complete the service.",
];

const importantNotes = [
  "Do not ship your device until Clickwheel confirms the request by email.",
  "Final service availability and quote depend on device condition and parts availability.",
  "Maximum supported storage is 1TB.",
  "iPod Classic 6th Generation models from 2007-2008 are limited to 128GB.",
  "Photos can be sent by replying to the email thread after the first message.",
];

const serviceRequestMailto = `mailto:requests@clickwheel.shop?subject=${encodeURIComponent(
  "Service / Upgrade Request",
)}&body=${encodeURIComponent(`Hi Clickwheel,

I would like to request service or an upgrade for my own iPod.

Name:
Email:
Country:
iPod model, if known:
Current storage, if known:
Requested service or upgrade:
Symptoms / issue description:
Does the device power on?
Was it exposed to liquid or impact?

I understand I should wait for confirmation before shipping my device.

Photos can be sent by replying to this email thread.
`)}`;

export const metadata: Metadata = {
  title: "Service & Upgrades for Your iPod",
  description:
    "Request iPod Classic repair, diagnosis, storage upgrade, battery replacement, housing replacement or related service work from Clickwheel.",
  alternates: {
    canonical: "/services/upgrade",
    languages: {
      en: "/services/upgrade",
      ro: "/ro/services/upgrade",
    },
  },
};

export default function ServiceUpgradePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Service / Upgrade Request
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Service & upgrades
                <br />
                for your iPod.
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-7 text-neutral-600 md:text-lg">
                This page is for customers who already own an iPod and want
                Clickwheel to inspect, repair, restore or upgrade that device.
                If you want Clickwheel to build a refurbished iPod for you,
                start with the Build Request flow instead.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={serviceRequestMailto}
                  className="inline-flex justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Request service by email
                </a>

                <Link
                  href="/request-build"
                  className="inline-flex justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
                >
                  Need a full build?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              What we can review
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Service work starts with inspection.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Clickwheel can inspect the device before confirming final service
              availability and pricing. Please wait for confirmation before
              shipping anything to the workshop.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Process
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Confirm first, ship later.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Service requests are reviewed by email before any device is sent
              in. This protects you from shipping an unsupported device or a
              request that cannot be completed with available parts.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <article
                key={step}
                className="rounded-[24px] border border-white/15 bg-white/5 p-6"
              >
                <p className="text-xs font-semibold text-blue-300">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Important notes
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              A request is not a shipping instruction.
            </h2>

            <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-600">
              {importantNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] border border-black/10 bg-[#e9e2d6] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Email checklist
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Include the details we need to review the device.
            </h2>

            <div className="mt-7 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
              {requestChecklist.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-white/60 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={serviceRequestMailto}
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Open email request
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
