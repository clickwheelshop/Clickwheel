import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Basic terms for using the Clickwheel website and build request process.",
  alternates: {
    canonical: "/terms",
    languages: {
      en: "/terms",
      ro: "/ro/terms",
    },
  },
};

export default function TermsPage() {
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
              Terms &amp; Conditions
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              These terms outline how the Clickwheel website and current build
              request process work.
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
                <a className="block hover:text-black" href="#scope">
                  Scope
                </a>
                <a className="block hover:text-black" href="#requests">
                  Build requests
                </a>
                <a className="block hover:text-black" href="#prices">
                  Prices and availability
                </a>
                <a className="block hover:text-black" href="#payments">
                  Payments
                </a>
                <a className="block hover:text-black" href="#content">
                  Website content
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="scope">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Scope
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Clickwheel is an independent restoration workshop for
                    classic music players. These terms apply to browsing the
                    website and using the current build request form.
                  </p>

                  <p>
                    More detailed purchase, delivery, return or warranty terms
                    may be provided when checkout or paid order features are
                    introduced.
                  </p>
                </div>
              </section>

              <section id="requests">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Build requests
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    The build request form lets you share a preferred
                    configuration so Clickwheel can review availability and
                    reply by email.
                  </p>

                  <p>
                    A build request is not an order, reservation or payment
                    confirmation. Clickwheel may accept, decline or suggest
                    changes to a request after review.
                  </p>
                </div>
              </section>

              <section id="prices">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Prices and availability
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Prices shown in the configurator are estimates for the
                    selected options. The final price, availability and timing
                    are confirmed separately before any payment is requested.
                  </p>

                  <p>
                    Parts, finishes, accessories and service options may change
                    depending on stock, supplier availability and the condition
                    of available donor devices.
                  </p>
                </div>
              </section>

              <section id="payments">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Payments
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    No payment is taken through the current build request form.
                    Do not enter card details or payment information in the
                    notes field.
                  </p>

                  <p>
                    If Clickwheel enables checkout or payment features later,
                    payment steps and related purchase terms will be shown before
                    payment is completed.
                  </p>
                </div>
              </section>

              <section id="content">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Website content
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    We aim to keep product, service and guide information clear
                    and useful, but website content may be updated as the
                    workshop, stock and service process change.
                  </p>

                  <p>
                    iPod is a trademark of Apple Inc. Clickwheel is an
                    independent restoration workshop and is not affiliated with
                    Apple.
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
                  Questions about these terms?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Email Clickwheel at contact@clickwheel.shop.
                </p>

                <Link
                  href="mailto:contact@clickwheel.shop"
                  className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
                >
                  Email Clickwheel
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
