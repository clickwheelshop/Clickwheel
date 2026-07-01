import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const issues = [
  {
    number: "01",
    title: "iPod-ul meu se încarcă, dar nu apare pe computer",
    description:
      "Încearcă mai întâi un alt cablu 30-pin. Unele cabluri de schimb oferă doar încărcare și nu permit transferul de date. Apoi încearcă un alt port USB și conectează iPod-ul direct la computer, nu printr-un hub.",
  },
  {
    number: "02",
    title: "iPod-ul meu nu apare în Finder sau iTunes",
    description:
      "Deconectează și reconectează iPod-ul, repornește Finder sau iTunes, apoi repornește computerul dacă este nevoie. Pe Mac, verifică Finder la Locations. Pe Windows, folosește iTunes pentru sincronizarea iPod Classic.",
  },
  {
    number: "03",
    title: "Sincronizarea începe, dar nu se termină",
    description:
      "Păstrează cablul conectat și nu deconecta iPod-ul în timpul transferului. Încearcă mai întâi să sincronizezi un playlist mai mic pentru a vedea dacă o anumită piesă, copertă sau album cauzează problema.",
  },
  {
    number: "04",
    title: "iPod-ul este recunoscut pe Mac, dar nu pe Windows",
    description:
      "Este posibil ca dispozitivul să fi fost pregătit pentru un flux de lucru Mac. Un iPod formatat pentru Mac poate să nu fie recunoscut nativ pe Windows. Contactează Clickwheel înainte să restaurezi sau să reformatezi dispozitivul.",
  },
  {
    number: "05",
    title: "Rockbox nu afișează muzica adăugată recent",
    description:
      "Dacă ai copiat muzica direct în foldere, actualizează baza de date Rockbox după transfer. Verifică dacă fișierele sunt în folderul ales pentru muzică și dacă transferul s-a finalizat înainte să deconectezi iPod-ul.",
  },
];

const quickChecks = [
  "Folosește un cablu testat care suportă date și încărcare.",
  "Încearcă un alt port USB înainte să presupui că iPod-ul are o problemă.",
  "Evită hub-urile USB în timpul configurării și sincronizării.",
  "Repornește Finder, iTunes sau computerul înainte de alți pași.",
  "Nu restaura și nu reformata iPod-ul înainte să confirmi fluxul corect.",
];

export default function RomanianTroubleshootingGuidePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <Link
            href="/ro/guides"
            className="text-sm font-semibold text-neutral-600 transition hover:text-black"
          >
            ← Înapoi la ghiduri
          </Link>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Depanare
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Rezolvarea problemelor
            <br />
            la iPod Classic.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Verificări simple pentru probleme de conexiune, sincronizare,
            compatibilitate Mac și Windows, cabluri și biblioteci muzicale
            Rockbox.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              Majoritatea problemelor de conexiune nu sunt cauzate de iPod-ul
              propriu-zis. Începe cu cablul, portul USB și fluxul de lucru al
              computerului înainte să modifici setări sau să încerci o
              restaurare.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              Acest ghid este pentru probleme comune de configurare. Evită
              formatarea, restaurarea sau deschiderea dispozitivului până nu știi
              pentru ce flux de lucru și sistem de operare a fost pregătit.
            </p>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Primele verificări
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Începe aici înainte să schimbi ceva.
            </h2>

            <ul className="mt-8 grid gap-4 text-sm leading-7 text-white/75 md:grid-cols-2">
              {quickChecks.map((check) => (
                <li key={check}>✓ {check}</li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Probleme frecvente
            </p>

            <div className="mt-7 space-y-5">
              {issues.map((issue) => (
                <article
                  key={issue.number}
                  className="grid gap-5 rounded-[24px] border border-black/10 bg-white p-7 md:grid-cols-[90px_1fr]"
                >
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-blue-600">
                    {issue.number}
                  </p>

                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                      {issue.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                      {issue.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[30px] bg-[#e9e2d6] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Flux Mac
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em]">
                Finder pe macOS modern.
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-700">
                Conectează iPod-ul folosind un cablu cu transfer de date, apoi
                caută-l în Finder la Locations. Dacă nu apare, testează alt
                cablu și alt port USB înainte să încerci pași mai avansați.
              </p>
            </article>

            <article className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Flux Windows
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em]">
                iTunes pentru iPod Classic.
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-700">
                Conectează iPod-ul direct la PC, apoi deschide iTunes și caută
                butonul dispozitivului. Verifică cablul, portul USB și
                instalarea iTunes înainte să presupui că există o problemă
                hardware.
              </p>
            </article>
          </section>

          <section className="mt-14 rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Înainte de restaurare sau formatare
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Oprește-te și confirmă fluxul de lucru dorit.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
              Restaurarea sau formatarea poate șterge muzica și poate schimba
              felul în care dispozitivul funcționează cu computerul tău. Dacă nu
              ești sigur dacă iPod-ul a fost pregătit pentru Mac, Windows, iPod
              OS standard sau Rockbox, contactează Clickwheel înainte să faci
              acest pas.
            </p>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Ai nevoie de un alt punct de plecare?
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Citește ghidurile de configurare înainte să modifici dispozitivul.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/ro/guides/music"
                className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Configurare muzică →
              </Link>

              <Link
                href="/ro/guides/rockbox"
                className="rounded-full border border-white/25 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white"
              >
                Ghid Rockbox →
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}