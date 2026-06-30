import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-neutral-200 bg-white/80 px-6 py-5 backdrop-blur-xl md:px-10">
      <Link href="/" className="block">
        <div className="text-lg font-semibold tracking-[0.35em] md:text-xl">
          CLICKWHEEL
        </div>

        <div className="text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
          RESTORE. UPGRADE. REDISCOVER.
        </div>
      </Link>

      <div className="hidden gap-8 text-sm font-medium md:flex">
        <Link href="/#shop">Shop</Link>
        <Link href="/accessories">Accessories</Link>
        <Link href="/services">Services</Link>
        <Link href="/#guides">Guides</Link>
        <Link href="/#support">Support</Link>
      </div>

      <Link
        href="/build"
        className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
      >
        Build Yours
      </Link>
    </nav>
  );
}