export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-[#f7f5f1]">
      <div className="mx-auto grid min-h-[690px] max-w-[1600px] items-center gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-12 lg:px-16">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Professionally Restored Classics
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-black md:text-6xl lg:text-7xl">
            Classic on the outside.
            <br />
            Modern on the inside.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
            Professionally restored iPod Classics with modern flash storage,
            extended battery life and worldwide shipping.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button className="rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
              Build Yours →
            </button>

            <button className="rounded-full border border-black/30 bg-white/50 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white">
              Explore Collection
            </button>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-neutral-700">
            <span>◉ 1 Year Warranty</span>
            <span>↻ 30-Day Returns</span>
            <span>◎ Worldwide Shipping</span>
          </div>
        </div>

        <div className="relative flex min-h-[510px] items-center justify-center md:min-h-[620px]">
          <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-[#ebe7e0] via-[#d7d1c7] to-[#9f988f]" />

          <div className="absolute right-[-14%] top-[-8%] h-[430px] w-[430px] rounded-full bg-white/35 blur-3xl" />

          <div className="relative h-[510px] w-[305px] rotate-[13deg] rounded-[38px] bg-gradient-to-br from-[#f4f2ef] via-[#c6c4c0] to-[#737373] p-4 shadow-[0_35px_70px_rgba(0,0,0,0.35)] md:h-[575px] md:w-[345px]">
            <div className="h-full rounded-[28px] border border-black/25 bg-gradient-to-br from-[#eeeeea] to-[#b3b1ae] px-7 pt-8">
              <div className="rounded-[10px] border-[6px] border-black bg-[#f2f0e9] p-3 shadow-inner">
                <div className="mb-2 flex items-center justify-between text-[10px] font-bold text-black">
                  <span>Music</span>
                  <span>▰</span>
                </div>

                <div className="grid grid-cols-2 overflow-hidden rounded-sm bg-white">
                  <div className="space-y-1 border-r border-black/10 p-2 text-[9px] font-semibold text-black">
                    <p className="rounded bg-blue-600 px-1 py-0.5 text-white">Music</p>
                    <p>Videos</p>
                    <p>Photos</p>
                    <p>Extras</p>
                    <p>Settings</p>
                    <p>Now Playing</p>
                  </div>

                  <div className="flex items-center justify-center bg-[#ddd5c5] p-2 text-center text-[9px] font-semibold text-neutral-700">
                    CLICKWHEEL
                    <br />
                    CLASSICS
                  </div>
                </div>
              </div>

              <div className="relative mx-auto mt-12 h-48 w-48 rounded-full bg-[#2b2b2b] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]">
                <span className="absolute left-1/2 top-5 -translate-x-1/2 text-xs font-bold text-white">
                  MENU
                </span>

                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-white">
                  ◀◀
                </span>

                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-white">
                  ▶▶
                </span>

                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white">
                  ▶ ❚❚
                </span>

                <div className="absolute left-1/2 top-1/2 h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#f2f0ed] to-[#aaa8a4] shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}