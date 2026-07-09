import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Retururi si politica de retur in 30 de zile",
  description:
    "Cum gestioneaza Clickwheel drepturile legale de retragere si retururile eligibile in 30 de zile.",
  alternates: {
    canonical: "/ro/returns",
    languages: {
      en: "/returns",
      ro: "/ro/returns",
    },
  },
};

export default function ReturnsRoPage() {
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
              Retururi si politica de retur in 30 de zile
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              Cum functioneaza drepturile legale de retragere si promisiunea
              voluntara Clickwheel de retur in 30 de zile pentru produse fizice
              eligibile.
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
                <a className="block hover:text-black" href="#retragere">
                  Drepturi legale de retragere
                </a>
                <a className="block hover:text-black" href="#retur-30">
                  Retur in 30 de zile
                </a>
                <a className="block hover:text-black" href="#stare">
                  Starea produsului
                </a>
                <a className="block hover:text-black" href="#pornire-retur">
                  Pornirea unui retur
                </a>
                <a className="block hover:text-black" href="#cereri">
                  Cereri de configuratie
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="retragere">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Drepturi legale de retragere
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Unii clienti pot avea drepturi legale de retragere in
                    functie de locatie, produs si modul in care este finalizata
                    achizitia. Aceste drepturi sunt separate de promisiunea
                    voluntara de retur Clickwheel.
                  </p>

                  <p>
                    Daca un drept legal de retragere se aplica achizitiei tale,
                    aceasta politica nu il elimina si nu il inlocuieste.
                  </p>
                </div>
              </section>

              <section id="retur-30">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Promisiunea Clickwheel de retur in 30 de zile
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Clickwheel ofera o fereastra de retur de 30 de zile pentru
                    produse fizice eligibile, ca politica de incredere pentru
                    clienti.
                  </p>

                  <p>
                    Nu orice produs este automat returnabil in orice stare.
                    Eligibilitatea poate depinde de produs, starea lui,
                    accesoriile livrate, orice personalizare aprobata si
                    documentatia finala de oferta sau comanda.
                  </p>
                </div>
              </section>

              <section id="stare">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Starea produsului returnat
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Produsele returnate ar trebui sa includa dispozitivul,
                    accesoriile livrate impreuna cu el si ambalajul original,
                    unde este posibil.
                  </p>

                  <p>
                    Te rugam sa ai grija rezonabila de produs in perioada in
                    care decizi daca il pastrezi. Produsele returnate incomplete,
                    deteriorate sau modificate dupa livrare pot sa nu fie
                    eligibile pentru un rezultat complet de retur.
                  </p>
                </div>
              </section>

              <section id="pornire-retur">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Pornirea unui retur
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Contacteaza Clickwheel inainte sa trimiti ceva inapoi. Vom
                    analiza cererea si vom trimite instructiuni de retur prin
                    email.
                  </p>

                  <p>
                    Nu trimite un produs inapoi fara instructiuni de la
                    Clickwheel. Asa evitam colete pierdute, adrese gresite sau
                    intarzieri.
                  </p>

                  <p>
                    Momentul si metoda rambursarii sunt confirmate prin email
                    dupa ce produsul returnat a fost primit si verificat.
                  </p>
                </div>
              </section>

              <section id="cereri">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Cereri de configuratie
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Formularul actual Build Request nu este o comanda sau o
                    confirmare de plata. Nu se efectueaza nicio plata prin acel
                    formular, deci o cerere trimisa nu are nevoie de retur.
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
                  Vrei sa discuti un retur?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Scrie la returns@clickwheel.shop inainte sa trimiti ceva
                  inapoi.
                </p>

                <Link
                  href="mailto:returns@clickwheel.shop"
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
