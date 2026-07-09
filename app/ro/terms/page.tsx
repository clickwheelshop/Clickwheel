import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Termeni si conditii",
  description:
    "Termeni de baza pentru folosirea site-ului Clickwheel si a formularului de solicitare configuratie.",
  alternates: {
    canonical: "/ro/terms",
    languages: {
      en: "/terms",
      ro: "/ro/terms",
    },
  },
};

export default function TermsRoPage() {
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
              Termeni si conditii
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              Acesti termeni descriu modul in care functioneaza site-ul
              Clickwheel si procesul actual de solicitare configuratie.
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
                  Scop
                </a>
                <a className="block hover:text-black" href="#cereri">
                  Cereri de configuratie
                </a>
                <a className="block hover:text-black" href="#preturi">
                  Preturi si disponibilitate
                </a>
                <a className="block hover:text-black" href="#plati">
                  Plati
                </a>
                <a className="block hover:text-black" href="#continut">
                  Continut site
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="scop">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Scop
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Clickwheel este un atelier independent de restaurare pentru
                    playere muzicale clasice. Acesti termeni se aplica navigarii
                    pe site si folosirii formularului actual de solicitare
                    configuratie.
                  </p>

                  <p>
                    Termeni mai detaliati despre cumparare, livrare, retur sau
                    garantie pot fi publicati cand vor fi introduse functii de
                    checkout sau comenzi platite.
                  </p>
                </div>
              </section>

              <section id="cereri">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Cereri de configuratie
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Formularul de solicitare configuratie iti permite sa trimiti
                    o configuratie preferata, pentru ca Clickwheel sa verifice
                    disponibilitatea si sa raspunda prin email.
                  </p>

                  <p>
                    O cerere de configuratie nu este o comanda, rezervare sau
                    confirmare de plata. Clickwheel poate accepta, refuza sau
                    propune modificari dupa analiza cererii.
                  </p>
                </div>
              </section>

              <section id="preturi">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Preturi si disponibilitate
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Preturile afisate in configurator sunt estimari pentru
                    optiunile selectate. Pretul final, disponibilitatea si
                    termenul sunt confirmate separat inainte de orice plata.
                  </p>

                  <p>
                    Piesele, finisajele, accesoriile si serviciile disponibile
                    se pot schimba in functie de stoc, furnizori si starea
                    dispozitivelor disponibile pentru restaurare.
                  </p>
                </div>
              </section>

              <section id="plati">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Plati
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Nu se efectueaza nicio plata prin formularul actual de
                    solicitare configuratie. Nu introduce date de card sau
                    informatii de plata in campul de notite.
                  </p>

                  <p>
                    Daca Clickwheel activeaza ulterior checkout sau plati online,
                    pasii de plata si termenii relevanti pentru achizitie vor fi
                    afisati inainte de finalizarea platii.
                  </p>
                </div>
              </section>

              <section id="continut">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Continut site
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Incercam sa pastram informatiile despre produse, servicii si
                    ghiduri clare si utile, insa continutul site-ului poate fi
                    actualizat pe masura ce atelierul, stocul si procesul de
                    service se schimba.
                  </p>

                  <p>
                    iPod este marca inregistrata Apple Inc. Clickwheel este un
                    atelier independent de restaurare si nu este afiliat cu
                    Apple.
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
                  Intrebari despre acesti termeni?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Scrie la Clickwheel la contact@clickwheel.shop.
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
