import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Returns & 30-Day Return Policy",
  description:
    "How Clickwheel handles legal withdrawal rights and eligible 30-day returns.",
  alternates: {
    canonical: "/returns",
    languages: {
      en: "/returns",
      ro: "/ro/returns",
    },
  },
};

export default function ReturnsPage() {
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
              Returns &amp; 30-Day Return Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              How legal withdrawal rights and Clickwheel's voluntary 30-day
              return promise work for eligible physical products.
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
                <a className="block hover:text-black" href="#withdrawal">
                  Legal withdrawal rights
                </a>
                <a className="block hover:text-black" href="#return-window">
                  30-day return promise
                </a>
                <a className="block hover:text-black" href="#condition">
                  Return condition
                </a>
                <a className="block hover:text-black" href="#start-return">
                  Starting a return
                </a>
                <a className="block hover:text-black" href="#requests">
                  Build requests
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="withdrawal">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Legal withdrawal rights
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Some customers may have statutory withdrawal rights depending
                    on their location, the product and how the purchase is
                    completed. These rights are separate from Clickwheel's
                    voluntary return promise.
                  </p>

                  <p>
                    If a legal withdrawal right applies to your purchase, this
                    policy does not remove or replace that right.
                  </p>
                </div>
              </section>

              <section id="return-window">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Clickwheel's 30-day return promise
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Clickwheel offers a 30-day return window for eligible
                    physical products as a customer-trust policy.
                  </p>

                  <p>
                    Not every item is automatically returnable in every
                    condition. Eligibility may depend on the product, its
                    condition, supplied accessories, any approved customization
                    and the final quote or order documentation.
                  </p>
                </div>
              </section>

              <section id="condition">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Return condition
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Returned items should include the device, accessories
                    supplied with it and the original packaging where possible.
                  </p>

                  <p>
                    Please take reasonable care of the product while deciding
                    whether to keep it. Items returned incomplete, damaged or
                    changed after delivery may not be eligible for a full return
                    outcome.
                  </p>
                </div>
              </section>

              <section id="start-return">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Starting a return
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Contact Clickwheel before sending anything back. We will
                    review the request and provide return shipping instructions
                    by email.
                  </p>

                  <p>
                    Do not send a product back without instructions from
                    Clickwheel. This helps avoid lost parcels, incorrect
                    addresses or delays.
                  </p>

                  <p>
                    Refund timing and method are confirmed by email after the
                    returned item has been received and reviewed.
                  </p>
                </div>
              </section>

              <section id="requests">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Build requests
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    The current Build Request form is not an order or payment
                    confirmation. No payment is taken through that form, so a
                    submitted request does not need a return.
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
                  Need to discuss a return?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Email returns@clickwheel.shop before sending anything back.
                </p>

                <Link
                  href="mailto:returns@clickwheel.shop"
                  className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
                >
                  Email returns
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
