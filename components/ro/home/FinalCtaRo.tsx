import Link from "next/link";

export function FinalCtaRo() {
  return (
    <section className="bg-[#f8f6f2] px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[34px] bg-[#111111] px-8 py-16 text-white md:px-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Muzica ta merită mai mult
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.055em] md:text-5xl lg:text-6xl">
              Oferă clasicului tău
              <br />
              o a doua viață.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65">
              Începe cu o configurație Clickwheel restaurată sau trimite propriul
              iPod Classic pentru upgrade, reparație sau restaurare estetică.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/ro/build"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Configurează-l →
            </Link>

            <Link
              href="/ro/services"
              className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-white"
            >
              Vezi serviciile →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}