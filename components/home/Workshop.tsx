const services = [
  {
    title: "Battery Replacement",
    text: "Fresh power for longer listening sessions.",
    icon: "▯",
  },
  {
    title: "Storage Upgrade",
    text: "Fast flash storage up to 2TB.",
    icon: "▰",
  },
  {
    title: "Rear Polishing",
    text: "Restore the stainless-steel back to a mirror finish.",
    icon: "✦",
  },
  {
    title: "Rockbox Setup",
    text: "More control, formats and customization.",
    icon: "♫",
  },
];

export function Workshop() {
  return (
    <section id="services" className="bg-white px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1600px] overflow-hidden rounded-[30px] border border-black/10 md:grid-cols-2">
        <div className="relative min-h-[430px] overflow-hidden bg-[#171512]">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1f1c17] to-[#6a5948]" />

          <div className="absolute left-10 top-10 h-2 w-44 rounded-full bg-[#c8a66a]/70 blur-sm" />
          <div className="absolute right-10 top-24 h-2 w-32 rounded-full bg-[#d9d2c5]/50 blur-sm" />
          <div className="absolute bottom-20 left-12 h-3 w-56 rounded-full bg-[#c8a66a]/35 blur-sm" />

          <div className="absolute bottom-[-25px] left-1/2 h-72 w-44 -translate-x-1/2 rotate-[-12deg] rounded-[26px] bg-gradient-to-br from-[#dedbd5] via-[#a19e98] to-[#55514b] p-3 shadow-[0_35px_70px_rgba(0,0,0,0.6)]">
            <div className="h-full rounded-[18px] border border-black/20 bg-gradient-to-br from-[#e9e6df] to-[#aaa69f]">
              <div className="mx-auto mt-5 h-16 w-28 rounded-md border-[4px] border-black bg-[#f6f1e8]" />
              <div className="mx-auto mt-8 h-24 w-24 rounded-full bg-[#272727]">
                <div className="relative h-full w-full">
                  <span className="absolute left-1/2 top-3 -translate-x-1/2 text-[7px] font-bold text-white">
                    MENU
                  </span>
                  <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-10 pb-9 pt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              Our Workshop
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
              Built by hand.
              <br />
              Tested with care.
            </h2>
          </div>
        </div>

        <div className="bg-[#f7f5f1] p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Upgrade. Repair. Restore.
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Give your classic
            <br />
            another chapter.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600">
            Send us the iPod you already own. We can upgrade, repair and
            restore it with the same care as every Clickwheel build.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-black/10 bg-white p-5"
              >
                <div className="text-xl text-blue-600">{service.icon}</div>

                <h3 className="mt-5 font-semibold">{service.title}</h3>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>

          <button className="mt-9 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
            Explore Services →
          </button>
        </div>
      </div>
    </section>
  );
}