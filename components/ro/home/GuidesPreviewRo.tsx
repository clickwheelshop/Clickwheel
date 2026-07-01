import Link from "next/link";

const guides = [
  {
    category: "Pentru început",
    title: "Cum adaugi muzică pe un iPod Classic",
    description:
      "O introducere practică pentru adăugarea muzicii din macOS sau Windows.",
    readTime: "6 min de citit",
    visual: "music",
    href: "/ro/guides/music",
  },
  {
    category: "Software",
    title: "Ce schimbă Rockbox pe un iPod Classic",
    description:
      "Înțelege formatele audio, temele, dual boot și controalele avansate de redare.",
    readTime: "8 min de citit",
    visual: "rockbox",
    href: "/ro/guides/rockbox",
  },
  {
    category: "Stocare",
    title: "De cât spațiu ai nevoie pentru muzica ta?",
    description:
      "Compară 256GB, 512GB și 1TB pentru colecția ta muzicală.",
    readTime: "5 min de citit",
    visual: "storage",
    href: "/ro/guides/storage",
  },
] as const;

const visualStyles = {
  music: "from-[#e8e2d8] via-[#c8beb0] to-[#82766b]",
  rockbox: "from-[#0f1d27] via-[#24485c] to-[#709b9d]",
  storage: "from-[#293029] via-[#6c8069] to-[#bbcba6]",
};

function GuideVisual({
  visual,
}: {
  visual: keyof typeof visualStyles;
}) {
  return (
    <div
      className={`relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br ${visualStyles[visual]}`}
    >
      {visual === "music" && (
        <div className="absolute left-1/2 top-1/2 h-36 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[20px] border-[5px] border-neutral-800 bg-[#f7f1e7] shadow-xl">
          <div className="absolute left-3 right-3 top-4 h-12 rounded border-[3px] border-black bg-white" />

          <div className="absolute bottom-4 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-neutral-800">
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200" />
          </div>
        </div>
      )}

      {visual === "rockbox" && (
        <>
          <div className="absolute left-8 top-8 h-28 w-40 rounded-xl border border-white/20 bg-black/35 p-4">
            <p className="text-xs font-semibold text-white">Rockbox</p>

            <div className="mt-3 space-y-2">
              <div className="h-2 rounded bg-white/70" />
              <div className="h-2 w-4/5 rounded bg-white/45" />
              <div className="h-2 w-3/5 rounded bg-white/25" />
            </div>
          </div>

          <div className="absolute bottom-7 right-8 h-20 w-20 rounded-full border-[6px] border-white/80" />
        </>
      )}

      {visual === "storage" && (
        <>
          <div className="absolute left-9 top-10 h-28 w-40 rounded-xl bg-[#1b231d] p-4 shadow-xl">
            <div className="grid h-full grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="rounded-sm bg-[#d8ce79]" />
              ))}
            </div>
          </div>

          <div className="absolute bottom-7 right-8 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-black">
            1TB
          </div>
        </>
      )}
    </div>
  );
}

export function GuidesPreviewRo() {
  return (
    <section className="bg-[#f8f6f2] px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Ghiduri Clickwheel
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Ține muzica în mișcare.
            </h2>
          </div>

          <Link
            href="/ro/guides"
            className="w-fit text-sm font-semibold text-black transition hover:text-blue-600"
          >
            Vezi toate ghidurile →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="group rounded-[28px] border border-black/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
            >
              <GuideVisual visual={guide.visual} />

              <div className="px-2 pb-3 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {guide.category}
                  </p>

                  <p className="text-xs text-neutral-500">{guide.readTime}</p>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                  {guide.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-neutral-600">
                  {guide.description}
                </p>

                <Link
                  href={guide.href}
                  className="mt-6 inline-flex text-sm font-semibold transition group-hover:text-blue-600"
                >
                  Citește ghidul →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}