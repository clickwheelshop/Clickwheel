const columns = [
  {
    title: "Shop",
    links: ["Featured Builds", "Build Yours", "Accessories"],
  },
  {
    title: "Services",
    links: ["Upgrade My Device", "Repairs", "Rear Polishing", "Rockbox Setup"],
  },
  {
    title: "Support",
    links: ["Guides", "Warranty", "Shipping & Returns", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0b0b0b] px-6 pb-8 pt-16 text-white md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="text-xl font-semibold tracking-[0.28em]">
              CLICKWHEEL
            </div>

            <p className="mt-3 text-xs tracking-[0.2em] text-white/45">
              RESTORE. UPGRADE. REDISCOVER.
            </p>

            <p className="mt-7 max-w-sm text-sm leading-6 text-white/60">
              Professionally restored iPod Classics, modern upgrades and
              workshop services for music lovers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold">{column.title}</h3>

                <ul className="mt-5 space-y-3 text-sm text-white/55">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="transition hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/40 md:flex-row">
          <p>© 2026 Clickwheel. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}