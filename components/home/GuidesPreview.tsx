const guides = [
  {
    category: "Getting Started",
    title: "How to Add Music to Your iPod",
    description: "A simple guide for syncing music on macOS and Windows.",
    readTime: "8 min read",
    visual: "music",
  },
  {
    category: "Rockbox",
    title: "Install Rockbox",
    description: "Unlock more formats, themes and control over your music.",
    readTime: "10 min read",
    visual: "rockbox",
  },
  {
    category: "Upgrades",
    title: "Flash Storage Guide",
    description: "Understand storage sizes, speed and reliability.",
    readTime: "6 min read",
    visual: "storage",
  },
];

const visualStyles = {
  music: "from-[#d9d0c2] via-[#b9a68f] to-[#6c5a4a]",
  rockbox: "from-[#151515] via-[#33411f] to-[#7fa33f]",
  storage: "from-[#171717] via-[#39414c] to-[#8e99a4]",
};

export function GuidesPreview() {
  return (
    <section id="guides" className="bg-[#f8f6f2] px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Knowledge Hub
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Keep your classic
              <br />
              playing beautifully.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Straightforward guides for adding music, installing Rockbox,
              upgrading your device and solving common issues.
            </p>
          </div>

          <button className="w-fit rounded-full border border-black/25 px-6 py-3 text-sm font-semibold transition hover:bg-black hover:text-white">
            View All Guides →
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)]"
            >
              <div
                className={`relative h-52 bg-gradient-to-br ${visualStyles[guide.visual]}`}
              >
                <div className="absolute inset-0 bg-black/15" />

                <div className="absolute left-1/2 top-1/2 h-36 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[18px] bg-gradient-to-br from-neutral-100 to-neutral-400 p-2 shadow-[0_20px_35px_rgba(0,0,0,0.35)]">
                  <div className="h-9 rounded border-[3px] border-black bg-[#f6f1e8]" />
                  <div className="mx-auto mt-5 h-12 w-12 rounded-full bg-neutral-900">
                    <div className="relative h-full w-full">
                      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-300" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {guide.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                  {guide.title}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-neutral-600">
                  {guide.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="text-sm text-neutral-500">{guide.readTime}</span>

                  <button
                    aria-label={`Read ${guide.title}`}
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