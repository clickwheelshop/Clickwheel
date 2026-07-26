import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const requestReasons = [
  "Return a full order",
  "Return part of an order, if eligible",
  "Request withdrawal or change-of-mind return",
  "Ask for return instructions before shipping anything back",
];

const beforeRequest = [
  "Have your order number ready.",
  "Use the email address used for the order.",
  "Tell us whether this is a full or partial return.",
  "Keep the product, packaging and accessories available for review.",
  "Do not ship anything back until Clickwheel confirms the return instructions.",
  "If the order has not been dispatched yet, use the cancellation request page instead.",
];

const reviewSteps = [
  "Submit the return or withdrawal request by email.",
  "Clickwheel checks the order and request details.",
  "Clickwheel confirms whether the return route is appropriate.",
  "Clickwheel sends return instructions if the request can proceed.",
  "Final handling depends on inspection, timing, condition and the published returns policy.",
];

const importantNotes = [
  "The browser or customer page does not decide return eligibility.",
  "The final decision depends on actual order details and the published returns policy.",
  "Returned items should include the device, accessories and supplied items where applicable.",
  "Refund approval or timing is not promised on this page.",
];

const requestChecklist = [
  "Name",
  "Order number",
  "Email used for the order",
  "Country",
  "Do you want to return the whole order or part of it?",
  "If partial, which item(s) and quantity?",
  "Has the order been delivered?",
  "Date received, if delivered",
  "Reason for return, optional",
  "Product condition",
  "Are all accessories/items included?",
  "Phone number, optional",
  "Any extra notes",
  "Photos can be attached when sending the email if useful",
];

const returnRequestMailto = `mailto:returns@clickwheel.shop?subject=${encodeURIComponent(
  "Return / Withdrawal Request",
)}&body=${encodeURIComponent(`Hi Clickwheel,

I would like to request a return or withdrawal for an existing Clickwheel order.

Name:
Order number:
Email used for the order:
Country:
Do you want to return the whole order or part of it?
If partial, which item(s) and quantity?
Has the order been delivered?
Date received, if delivered:
Reason for return, optional:
Product condition:
Are all accessories/items included?
Phone number, optional:
Any extra notes:

I understand Clickwheel will review the order details, timing, condition and returns policy before confirming eligibility or next steps. I will not ship anything back until Clickwheel confirms return instructions.
`)}`;

export const metadata: Metadata = {
  title: "Start a Return or Withdrawal Request",
  description:
    "Request return or withdrawal review for an existing Clickwheel order after dispatch or delivery.",
  alternates: {
    canonical: "/support/return-request",
    languages: {
      en: "/support/return-request",
      ro: "/ro/support/return-request",
    },
  },
};

export default function ReturnRequestPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Return / Withdrawal Request
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Start a return
                <br />
                or withdrawal request.
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-7 text-neutral-600 md:text-lg">
                This page is for customers with an existing Clickwheel order
                that was dispatched or delivered and who want to request a return
                or withdrawal. Build Request is for a new refurbished iPod
                build, Service / Upgrade Request is for paid work on a
                customer-owned device, Warranty / Fault Claim is for a possible
                issue with a Clickwheel order, and Cancellation Request is for
                orders that have not yet been dispatched.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={returnRequestMailto}
                  className="inline-flex justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Request return by email
                </a>

                <Link
                  href="/returns"
                  className="inline-flex justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
                >
                  Read returns policy
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
              Dispatched or delivered orders that need review.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Clickwheel reviews the actual order status before confirming
              whether a return or withdrawal request can proceed. If the order
              has not been dispatched yet, use the cancellation request page
              instead.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {requestReasons.map((reason) => (
              <article
                key={reason}
                className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {reason}
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
              Wait for return instructions.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Do not ship items back until Clickwheel confirms the return
              instructions. Eligibility depends on the returns policy, request
              timing, product condition and included accessories.
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
              Important notes
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              A request is not automatic return approval.
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
              Before you request a return
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Include the details needed to review the order.
            </h2>

            <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
              {beforeRequest.map((item) => (
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
              href={returnRequestMailto}
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Open return email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
