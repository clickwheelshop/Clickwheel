export function FinalCta() {
  return (
    <section className="bg-[#111111] px-6 py-24 text-white md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-[1fr_0.9fr] md:items-end">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
            Every classic has a story
          </p>

          <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
            Give yours another chapter.
          </h2>
        </div>

        <div className="md:pb-2">
          <p className="max-w-xl text-base leading-7 text-white/65 md:text-lg">
            Choose a professionally restored build, configure your own iPod
            Classic, or send us the device you already own.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200">
              Build Yours →
            </button>

            <button className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              Upgrade My Device
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}