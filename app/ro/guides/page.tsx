import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const guides = [
  {
    category: "Pentru început",
    title: "Cum adaugi muzică pe un iPod Classic",
    description:
      "Un ghid practic pentru sincronizarea muzicii din macOS sau Windows.",
    readTime: "6 min de citit",
    visual: "music",
    href: "/ro/guides/music",
  },
  {
    category: "Software",
    title: "Rockbox pe iPod Classic: ce este și de ce contează",
    description:
      "Află ce schimbă Rockbox, ce formate suportă și când este potrivit pentru configurația ta.",
    readTime: "8 min de citit",
    visual: "rockbox",
    href: "/ro/guides/rockbox",
  },
  {
    category: "Stocare",
    title: "Cum alegi între 256GB, 512GB și 1TB",
    description:
      "Un ghid practic despre dimensiunea bibliotecii muzicale, fișiere lossless și utilizarea de zi cu zi.",
    readTime: "5 min de citit",
    visual: "storage",
   href: "/ro/guides/storage",
  },
  {
    category: "Baterie",
    title: "Cât ține bateria unui iPod upgrade-at?",
    description:
      "Ce afectează autonomia, cum funcționează capacitatea și când merită bateria de 3000mAh.",
    readTime: "4 min de citit",
    visual: "battery",
    href: "/ro/guides/battery",
  },
  {
    category: "Restaurare",
    title: "iPod Classic subțire sau gros: care este diferența?",
    description:
      "Înțelege adâncimea carcasei, compatibilitatea capacului spate și piesele potrivite pentru fiecare model.",
    readTime: "5 min de citit",
    visual: "classic",
   href: "/ro/guides/thin-vs-thick",
  },
  {
    category: "Îngrijire",
    title: "Cum cureți și protejezi un iPod restaurat",
    description:
      "Obiceiuri simple pentru a păstra ecranul, click wheel-ul și capacul spate în stare bună.",
    readTime: "3 min de citit",
    visual: "care",
    href: "/ro/guides/care",
  },
  {
    category: "Suport",
    title: "Rezolvarea problemelor la iPod Classic",
    description:
      "Verificări rapide pentru cabluri de date, sincronizare, Mac, Windows și biblioteci Rockbox.",
    readTime: "6 min de citit",
    visual: "troubleshooting",
    href: "/ro/guides/troubleshooting",
  },
] as const;

const visualClasses = {
  music: "from-[#e8e2d8] via-[#c7bfb3] to-[#867b70]",
  rockbox: "from-[#0e1c25] via-[#24475a] to-[#6e9a9b]",
  storage: "from-[#2a312b] via-[#697d67] to-[#b8c9a4]",
  battery: "from-[#a67442] via-[#d7b57d] to-[#f4e4c2]",
  classic: "from-[#1f1f1f] via-[#565656] to-[#bdbdbd]",
  care: "from-[#cfb48e] via-[#e7d7b9] to-[#fbf5e8]",
  troubleshooting: "from-[#2e2d2a] via-[#77716a] to-[#d8d1c6]",
};

function GuideVisual({
  visual,
}: {
  visual: keyof typeof visualClasses;
}) {
  return (
    <div
      className={`relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br ${visualClasses[visual]}`}
    >
      {visual === "music" && (
        <>
          <div className="absolute left-1/2 top-1/2 h-36 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[20px] border-[5px] border-neutral-800 bg-[#f7f1e7] shadow-xl">
            <div className="absolute left-3 right-3 top-4 h-12 rounded border-[3px] border-black bg-white" />

            <div className="absolute bottom-4 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-neutral-800">
              <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200" />
            </div>
          </div>

          <div className="absolute right-6 top-6 rounded-full bg-white/75 px-3 py-1 text-xs font-semibold">
            Muzică
          </div>
        </>
      )}

      {visual === "rockbox" && (
        <>
          <div className="absolute left-8 top-8 h-28 w-40 rounded-xl border border-white/20 bg-black/35 p-4 backdrop-blur">
            <p className="text-xs font-semibold text-white">Rockbox</p>

            <div className="mt-3 space-y-2">
              <div className="h-2 rounded bg-white/70" />
              <div className="h-2 w-4/5 rounded bg-white/45" />
              <div className="h-2 w-3/5 rounded bg-white/25" />
            </div>
          </div>

          <div className="absolute bottom-7 right-8 h-20 w-20 rounded-full border-[6px] border-white/80" />
        </>
      )}

      {visual === "storage" && (
        <>
          <div className="absolute left-9 top-10 h-28 w-40 rounded-xl bg-[#1b231d] p-4 shadow-xl">
            <div className="grid h-full grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="rounded-sm bg-[#d8ce79]" />
              ))}
            </div>
          </div>

          <div className="absolute bottom-7 right-8 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-black">
            1TB
          </div>
        </>
      )}

      {visual === "battery" && (
        <>
          <div className="absolute left-10 top-10 h-28 w-16 rounded-xl border-[5px] border-neutral-800 bg-[#f7e2a8] shadow-xl">
            <div className="absolute -top-3 left-1/2 h-3 w-8 -translate-x-1/2 rounded-t bg-neutral-800" />
            <div className="absolute inset-x-3 bottom-4 top-4 rounded bg-[#dfa63f]" />
          </div>

          <div className="absolute bottom-8 right-8 text-4xl font-semibold tracking-[-0.08em] text-black/70">
            3000
          </div>
        </>
      )}

      {visual === "classic" && (
        <div className="absolute left-1/2 top-1/2 h-40 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[22px] border-[6px] border-neutral-300 bg-[#f5f1e8] shadow-2xl">
          <div className="absolute left-4 right-4 top-5 h-16 rounded-lg border-[4px] border-black bg-white" />

          <div className="absolute bottom-5 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-neutral-800">
            <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200" />
          </div>
        </div>
      )}

      {visual === "care" && (
        <>
          <div className="absolute left-10 top-12 h-24 w-24 rounded-full bg-white/70 shadow-lg" />
          <div className="absolute left-20 top-16 h-16 w-16 rounded-full bg-[#f7f1e7] shadow-inner" />
          <div className="absolute right-9 top-8 h-32 w-12 rotate-[18deg] rounded-full bg-black/70" />
          <div className="absolute right-11 top-7 h-8 w-8 rounded-full bg-white/65" />
        </>
      )}

      {visual === "troubleshooting" && (
        <>
          <div className="absolute left-8 top-9 rounded-xl border border-white/20 bg-black/25 p-4 text-white">
            <p className="text-xs font-semibold">Verificare conexiune</p>
            <div className="mt-3 h-2 w-28 rounded bg-white/70" />
            <div className="mt-2 h-2 w-20 rounded bg-white/35" />
          </div>

          <div className="absolute bottom-7 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/85 text-2xl font-semibold text-black">
            ?
          </div>
        </>
      )}
    </div>
  );
}

export default function RomanianGuidesPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Ghiduri
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Ține muzica
                <br />
                în mișcare.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Ghiduri practice pentru iPod Classic, upgrade-uri, gestionarea
              muzicii, Rockbox și întreținerea pe termen lung.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Centrul de informații
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                Începe cu esențialul.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-600">
              Ghiduri pentru configurarea, restaurarea și întreținerea unui
              iPod Classic.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="group rounded-[28px] border border-black/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
              >
                <GuideVisual visual={guide.visual} />

                <div className="px-2 pb-3 pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                      {guide.category}
                    </p>

                    <p className="text-xs text-neutral-500">
                      {guide.readTime}
                    </p>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                    {guide.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-neutral-600">
                    {guide.description}
                  </p>

                  <Link
                    href={guide.href}
                    className="mt-6 inline-flex text-sm font-semibold text-black transition group-hover:text-blue-600"
                  >
                    Citește ghidul în engleză →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Ai nevoie de ajutor?
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Configurează-l sau trimite-ne clasicul tău.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Fie că vrei upgrade de stocare, baterie nouă sau restaurarea unui
              iPod preferat, Clickwheel te ajută să planifici următorul pas.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              href="/ro/build"
              className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Configurează-l →
            </Link>

            <Link
              href="/ro/services"
              className="rounded-full border border-white/25 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white"
            >
              Vezi serviciile →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}