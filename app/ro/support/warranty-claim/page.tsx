import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const issueCategories = [
  "Dispozitivul nu porneste",
  "Problema de baterie",
  "Problema de incarcare sau sync",
  "Problema audio sau mufa casti",
  "Problema de ecran sau comenzi",
  "Problema de stocare sau restaurare software",
  "Alt defect suspectat",
];

const beforeClaim = [
  "Pregateste numarul comenzii.",
  "Foloseste emailul utilizat la comanda.",
  "Descrie problema clar.",
  "Adauga poze sau un video scurt daca ajuta.",
  "Nu trimite dispozitivul pana cand Clickwheel confirma pasii urmatori.",
];

const reviewSteps = [
  "Trimite cererea prin email.",
  "Clickwheel verifica comanda si descrierea problemei.",
  "Daca este nevoie, Clickwheel cere poze, video sau detalii extra.",
  "Clickwheel confirma daca dispozitivul trebuie trimis pentru inspectie.",
  "Decizia finala de garantie se ia dupa inspectie.",
];

const coverageNotes = [
  "Acoperirea de garantie depinde de politica de garantie publicata.",
  "Inspectia poate fi necesara inainte de confirmarea acoperirii.",
  "Deteriorarea accidentala, contactul cu lichide, reparatia neautorizata, modificarea sau folosirea gresita pot sa nu fie acoperite.",
  "Uzura consumabila poate fi tratata conform politicii de garantie.",
];

const requestChecklist = [
  "Nume",
  "Numar comanda",
  "Email folosit la comanda",
  "Tara",
  "Model iPod, daca il stii",
  "Serial / ID restaurare / ID garantie, daca exista",
  "Categorie problema",
  "Descriere simptome",
  "Data la care a inceput problema",
  "Problema este constanta sau intermitenta?",
  "Dispozitivul porneste?",
  "A fost scapat, deschis, modificat sau expus la lichid?",
];

const warrantyClaimMailto = `mailto:warranty@clickwheel.shop?subject=${encodeURIComponent(
  "Cerere garantie / dispozitiv defect",
)}&body=${encodeURIComponent(`Salut Clickwheel,

As vrea sa trimit o cerere de garantie / dispozitiv defect pentru iPodul meu Clickwheel.

Nume:
Numar comanda:
Email folosit la comanda:
Tara:
Model iPod, daca il stiu:
Serial / ID restaurare / ID garantie, daca exista:
Categorie problema:
Descriere simptome:
Data la care a inceput problema:
Problema este constanta sau intermitenta?
Dispozitivul porneste?
A fost scapat, deschis, modificat sau expus la lichid?

Inteleg ca trebuie sa astept confirmarea Clickwheel inainte sa trimit dispozitivul.

Pozele sau video pot fi atasate cand trimit acest email.
`)}`;

export const metadata: Metadata = {
  title: "Cerere de Garantie pentru iPodul Tau Clickwheel",
  description:
    "Trimite prin email o cerere de garantie sau dispozitiv defect pentru un iPod refurbished cumparat de la Clickwheel.",
  alternates: {
    canonical: "/ro/support/warranty-claim",
    languages: {
      en: "/support/warranty-claim",
      ro: "/ro/support/warranty-claim",
    },
  },
};

export default function RomanianWarrantyClaimPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Cerere garantie / defect
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Cerere de garantie
                <br />
                pentru iPodul tau Clickwheel.
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-7 text-neutral-600 md:text-lg">
                Aceasta pagina este pentru clientii care au cumparat un iPod
                refurbished de la Clickwheel si au nevoie de ajutor cu o posibila
                problema de garantie. Daca vrei reparatie sau upgrade platit
                pentru propriul dispozitiv, foloseste pagina Service / Upgrade.
                Daca vrei ca Clickwheel sa construiasca un iPod refurbished
                pentru tine, incepe cu Build Request.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={warrantyClaimMailto}
                  className="inline-flex justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Trimite cerere prin email
                </a>

                <Link
                  href="/ro/warranty"
                  className="inline-flex justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
                >
                  Citeste politica de garantie
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
              Defecte suspectate la o comanda Clickwheel existenta.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Clickwheel va analiza cererea inainte sa confirme acoperirea de
              garantie. Acoperirea depinde de politica de garantie, starea
              dispozitivului si, cand este necesar, inspectia in atelier.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {issueCategories.map((category) => (
              <article
                key={category}
                className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {category}
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
              Confirmam pasii inainte de expediere.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Nu trimite dispozitivul pana cand Clickwheel confirma pasii
              urmatori prin email. Unele cereri pot fi clarificate inainte de
              inspectie, iar altele pot necesita trimiterea dispozitivului.
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
              Note despre acoperire
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              O cerere nu inseamna acoperire automata.
            </h2>

            <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-600">
              {coverageNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] border border-black/10 bg-[#e9e2d6] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Inainte sa trimiti cererea
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Include detalii suficiente pentru o prima analiza utila.
            </h2>

            <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
              {beforeClaim.map((item) => (
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
              href={warrantyClaimMailto}
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Deschide emailul de garantie
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
