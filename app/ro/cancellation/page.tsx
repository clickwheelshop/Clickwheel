import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Anulare inainte de expediere",
  description:
    "Cum poti intreba Clickwheel despre anularea unei comenzi confirmate inainte de expediere.",
  alternates: {
    canonical: "/ro/cancellation",
    languages: {
      en: "/cancellation",
      ro: "/ro/cancellation",
    },
  },
};

export default function CancellationRoPage() {
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
              Anulare inainte de expediere
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              Cum contactezi Clickwheel daca vrei sa intrebi despre anularea
              unei comenzi confirmate inainte de expediere.
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
                <a className="block hover:text-black" href="#cand-se-aplica">
                  Cand se aplica
                </a>
                <a className="block hover:text-black" href="#cereri">
                  Cereri de configuratie
                </a>
                <a className="block hover:text-black" href="#status">
                  Status expediere
                </a>
                <a className="block hover:text-black" href="#contactare">
                  Cum ne contactezi
                </a>
                <a className="block hover:text-black" href="#contact">
                  Contact
                </a>
              </nav>
            </aside>

            <div className="space-y-14">
              <section id="cand-se-aplica">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Cand se aplica
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Aceasta politica este pentru clientii care vor sa intrebe
                    despre anularea unei comenzi confirmate inainte ca aceasta
                    sa fie expediata.
                  </p>

                  <p>
                    Daca o comanda a fost deja expediata, Clickwheel va explica
                    prin email pasii disponibili.
                  </p>
                </div>
              </section>

              <section id="cereri">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Cereri de configuratie
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Cererile trimise prin formularul actual Build Request nu
                    sunt comenzi si nu au nevoie de anulare. Sunt cereri prin
                    care Clickwheel analizeaza o configuratie preferata si
                    raspunde prin email.
                  </p>

                  <p>
                    Nu se efectueaza nicio plata prin formularul actual Build
                    Request.
                  </p>
                </div>
              </section>

              <section id="status">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Status expediere
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Clickwheel va confirma statusul expedierii prin email. Un
                    browser, ecran client sau formular viitor de pe site nu
                    trebuie tratat ca sursa finala pentru statusul expedierii.
                  </p>
                </div>
              </section>

              <section id="contactare">
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                  Cum ne contactezi
                </h2>

                <div className="mt-5 space-y-4 text-base leading-7 text-black/65">
                  <p>
                    Scrie cat mai repede la requests@clickwheel.shop sau
                    contact@clickwheel.shop. Include referinta publica sau
                    referinta comenzii, daca este disponibila.
                  </p>

                  <p>
                    Nu exista inca formular de anulare pe site. Clickwheel va
                    verifica statusul si va raspunde prin email.
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
                  Vrei sa intrebi despre anulare?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Scrie la requests@clickwheel.shop sau contact@clickwheel.shop.
                </p>

                <Link
                  href="/ro/support/cancellation-request"
                  className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
                >
                  Deschide cerere anulare
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
