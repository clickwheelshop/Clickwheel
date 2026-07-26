import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const requestReasons = [
  "Returneaza o comanda intreaga",
  "Returneaza o parte din comanda, daca este eligibila",
  "Cere retragere sau retur pentru razgandire",
  "Cere instructiuni de retur inainte sa trimiti ceva inapoi",
];

const beforeRequest = [
  "Pregateste numarul comenzii.",
  "Foloseste emailul utilizat la comanda.",
  "Spune daca returul este pentru comanda intreaga sau doar pentru o parte.",
  "Pastreaza produsul, ambalajul si accesoriile disponibile pentru verificare.",
  "Nu trimite nimic inapoi pana cand Clickwheel confirma instructiunile de retur.",
  "Daca aceasta comanda nu a fost inca expediata, foloseste pagina de cerere anulare.",
];

const reviewSteps = [
  "Trimite cererea de retur sau retragere prin email.",
  "Clickwheel verifica detaliile comenzii si ale cererii.",
  "Clickwheel confirma daca ruta de retur este potrivita.",
  "Clickwheel trimite instructiuni de retur daca cererea poate continua.",
  "Gestionarea finala depinde de inspectie, moment, stare si politica de retur publicata.",
];

const importantNotes = [
  "Browserul sau pagina clientului nu decide eligibilitatea returului.",
  "Decizia finala depinde de detaliile reale ale comenzii si politica de retur publicata.",
  "Produsele returnate ar trebui sa includa dispozitivul, accesoriile si articolele livrate, unde se aplica.",
  "Aceasta pagina nu promite aprobarea rambursarii sau termene de rambursare.",
];

const requestChecklist = [
  "Nume",
  "Numar comanda",
  "Email folosit la comanda",
  "Tara",
  "Vrei sa returnezi comanda intreaga sau doar o parte?",
  "Daca este partial, ce produs(e) si ce cantitate?",
  "Comanda a fost livrata?",
  "Data primirii, daca a fost livrata",
  "Motivul returului, optional",
  "Starea produsului",
  "Sunt incluse toate accesoriile/articolele?",
  "Numar de telefon, optional",
  "Alte detalii",
  "Poti atasa poze la email daca ajuta",
];

const returnRequestMailto = `mailto:returns@clickwheel.shop?subject=${encodeURIComponent(
  "Cerere retur / retragere",
)}&body=${encodeURIComponent(`Salut Clickwheel,

As vrea sa cer retur sau retragere pentru o comanda Clickwheel existenta.

Nume:
Numar comanda:
Email folosit la comanda:
Tara:
Vreau sa returnez comanda intreaga sau doar o parte?
Daca este partial, ce produs(e) si ce cantitate?
Comanda a fost livrata?
Data primirii, daca a fost livrata:
Motivul returului, optional:
Starea produsului:
Sunt incluse toate accesoriile/articolele?
Numar de telefon, optional:
Alte detalii:

Inteleg ca Clickwheel va verifica detaliile comenzii, momentul cererii, starea produsului si politica de retur inainte sa confirme eligibilitatea sau pasii urmatori. Nu voi trimite nimic inapoi pana cand Clickwheel confirma instructiunile de retur.
`)}`;

export const metadata: Metadata = {
  title: "Cere Retur sau Retragere",
  description:
    "Cere analiza pentru retur sau retragere pentru o comanda Clickwheel existenta dupa expediere sau livrare.",
  alternates: {
    canonical: "/ro/support/return-request",
    languages: {
      en: "/support/return-request",
      ro: "/ro/support/return-request",
    },
  },
};

export default function RomanianReturnRequestPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Cerere retur / retragere
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Cere retur
                <br />
                sau retragere.
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-7 text-neutral-600 md:text-lg">
                Aceasta pagina este pentru clientii cu o comanda Clickwheel
                existenta care a fost expediata sau livrata si vor sa ceara
                retur sau retragere. Build Request este pentru o configuratie
                noua, Service / Upgrade este pentru lucrari platite pe un
                dispozitiv al clientului, Warranty / Fault Claim este pentru o
                posibila problema cu o comanda Clickwheel, iar Cerere anulare
                este pentru comenzi care nu au fost inca expediate.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={returnRequestMailto}
                  className="inline-flex justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Cere retur prin email
                </a>

                <Link
                  href="/ro/returns"
                  className="inline-flex justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
                >
                  Citeste politica de retur
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
              Comenzi expediate sau livrate care au nevoie de analiza.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Clickwheel verifica statusul real al comenzii inainte sa confirme
              daca o cerere de retur sau retragere poate continua. Daca aceasta
              comanda nu a fost inca expediata, foloseste pagina de cerere
              anulare.
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
              Asteapta instructiunile de retur.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Nu trimite produse inapoi pana cand Clickwheel confirma
              instructiunile de retur. Eligibilitatea depinde de politica de
              retur, momentul cererii, starea produsului si accesoriile incluse.
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
              O cerere nu inseamna aprobare automata de retur.
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
              Inainte sa ceri retur
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Include detaliile necesare pentru analizarea comenzii.
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
              href={returnRequestMailto}
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Deschide emailul de retur
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
