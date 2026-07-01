"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

function BuildRequestContent() {
  const searchParams = useSearchParams();

  const model = searchParams.get("model") ?? "iPod Classic";
  const storage = searchParams.get("storage") ?? "Not selected";
  const battery = searchParams.get("battery") ?? "Not selected";
  const finish = searchParams.get("finish") ?? "Not selected";
  const backplate = searchParams.get("backplate") ?? "Not selected";
  const software = searchParams.get("software") ?? "Not selected";
  const accessories = searchParams.get("accessories") ?? "None selected";
  const total = searchParams.get("total") ?? "0";

  return (
    <section className="px-6 py-14 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_380px]">
        <form className="rounded-[28px] border border-black/10 bg-white p-7 md:p-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em]">
            Your details
          </h2>

          <p className="mt-3 text-sm leading-6 text-neutral-600">
            This request does not create an order or charge you.
          </p>

          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">
              Full name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Email address
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Country
              <input
                type="text"
                placeholder="Romania"
                className="rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Notes for your build
              <textarea
                rows={5}
                placeholder="For example: preferred colour, engraving text, questions about delivery..."
                className="resize-none rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-full bg-black px-5 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Build requests opening soon
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
            We are preparing the official Clickwheel contact system.
          </p>
        </form>

        <aside className="h-fit rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_20px_55px_rgba(0,0,0,0.08)] lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
            Your selected build
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
            Clickwheel Classic
          </h2>

          <div className="mt-7 space-y-5 text-sm">
            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Model</span>
              <span className="text-right font-semibold">{model}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Storage</span>
              <span className="text-right font-semibold">{storage}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Battery</span>
              <span className="text-right font-semibold">{battery}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Finish</span>
              <span className="text-right font-semibold">{finish}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Rear plate</span>
              <span className="text-right font-semibold">{backplate}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Software</span>
              <span className="text-right font-semibold">{software}</span>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="text-neutral-500">Accessories</p>
              <p className="mt-2 font-semibold leading-6">{accessories}</p>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="text-neutral-500">Estimated total</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                €{total}
              </p>
            </div>
          </div>

          <Link
            href="/build"
            className="mt-8 block text-center text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            ← Edit your build
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default function RequestBuildPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Build Request
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Your classic,
            <br />
            prepared for review.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Send us your preferred configuration. We will review availability,
            confirm the final price and contact you before any payment is taken.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="px-6 py-20 text-center text-sm text-neutral-500">
            Loading your build…
          </div>
        }
      >
        <BuildRequestContent />
      </Suspense>

      <Footer />
    </main>
  );
}