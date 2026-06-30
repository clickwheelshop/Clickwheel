import Link from "next/link";

const workshopServices = [
  {
    title: "Battery Replacement",
    description: "Modern capacity for longer listening sessions.",
    label: "Up to 3000mAh",
  },
  {
    title: "Storage Upgrade",
    description: "Reliable flash storage for a larger music library.",
    label: "Up to 1TB",
  },
  {
    title: "Rear Polishing",
    description: "Careful restoration for stainless-steel backplates.",
    label: "Mirror finish",
  },
  {
    title: "Rockbox Setup",
    description: "Advanced playback options and wider file support.",
    label: "Dual boot available",
  },
] as const;

export function Workshop() {
  return (
    <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
            Clickwheel Workshop
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Restore what matters.
            <br />
            Upgrade what counts.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
            Bring your own iPod Classic or choose a professionally restored
            Clickwheel build. Every project is reviewed before work begins.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Explore Services →
            </Link>

            <Link
              href="/build"
              className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
            >
              Build Yours →
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {workshopServices.map((service, index) => (
            <article
              key={service.title}
              className="rounded-[24px] border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <p className="text-sm font-semibold text-blue-300">
                0{index + 1}
              </p>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/65">
                {service.description}
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                {service.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}