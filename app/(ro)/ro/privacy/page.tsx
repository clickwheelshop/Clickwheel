import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Politica de confidentialitate",
  description:
    "Cum foloseste Clickwheel datele trimise prin formularul de solicitare configuratie.",
  alternates: {
    canonical: "/ro/privacy",
    languages: {
      en: "/privacy",
      ro: "/ro/privacy",
    },
  },
};

export default function PrivacyRoPage() {
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
              Politica de confidentialitate
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              Aceasta pagina explica ce date colecteaza Clickwheel cand trimiti
              o cerere de configuratie si cum sunt folosite aceste date.
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
                <a className="block hover:text-black" href="#date-colectate">
                  Date colectate
                </a>
                <a className="block hover:text-black" href="#cum-folosim">
                  Cum folosim datele
                </a>
                <a className="block hover:text-black" href="#furnizori">
                  Furnizori si infrastructura
                </a>
                <a className="block hover:text-black" href="#plati">
                  Date de plata
                </a>
                <a className="block hover:text-black" href="#optiuni">
                  Optiunile tale
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="date-colectate">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Date colectate
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Cand trimiti o cerere de configuratie, Clickwheel poate
                    colecta datele introduse in formular: nume, adresa de email,
                    tara, notite si configuratia selectata.
                  </p>

                  <p>
                    Putem stoca si detalii tehnice legate de trimiterea
                    formularului, inclusiv marcaje de timp si o referinta
                    publica folosita pentru identificarea cererii in mesajele de
                    raspuns.
                  </p>
                </div>
              </section>

              <section id="cum-folosim">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Cum folosim datele
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Folosim datele din cerere pentru a analiza configuratia
                    preferata, verifica disponibilitatea, pregati un raspuns si
                    oferi suport clientilor.
                  </p>

                  <p>
                    O cerere de configuratie nu este o comanda. Trimiterea
                    formularului actual nu confirma o achizitie si nu implica
                    plata.
                  </p>
                </div>
              </section>

              <section id="furnizori">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Furnizori si infrastructura
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Clickwheel foloseste servicii de gazduire web, baza de date
                    si email pentru functionarea site-ului, stocarea cererilor
                    trimise si trimiterea sau primirea raspunsurilor prin email.
                  </p>

                  <p>
                    Acesti furnizori proceseaza informatii doar in masura
                    necesara pentru functionarea site-ului, analiza cererii si
                    comunicarea cu clientii.
                  </p>
                </div>
              </section>

              <section id="plati">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Date de plata
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Formularul actual de cerere configuratie nu colecteaza date
                    de card sau date de plata.
                  </p>

                  <p>
                    Daca Clickwheel adauga ulterior checkout sau plata online,
                    informatiile relevante despre plata vor fi gestionate prin
                    fluxul de checkout si descrise inainte ca plata sa fie
                    efectuata.
                  </p>
                </div>
              </section>

              <section id="optiuni">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Optiunile tale
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Poti contacta Clickwheel pentru acces la datele pe care le
                    avem despre cererea ta, sau pentru a cere corectarea ori
                    stergerea acestora.
                  </p>

                  <p>
                    Este posibil sa pastram informatii limitate atunci cand sunt
                    necesare pentru suport, securitate, evidenta sau motive
                    legale.
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
                  Intrebari despre datele tale?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Scrie la contact@clickwheel.shop pentru intrebari despre
                  confidentialitate sau solicitari privind datele tale.
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
