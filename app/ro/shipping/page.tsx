import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Livrare",
  description:
    "Informații despre livrarea dispozitivelor iPod Classic restaurate și upgrade-ate de Clickwheel.",
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
            Informații despre livrarea dispozitivelor Clickwheel gata de
            expediere și a configurațiilor realizate la comandă.
          </p>

          <p className="mt-5 text-sm text-black/45">
            Ultima actualizare: iulie 2026
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.75fr_1.5fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold">Pe această pagină</p>

            <nav className="mt-5 space-y-3 text-sm text-black/60">
              <a className="block hover:text-black" href="#unde-livram">
                Unde livrăm
              </a>
              <a className="block hover:text-black" href="#costuri">
                Costuri de livrare
              </a>
              <a className="block hover:text-black" href="#expediere">
                Timp de pregătire
              </a>
              <a className="block hover:text-black" href="#metode">
                Metode de livrare
              </a>
              <a className="block hover:text-black" href="#tracking">
                Tracking și estimări
              </a>
              <a className="block hover:text-black" href="#colete">
                Colete nelivrate
              </a>
            </nav>
          </aside>

          <div className="space-y-14">
            <section id="unde-livram">
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                Unde livrăm
              </h2>

              <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                <p>Comenzile Clickwheel sunt expediate din România.</p>

                <p>
                  Livrăm în România și către destinații europene selectate.
                  Disponibilitatea pentru o anumită adresă este confirmată la
                  checkout sau înainte de finalizarea plății.
                </p>

                <p>Momentan nu oferim livrare în afara Europei.</p>
              </div>
            </section>

            <section id="costuri">
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                Costuri de livrare
              </h2>

              <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                <p>
                  <strong className="font-semibold text-black">
                    România:
                  </strong>{" "}
                  livrarea este gratuită pentru comenzile Clickwheel eligibile.
                </p>

                <p>
                  <strong className="font-semibold text-black">
                    Destinații europene:
                  </strong>{" "}
                  costul livrării este calculat după introducerea adresei la
                  checkout. Opțiunile disponibile și prețurile sunt afișate
                  înainte de plată.
                </p>

                <p>
                  Costul livrării internaționale poate varia în funcție de
                  destinație, dimensiunile coletului, serviciul curierului,
                  tracking, semnătură la livrare și opțiunile de asigurare
                  disponibile.
                </p>
              </div>
            </section>

            <section id="expediere">
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                Timp de pregătire pentru expediere
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <article className="rounded-[24px] border border-black/10 bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/45">
                    Gata de expediere
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                    1–3 zile lucrătoare
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    Se aplică dispozitivelor marcate ca gata de expediere după
                    confirmarea plății.
                  </p>
                </article>

                <article className="rounded-[24px] border border-black/10 bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black/45">
                    Realizat la comandă
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                    Până la 7 zile lucrătoare
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    Se aplică configurațiilor personalizate aprobate după
                    confirmarea plății.
                  </p>
                </article>
              </div>

              <p className="mt-5 text-base leading-7 text-black/65">
                Timpul de pregătire reprezintă perioada înainte ca pachetul să
                fie predat curierului. Nu include timpul de tranzit al
                curierului.
              </p>
            </section>

            <section id="metode">
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                Metode de livrare
              </h2>

              <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                <p>
                  În România, comenzile pot fi livrate prin curier la adresă
                  sau, unde este disponibil, la easybox ori punct de ridicare
                  eligibil.
                </p>

                <p>
                  Comenzile internaționale sunt livrate prin curierul și
                  serviciul disponibile pentru destinația selectată.
                </p>

                <p>
                  Toate metodele de livrare disponibile vor fi afișate înainte
                  de plată atunci când checkout-ul online este activ.
                </p>
              </div>
            </section>

            <section id="tracking">
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                Tracking și estimări de livrare
              </h2>

              <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                <p>
                  Atunci când tracking-ul este disponibil, vom transmite
                  detaliile de urmărire după expedierea comenzii.
                </p>

                <p>
                  Datele și timpii de livrare sunt estimări oferite de curier.
                  Acestea pot varia în funcție de destinație, condițiile locale
                  de livrare, sărbători legale, vreme, vamă sau factori
                  operaționali ai curierului.
                </p>

                <p>
                  Pentru comenzile cu valoare mai mare, serviciile disponibile
                  pot include semnătură la livrare sau protecție suplimentară a
                  expediției.
                </p>
              </div>
            </section>

            <section id="colete">
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                Colete nelivrate sau neridicate
              </h2>

              <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                <p>
                  Te rugăm să verifici adresa de livrare, datele de contact și
                  instrucțiunile de ridicare înainte de plasarea comenzii.
                </p>

                <p>
                  Dacă un colet nu poate fi livrat sau nu este ridicat și se
                  întoarce la noi, vom contacta clientul pentru a discuta
                  reexpedierea sau procesul de retur aplicabil.
                </p>

                <p>
                  Costuri suplimentare de livrare se pot aplica atunci când este
                  solicitată o nouă expediere.
                </p>
              </div>
            </section>

            <section className="rounded-[28px] bg-[#171717] p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                Ai nevoie de ajutor?
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                Ai o întrebare despre livrare?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                Vizitează secțiunea de suport pentru informații despre
                configurare, servicii și livrare.
              </p>

              <Link
                href="/ro/support"
                className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Vezi suportul
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}