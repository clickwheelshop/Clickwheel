import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const categories = [
  {
    title: "Cabluri și încărcare",
    description:
      "Cabluri 30-pin fiabile, încărcătoare și accesorii esențiale pentru zi cu zi.",
    items: ["Cablu USB 30-pin", "Încărcător de priză", "Dock de încărcare"],
    visual: "cable",
  },
  {
    title: "Protecție",
    description:
      "Păstrează iPod-ul protejat acasă și în deplasare.",
    items: ["Husă de protecție", "Carcasă rigidă", "Folie pentru ecran"],
    visual: "case",
  },
  {
    title: "Audio",
    description:
      "Accesorii pentru o experiență de ascultare mai bună.",
    items: ["Căști cu fir", "Transmițător Bluetooth", "Adaptor audio"],
    visual: "audio",
  },
  {
    title: "Kituri de upgrade",
    description:
      "Piese și unelte pentru clienții care vor să își construiască singuri configurația.",
    items: ["Kit baterie", "Kit stocare flash", "Kit click wheel"],
    visual: "upgrade",
  },
] as const;

const bundles = [
  {
    name: "Clickwheel Essentials",
    description:
      "Tot ce ai nevoie pentru încărcarea, conectarea și protejarea iPod-ului tău.",
    includes: ["Cablu USB 30-pin", "Încărcător de priză", "Husă de protecție"],
    price: "De la €39",
    tone: "light",
  },
  {
    name: "Daily Carry Bundle",
    description:
      "O configurație practică pentru ascultare zilnică.",
    includes: [
      "Cablu USB 30-pin",
      "Încărcător de priză",
      "Husă de protecție",
      "Căști cu fir",
    ],
    price: "De la €69",
    tone: "dark",
  },
  {
    name: "Collector Bundle",
    description:
      "O configurație atent aleasă pentru colecționari și îngrijire pe termen lung.",
    includes: [
      "Cablu premium",
      "Dock de încărcare",
      "Carcasă rigidă",
      "Husă pentru certificat",
    ],
    price: "De la €119",
    tone: "warm",
  },
] as const;

const visualClasses = {
  cable: "from-[#e8e2d8] via-[#cfc5b8] to-[#8b8176]",
  case: "from-[#c9c0b3] via-[#8c7f71] to-[#3f3934]",
  audio: "from-[#242424] via-[#4a4a4a] to-[#8c8c8c]",
  upgrade: "from-[#2f3d31] via-[#6f8866] to-[#b9c99f]",
};

function CategoryVisual({
  visual,
}: {
  visual: keyof typeof visualClasses;
}) {
  return (
    <div
      className={`relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br ${visualClasses[visual]}`}
    >
      {visual === "cable" && (
        <>
          <div className="absolute left-8 top-16 h-24 w-24 rounded-full border-[10px] border-white/80" />
          <div className="absolute left-28 top-24 h-3 w-36 rounded-full bg-white/80" />
          <div className="absolute right-9 top-[92px] h-10 w-8 rounded-md bg-neutral-800" />
        </>
      )}

      {visual === "case" && (
        <div className="absolute left-1/2 top-1/2 h-40 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-white/30 bg-black/75 shadow-2xl">
          <div className="absolute left-4 right-4 top-5 h-16 rounded-lg border-[4px] border-black bg-[#f7f1e7]" />
          <div className="absolute bottom-6 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-neutral-200" />
        </div>
      )}

      {visual === "audio" && (
        <>
          <div className="absolute left-[28%] top-14 h-28 w-20 rounded-[42px] border-[8px] border-neutral-100" />
          <div className="absolute right-[28%] top-14 h-28 w-20 rounded-[42px] border-[8px] border-neutral-100" />
          <div className="absolute left-1/2 top-[66px] h-20 w-32 -translate-x-1/2 rounded-t-full border-t-[8px] border-neutral-100" />
        </>
      )}

      {visual === "upgrade" && (
        <>
          <div className="absolute left-10 top-12 h-32 w-44 rounded-xl border border-white/20 bg-[#253128] shadow-xl">
            <div className="grid h-full grid-cols-5 gap-2 p-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-sm bg-[#d7cf7b]/80"
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 right-9 h-16 w-28 rounded-lg bg-black/50 shadow-xl" />
        </>
      )}
    </div>
  );
}

export default function RomanianAccessoriesPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Accesorii
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Completează-ți
                <br />
                configurația de ascultare.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              Cabluri, încărcare, protecție și accesorii audio selectate pentru
              iPod Classic restaurate și ascultare zilnică.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                Cumpără după categorie
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                Create pentru clasic.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-600">
              Începe cu accesoriile esențiale sau creează o configurație
              completă în jurul dispozitivului tău.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <article
                key={category.title}
                className="group rounded-2xl border border-black/10 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)]"
              >
                <CategoryVisual visual={category.visual} />

                <div className="px-2 pb-3 pt-6">
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    {category.title}
                  </h3>

                  <p className="mt-3 min-h-12 text-sm leading-6 text-neutral-600">
                    {category.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                    {category.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>

                  <button className="mt-6 flex items-center gap-2 text-sm font-semibold transition group-hover:text-blue-600">
                    Vezi categoria <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              Completează configurația
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Mai bune împreună.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/65">
              Pachete atent alese pentru configurații Clickwheel noi, cadouri și
              ascultare zilnică.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {bundles.map((bundle) => (
              <article
                key={bundle.name}
                className={`rounded-2xl border p-7 ${
                  bundle.tone === "dark"
                    ? "border-white/25 bg-white text-black"
                    : bundle.tone === "warm"
                      ? "border-[#c9aa78]/35 bg-[#2a211a]"
                      : "border-white/15 bg-white/5"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                    bundle.tone === "dark" ? "text-blue-600" : "text-blue-300"
                  }`}
                >
                  Pachet selectat
                </p>

                <div className="mt-5 flex items-start justify-between gap-5">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                    {bundle.name}
                  </h3>

                  <span className="whitespace-nowrap text-sm font-semibold">
                    {bundle.price}
                  </span>
                </div>

                <p
                  className={`mt-4 text-sm leading-6 ${
                    bundle.tone === "dark"
                      ? "text-neutral-600"
                      : "text-white/65"
                  }`}
                >
                  {bundle.description}
                </p>

                <ul
                  className={`mt-7 space-y-3 text-sm ${
                    bundle.tone === "dark"
                      ? "text-neutral-700"
                      : "text-white/75"
                  }`}
                >
                  {bundle.includes.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>

                <button
                  className={`mt-8 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    bundle.tone === "dark"
                      ? "bg-black text-white hover:bg-neutral-800"
                      : "bg-white text-black hover:bg-neutral-200"
                  }`}
                >
                  Adaugă pachetul →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-8 rounded-[30px] border border-black/10 bg-white p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Configurezi un iPod personalizat?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Adaugă accesoriile direct în configurația ta.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
              Când configurezi un dispozitiv Clickwheel, poți adăuga un cablu,
              încărcător, carcasă de protecție sau un pachet complet înainte de
              comandă.
            </p>
          </div>

          <a
            href="/ro/build"
            className="w-fit rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Configurează-l →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}