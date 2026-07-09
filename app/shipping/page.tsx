import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description:
    "How Clickwheel confirms shipping details for restored and upgraded iPod Classic devices.",
  alternates: {
    canonical: "/shipping",
    languages: {
      en: "/shipping",
      ro: "/ro/shipping",
    },
  },
};

export default function ShippingPage() {
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
              Shipping &amp; Delivery
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              Shipping details are confirmed after request review or final
              quote, before a paid order is prepared for dispatch.
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
                <a className="block hover:text-black" href="#confirmation">
                  How shipping is confirmed
                </a>
                <a className="block hover:text-black" href="#costs">
                  Costs and destinations
                </a>
                <a className="block hover:text-black" href="#dispatch">
                  Preparation before dispatch
                </a>
                <a className="block hover:text-black" href="#delivery">
                  Delivery estimates
                </a>
                <a className="block hover:text-black" href="#undeliverable">
                  Undeliverable parcels
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="confirmation">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  How shipping is confirmed
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Clickwheel confirms shipping details by email after a build
                    request has been reviewed or a final quote has been prepared.
                  </p>

                  <p>
                    The current Build Request form is not an order or payment
                    confirmation. No payment is taken and no shipment is created
                    through that form alone.
                  </p>
                </div>
              </section>

              <section id="costs">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Costs and destinations
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Available destinations, delivery options and delivery costs
                    are confirmed before a paid order is finalized.
                  </p>

                  <p>
                    Shipping details may depend on the destination, parcel size,
                    value, available services and any tracking or signature
                    options.
                  </p>
                </div>
              </section>

              <section id="dispatch">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Preparation before dispatch
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <article className="rounded-[24px] border border-black/10 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/45">
                      Ready-to-ship items
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                      Confirmed by email
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Dispatch guidance is confirmed after the item, address and
                      final order details are checked.
                    </p>
                  </article>

                  <article className="rounded-[24px] border border-black/10 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/45">
                      Custom builds
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                      After review and testing
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Preparation timing depends on build complexity, parts
                      availability, testing and final confirmation.
                    </p>
                  </article>
                </div>

                <p className="mt-5 text-base leading-7 text-black/65">
                  Clickwheel will confirm expected dispatch guidance by email.
                  Dispatch timing is separate from the carrier transit time.
                </p>
              </section>

              <section id="delivery">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Delivery estimates
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Where tracking is available, Clickwheel will provide
                    tracking details after dispatch.
                  </p>

                  <p>
                    Delivery dates and transit times are estimates. They may
                    vary depending on destination, local delivery conditions,
                    public holidays, weather, customs or carrier operational
                    factors.
                  </p>
                </div>
              </section>

              <section id="undeliverable">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Undeliverable or uncollected parcels
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Please make sure delivery details and contact information are
                    accurate before a paid order is finalized.
                  </p>

                  <p>
                    If a parcel cannot be delivered or is not collected and is
                    returned to Clickwheel, we will contact the customer to
                    discuss the available next steps. Additional delivery costs
                    may apply if a new shipment is requested.
                  </p>
                </div>
              </section>

              <section
                id="contact"
                className="rounded-[28px] bg-[#171717] p-8 text-white sm:p-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                  Need help?
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                  Have a question about delivery?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Email contact@clickwheel.shop for shipping and delivery
                  questions.
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
