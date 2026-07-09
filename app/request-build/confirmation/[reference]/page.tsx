import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Build request received | Clickwheel",
  robots: {
    index: false,
    follow: false,
  },
};

type ConfirmationPageProps = {
  params: Promise<{
    reference: string;
  }>;
};

export default async function BuildRequestConfirmationPage({
  params,
}: ConfirmationPageProps) {
  const { reference } = await params;

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[900px] rounded-[32px] border border-black/10 bg-white p-8 shadow-[0_20px_55px_rgba(0,0,0,0.08)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Build request received
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            We have your request.
          </h1>

          <div className="mt-8 rounded-[24px] bg-[#f4f1eb] p-6">
            <p className="text-sm font-semibold text-neutral-500">
              Public reference
            </p>
            <p className="mt-2 break-all text-3xl font-semibold tracking-[-0.04em]">
              {reference}
            </p>
          </div>

          <div className="mt-8 space-y-4 text-base leading-7 text-neutral-600">
            <p>
              Your Clickwheel build request was received and is ready for
              review.
            </p>
            <p>
              This is not an order confirmation or payment confirmation. No
              payment has been taken.
            </p>
            <p>
              Clickwheel will review the request and reply by email with next
              steps.
            </p>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Back to Clickwheel
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
