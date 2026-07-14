import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const services = [
  {
    number: "01",
    title: "Upgrade de stocare flash",
    description:
      "Înlocuiește hard diskul original cu stocare flash fiabilă pentru performanță mai bună, utilizare mai silențioasă și mai mult spațiu pentru muzică.",
    options: ["128GB", "256GB", "512GB", "1TB"],
    note: "Modelele iPod Classic generatia a 6-a din 2007-2008 sunt limitate la 128GB.",
  },
  {
    number: "02",
    title: "Baterie extinsă",
    description:
      "Înlocuiește bateriile vechi cu opțiuni moderne de capacitate mare pentru sesiuni mai lungi de ascultare și utilizare zilnică mai fiabilă.",
    options: ["2000mAh", "3000mAh", "Verificare baterie"],
  },
  {
    number: "03",
    title: "Restaurare carcasă",
    description:
      "Reîmprospătează exteriorul cu fețe frontale, capace spate, click wheel-uri, ecrane și opțiuni selectate de culoare.",
    options: [
      "Carcasă frontală",
      "Capac spate",
      "Click wheel",
      "Înlocuire ecran",
    ],
  },
  {
    number: "04",
    title: "Restaurare spate din oțel",
    description:
      "Restaurează carcasa spate din oțel inoxidabil prin polish atent pentru un finisaj mai curat și mai rafinat.",
    options: [
      "Polish de suprafață",
      "Reducerea zgârieturilor",
      "Restaurare finisaj oglindă",
    ],
  },
  {
    number: "05",
    title: "Configurare Rockbox",
    description:
      "Instalare și configurare Rockbox pentru suport extins de formate, teme, controale avansate de redare și opțiuni dual boot.",
    options: [
      "Instalare Rockbox",
      "Configurare dual boot",
      "Instalare teme",
      "Configurare bibliotecă muzicală",
    ],
  },
  {
    number: "06",
    title: "Diagnostic și reparații",
    description:
      "O evaluare practică pentru dispozitive cu probleme de încărcare, stocare, ecran, butoane sau mufă audio.",
    options: [
      "Inspecție dispozitiv",
      "Probleme de încărcare",
      "Reparație butoane",
      "Reparație audio",
    ],
  },
];

export default function RomanianServicesPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Servicii
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Restaurează ce contează.
                <br />
                Upgradează ce merită.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              De la stocare flash și upgrade-uri de baterie până la restaurare
              estetică completă, Clickwheel oferă o a doua viață playerelor
              clasice de muzică.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Servicii atelier
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Construite în jurul dispozitivului tău.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Serviciile sunt pentru un iPod Classic pe care il detii deja. Daca
              vrei un iPod Clickwheel restaurat si configurat nou, foloseste
              fluxul{" "}
              <Link
                href="/ro/request-build"
                className="font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Build Request
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] md:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-semibold text-blue-600">
                    {service.number}
                  </span>

                  <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-neutral-500">
                    Atelier Clickwheel
                  </span>
                </div>

                <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">
                  {service.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {service.options.map((option) => (
                    <span
                      key={option}
                      className="rounded-full bg-[#f4f1eb] px-3 py-2 text-xs font-medium text-neutral-700"
                    >
                      {option}
                    </span>
                  ))}
                </div>

                {"note" in service && service.note ? (
                  <p className="mt-5 text-xs leading-6 text-neutral-500">
                    {service.note}
                  </p>
                ) : null}

                <Link
                  href="/ro/services/upgrade"
                  className="mt-8 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Întreabă despre acest serviciu →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Trimite propriul dispozitiv
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Ai deja un iPod Classic?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Putem evalua dispozitivul pentru upgrade de stocare, înlocuire
              baterie, restaurare estetică sau reparație. Fiecare proiect este
              analizat înainte de începerea lucrării.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-white/5 p-8">
            <p className="text-sm font-semibold text-white">
              Ce să incluzi în solicitare
            </p>

            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/70">
              <li>• Modelul iPod-ului și capacitatea de stocare</li>
              <li>• O descriere scurtă a problemei sau upgrade-ului dorit</li>
              <li>• Fotografii cu fața, spatele și ecranul</li>
              <li>• Finisajul sau opțiunea de stocare preferată</li>
            </ul>

            <Link
              href="/ro/services/upgrade"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Cere service →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px] rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Important
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Așteptări realiste despre restaurare.
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600">
            Restaurarea poate îmbunătăți aspectul și funcționarea unui
            dispozitiv clasic, însă unele zgârieturi adânci, lovituri, urme de
            coroziune sau defecte interne pot rămâne. Opțiunile finale și
            prețurile sunt confirmate după inspecție.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
