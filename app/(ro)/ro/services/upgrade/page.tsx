import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const requestChecklist = [
  "Nume",
  "Email",
  "Tara",
  "Model iPod, daca il stii",
  "Stocare curenta, daca o stii",
  "Serviciu sau upgrade dorit",
  "Simptome / descriere problema",
  "Dispozitivul porneste?",
  "A fost expus la lichid sau lovituri?",
];

const serviceCategories = [
  {
    title: "Upgrade de stocare",
    description:
      "Upgrade la stocare flash pana la limita maxima suportata de Clickwheel: 1TB.",
  },
  {
    title: "Inlocuire baterie",
    description:
      "Inlocuirea unei baterii imbatranite dupa verificarea compatibilitatii si a starii dispozitivului.",
  },
  {
    title: "Inlocuire carcasa",
    description:
      "Fete frontale, capace spate, click wheel si lucrari de improspatare estetica.",
  },
  {
    title: "Comenzi si porturi",
    description:
      "Click wheel, butoane, mufa audio, hold switch si defecte similare.",
  },
  {
    title: "Incarcare si sync",
    description:
      "Probleme de incarcare, conectare la computer, sincronizare si restaurare software.",
  },
  {
    title: "Defecte neclare",
    description:
      "Diagnostic pentru iPoduri care se comporta inconsistent sau trebuie inspectate mai intai.",
  },
];

const processSteps = [
  "Spune-ne ce iPod ai.",
  "Descrie problema sau upgrade-ul dorit.",
  "Asteapta confirmarea inainte de expediere.",
  "Inspectam, confirmam optiunile si finalizam lucrarea.",
];

const importantNotes = [
  "Nu trimite dispozitivul pana cand Clickwheel confirma cererea prin email.",
  "Oferta finala depinde de starea dispozitivului si de disponibilitatea pieselor.",
  "Stocarea maxima suportata este 1TB.",
  "Modelele iPod Classic generatia a 6-a din 2007-2008 sunt limitate la 128GB.",
  "Fotografiile pot fi trimise ca raspuns in firul de email.",
];

const serviceRequestMailto = `mailto:requests@clickwheel.shop?subject=${encodeURIComponent(
  "Cerere service / upgrade",
)}&body=${encodeURIComponent(`Salut Clickwheel,

As vrea sa cer service sau upgrade pentru propriul meu iPod.

Nume:
Email:
Tara:
Model iPod, daca il stiu:
Stocare curenta, daca o stiu:
Serviciu sau upgrade dorit:
Simptome / descriere problema:
Dispozitivul porneste?
A fost expus la lichid sau lovituri?

Inteleg ca trebuie sa astept confirmarea inainte sa trimit dispozitivul.

Fotografiile pot fi trimise ca raspuns la acest email.
`)}`;

export const metadata: Metadata = {
  title: "Service si Upgrade pentru iPodul Tau",
  description:
    "Cere service, diagnostic, upgrade de stocare, inlocuire baterie, inlocuire carcasa sau lucrari similare pentru iPodul tau.",
  alternates: {
    canonical: "/ro/services/upgrade",
    languages: {
      en: "/services/upgrade",
      ro: "/ro/services/upgrade",
    },
  },
};

export default function RomanianServiceUpgradePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Cerere service / upgrade
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Service si upgrade
                <br />
                pentru iPodul tau.
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-7 text-neutral-600 md:text-lg">
                Aceasta pagina este pentru clientii care au deja un iPod si vor
                ca Clickwheel sa il inspecteze, repare, restaureze sau
                upgradeze. Daca vrei ca Clickwheel sa construiasca un iPod
                refurbished pentru tine, foloseste fluxul Build Request.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={serviceRequestMailto}
                  className="inline-flex justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Cere service prin email
                </a>

                <Link
                  href="/ro/request-build"
                  className="inline-flex justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
                >
                  Vrei o configuratie completa?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Ce putem verifica
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Service-ul incepe cu inspectie.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Clickwheel poate inspecta dispozitivul inainte sa confirme
              disponibilitatea serviciului si pretul final. Te rugam sa astepti
              confirmarea inainte sa trimiti ceva catre atelier.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Proces
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Confirmam intai, trimiti dupa.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Cererile de service sunt analizate prin email inainte ca un
              dispozitiv sa fie trimis. Asa evitam expedierea unui dispozitiv
              nesuportat sau a unei cereri care nu poate fi finalizata cu
              piesele disponibile.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <article
                key={step}
                className="rounded-[24px] border border-white/15 bg-white/5 p-6"
              >
                <p className="text-xs font-semibold text-blue-300">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
                  {step}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Note importante
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              O cerere nu este o instructiune de expediere.
            </h2>

            <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-600">
              {importantNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] border border-black/10 bg-[#e9e2d6] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Detalii pentru email
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Include detaliile necesare pentru analiza dispozitivului.
            </h2>

            <div className="mt-7 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
              {requestChecklist.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-white/60 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={serviceRequestMailto}
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Deschide emailul
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
