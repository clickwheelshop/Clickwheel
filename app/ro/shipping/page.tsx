import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Livrare",
  description:
    "Cum confirma Clickwheel detaliile de livrare pentru dispozitive iPod Classic restaurate si upgrade-ate.",
  alternates: {
    canonical: "/ro/shipping",
    languages: {
      en: "/shipping",
      ro: "/ro/shipping",
    },
  },
};

export default function ShippingRoPage() {
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
              Livrare
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              Detaliile de livrare sunt confirmate dupa analiza cererii sau
              dupa oferta finala, inainte ca o comanda platita sa fie pregatita
              pentru expediere.
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
                <a className="block hover:text-black" href="#confirmare">
                  Cum este confirmata livrarea
                </a>
                <a className="block hover:text-black" href="#costuri">
                  Costuri si destinatii
                </a>
                <a className="block hover:text-black" href="#expediere">
                  Pregatire inainte de expediere
                </a>
                <a className="block hover:text-black" href="#estimari">
                  Estimari de livrare
                </a>
                <a className="block hover:text-black" href="#colete">
                  Colete nelivrate
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="confirmare">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Cum este confirmata livrarea
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Clickwheel confirma detaliile de livrare prin email dupa ce
                    o cerere de configuratie a fost analizata sau dupa pregatirea
                    unei oferte finale.
                  </p>

                  <p>
                    Formularul actual Build Request nu este o comanda sau o
                    confirmare de plata. Nu se efectueaza nicio plata si nu se
                    creeaza nicio expediere doar prin acel formular.
                  </p>
                </div>
              </section>

              <section id="costuri">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Costuri si destinatii
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Destinatiile disponibile, optiunile de livrare si costurile
                    de livrare sunt confirmate inainte ca o comanda platita sa
                    fie finalizata.
                  </p>

                  <p>
                    Detaliile de livrare pot depinde de destinatie, dimensiunea
                    coletului, valoare, servicii disponibile si optiuni de
                    tracking sau semnatura.
                  </p>
                </div>
              </section>

              <section id="expediere">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Pregatire inainte de expediere
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <article className="rounded-[24px] border border-black/10 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/45">
                      Produse gata de livrare
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                      Confirmat prin email
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Estimarea de expediere este confirmata dupa verificarea
                      produsului, adresei si detaliilor finale de comanda.
                    </p>
                  </article>

                  <article className="rounded-[24px] border border-black/10 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/45">
                      Configuratii personalizate
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                      Dupa analiza si testare
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Timpul de pregatire depinde de complexitatea build-ului,
                      disponibilitatea pieselor, testare si confirmarea finala.
                    </p>
                  </article>
                </div>

                <p className="mt-5 text-base leading-7 text-black/65">
                  Clickwheel va confirma estimarea de expediere prin email.
                  Timpul de pregatire este separat de timpul de tranzit al
                  curierului.
                </p>
              </section>

              <section id="estimari">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Estimari de livrare
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Atunci cand tracking-ul este disponibil, Clickwheel va
                    transmite detaliile de urmarire dupa expediere.
                  </p>

                  <p>
                    Datele si timpii de livrare sunt estimari. Acestea pot varia
                    in functie de destinatie, conditii locale de livrare,
                    sarbatori legale, vreme, vama sau factori operationali ai
                    curierului.
                  </p>
                </div>
              </section>

              <section id="colete">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Colete nelivrate sau neridicate
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Te rugam sa verifici datele de livrare si datele de contact
                    inainte ca o comanda platita sa fie finalizata.
                  </p>

                  <p>
                    Daca un colet nu poate fi livrat sau nu este ridicat si se
                    intoarce la Clickwheel, vom contacta clientul pentru a
                    discuta pasii disponibili. Costuri suplimentare de livrare
                    se pot aplica daca este solicitata o noua expediere.
                  </p>
                </div>
              </section>

              <section
                id="contact"
                className="rounded-[28px] bg-[#171717] p-8 text-white sm:p-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                  Ai nevoie de ajutor?
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                  Ai o intrebare despre livrare?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Scrie la contact@clickwheel.shop pentru intrebari despre
                  livrare si expediere.
                </p>

                <Link
                  href="mailto:contact@clickwheel.shop"
                  className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
                >
                  Trimite email
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
