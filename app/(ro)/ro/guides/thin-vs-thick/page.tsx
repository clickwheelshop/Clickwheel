import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const differences = [
  {
    title: "Adâncimea capacului spate",
    thin: "Capac spate mai subțire, cu mai puțin spațiu intern.",
    thick: "Capac spate mai adânc, cu mai mult spațiu intern.",
  },
  {
    title: "Opțiuni de baterie",
    thin: "De obicei mai potrivit pentru configurații de baterie echilibrate.",
    thick: "Oferă adesea mai mult spațiu pentru baterii mai mari.",
  },
  {
    title: "Stocarea originală",
    thin: "Asociat frecvent cu hard diskuri originale de capacitate mai mică.",
    thick: "Întâlnit frecvent cu hard diskuri originale mai mari.",
  },
  {
    title: "Cum se simte în mână",
    thin: "Mai apropiat de profilul ușor și subțire al iPod Classic.",
    thick: "Se simte mai solid în mână și puțin mai greu.",
  },
];

const chooseThin = [
  "Preferi silueta mai subțire a iPod Classic.",
  "Vrei un dispozitiv mai ușor pentru utilizare zilnică.",
  "Construiești în jurul unei baterii echilibrate și al stocării flash.",
  "Apreciezi cel mai curat profil exterior posibil.",
];

const chooseThick = [
  "Vrei cea mai mare flexibilitate internă.",
  "Iei în calcul o configurație cu baterie mai mare.",
  "Preferi senzația mai solidă a unui iPod clasic.",
  "Piesele selectate necesită spațiu intern suplimentar.",
];

export default function RomanianThinVsThickGuidePage() {
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
            Restaurare
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            iPod Classic subțire sau gros:
            <br />
            care este diferența?
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Adâncimea capacului spate influențează aspectul, senzația în mână și
            piesele care pot încăpea în interiorul unui iPod.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              „Subțire” și „gros” se referă la adâncimea capacului spate al
              iPod-ului. Privite din față, cele două variante pot arăta foarte
              asemănător. Diferența importantă este spațiul intern disponibil în
              spatele plăcii frontale.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              Acest lucru contează atunci când alegi bateria, configurația de
              stocare și capacul spate. Cea mai bună opțiune nu este mereu cea
              mai subțire sau cea mai mare: depinde de configurația pe care o
              vrei.
            </p>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Carcasă subțire
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">
                Subțire, curată, potrivită zilnic.
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-600">
                Un iPod Classic subțire păstrează profilul compact familiar.
                Este o alegere bună pentru cei care vor un dispozitiv elegant,
                de zi cu zi, mai ușor în mână.
              </p>

              <div className="mt-8 h-24 rounded-[18px] bg-gradient-to-r from-[#c7c7c7] via-[#f7f7f7] to-[#9b9b9b] shadow-inner" />
            </article>

            <article className="rounded-[30px] bg-[#111111] p-8 text-white md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                Carcasă groasă
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">
                Mai mult spațiu, mai multă flexibilitate.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65">
                O carcasă groasă oferă mai multă adâncime internă. Poate fi
                utilă atunci când configurația are nevoie de spațiu suplimentar
                pentru baterii, componente de stocare sau alte piese interne.
              </p>

              <div className="mt-8 h-32 rounded-[18px] bg-gradient-to-r from-[#303030] via-[#777777] to-[#1e1e1e] shadow-inner" />
            </article>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Comparație directă
            </p>

            <div className="mt-7 overflow-hidden rounded-[28px] border border-black/10 bg-white">
              <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-black/10 bg-[#f1eee8] px-6 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                <p>Caracteristică</p>
                <p>Subțire</p>
                <p>Gros</p>
              </div>

              {differences.map((difference) => (
                <div
                  key={difference.title}
                  className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 border-b border-black/10 px-6 py-6 last:border-b-0"
                >
                  <p className="text-sm font-semibold text-black">
                    {difference.title}
                  </p>

                  <p className="text-sm leading-6 text-neutral-600">
                    {difference.thin}
                  </p>

                  <p className="text-sm leading-6 text-neutral-600">
                    {difference.thick}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[30px] bg-[#e9e2d6] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Alege subțire dacă
              </p>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
                {chooseThin.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Alege gros dacă
              </p>

              <ul className="mt-7 space-y-4 text-sm leading-7 text-neutral-700">
                {chooseThick.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="mt-14 rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Notă importantă despre compatibilitate
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Nu toate combinațiile se potrivesc pe fiecare iPod.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
              Generațiile de iPod, capacele spate, bateriile și ansamblurile de
              stocare nu au toate aceeași compatibilitate. Clickwheel trebuie
              să confirme modelul exact și componentele dorite înainte ca o
              configurație să fie pregătită.
            </p>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Construiește în jurul priorităților tale
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Alege carcasa potrivită pentru configurația ta.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Selectează modelul, bateria, stocarea și finisajul în
              configuratorul Clickwheel. Compatibilitatea carcasei poate fi apoi
              verificată în funcție de configurația aleasă.
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