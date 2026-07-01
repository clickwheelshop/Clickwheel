"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const englishShopLinks = [
  { label: "Collection", href: "/shop" },
  { label: "Build Yours", href: "/build" },
  { label: "Accessories", href: "/accessories" },
];

const englishWorkshopLinks = [
  { label: "Services", href: "/services" },
  { label: "Upgrade your iPod", href: "/services" },
  { label: "Build Request", href: "/request-build" },
];

const englishHelpLinks = [
  { label: "Guides", href: "/guides" },
  { label: "Troubleshooting", href: "/guides/troubleshooting" },
  { label: "Support", href: "/support" },
  { label: "Build Yours", href: "/build" },
];

const englishLegalLinks = [
  { label: "Shipping & Delivery", href: "/shipping" },
];

const romanianShopLinks = [
  { label: "Colecție", href: "/shop" },
  { label: "Configurează-l", href: "/build" },
  { label: "Accesorii", href: "/accessories" },
];

const romanianWorkshopLinks = [
  { label: "Servicii", href: "/services" },
  { label: "Upgrade pentru iPod", href: "/services" },
  { label: "Solicitare configurație", href: "/request-build" },
];

const romanianHelpLinks = [
  { label: "Ghiduri", href: "/guides" },
  { label: "Depanare", href: "/guides/troubleshooting" },
  { label: "Suport", href: "/support" },
  { label: "Configurează-l", href: "/build" },
];

const romanianLegalLinks = [
  { label: "Livrare", href: "/shipping" },
];

function FooterColumn({
  title,
  links,
  isRomanian,
}: {
  title: string;
  links: { label: string; href: string }[];
  isRomanian: boolean;
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
            href={isRomanian ? `/ro${link.href}` : link.href}
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
  const pathname = usePathname();
  const isRomanian = pathname.startsWith("/ro");

  const shopLinks = isRomanian ? romanianShopLinks : englishShopLinks;
  const workshopLinks = isRomanian
    ? romanianWorkshopLinks
    : englishWorkshopLinks;
  const helpLinks = isRomanian ? romanianHelpLinks : englishHelpLinks;
  const legalLinks = isRomanian ? romanianLegalLinks : englishLegalLinks;

  return (
    <footer className="bg-[#111111] px-6 pb-8 pt-16 text-white md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href={isRomanian ? "/ro" : "/"} className="block w-fit">
              <div className="text-lg font-semibold tracking-[0.35em]">
                CLICKWHEEL
              </div>

              <div className="mt-1 text-[10px] tracking-[0.22em] text-white/45">
                RESTORE. UPGRADE. REDISCOVER.
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
              {isRomanian
                ? "Un atelier independent de restaurare pentru playere muzicale clasice. Construit în jurul dispozitivelor și muzicii care merită păstrate."
                : "An independent restoration workshop for classic music players. Built around the devices and music worth keeping."}
            </p>

            <Link
              href={isRomanian ? "/ro/build" : "/build"}
              className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              {isRomanian ? "Configurează-l →" : "Build Yours →"}
            </Link>
          </div>

          <FooterColumn
            title={isRomanian ? "Magazin" : "Shop"}
            links={shopLinks}
            isRomanian={isRomanian}
          />

          <FooterColumn
            title={isRomanian ? "Atelier" : "Workshop"}
            links={workshopLinks}
            isRomanian={isRomanian}
          />

          <FooterColumn
            title={isRomanian ? "Ajutor" : "Help"}
            links={helpLinks}
            isRomanian={isRomanian}
          />

          <FooterColumn
            title="Legal"
            links={legalLinks}
            isRomanian={isRomanian}
          />
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Clickwheel.{" "}
            {isRomanian
              ? "Toate drepturile rezervate."
              : "All rights reserved."}
          </p>

          <p>
            {isRomanian
              ? "iPod este marcă înregistrată Apple Inc. Clickwheel este un atelier independent de restaurare și nu este afiliat cu Apple."
              : "iPod is a trademark of Apple Inc. Clickwheel is an independent restoration workshop and is not affiliated with Apple."}
          </p>
        </div>
      </div>
    </footer>
  );
}