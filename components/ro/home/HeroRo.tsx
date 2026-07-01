import Link from "next/link";

export function HeroRo() {
  return (
    <section className="overflow-hidden border-b border-black/10 bg-[#f8f6f2] px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Clasice restaurate profesional
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.065em] md:text-6xl lg:text-7xl">
            Clasic la exterior.
            <br />
            Modern la interior.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
            iPod Classic restaurate cu stocare flash, autonomie extinsă și
            finisaje atent alese. Construite pentru muzica pe care încă vrei să
            o ai aproape.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/ro/build"
              className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Configurează-l →
            </Link>

            <Link
              href="/ro/shop"
              className="rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
            >
              Vezi colecția
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-neutral-600">
            <p>Garanție 1 an</p>
            <p>Retur în 30 de zile</p>
            <p>Livrare internațională</p>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[430px] w-full max-w-[560px] items-center justify-center overflow-hidden rounded-[36px] bg-gradient-to-br from-[#ded6ca] via-[#b8aea2] to-[#6d655d] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.55),transparent_38%)]" />

          <div className="relative h-[320px] w-[205px] rounded-[34px] border-[8px] border-neutral-700 bg-[#f5f1e8] shadow-[0_26px_45px_rgba(0,0,0,0.35)]">
            <div className="absolute left-5 right-5 top-6 h-[132px] rounded-xl border-[5px] border-black bg-white">
              <div className="px-4 py-4 text-[10px] font-semibold leading-5 text-black">
                <p className="rounded bg-blue-600 px-2 py-1 text-white">
                  Muzică
                </p>
                <p className="mt-2">Videoclipuri</p>
                <p>Fotografii</p>
                <p>Setări</p>
              </div>
            </div>

            <div className="absolute bottom-7 left-1/2 h-[108px] w-[108px] -translate-x-1/2 rounded-full bg-neutral-800 shadow-inner">
              <div className="absolute left-1/2 top-1/2 h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200" />
            </div>
          </div>

          <div className="absolute bottom-7 right-7 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-black backdrop-blur">
            Clickwheel Classic
          </div>
        </div>
      </div>
    </section>
  );
}