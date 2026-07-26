import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const factors = [
  {
    title: "Tipul de stocare",
    description:
      "Stocarea flash consumă în general mai puțină energie și elimină activitatea mecanică a hard diskului original.",
  },
  {
    title: "Capacitatea bateriei",
    description:
      "O baterie de schimb cu capacitate mai mare poate crește autonomia, mai ales în configurațiile construite în jurul stocării flash.",
  },
  {
    title: "Ecranul și iluminarea",
    description:
      "Utilizarea frecventă a ecranului și o iluminare de fundal setată pentru perioade lungi reduc autonomia.",
  },
  {
    title: "Formatul muzicii și utilizarea",
    description:
      "Bibliotecile mari, navigarea frecventă, volumul și obiceiurile de ascultare influențează autonomia reală.",
  },
];

const options = [
  {
    size: "2000mAh",
    title: "Opțiune echilibrată pentru zi cu zi.",
    description:
      "O baterie de schimb practică pentru cei care vor ascultare zilnică fiabilă fără o configurație extremă.",
    bestFor: [
      "Ascultare zilnică",
      "Configurații echilibrate",
      "Configurații standard de stocare",
    ],
  },
  {
    size: "3000mAh",
    title: "Opțiune pentru ascultare extinsă.",
    description:
      "O baterie cu capacitate mai mare pentru cei care vor mai mult timp între încărcări și o configurație orientată spre performanță.",
    bestFor: [
      "Configurații cu stocare flash",
      "Sesiuni lungi de ascultare",
      "Biblioteci muzicale mari",
    ],
  },
] as const;

export default function RomanianBatteryGuidePage() {
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
            Ghid baterie
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Cât ține bateria
            <br />
            unui iPod upgrade-at?
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Un ghid practic despre baterii de schimb, capacitate și factorii
            care afectează autonomia reală.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              Autonomia este unul dintre cele mai importante motive pentru
              restaurarea unui iPod Classic. Bateriile originale pot încă să
              funcționeze, însă vârsta și ciclurile repetate de încărcare pot
              face durata de utilizare imprevizibilă.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              O baterie modernă de schimb îmbunătățește fiabilitatea, dar
              autonomia exactă depinde de întreaga configurație și de modul în
              care este folosit dispozitivul. Clickwheel urmărește configurații
              echilibrate și testate, nu promisiuni nerealiste despre autonomie.
            </p>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Opțiuni de baterie
            </p>

            <div className="mt-7 grid gap-6 lg:grid-cols-2">
              {options.map((option) => (
                <article
                  key={option.size}
                  className="rounded-[28px] border border-black/10 bg-white p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                    {option.size}
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                    {option.title}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-neutral-600">
                    {option.description}
                  </p>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Potrivită pentru
                  </p>

                  <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                    {option.bestFor.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Ce afectează autonomia
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Capacitatea este doar o parte din imagine.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {factors.map((factor) => (
                <article
                  key={factor.title}
                  className="rounded-[22px] border border-white/15 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    {factor.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {factor.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Recomandarea Clickwheel
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Alege capacitatea bateriei în jurul configurației dorite.
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-neutral-600">
              <p>
                O baterie de 2000mAh este potrivită pentru o configurație
                echilibrată, folosită zilnic.
              </p>

              <p>
                O baterie de 3000mAh are mai mult sens alături de stocare flash
                și pentru cineva care apreciază mai mult timp de ascultare între
                încărcări.
              </p>

              <p>
                Compatibilitatea finală depinde de modelul ales, configurația de
                stocare și spațiul intern disponibil pentru dispozitivul
                respectiv.
              </p>
            </div>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#e9e2d6] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Obiceiuri bune pentru baterie
            </p>

            <ul className="mt-7 grid gap-4 text-sm leading-7 text-neutral-700 md:grid-cols-2">
              <li>✓ Folosește un cablu de încărcare și o sursă USB fiabile.</li>
              <li>
                ✓ Evită să lași un dispozitiv complet descărcat nefolosit pentru
                perioade lungi.
              </li>
              <li>
                ✓ Încarcă iPod-ul înainte de călătorii lungi sau sesiuni inițiale
                de configurare.
              </li>
              <li>
                ✓ Cere suport dacă încărcarea începe să devină inconsistentă.
              </li>
            </ul>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Configurează bateria
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Alege bateria potrivită pentru felul în care asculți muzică.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Selectează modelul, stocarea, bateria și accesoriile în
              configuratorul Clickwheel.
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