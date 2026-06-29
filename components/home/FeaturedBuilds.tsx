const builds = [
  {
    title: "The Studio",
    subtitle: "Based on iPod Classic 7th Generation",
    specs: ["512GB Flash", "3000mAh Battery", "Matte Black"],
    price: "From €279",
    tone: "studio",
  },
  {
    title: "The Collector",
    subtitle: "Based on iPod Classic 5.5 Generation",
    specs: ["1TB Flash", "3000mAh Battery", "Polished Steel"],
    price: "From €329",
    tone: "collector",
  },
  {
    title: "The Heritage",
    subtitle: "Based on iPod Classic 6th Generation",
    specs: ["256GB Flash", "2000mAh Battery", "Silver Finish"],
    price: "From €249",
    tone: "heritage",
  },
  {
    title: "The Signature",
    subtitle: "Based on iPod Classic 7th Generation",
    specs: ["2TB Flash", "3000mAh Battery", "Custom Engraving"],
    price: "From €399",
    tone: "signature",
  },
] as const;

const deviceColors = {
  studio: "from-neutral-900 via-neutral-700 to-neutral-950",
  collector: "from-neutral-700 via-neutral-950 to-black",
  heritage: "from-neutral-100 via-neutral-300 to-neutral-500",
  signature: "from-[#9a7652] via-[#4f3423] to-[#17110d]",
};

function DevicePreview({
  tone,
}: {
  tone: keyof typeof deviceColors;
}) {
  return (
    <div
      className={`relative mx-auto flex h-52 w-32 items-center justify-center rounded-[24px] bg-gradient-to-br ${deviceColors[tone]} shadow-[0_20px_35px_rgba(0,0,0,0.25)]`}
    >
      <div className="absolute left-3 right-3 top-4 h-14 rounded-md border-[3px] border-black bg-[#f6f1e8] p-1.5">
        <div className="grid h-full grid-cols-2 overflow-hidden rounded-sm text-[5px] font-bold text-black">
          <div className="space-y-0.5 bg-white p-1">
            <div className="rounded-sm bg-blue-600 px-0.5 text-white">
              Music
            </div>
            <div>Videos</div>
            <div>Photos</div>
            <div>Extras</div>
          </div>
          <div className="flex items-center justify-center bg-[#ddd2bf] text-center">
            CLICKWHEEL
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 h-16 w-16 rounded-full bg-[#252525]">
        <span className="absolute left-1/2 top-2 -translate-x-1/2 text-[5px] font-bold text-white">
          MENU
        </span>
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[7px] text-white">
          ◀◀
        </span>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[7px] text-white">
          ▶▶
        </span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[6px] text-white">
          ▶❚❚
        </span>
        <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-300" />
      </div>
    </div>
  );
}

export function FeaturedBuilds() {
  return (
    <section id="shop" className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-md">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Featured Builds
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Built with care.
              <br />
              Chosen by you.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Every build has its own character. Restored by hand and prepared
              for years of listening.
            </p>
          </div>

          <button className="w-fit rounded-full border border-black/25 px-6 py-3 text-sm font-semibold transition hover:bg-black hover:text-white">
            View All Builds →
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {builds.map((build) => (
            <article
              key={build.title}
              className="group rounded-2xl border border-black/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)]"
            >
              <div className="flex min-h-60 items-center justify-center rounded-xl bg-[#efede8]">
                <DevicePreview tone={build.tone} />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold">{build.title}</h3>

                <p className="mt-2 min-h-10 text-sm leading-5 text-neutral-500">
                  {build.subtitle}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {build.specs.map((spec) => (
                    <li key={spec}>• {spec}</li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="font-semibold">{build.price}</span>

                  <button
                    aria-label={`View ${build.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 transition group-hover:bg-black group-hover:text-white"
                  >
                    →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}