import Link from "next/link";

const workshopServices = [
  {
    title: "Înlocuire baterie",
    description: "Capacitate modernă pentru sesiuni mai lungi de ascultare.",
    label: "Până la 3000mAh",
  },
  {
    title: "Upgrade de stocare",
    description: "Stocare flash fiabilă pentru o bibliotecă muzicală mai mare.",
    label: "Până la 1TB",
  },
  {
    title: "Polish pentru capacul spate",
    description: "Restaurare atentă pentru backplate-uri din oțel inoxidabil.",
    label: "Finisaj oglindă",
  },
  {
    title: "Configurare Rockbox",
    description: "Opțiuni avansate de redare și suport pentru mai multe formate.",
    label: "Dual boot disponibil",
  },
] as const;

export function WorkshopRo() {
  return (
    <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
            Atelierul Clickwheel
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Restaurează ce contează.
            <br />
            Upgradează ce merită.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
            Adu propriul tău iPod Classic sau alege o configurație Clickwheel
            restaurată profesional. Fiecare proiect este analizat înainte de
            începerea lucrării.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/ro/services"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Vezi serviciile →
            </Link>

            <Link
              href="/ro/build"
              className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
            >
              Configurează-l →
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {workshopServices.map((service, index) => (
            <article
              key={service.title}
              className="rounded-[24px] border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <p className="text-sm font-semibold text-blue-300">
                0{index + 1}
              </p>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/65">
                {service.description}
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                {service.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}