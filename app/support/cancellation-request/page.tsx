import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const requestReasons = [
  "Cancel a full order before dispatch",
  "Cancel part of an order before dispatch, if possible",
  "Correct an order before preparation begins",
  "Ask whether the order can still be stopped",
];

const beforeRequest = [
  "Have your order number ready.",
  "Use the email address used for the order.",
  "Send the request as soon as possible.",
  "Cancellation is not guaranteed once preparation or dispatch has started.",
  "If the order has already been dispatched, use the returns or withdrawal flow instead.",
];

const reviewSteps = [
  "Submit the cancellation request by email.",
  "Clickwheel checks the order status.",
  "Clickwheel confirms whether the order can still be cancelled.",
  "If cancellation is possible, Clickwheel confirms the next steps.",
  "If dispatch has already happened, Clickwheel directs you to the returns or withdrawal process.",
];

const importantNotes = [
  "The browser or customer page does not decide dispatch status.",
  "The final decision depends on the actual order status.",
  "Refund or payment timing is not promised on this page and will be confirmed according to the applicable policy and order status.",
];

const requestChecklist = [
  "Name",
  "Order number",
  "Email used for the order",
  "Country",
  "Do you want to cancel the whole order or part of it?",
  "If partial, which item(s)?",
  "Reason for cancellation, optional",
  "Phone number, optional",
  "Any extra notes",
];

const cancellationRequestMailto = `mailto:requests@clickwheel.shop?subject=${encodeURIComponent(
  "Cancellation Request",
)}&body=${encodeURIComponent(`Hi Clickwheel,

I would like to request cancellation for an existing Clickwheel order before dispatch.

Name:
Order number:
Email used for the order:
Country:
Do you want to cancel the whole order or part of it?
If partial, which item(s)?
Reason for cancellation, optional:
Phone number, optional:
Any extra notes:

I understand Clickwheel will review the order status and confirm whether cancellation is still possible. If the order has already been dispatched, I understand I may need to use the returns / withdrawal process instead.
`)}`;

export const metadata: Metadata = {
  title: "Cancel an Order Before Dispatch",
  description:
    "Request cancellation of an existing Clickwheel order before dispatch by email.",
  alternates: {
    canonical: "/support/cancellation-request",
    languages: {
      en: "/support/cancellation-request",
      ro: "/ro/support/cancellation-request",
    },
  },
};

export default function CancellationRequestPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Cancellation Request
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Cancel an order
                <br />
                before dispatch.
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-7 text-neutral-600 md:text-lg">
                This page is for customers with an existing Clickwheel order who
                want to request cancellation before it ships. Build Request is
                for a new refurbished iPod build, Service / Upgrade Request is
                for paid work on a customer-owned device, and Warranty / Fault Claim
                is for a possible issue with a Clickwheel order.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={cancellationRequestMailto}
                  className="inline-flex justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Request cancellation by email
                </a>

                <Link
                  href="/cancellation"
                  className="inline-flex justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
                >
                  Read cancellation policy
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
              Existing orders that may still be stopped.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Clickwheel will review the request and confirm whether
              cancellation is still possible. If the order has already been
              dispatched, you may need to use the returns or withdrawal process
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
              Ask as soon as possible.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Cancellation depends on the live order status. Send the request as
              soon as possible so Clickwheel can check whether preparation or
              dispatch can still be stopped.
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
              A request is not an automatic cancellation.
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
              Before you request cancellation
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Include the details needed to find the order.
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
              href={cancellationRequestMailto}
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Open cancellation email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
