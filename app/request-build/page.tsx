"use client";

import Link from "next/link";
import { Suspense, useActionState, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  calculateConfiguratorTotalEurCents,
  findConfiguratorChoice,
  getConfiguratorOptions,
  getConfiguratorStorageOptions,
  parseAccessoryIds,
} from "@/data/configurator";
import { formatEurCents } from "@/lib/money";
import {
  submitBuildRequestAction,
  type BuildRequestSubmissionActionState,
} from "@/app/request-build/actions";

const {
  models: modelOptions,
  batteries: batteryOptions,
  finishes: finishOptions,
  backplates: backplateOptions,
  software: softwareOptions,
  accessories: accessoryOptions,
} = getConfiguratorOptions("en");

const initialActionState: BuildRequestSubmissionActionState = {
  status: "idle",
};

function getBuildRequestErrorMessage(
  state: BuildRequestSubmissionActionState,
) {
  if (state.status !== "error") {
    return null;
  }

  if (state.errorCode === "invalid_customer_details") {
    return "Please check your contact details and try again.";
  }

  if (state.errorCode === "request_save_failed") {
    return "We could not save the request right now. Please try again later.";
  }

  return "We could not submit this request. Refresh the page and try again.";
}

function BuildRequestContent() {
  const searchParams = useSearchParams();
  const [state, formAction, isPending] = useActionState(
    submitBuildRequestAction,
    initialActionState,
  );
  const [browserReady, setBrowserReady] = useState(false);
  const [idempotencyKey, setIdempotencyKey] = useState<string | null>(null);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setBrowserReady(true);

      if (typeof window.crypto?.randomUUID === "function") {
        setIdempotencyKey(window.crypto.randomUUID());
      }
    }, 0);

    return () => window.clearTimeout(timerId);
  }, []);

  const model = findConfiguratorChoice(modelOptions, searchParams.get("model"));
  const storageOptions = getConfiguratorStorageOptions("en", model.id);
  const storage = findConfiguratorChoice(
    storageOptions,
    searchParams.get("storage"),
  );
  const battery = findConfiguratorChoice(
    batteryOptions,
    searchParams.get("battery"),
  );
  const finish = findConfiguratorChoice(
    finishOptions,
    searchParams.get("finish"),
  );
  const backplate = findConfiguratorChoice(
    backplateOptions,
    searchParams.get("backplate"),
  );
  const software = findConfiguratorChoice(
    softwareOptions,
    searchParams.get("software"),
  );
  const accessoryIds = parseAccessoryIds(
    searchParams.get("accessories"),
    accessoryOptions,
  );
  const accessories = accessoryOptions.filter((accessory) =>
    accessoryIds.includes(accessory.id),
  );
  const accessoriesValue = accessories.map((accessory) => accessory.id).join(",");
  const totalPriceEurCents = calculateConfiguratorTotalEurCents({
    model,
    storage,
    battery,
    finish,
    backplate,
    software,
    accessories,
  });
  const idempotencyUnavailable = browserReady && !idempotencyKey;
  const errorMessage = idempotencyUnavailable
    ? "Secure request submission is unavailable in this browser. Please try another up-to-date browser."
    : getBuildRequestErrorMessage(state);
  const submitDisabled = isPending || idempotencyUnavailable || !idempotencyKey;

  return (
    <section className="px-6 py-14 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_380px]">
        <form
          action={formAction}
          className="rounded-[28px] border border-black/10 bg-white p-7 md:p-10"
        >
          <h2 className="text-3xl font-semibold tracking-[-0.04em]">
            Your details
          </h2>

          <p className="mt-3 text-sm leading-6 text-neutral-600">
            This request does not create an order or charge you.
          </p>

          <input type="hidden" name="locale" value="en" />
          <input type="hidden" name="model" value={model.id} />
          <input type="hidden" name="storage" value={storage.id} />
          <input type="hidden" name="battery" value={battery.id} />
          <input type="hidden" name="finish" value={finish.id} />
          <input type="hidden" name="backplate" value={backplate.id} />
          <input type="hidden" name="software" value={software.id} />
          <input type="hidden" name="accessories" value={accessoriesValue} />
          <input
            type="hidden"
            name="idempotencyKey"
            value={idempotencyKey ?? ""}
          />

          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">
              Full name
              <input
                name="name"
                type="text"
                autoComplete="name"
                maxLength={200}
                placeholder="Your name"
                required
                className="rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength={320}
                placeholder="you@example.com"
                required
                className="rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Country code
              <input
                name="country"
                type="text"
                autoComplete="country"
                maxLength={2}
                pattern="[A-Za-z]{2}"
                placeholder="RO"
                required
                className="rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
              <span className="text-xs font-normal text-neutral-500">
                Use the two-letter country code, for example RO or US.
              </span>
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Notes for your build
              <textarea
                name="notes"
                rows={5}
                maxLength={5000}
                placeholder="For example: preferred colour, engraving text, questions about delivery..."
                className="resize-none rounded-xl border border-black/15 px-4 py-3 text-base font-normal outline-none transition focus:border-black"
              />
            </label>
          </div>

          {errorMessage ? (
            <p
              aria-live="polite"
              className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
            >
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitDisabled}
            className="mt-8 w-full rounded-full bg-black px-5 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-400"
          >
            {isPending ? "Sending request..." : "Submit build request"}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
            By sending this request, you agree that Clickwheel may use your
            details to review your build request and reply by email. This is not
            an order or payment confirmation.
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
              <span className="text-right font-semibold">{model.name}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Storage</span>
              <span className="text-right font-semibold">{storage.name}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Battery</span>
              <span className="text-right font-semibold">{battery.name}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Finish</span>
              <span className="text-right font-semibold">{finish.name}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Rear plate</span>
              <span className="text-right font-semibold">{backplate.name}</span>
            </div>

            <div className="flex justify-between gap-5">
              <span className="text-neutral-500">Software</span>
              <span className="text-right font-semibold">{software.name}</span>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="text-neutral-500">Accessories</p>
              <p className="mt-2 font-semibold leading-6">
                {accessories.length > 0
                  ? accessories.map((accessory) => accessory.name).join(", ")
                  : "None selected"}
              </p>
            </div>

            <div className="border-t border-black/10 pt-5">
              <p className="text-neutral-500">Estimated total</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                {formatEurCents(totalPriceEurCents)}
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
