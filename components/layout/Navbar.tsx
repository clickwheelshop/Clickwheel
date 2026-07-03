"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const englishNavigationLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Accessories", href: "/accessories" },
  { label: "Services", href: "/services" },
  { label: "Guides", href: "/guides" },
  { label: "Support", href: "/support" },
];

const romanianNavigationLinks = [
  { label: "Magazin", href: "/shop" },
  { label: "Accesorii", href: "/accessories" },
  { label: "Servicii", href: "/services" },
  { label: "Ghiduri", href: "/guides" },
  { label: "Suport", href: "/support" },
];

function getRomanianPath(pathname: string) {
  if (pathname === "/") {
    return "/ro";
  }

  return `/ro${pathname}`;
}

function getEnglishPath(pathname: string) {
  if (pathname === "/ro") {
    return "/";
  }

  return pathname.replace(/^\/ro/, "") || "/";
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguagePrompt, setShowLanguagePrompt] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const isRomanian = pathname.startsWith("/ro");

  const englishPath = getEnglishPath(pathname);
  const romanianPath = getRomanianPath(
    isRomanian ? getEnglishPath(pathname) : pathname,
  );

  const navigationLinks = isRomanian
    ? romanianNavigationLinks
    : englishNavigationLinks;

  useEffect(() => {
    if (isRomanian) {
      return;
    }

    const savedPreference = window.localStorage.getItem(
      "clickwheel-language-preference",
    );

    if (savedPreference) {
      return;
    }

    const browserLanguages = [
      navigator.language,
      ...(navigator.languages ?? []),
    ];

    const prefersRomanian = browserLanguages.some((language) =>
      language.toLowerCase().startsWith("ro"),
    );

    if (prefersRomanian) {
      setShowLanguagePrompt(true);
    }
  }, [isRomanian]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function stayInEnglish() {
    window.localStorage.setItem("clickwheel-language-preference", "en");
    setShowLanguagePrompt(false);
  }

  function switchToRomanian() {
    window.localStorage.setItem("clickwheel-language-preference", "ro");
    setShowLanguagePrompt(false);
    router.push(romanianPath);
  }

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-5 md:px-10">
          <Link
            href={isRomanian ? "/ro" : "/"}
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <img
              src="/logo/fn-avatar-steel.svg"
              alt="Clickwheel logo"
              className="h-10 w-10 shrink-0 object-contain md:h-11 md:w-11"
            />

            <div>
              <div className="text-lg font-semibold tracking-[0.35em] md:text-xl">
                CLICKWHEEL
              </div>

              <div className="text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
                RESTORE. UPGRADE. REDISCOVER.
              </div>
            </div>
          </Link>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            {navigationLinks.map((link) => {
              const href = isRomanian ? `/ro${link.href}` : link.href;

              return (
                <Link key={link.href} href={href}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center rounded-full border border-black/10 bg-white p-1 text-xs font-semibold sm:flex">
              <Link
                href={englishPath}
                className={`rounded-full px-3 py-1.5 transition ${
                  !isRomanian
                    ? "bg-black text-white"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                EN
              </Link>

              <Link
                href={romanianPath}
                className={`rounded-full px-3 py-1.5 transition ${
                  isRomanian
                    ? "bg-black text-white"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                RO
              </Link>
            </div>

            <Link
              href={isRomanian ? "/ro/build" : "/build"}
              className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:inline-flex"
            >
              {isRomanian ? "Configurează" : "Build Yours"}
            </Link>

            <button
              type="button"
              aria-label={
                isMenuOpen
                  ? "Închide meniul de navigare"
                  : "Deschide meniul de navigare"
              }
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
              <div className="mb-4 flex items-center gap-2 rounded-full border border-black/10 p-1">
                <Link
                  href={englishPath}
                  onClick={closeMenu}
                  className={`flex-1 rounded-full px-4 py-2 text-center text-sm font-semibold transition ${
                    !isRomanian
                      ? "bg-black text-white"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  English
                </Link>

                <Link
                  href={romanianPath}
                  onClick={closeMenu}
                  className={`flex-1 rounded-full px-4 py-2 text-center text-sm font-semibold transition ${
                    isRomanian
                      ? "bg-black text-white"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  Română
                </Link>
              </div>

              {navigationLinks.map((link) => {
                const href = isRomanian ? `/ro${link.href}` : link.href;

                return (
                  <Link
                    key={link.href}
                    href={href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-base font-semibold transition hover:bg-[#f4f1eb]"
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href={isRomanian ? "/ro/build" : "/build"}
                onClick={closeMenu}
                className="mt-4 rounded-full bg-black px-5 py-3.5 text-center text-sm font-semibold text-white"
              >
                {isRomanian ? "Configurează →" : "Build Yours →"}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {showLanguagePrompt && (
        <div className="fixed bottom-5 left-5 right-5 z-[60] mx-auto max-w-md rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_20px_55px_rgba(0,0,0,0.18)] sm:left-auto sm:right-6">
          <p className="text-base font-semibold">
            Preferi versiunea în română?
          </p>

          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Poți continua în română sau poți rămâne pe versiunea în engleză.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={switchToRomanian}
              className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Vezi în română
            </button>

            <button
              type="button"
              onClick={stayInEnglish}
              className="rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:border-black"
            >
              Rămâi în engleză
            </button>
          </div>
        </div>
      )}
    </>
  );
}