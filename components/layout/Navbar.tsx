"use client";

import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Accessories", href: "/accessories" },
  { label: "Services", href: "/services" },
  { label: "Guides", href: "/guides" },
  { label: "Support", href: "/support" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="block" onClick={closeMenu}>
          <div className="text-lg font-semibold tracking-[0.35em] md:text-xl">
            CLICKWHEEL
          </div>

          <div className="text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
            RESTORE. UPGRADE. REDISCOVER.
          </div>
        </Link>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/build"
            className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:inline-flex"
          >
            Build Yours
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:border-black md:hidden"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-black/10 bg-white px-6 py-6 md:hidden">
          <div className="mx-auto flex max-w-xl flex-col gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base font-semibold transition hover:bg-[#f4f1eb]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/build"
              onClick={closeMenu}
              className="mt-4 rounded-full bg-black px-5 py-3.5 text-center text-sm font-semibold text-white"
            >
              Build Yours →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}