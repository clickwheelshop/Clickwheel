import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Politica de garantie",
  description:
    "Cum gestioneaza Clickwheel cererile de garantie si suport pentru defecte.",
  alternates: {
    canonical: "/ro/warranty",
    languages: {
      en: "/warranty",
      ro: "/ro/warranty",
    },
  },
};

export default function WarrantyRoPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f6f3ee] text-[#151515]">
        <section className="border-b border-black/10 px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
              Politici Clickwheel
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Politica de garantie
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              Suportul pentru garantie si defecte este gestionat separat de
              retururile facute pentru razgandire.
            </p>

            <p className="mt-5 text-sm text-black/45">
              Ultima actualizare: iulie 2026
            </p>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.75fr_1.5fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold">Pe aceasta pagina</p>

              <nav className="mt-5 space-y-3 text-sm text-black/60">
                <a className="block hover:text-black" href="#scop">
                  Suport garantie
                </a>
                <a className="block hover:text-black" href="#acoperire">
                  Detalii acoperire
                </a>
                <a className="block hover:text-black" href="#neacoperit">
                  Exemple neacoperite
                </a>
                <a className="block hover:text-black" href="#contactare">
                  Cum ne contactezi
                </a>
                <a className="block hover:text-black" href="#drepturi">
                  Drepturi legale
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="scop">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Suport garantie
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Suportul de garantie este pentru posibile defecte ale unui
                    dispozitiv Clickwheel sau ale unui produs livrat. Este
                    separat de returul pentru razgandire.
                  </p>

                  <p>
                    Daca ceva pare in neregula, contacteaza Clickwheel inainte
                    sa trimiti ceva inapoi. Vom analiza problema si vom raspunde
                    prin email cu pasii urmatori.
                  </p>
                </div>
              </section>

              <section id="acoperire">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Detalii acoperire
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Acoperirea de garantie depinde de produs, problema si
                    documentatia finala de oferta sau comanda. Clickwheel nu
                    promite ca orice problema este acoperita.
                  </p>

                  <p>
                    Cand acoperirea se aplica, Clickwheel va confirma prin email
                    optiunea de suport disponibila dupa analizarea problemei.
                  </p>
                </div>
              </section>

              <section id="neacoperit">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Exemple care pot sa nu fie acoperite
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Suportul de garantie poate sa nu acopere deteriorarea
                    accidentala, contactul cu lichide, reparatii sau modificari
                    neautorizate dupa livrare, uzura cosmetica normala dupa
                    folosire sau probleme de software, media ori continut care
                    nu sunt cauzate de dispozitiv.
                  </p>

                  <p>
                    Aceste exemple nu sunt o lista completa. Analizam fiecare
                    caz in functie de produs, problema si informatiile
                    disponibile.
                  </p>
                </div>
              </section>

              <section id="contactare">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Cum ne contactezi
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Scrie la warranty@clickwheel.shop cu referinta publica sau
                    referinta comenzii, daca este disponibila, o descriere scurta
                    a problemei si poze sau video daca ajuta.
                  </p>

                  <p>
                    Nu exista inca formular de upload pe site. Trimite materiale
                    de suport prin email doar cand ajuta la explicarea problemei.
                  </p>
                </div>
              </section>

              <section id="drepturi">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Drepturi legale
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Aceasta politica nu inlocuieste drepturile legale ale
                    consumatorilor care se pot aplica achizitiei tale.
                  </p>
                </div>
              </section>

              <section
                id="contact"
                className="rounded-[28px] bg-[#171717] p-8 text-white sm:p-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                  Contact
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                  Ai nevoie de suport garantie?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Scrie la warranty@clickwheel.shop cu detaliile problemei.
                </p>

                <Link
                  href="/ro/support/warranty-claim"
                  className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
                >
                  Deschide cerere garantie
                </Link>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
