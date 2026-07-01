import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description:
    "Delivery information for Clickwheel restored and upgraded iPod Classic devices.",
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
              Delivery information for ready-to-ship and built-to-order
              Clickwheel devices.
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
                <a className="block hover:text-black" href="#where-we-deliver">
                  Where we deliver
                </a>
                <a className="block hover:text-black" href="#delivery-costs">
                  Delivery costs
                </a>
                <a className="block hover:text-black" href="#dispatch-times">
                  Dispatch times
                </a>
                <a className="block hover:text-black" href="#delivery-methods">
                  Delivery methods
                </a>
                <a className="block hover:text-black" href="#tracking">
                  Tracking and delivery estimates
                </a>
                <a className="block hover:text-black" href="#undeliverable">
                  Undeliverable parcels
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="where-we-deliver">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Where we deliver
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>Clickwheel orders are dispatched from Romania.</p>

                  <p>
                    We currently deliver within Romania and to selected European
                    destinations. Availability for a specific address is
                    confirmed during checkout or before payment is completed.
                  </p>

                  <p>We do not currently offer delivery outside Europe.</p>
                </div>
              </section>

              <section id="delivery-costs">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Delivery costs
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    <strong className="font-semibold text-black">
                      Romania:
                    </strong>{" "}
                    delivery is free for eligible Clickwheel orders.
                  </p>

                  <p>
                    <strong className="font-semibold text-black">
                      European destinations:
                    </strong>{" "}
                    delivery cost is calculated after the delivery address is
                    entered at checkout. The available shipping options and
                    their prices are shown before payment.
                  </p>

                  <p>
                    International delivery pricing may vary based on destination,
                    parcel dimensions, selected carrier service, tracking,
                    signature requirements and available insurance options.
                  </p>
                </div>
              </section>

              <section id="dispatch-times">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Dispatch times
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <article className="rounded-[24px] border border-black/10 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/45">
                      Ready to ship
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                      1–3 business days
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Applies to devices marked as ready to ship after payment
                      confirmation.
                    </p>
                  </article>

                  <article className="rounded-[24px] border border-black/10 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/45">
                      Built to order
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                      Up to 7 business days
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Applies to approved custom configurations after payment
                      confirmation.
                    </p>
                  </article>
                </div>

                <p className="mt-5 text-base leading-7 text-black/65">
                  Dispatch times describe the preparation period before a parcel
                  is handed to the carrier. They do not include the carrier’s
                  transit time.
                </p>
              </section>

              <section id="delivery-methods">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Delivery methods
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    In Romania, orders may be delivered by courier to a delivery
                    address or, where available, to an eligible parcel locker or
                    collection point.
                  </p>

                  <p>
                    International orders are delivered through the carrier and
                    service available for the selected destination.
                  </p>

                  <p>
                    All available delivery methods are shown before payment when
                    online checkout is active.
                  </p>
                </div>
              </section>

              <section id="tracking">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Tracking and delivery estimates
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Where tracking is available, we will provide tracking details
                    after dispatch.
                  </p>

                  <p>
                    Delivery dates and transit times are estimates provided by
                    the carrier. They may vary depending on destination, local
                    delivery conditions, public holidays, weather, customs or
                    carrier operational factors.
                  </p>

                  <p>
                    For higher-value orders, available shipping services may
                    include signature on delivery or additional shipment
                    protection.
                  </p>
                </div>
              </section>

              <section id="undeliverable">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Undeliverable or uncollected parcels
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Please ensure that the delivery address, contact details and
                    collection instructions are accurate before placing an
                    order.
                  </p>

                  <p>
                    If a parcel cannot be delivered or is not collected and is
                    returned to us, we will contact the customer to discuss
                    re-delivery or the applicable return process.
                  </p>

                  <p>
                    Any additional delivery costs may apply where a new shipment
                    is requested.
                  </p>
                </div>
              </section>

              <section className="rounded-[28px] bg-[#171717] p-8 text-white sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                  Need help?
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                  Have a question about delivery?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Visit our support section for setup, service and delivery
                  guidance.
                </p>

                <Link
                  href="/support"
                  className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
                >
                  Visit support
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