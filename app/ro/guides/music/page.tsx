import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const standardSteps = [
  {
    number: "01",
    title: "Pregătește biblioteca muzicală",
    description:
      "Organizează fișierele înainte de sincronizare. Numele corecte ale artiștilor, albumelor, pieselor și copertelor fac biblioteca mult mai ușor de navigat pe iPod.",
  },
  {
    number: "02",
    title: "Folosește un cablu 30-pin cu transfer de date",
    description:
      "Unele cabluri de schimb încarcă iPod-ul, dar nu permit transferul de date. Folosește un cablu care suportă atât încărcarea, cât și sincronizarea.",
  },
  {
    number: "03",
    title: "Conectează iPod-ul direct la computer",
    description:
      "Evită hub-urile USB nesigure atunci când este posibil. Conectează iPod-ul direct la Mac sau PC și așteaptă să apară în sistem.",
  },
  {
    number: "04",
    title: "Alege metoda de sincronizare",
    description:
      "Pe Mac-urile moderne, sincronizarea iPod-ului se face prin Finder. Pe Windows, iPod Classic se sincronizează prin iTunes.",
  },
  {
    number: "05",
    title: "Selectează muzica și sincronizează",
    description:
      "Alege biblioteca completă sau artiști, albume și playlisturi selectate. Apasă Apply sau Sync și așteaptă finalizarea transferului înainte de deconectare.",
  },
];

const tips = [
  "Folosește playlisturi pentru categorii simple de ascultare.",
  "Verifică artwork-ul albumelor înainte de sincronizare.",
  "Nu deconecta iPod-ul în timpul sincronizării.",
  "Păstrează o copie de siguranță a bibliotecii muzicale pe computer.",
];

export default function RomanianMusicGuidePage() {
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
            Pentru început
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Cum adaugi muzică
            <br />
            pe un iPod Classic.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Află diferența dintre sincronizarea standard iPod, transferurile
            prin Rockbox, formatarea pentru Mac și Windows, plus ce cabluri ai
            nevoie.
          </p>
        </div>
      </section>

      <article className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <section className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-700">
              Există două metode principale pentru a pune muzică pe o
              configurație Clickwheel: sincronizarea standard prin iPod OS sau
              transferul de fișiere prin Rockbox. Alegerea potrivită depinde de
              computer, formatele audio și felul în care preferi să îți
              organizezi biblioteca.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-700">
              Alege fluxul de lucru înainte ca dispozitivul să fie pregătit.
              Formatarea și compatibilitatea cu sistemul de operare sunt mai
              ușor de stabilit înainte să adaugi muzica.
            </p>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-black/10 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                iPod OS standard
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                Sincronizare clasică.
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-600">
                Potrivită pentru cei care vor experiența familiară Apple iPod,
                playlisturi, coperti de album și o bibliotecă muzicală
                tradițională.
              </p>

              <div className="mt-7 space-y-4 text-sm text-neutral-700">
                <p>
                  <span className="font-semibold">Mac:</span> folosește Finder
                  pe versiunile moderne de macOS.
                </p>

                <p>
                  <span className="font-semibold">Windows:</span> folosește
                  iTunes pentru sincronizarea iPod Classic.
                </p>
              </div>
            </article>

            <article className="rounded-[28px] bg-[#111111] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                Rockbox
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                Transfer direct de fișiere.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Rockbox este firmware alternativ pentru playere compatibile.
                Este util pentru biblioteci organizate în foldere, transferuri
                directe drag-and-drop și suport extins pentru formate audio.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Este mai potrivit pentru utilizatori care sunt confortabili cu
                organizarea manuală în foldere și vor mai mult control asupra
                redării și formatelor audio.
              </p>
            </article>
          </section>

          <section className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              iPod OS standard: pas cu pas
            </p>

            <div className="mt-7 space-y-5">
              {standardSteps.map((step) => (
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

          <section className="mt-14 rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Alegerea formatului
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Mac și Windows nu sunt întotdeauna interschimbabile.
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-neutral-600">
              <p>
                Un iPod pregătit pentru Windows folosește frecvent formatare
                FAT32. De obicei este cea mai practică alegere pentru cei care
                pot folosi atât Windows, cât și macOS.
              </p>

              <p>
                Un iPod formatat pentru Mac poate să nu fie recunoscut nativ pe
                Windows. Spune Clickwheel ce computer folosești înainte ca
                dispozitivul să fie pregătit.
              </p>

              <p>
                Pentru configurațiile Rockbox, recomandăm confirmarea fluxului
                de lucru dorit înainte de configurare. Putem pregăti
                dispozitivul în jurul sistemului preferat.
              </p>
            </div>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#e9e2d6] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Verifică cablul
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Încărcarea nu înseamnă mereu sincronizare.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-700">
              Unele cabluri 30-pin sunt doar pentru încărcare. Pot alimenta
              iPod-ul, dar nu îl vor face să apară în Finder sau iTunes și nu
              pot transfera muzică. Folosește un cablu testat care suportă atât
              încărcarea, cât și transferul de date.
            </p>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Ghidul de troubleshooting include și verificări pentru cabluri,
              erori de sincronizare, probleme de formatare și dispozitive care
              nu sunt detectate.
            </p>

            <Link
              href="/ro/guides/troubleshooting"
              className="mt-6 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-800"
            >
              Vezi ghidul de troubleshooting →
            </Link>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#f4f1eb] p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Sfaturi Clickwheel
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Păstrează biblioteca curată de la început.
            </h2>

            <ul className="mt-7 grid gap-4 text-sm leading-7 text-neutral-700 md:grid-cols-2">
              {tips.map((tip) => (
                <li key={tip}>✓ {tip}</li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-[30px] bg-[#111111] p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Vrei un punct de plecare mai bun?
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
              Construiește un clasic restaurat în jurul bibliotecii tale.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Alege generația, stocarea, bateria, finisajul, software-ul și
              accesoriile în configuratorul Clickwheel.
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