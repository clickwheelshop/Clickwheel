import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const benefits = [
  {
    title: "Transfer direct de fișiere",
    description:
      "Poți organiza muzica în foldere și copia fișiere direct pe dispozitiv, fără să depinzi doar de sincronizarea tradițională prin iTunes sau Finder.",
  },
  {
    title: "Mai multe formate audio",
    description:
      "Rockbox suportă o gamă mai largă de formate muzicale decât software-ul standard iPod, utilă pentru cei care folosesc FLAC sau biblioteci organizate în foldere.",
  },
  {
    title: "Mai mult control asupra redării",
    description:
      "Temele, setările de redare, opțiunile pentru bazele de date și personalizarea avansată fac Rockbox atractiv pentru utilizatorii experimentați.",
  },
];

const considerations = [
  "Rockbox este mai potrivit pentru utilizatori confortabili cu organizarea muzicii în foldere.",
  "Interfața standard iPod este de obicei mai simplă pentru cei care vor o experiență clasică în stil Apple.",
  "Compatibilitatea și metoda de instalare depind de generația exactă a iPod-ului.",
  "Clickwheel ar trebui să ofere Rockbox doar pe configurații testate pentru modelul respectiv.",
];

export default function RomanianRockboxGuidePage() {
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
            Software
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Rockbox pe iPod Classic:
            <br />
            ce este și de ce contează.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Rockbox este firmware alternativ pentru playere compatibile. Oferă
            utilizatorilor avansați mai mult control asupra fișierelor muzicale,
            redării și personalizării interfeței.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              Software-ul standard iPod este construit în jurul unei biblioteci
              muzicale tradiționale și al unui flux de sincronizare. Rockbox
              este diferit: este destinat celor care vor mai multă flexibilitate,
              organizare a muzicii în foldere și suport pentru formate
              suplimentare.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              Nu este automat cea mai bună alegere pentru fiecare client
              Clickwheel. Opțiunea potrivită depinde de felul în care asculți
              muzică, de formatele pe care le ai și de preferința ta pentru
              simplitate sau control mai avansat.
            </p>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[28px] border border-black/10 bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                  Avantaj Rockbox
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                  {benefit.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-neutral-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <article className="rounded-[30px] bg-[#111111] p-8 text-white md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                Rockbox ți se poate potrivi dacă
              </p>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-white/75">
                <li>✓ Preferi foldere muzicale drag-and-drop.</li>
                <li>✓ Folosești FLAC sau alte formate audio non-standard.</li>
                <li>✓ Vrei teme și control mai avansat asupra redării.</li>
                <li>✓ Ești confortabil cu un flux de lucru mai tehnic.</li>
              </ul>
            </article>

            <article className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                iPod OS standard ți se poate potrivi dacă
              </p>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
                <li>✓ Vrei interfața familiară Apple iPod.</li>
                <li>✓ Preferi sincronizarea prin Finder sau iTunes.</li>
                <li>✓ Folosești playlisturi, coperti de album și biblioteci simple.</li>
                <li>✓ Vrei cea mai puțin tehnică configurare.</li>
              </ul>
            </article>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#e9e2d6] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Important înainte să alegi Rockbox
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Instalarea depinde de generația exactă a iPod-ului.
            </h2>

            <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
              {considerations.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Abordarea Clickwheel
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Pregătim Rockbox doar acolo unde are sens.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
              Rockbox nu ar trebui tratat ca o opțiune bifată automat pentru
              fiecare configurație. Clickwheel îl va oferi doar pe modele
              compatibile și testate și va confirma fluxul de lucru dorit înainte
              de configurare.
            </p>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Configurează software-ul
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Alege iPod OS standard sau Rockbox în configurația ta.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Configuratorul Clickwheel îți permite să alegi preferința de
              software pentru solicitarea ta.
            </p>

            <Link
              href="/ro/build"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Configurează-l →
            </Link>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}