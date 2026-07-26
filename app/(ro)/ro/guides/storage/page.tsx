import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const storageOptions = [
  {
    size: "256GB",
    title: "O bibliotecă practică pentru zi cu zi.",
    description:
      "O opțiune echilibrată pentru majoritatea ascultătorilor care vor o colecție serioasă fără să construiască o bibliotecă extrem de mare.",
    bestFor: [
      "Ascultare zilnică",
      "Biblioteci muzicale la calitate standard",
      "Primul iPod Classic restaurat",
    ],
  },
  {
    size: "512GB",
    title: "Mai mult spațiu pentru colecții muzicale serioase.",
    description:
      "O alegere foarte bună pentru cei care au biblioteci mai mari, mai multe albume și fișiere de calitate mai ridicată.",
    bestFor: [
      "Colecții personale mari",
      "Mai multă muzică lossless",
      "Utilizare zilnică pe termen lung",
    ],
  },
  {
    size: "1TB",
    title: "Configurația maximă Clickwheel.",
    description:
      "Cea mai mare opțiune de stocare suportată, destinată colecționarilor și celor care vor să păstreze o bibliotecă muzicală foarte mare pe un singur dispozitiv.",
    bestFor: [
      "Biblioteci muzicale foarte mari",
      "Colecționari",
      "Configurații de referință cu capacitate mare",
    ],
  },
] as const;

export default function RomanianStorageGuidePage() {
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
            Ghid de stocare
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            De câtă stocare pe iPod
            <br />
            ai nevoie cu adevărat?
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Un ghid simplu pentru alegerea între 256GB, 512GB și 1TB pentru
            iPod-ul tău Classic restaurat.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              Stocarea este una dintre cele mai importante alegeri într-o
              configurație Clickwheel. Dimensiunea potrivită depinde de câtă
              muzică ai, ce calitate au fișierele și dacă vrei un singur
              dispozitiv pentru toată biblioteca sau o selecție mai simplă
              pentru zi cu zi.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              Fiecare model Clickwheel incepe cu 128GB inclusi. Upgrade-urile
              de stocare sunt disponibile in variante de 256GB, 512GB si 1TB.
              iPod Classic 6th Generation, 2007–2008, este limitat la 128GB.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {storageOptions.map((option) => (
              <section
                key={option.size}
                className="rounded-[28px] border border-black/10 bg-white p-7"
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
                  Potrivit pentru
                </p>

                <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                  {option.bestFor.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Recomandarea Clickwheel
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Începe cu biblioteca pe care o folosești cu adevărat.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Pentru majoritatea oamenilor, 256GB sau 512GB sunt mai mult decât
              suficiente. Alege 1TB atunci când știi că ai o bibliotecă foarte
              mare și vrei capacitate maximă într-un singur dispozitiv.
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
