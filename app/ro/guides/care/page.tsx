import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const careSteps = [
  {
    number: "01",
    title: "Folosește o lavetă moale din microfibră",
    description:
      "Folosește o lavetă curată și uscată din microfibră pentru curățarea regulată. Este cea mai sigură alegere pentru fața iPod-ului, click wheel și capacul spate.",
  },
  {
    number: "02",
    title: "Nu pulveriza lichid direct pe iPod",
    description:
      "Nu pulveriza niciodată lichid de curățare direct pe dispozitiv. Umezeala poate pătrunde în jurul click wheel-ului, ecranului, conectorului dock sau mufei audio.",
  },
  {
    number: "03",
    title: "Curăță ecranul cu grijă",
    description:
      "Folosește presiune ușoară și evită materialele abrazive. Chiar și un ecran restaurat poate prinde zgârieturi de la lavete dure, prosoape de hârtie sau chei.",
  },
  {
    number: "04",
    title: "Protejează capacul spate polisat",
    description:
      "Capacele din oțel inoxidabil pot arăta rapid urme de degete și zgârieturi fine. O husă sau un sleeve ajută la protejarea finisajului în utilizarea zilnică.",
  },
];

const avoidItems = [
  "Prosoape de hârtie sau lavete abrazive",
  "Solvenți puternici sau produse agresive de curățare",
  "Pulverizarea lichidului direct pe dispozitiv",
  "Păstrarea iPod-ului împreună cu chei sau monede",
  "Lăsarea dispozitivului în mașini foarte fierbinți sau locuri umede",
];

const storageTips = [
  "Păstrează iPod-ul într-un loc uscat și răcoros.",
  "Folosește un sleeve sau o carcasă pentru utilizarea zilnică.",
  "Încarcă-l ocazional dacă nu va fi folosit pentru perioade lungi.",
  "Păstrează praful departe de conectorul dock și mufa audio.",
];

export default function RomanianCareGuidePage() {
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
            Îngrijire
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Cum cureți și protejezi
            <br />
            un iPod restaurat.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Obiceiuri simple care ajută ecranul, click wheel-ul și capacul spate
            să arate mai bine pentru mai mult timp.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              Un iPod restaurat este făcut pentru a fi folosit, dar puțină grijă
              face o diferență mare în timp. Fața, click wheel-ul și carcasa
              spate din oțel beneficiază de curățare simplă și depozitare mai
              sigură.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              Scopul nu este să îl păstrezi neatins. Scopul este să eviți
              zgârieturile inutile, umezeala și uzura cauzată de accesorii sau
              metode de curățare nepotrivite.
            </p>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Îngrijire zilnică
            </p>

            <div className="mt-7 space-y-5">
              {careSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 rounded-[24px] border border-black/10 bg-white p-7 md:grid-cols-[90px_1fr]"
                >
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-blue-600">
                    {step.number}
                  </p>

                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                      {step.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[30px] bg-[#e9e2d6] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Evită
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em]">
                Greșeli mici care produc uzură inutilă.
              </h2>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
                {avoidItems.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Depozitează-l corect
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em]">
                O rutină bună protejează finisajul.
              </h2>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
                {storageTips.map((tip) => (
                  <li key={tip}>✓ {tip}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Recomandare pentru utilizare zilnică
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Folosește protecție potrivită felului în care porți iPod-ul.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Un sleeve moale este ideal pentru protecție ușoară de zi cu zi. O
              carcasă rigidă este mai potrivită când iPod-ul călătorește într-o
              geantă cu cabluri, chei sau alte dispozitive.
            </p>

            <Link
              href="/ro/accessories"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Vezi accesoriile →
            </Link>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}