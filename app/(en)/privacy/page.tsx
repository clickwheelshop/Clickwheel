import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Clickwheel collects and uses details submitted through build request forms.",
  alternates: {
    canonical: "/privacy",
    languages: {
      en: "/privacy",
      ro: "/ro/privacy",
    },
  },
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              This page explains what details Clickwheel collects when you send a
              build request and how those details are used.
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
                <a className="block hover:text-black" href="#data-we-collect">
                  Data we collect
                </a>
                <a className="block hover:text-black" href="#how-we-use-data">
                  How we use data
                </a>
                <a className="block hover:text-black" href="#providers">
                  Providers and infrastructure
                </a>
                <a className="block hover:text-black" href="#payments">
                  Payment data
                </a>
                <a className="block hover:text-black" href="#your-choices">
                  Your choices
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="data-we-collect">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Data we collect
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    When you send a build request, Clickwheel may collect the
                    details you enter in the form: your name, email address,
                    country, notes and selected configuration.
                  </p>

                  <p>
                    We may also store technical request details connected to the
                    form submission, including timestamps and a public reference
                    used to identify the request in follow-up messages.
                  </p>
                </div>
              </section>

              <section id="how-we-use-data">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  How we use data
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    We use request details to review your preferred build,
                    check availability, prepare a reply and provide customer
                    support.
                  </p>

                  <p>
                    A build request is not an order. Sending the current request
                    form does not confirm a purchase and does not take payment.
                  </p>
                </div>
              </section>

              <section id="providers">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Providers and infrastructure
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Clickwheel uses website hosting, database and email
                    infrastructure to run the site, store submitted requests and
                    send or receive email replies.
                  </p>

                  <p>
                    These providers process information only as needed to
                    support the website, request review and customer
                    communication.
                  </p>
                </div>
              </section>

              <section id="payments">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Payment data
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    The current build request form does not collect card details
                    or payment data.
                  </p>

                  <p>
                    If Clickwheel adds checkout or payment features later, the
                    relevant payment information will be handled through the
                    checkout flow and described before payment is taken.
                  </p>
                </div>
              </section>

              <section id="your-choices">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Your choices
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    You can contact Clickwheel to ask for access to the details
                    we hold about your build request, or to request correction or
                    deletion.
                  </p>

                  <p>
                    We may need to keep limited information where it is necessary
                    for customer support, security, record keeping or legal
                    reasons.
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
                  Questions about your data?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Email Clickwheel at contact@clickwheel.shop for privacy
                  questions or data requests.
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
