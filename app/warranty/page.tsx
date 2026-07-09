import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Warranty Policy",
  description:
    "How Clickwheel handles faulty-device warranty and support requests.",
  alternates: {
    canonical: "/warranty",
    languages: {
      en: "/warranty",
      ro: "/ro/warranty",
    },
  },
};

export default function WarrantyPage() {
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
              Warranty Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              Warranty and faulty-device support are handled separately from
              change-of-mind returns.
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
                  Warranty support
                </a>
                <a className="block hover:text-black" href="#coverage">
                  Coverage details
                </a>
                <a className="block hover:text-black" href="#not-covered">
                  Examples not covered
                </a>
                <a className="block hover:text-black" href="#how-to-contact">
                  How to contact us
                </a>
                <a className="block hover:text-black" href="#legal-rights">
                  Legal rights
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="scope">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Warranty support
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Warranty support is for possible faults with a Clickwheel
                    device or supplied product. It is separate from a
                    change-of-mind return.
                  </p>

                  <p>
                    If something seems wrong, contact Clickwheel before sending
                    anything back. We will review the issue and reply with the
                    next steps by email.
                  </p>
                </div>
              </section>

              <section id="coverage">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Coverage details
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Warranty coverage depends on the product, the issue and the
                    final quote or order documentation. Clickwheel does not
                    promise that every issue is covered.
                  </p>

                  <p>
                    Where coverage applies, Clickwheel will confirm the
                    available support option by email after reviewing the issue.
                  </p>
                </div>
              </section>

              <section id="not-covered">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Examples that may not be covered
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Warranty support may not cover accidental damage, liquid
                    damage, unauthorized repair or modification after delivery,
                    normal cosmetic wear after use, or software, media or
                    content issues not caused by the device.
                  </p>

                  <p>
                    These examples are not an exhaustive list. We review each
                    case based on the product, issue and available information.
                  </p>
                </div>
              </section>

              <section id="how-to-contact">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  How to contact us
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Email warranty@clickwheel.shop with your public reference or
                    order reference if available, a short issue description and
                    photos or video if helpful.
                  </p>

                  <p>
                    There is no upload form on the website yet. Please only send
                    supporting material by email when it helps explain the issue.
                  </p>
                </div>
              </section>

              <section id="legal-rights">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Legal rights
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    This policy does not replace statutory consumer rights that
                    may apply to your purchase.
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
                  Need warranty support?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Email warranty@clickwheel.shop with the details of the issue.
                </p>

                <Link
                  href="mailto:warranty@clickwheel.shop"
                  className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
                >
                  Email warranty
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
