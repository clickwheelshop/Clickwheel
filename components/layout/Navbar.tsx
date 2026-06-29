export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-neutral-200 bg-white/80 px-6 py-5 backdrop-blur-xl md:px-10">
      <div>
        <div className="text-lg font-semibold tracking-[0.35em] md:text-xl">
          CLICKWHEEL
        </div>
        <div className="text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
          RESTORE. UPGRADE. REDISCOVER.
        </div>
      </div>

      <div className="hidden gap-8 text-sm font-medium md:flex">
        <a href="#shop">Shop</a>
        <a href="#services">Services</a>
        <a href="#guides">Guides</a>
        <a href="#support">Support</a>
      </div>

      <button className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white">
        Build Yours
      </button>
    </nav>
  );
}