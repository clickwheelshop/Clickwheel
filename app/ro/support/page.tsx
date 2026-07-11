import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const supportTopics = [
  {
    number: "01",
    title: "Configurare și muzică",
    description:
      "Ajutor cu Finder, iTunes, Rockbox, cabluri de date și pregătirea bibliotecii muzicale.",
    href: "/ro/guides/music",
    action: "Ghid muzică →",
  },
  {
    number: "02",
    title: "Depanare",
    description:
      "Verificări de conexiune, probleme de sincronizare, compatibilitate Mac și Windows și probleme cu baza de date Rockbox.",
    href: "/ro/guides/troubleshooting",
    action: "Depanare →",
  },
  {
    number: "03",
    title: "Servicii și upgrade-uri",
    description:
      "Upgrade-uri de stocare, baterii de schimb, restaurare carcasă și diagnostic.",
    href: "/ro/services/upgrade",
    action: "Cere service →",
  },
  {
    number: "04",
    title: "Cerere garantie",
    description:
      "Pentru clienti Clickwheel cu o comanda existenta si o posibila problema de defect.",
    href: "/ro/support/warranty-claim",
    action: "Cere garantie →",
  },
  {
    number: "05",
    title: "Anuleaza o comanda",
    description:
      "Pentru comenzi Clickwheel existente care poate mai pot fi anulate inainte de expediere.",
    href: "/ro/support/cancellation-request",
    action: "Cere anulare →",
  },
  {
    number: "06",
    title: "Returneaza o comanda",
    description:
      "Pentru comenzi Clickwheel expediate sau livrate care au nevoie de analiza pentru retur sau retragere.",
    href: "/ro/support/return-request",
    action: "Cere retur →",
  },
];

const faqs = [
  {
    question: "iPod-ul meu se încarcă, dar nu apare pe computer.",
    answer:
      "Începe cu cablul. Unele cabluri 30-pin de schimb oferă doar încărcare și nu pot transfera date. Încearcă un cablu testat cu transfer de date și un alt port USB înainte să modifici setări.",
  },
  {
    question: "Pot folosi iPod-ul atât cu Mac, cât și cu Windows?",
    answer:
      "Depinde de felul în care a fost pregătit dispozitivul. Un flux Windows/FAT32 este în general mai flexibil pentru cei care pot folosi ambele sisteme. Verifică înainte să restaurezi sau să reformatezi iPod-ul.",
  },
  {
    question: "Poate Clickwheel instala Rockbox?",
    answer:
      "Rockbox este oferit doar pentru configurații compatibile și testate. Este potrivit pentru cei care vor foldere muzicale drag-and-drop, suport extins pentru formate și control mai avansat asupra redării.",
  },
  {
    question: "Acceptați iPod-uri ale clienților pentru upgrade?",
    answer:
      "Da. Serviciile Clickwheel sunt gândite atât pentru configurații complete, cât și pentru iPod Classic compatibile trimise de clienți.",
  },
];

export default function RomanianSupportPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Suport
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Ajutor pentru
                <br />
                ascultare pe termen lung.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Ghiduri, ajutor pentru configurare și pași practici pentru
              restaurarea, upgrade-ul și folosirea unui iPod Classic.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Începe aici
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                Găsește următorul pas potrivit.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-600">
              Cele mai multe întrebări comune pot fi rezolvate prin ghiduri
              înainte ca dispozitivul să aibă nevoie de service.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {supportTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-[28px] border border-black/10 bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  {topic.number}
                </p>

                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                  {topic.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {topic.description}
                </p>

                <Link
                  href={topic.href}
                  className="mt-8 inline-flex text-sm font-semibold text-black transition hover:text-blue-600"
                >
                  {topic.action}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Înainte să restaurezi sau să formatezi
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Confirmă mai întâi fluxul de lucru.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Înainte să restaurezi un iPod, confirmă dacă a fost pregătit pentru
              Mac, Windows, iPod OS standard sau Rockbox. Restaurarea sau
              formatarea poate șterge muzica și poate schimba felul în care
              dispozitivul funcționează cu computerul tău.
            </p>
          </div>

          <div>
            <Link
              href="/ro/guides/troubleshooting"
              className="inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Citește ghidul de depanare →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Întrebări frecvente
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Răspunsuri clare înainte să modifici ceva.
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[24px] border border-black/10 bg-white p-7"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {faq.question}
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px] rounded-[30px] bg-[#e9e2d6] p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Suport pentru configurație
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                Plănuiești o configurație nouă sau un upgrade?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-700">
                Alege modelul, stocarea, bateria, finisajul și preferința de
                software în configuratorul Clickwheel.
              </p>
            </div>

            <Link
              href="/ro/build"
              className="inline-flex rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Configurează-l →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
