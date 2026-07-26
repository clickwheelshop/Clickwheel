import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const issueCategories = [
  "Device not powering on",
  "Battery issue",
  "Charging or sync issue",
  "Audio or headphone issue",
  "Display or controls issue",
  "Storage or software restore issue",
  "Other suspected fault",
];

const beforeClaim = [
  "Have your order number ready.",
  "Use the email address used for the order.",
  "Describe the issue clearly.",
  "Add photos or a short video if useful.",
  "Do not ship the device until Clickwheel confirms next steps.",
];

const reviewSteps = [
  "Submit the claim by email.",
  "Clickwheel checks the order and issue description.",
  "If needed, Clickwheel asks for photos, video, or extra details.",
  "Clickwheel confirms whether the device should be sent for inspection.",
  "Final warranty decision is made after inspection.",
];

const coverageNotes = [
  "Warranty coverage depends on the published warranty policy.",
  "Inspection may be required before coverage is confirmed.",
  "Accidental damage, liquid damage, unauthorized repair, modification or misuse may not be covered.",
  "Consumable wear may be treated according to the warranty policy.",
];

const requestChecklist = [
  "Name",
  "Order number",
  "Email used for the order",
  "Country",
  "iPod model, if known",
  "Device serial / restoration ID / warranty ID, if available",
  "Issue category",
  "Description of symptoms",
  "Date the issue started",
  "Is the issue constant or intermittent?",
  "Does the device power on?",
  "Has the device been dropped, opened, modified, or exposed to liquid?",
];

const warrantyClaimMailto = `mailto:warranty@clickwheel.shop?subject=${encodeURIComponent(
  "Warranty / Faulty Device Claim",
)}&body=${encodeURIComponent(`Hi Clickwheel,

I would like to submit a warranty / faulty-device claim for my Clickwheel iPod.

Name:
Order number:
Email used for the order:
Country:
iPod model, if known:
Device serial / restoration ID / warranty ID, if available:
Issue category:
Description of symptoms:
Date the issue started:
Is the issue constant or intermittent?
Does the device power on?
Has the device been dropped, opened, modified, or exposed to liquid?

I understand I should wait for Clickwheel to confirm next steps before shipping the device.

Photos or video can be attached when sending this email.
`)}`;

export const metadata: Metadata = {
  title: "Warranty Claim for Your Clickwheel iPod",
  description:
    "Submit a warranty or faulty-device claim for a Clickwheel refurbished iPod by email.",
  alternates: {
    canonical: "/support/warranty-claim",
    languages: {
      en: "/support/warranty-claim",
      ro: "/ro/support/warranty-claim",
    },
  },
};

export default function WarrantyClaimPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Warranty / Fault Claim
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Warranty claim
                <br />
                for your Clickwheel iPod.
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-7 text-neutral-600 md:text-lg">
                This page is for customers who bought a refurbished iPod from
                Clickwheel and need help with a possible warranty issue. If you
                want a paid repair or upgrade for your own device, use the
                Service / Upgrade Request page instead. If you want Clickwheel
                to build a refurbished iPod for you, start with Build Request.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={warrantyClaimMailto}
                  className="inline-flex justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Submit claim by email
                </a>

                <Link
                  href="/warranty"
                  className="inline-flex justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
                >
                  Read warranty policy
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
              What this page is for
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Suspected faults on an existing Clickwheel order.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Clickwheel will review the claim before confirming warranty
              coverage. Coverage depends on the warranty policy, device
              condition and, when needed, workshop inspection.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {issueCategories.map((category) => (
              <article
                key={category}
                className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {category}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Review process
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Confirm next steps before shipping.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Do not ship your device until Clickwheel confirms next steps by
              email. Some claims can be clarified before inspection, and others
              may need the device sent in for review.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reviewSteps.map((step, index) => (
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
              Coverage notes
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              A claim is not automatic coverage.
            </h2>

            <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-600">
              {coverageNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] border border-black/10 bg-[#e9e2d6] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Before you send a claim
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Include enough detail for a useful first review.
            </h2>

            <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
              {beforeClaim.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
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
              href={warrantyClaimMailto}
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Open warranty claim email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
