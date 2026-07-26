import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const requestReasons = [
  "Anuleaza o comanda intreaga inainte de expediere",
  "Anuleaza o parte din comanda inainte de expediere, daca este posibil",
  "Corecteaza o comanda inainte sa inceapa pregatirea",
  "Intreaba daca aceasta comanda mai poate fi oprita",
];

const beforeRequest = [
  "Pregateste numarul comenzii.",
  "Foloseste emailul utilizat la comanda.",
  "Trimite cererea cat mai repede.",
  "Anularea nu este garantata dupa ce pregatirea sau expedierea a inceput.",
  "Daca aceasta comanda a fost deja expediata, foloseste fluxul de retur sau retragere.",
];

const reviewSteps = [
  "Trimite cererea de anulare prin email.",
  "Clickwheel verifica statusul comenzii.",
  "Clickwheel confirma daca aceasta comanda mai poate fi anulata.",
  "Daca anularea este posibila, Clickwheel confirma pasii urmatori.",
  "Daca expedierea a avut deja loc, Clickwheel te directioneaza catre procesul de retur sau retragere.",
];

const importantNotes = [
  "Browserul sau pagina clientului nu decide statusul expedierii.",
  "Decizia finala depinde de statusul real al comenzii.",
  "Aceasta pagina nu promite termene de rambursare sau plata; acestea vor fi confirmate conform politicii aplicabile si statusului comenzii.",
];

const requestChecklist = [
  "Nume",
  "Numar comanda",
  "Email folosit la comanda",
  "Tara",
  "Vrei sa anulezi comanda intreaga sau doar o parte?",
  "Daca este partial, ce produs(e)?",
  "Motivul anularii, optional",
  "Numar de telefon, optional",
  "Alte detalii",
];

const cancellationRequestMailto = `mailto:requests@clickwheel.shop?subject=${encodeURIComponent(
  "Cerere anulare comanda",
)}&body=${encodeURIComponent(`Salut Clickwheel,

As vrea sa cer anularea unei comenzi Clickwheel existente inainte de expediere.

Nume:
Numar comanda:
Email folosit la comanda:
Tara:
Vreau sa anulez comanda intreaga sau doar o parte?
Daca este partial, ce produs(e)?
Motivul anularii, optional:
Numar de telefon, optional:
Alte detalii:

Inteleg ca Clickwheel va verifica statusul comenzii si va confirma daca anularea mai este posibila. Daca aceasta comanda a fost deja expediata, inteleg ca poate fi nevoie sa folosesc procesul de retur / retragere.
`)}`;

export const metadata: Metadata = {
  title: "Anuleaza o Comanda Inainte de Expediere",
  description:
    "Cere prin email anularea unei comenzi Clickwheel existente inainte de expediere.",
  alternates: {
    canonical: "/ro/support/cancellation-request",
    languages: {
      en: "/support/cancellation-request",
      ro: "/ro/support/cancellation-request",
    },
  },
};

export default function RomanianCancellationRequestPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Cerere anulare
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Anuleaza o comanda
                <br />
                inainte de expediere.
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-7 text-neutral-600 md:text-lg">
                Aceasta pagina este pentru clientii cu o comanda Clickwheel
                existenta care vor sa ceara anularea inainte de expediere. Build
                Request este pentru o configuratie noua, Service / Upgrade este
                pentru lucrari platite pe un dispozitiv al clientului, iar
                Warranty / Fault Claim este pentru o posibila problema cu o
                comanda Clickwheel.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={cancellationRequestMailto}
                  className="inline-flex justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Cere anulare prin email
                </a>

                <Link
                  href="/ro/cancellation"
                  className="inline-flex justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
                >
                  Citeste politica de anulare
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
              Pentru ce este pagina
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Comenzi existente care poate mai pot fi oprite.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Clickwheel va analiza cererea si va confirma daca anularea mai
              este posibila. Daca aceasta comanda a fost deja expediata, poate
              fi nevoie sa folosesti pagina{" "}
              <Link
                href="/ro/support/return-request"
                className="font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Cerere retur / retragere
              </Link>{" "}
              in schimb. Eligibilitatea pentru retur este analizata separat
              conform politicii de retur.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {requestReasons.map((reason) => (
              <article
                key={reason}
                className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {reason}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Proces de analiza
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Intreaba cat mai repede.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Anularea depinde de statusul real al comenzii. Trimite cererea cat
              mai repede ca Clickwheel sa poata verifica daca pregatirea sau
              expedierea mai poate fi oprita.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reviewSteps.map((step, index) => (
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
              O cerere nu inseamna anulare automata.
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
              Inainte sa ceri anularea
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Include detaliile necesare pentru identificarea comenzii.
            </h2>

            <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
              {beforeRequest.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
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
              href={cancellationRequestMailto}
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Deschide emailul de anulare
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
