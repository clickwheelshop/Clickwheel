import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Cancellation Before Dispatch",
  description:
    "How to ask Clickwheel about cancelling a confirmed order before dispatch.",
  alternates: {
    canonical: "/cancellation",
    languages: {
      en: "/cancellation",
      ro: "/ro/cancellation",
    },
  },
};

export default function CancellationPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f6f3ee] text-[#151515]">
        <section className="border-b border-black/10 px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
              Clickwheel policies
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Cancellation Before Dispatch
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              How to contact Clickwheel if you need to ask about cancelling a
              confirmed order before it has been dispatched.
            </p>

            <p className="mt-5 text-sm text-black/45">
              Last updated: July 2026
            </p>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.75fr_1.5fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold">On this page</p>

              <nav className="mt-5 space-y-3 text-sm text-black/60">
                <a className="block hover:text-black" href="#when-it-applies">
                  When this applies
                </a>
                <a className="block hover:text-black" href="#build-requests">
                  Build requests
                </a>
                <a className="block hover:text-black" href="#dispatch-status">
                  Dispatch status
                </a>
                <a className="block hover:text-black" href="#how-to-contact">
                  How to contact us
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="when-it-applies">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  When this applies
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    This policy is for customers who want to ask about
                    cancelling a confirmed order before it has been dispatched.
                  </p>

                  <p>
                    If an order has already been dispatched, Clickwheel will
                    explain the available next steps by email.
                  </p>
                </div>
              </section>

              <section id="build-requests">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Build requests
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Current Build Request submissions are not orders and do not
                    need cancellation. They are requests for Clickwheel to review
                    a preferred configuration and reply by email.
                  </p>

                  <p>
                    No payment is taken through the current Build Request form.
                  </p>
                </div>
              </section>

              <section id="dispatch-status">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Dispatch status
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Clickwheel will confirm dispatch status by email. A website
                    browser, client screen or future form should not be treated
                    as the final source for whether a parcel has been dispatched.
                  </p>
                </div>
              </section>

              <section id="how-to-contact">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  How to contact us
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Email requests@clickwheel.shop or contact@clickwheel.shop as
                    soon as possible. Include your public reference or order
                    reference if available.
                  </p>

                  <p>
                    There is no cancellation form on the website yet. Clickwheel
                    will review the status and reply by email.
                  </p>
                </div>
              </section>

              <section
                id="contact"
                className="rounded-[28px] bg-[#171717] p-8 text-white sm:p-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                  Contact
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                  Need to ask about cancellation?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Email requests@clickwheel.shop or contact@clickwheel.shop.
                </p>

                <Link
                  href="/support/cancellation-request"
                  className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
                >
                  Start cancellation request
                </Link>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
