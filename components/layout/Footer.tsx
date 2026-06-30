import Link from "next/link";

const shopLinks = [
  { label: "Collection", href: "/shop" },
  { label: "Build Yours", href: "/build" },
  { label: "Accessories", href: "/accessories" },
];

const workshopLinks = [
  { label: "Services", href: "/services" },
  { label: "Upgrade your iPod", href: "/services" },
  { label: "Build Request", href: "/request-build" },
];

const helpLinks = [
  { label: "Guides", href: "/guides" },
  { label: "Support", href: "/support" },
  { label: "Build Yours", href: "/build" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
        {title}
      </p>

      <div className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            className="w-fit text-sm text-white/70 transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#111111] px-6 pb-8 pt-16 text-white md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="block w-fit">
              <div className="text-lg font-semibold tracking-[0.35em]">
                CLICKWHEEL
              </div>

              <div className="mt-1 text-[10px] tracking-[0.22em] text-white/45">
                RESTORE. UPGRADE. REDISCOVER.
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
              An independent restoration workshop for classic music players.
              Built around the devices and music worth keeping.
            </p>

            <Link
              href="/build"
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Build Yours →
            </Link>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Workshop" links={workshopLinks} />
          <FooterColumn title="Help" links={helpLinks} />
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Clickwheel. All rights reserved.</p>

          <p>
            iPod is a trademark of Apple Inc. Clickwheel is an independent
            restoration workshop and is not affiliated with Apple.
          </p>
        </div>
      </div>
    </footer>
  );
}