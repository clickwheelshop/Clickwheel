import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { products, type ProductTone } from "@/data/products";

const productStyles: Record<
  ProductTone,
  {
    background: string;
    device: string;
    wheel: string;
    screen: string;
  }
> = {
  dark: {
    background: "from-[#1f1f1f] via-[#444444] to-[#0b0b0b]",
    device: "border-neutral-600 bg-[#111111]",
    wheel: "bg-neutral-200",
    screen: "bg-white",
  },
  steel: {
    background: "from-[#d6d6d6] via-[#9c9c9c] to-[#4a4a4a]",
    device: "border-neutral-500 bg-[#f3f0ea]",
    wheel: "bg-neutral-700",
    screen: "bg-white",
  },
  silver: {
    background: "from-[#ede9df] via-[#c9c4ba] to-[#8f8980]",
    device: "border-neutral-400 bg-[#f7f1e7]",
    wheel: "bg-neutral-200",
    screen: "bg-white",
  },
  warm: {
    background: "from-[#7a4d2f] via-[#b77b4e] to-[#e4b880]",
    device: "border-[#6f4a2d] bg-[#f2e8d6]",
    wheel: "bg-[#3d2b20]",
    screen: "bg-white",
  },
};

const romanianProductCopy = {
  "the-studio": {
    model: "iPod Classic generația 7",
    description:
      "O configurație modernă, discretă și echilibrată, creată pentru ascultare zilnică.",
    overview:
      "The Studio combină aspectul clasic al unui iPod Classic cu stocare flash, baterie extinsă și o configurație atent aleasă pentru utilizare zilnică.",
    idealFor:
      "cei care vor un iPod Classic modern, curat și pregătit pentru o bibliotecă muzicală serioasă.",
    storage: "Stocare flash 512GB",
    battery: "Baterie 3000mAh",
    finish: "Negru mat",
    highlights: [
      "Stocare flash rapidă și silențioasă",
      "Baterie extinsă pentru utilizare zilnică",
      "Finisaj negru mat discret",
    ],
    includes: [
      "iPod Classic restaurat profesional",
      "Stocare flash și baterie nouă",
      "Cablu USB 30-pin",
      "Verificare funcțională înainte de livrare",
    ],
  },
  "the-collector": {
    model: "iPod Classic generația 5.5",
    description:
      "O configurație de capacitate mare pentru colecționari și biblioteci muzicale extinse.",
    overview:
      "The Collector este construit pentru cei care vor mult spațiu, o platformă Classic apreciată și o configurație orientată spre păstrarea unei colecții muzicale mari pe un singur dispozitiv.",
    idealFor:
      "colecționari, biblioteci muzicale foarte mari și utilizatori care preferă generația 5.5.",
    storage: "Stocare flash 1TB",
    battery: "Baterie extinsă",
    finish: "Finisaj clasic restaurat",
    highlights: [
      "Capacitate mare de 1TB",
      "Platformă Classic generația 5.5",
      "Configurată pentru biblioteci muzicale extinse",
    ],
    includes: [
      "iPod Classic restaurat profesional",
      "Stocare flash de capacitate mare",
      "Baterie nouă",
      "Verificare funcțională înainte de livrare",
    ],
  },
  "the-heritage": {
    model: "iPod Classic generația 6",
    description:
      "O configurație echilibrată care păstrează caracterul unei generații Classic apreciate.",
    overview:
      "The Heritage este pentru cei care preferă aspectul și senzația unui iPod Classic generația 6, modernizat cu stocare flash și componente atent selectate.",
    idealFor:
      "ascultare zilnică, colecționari și cei care vor un Classic cu stil atemporal.",
    storage: "Stocare flash 256GB",
    battery: "Baterie nouă",
    finish: "Argintiu clasic",
    highlights: [
      "Aspect clasic cu față din aluminiu",
      "Stocare flash pentru utilizare mai silențioasă",
      "Configurație echilibrată de zi cu zi",
    ],
    includes: [
      "iPod Classic restaurat profesional",
      "Stocare flash",
      "Baterie nouă",
      "Verificare funcțională înainte de livrare",
    ],
  },
  "the-signature": {
    model: "iPod Classic generația 7",
    description:
      "O configurație premium de 1TB pentru colecționari, cadouri și personalizare.",
    overview:
      "The Signature este o configurație Clickwheel premium, creată pentru cei care vor capacitate mare, opțiuni de personalizare și un Classic pregătit să devină al lor.",
    idealFor:
      "colecționari, cadouri speciale și configurații personalizate cu capacitate mare.",
    storage: "Stocare flash 1TB",
    battery: "Baterie 3000mAh",
    finish: "Gravură personalizată",
    highlights: [
      "Capacitate mare de 1TB",
      "Baterie extinsă de 3000mAh",
      "Opțiune de gravură personalizată",
    ],
    includes: [
      "iPod Classic restaurat profesional",
      "Stocare flash de 1TB",
      "Baterie 3000mAh",
      "Verificare funcțională înainte de livrare",
    ],
  },
} as const;

function ProductVisual({ tone }: { tone: ProductTone }) {
  const style = productStyles[tone];

  return (
    <div
      className={`relative min-h-[440px] overflow-hidden rounded-[34px] bg-gradient-to-br ${style.background}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.42),transparent_38%)]" />

      <div
        className={`absolute left-1/2 top-1/2 h-[320px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-[36px] border-[8px] ${style.device} shadow-[0_30px_60px_rgba(0,0,0,0.36)]`}
      >
        <div
          className={`absolute left-5 right-5 top-7 h-[132px] rounded-xl border-[5px] border-black ${style.screen}`}
        >
          <div className="px-4 py-4 text-[10px] font-semibold leading-5 text-black">
            <p className="rounded bg-blue-600 px-2 py-1 text-white">Muzică</p>
            <p className="mt-2">Videoclipuri</p>
            <p>Fotografii</p>
            <p>Setări</p>
          </div>
        </div>

        <div
          className={`absolute bottom-7 left-1/2 h-[106px] w-[106px] -translate-x-1/2 rounded-full ${style.wheel}`}
        >
          <div className="absolute left-1/2 top-1/2 h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100" />
        </div>
      </div>

      <div className="absolute bottom-6 right-6 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-black backdrop-blur">
        Restaurat profesional
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RomanianProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);
  const copy =
    romanianProductCopy[slug as keyof typeof romanianProductCopy];

  if (!product || !copy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="px-6 pb-8 pt-10 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href="/ro/shop"
            className="text-sm font-semibold text-neutral-600 transition hover:text-black"
          >
            ← Înapoi la colecție
          </Link>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <ProductVisual tone={product.tone} />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              {copy.model}
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              {copy.description}
            </p>

            <div className="mt-8 rounded-[24px] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Preț orientativ pentru configurație
              </p>

              <p className="mt-3 text-4xl font-semibold tracking-[-0.05em]">
                {product.price}
              </p>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Piesele finale, disponibilitatea și prețul sunt confirmate
                înainte de plată.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/ro/build"
                className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Configurează un Classic similar →
              </Link>

              <Link
                href="/ro/services"
                className="rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:border-black"
              >
                Vezi restaurarea
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Prezentare
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
              Un clasic modern,
              <br />
              construit cu intenție.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">
              {copy.overview}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
              Potrivit pentru: {copy.idealFor}
            </p>
          </div>

          <div className="rounded-[28px] bg-[#f4f1eb] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Configurație principală
            </p>

            <div className="mt-7 space-y-5 text-sm">
              <div className="flex justify-between gap-5 border-b border-black/10 pb-4">
                <span className="text-neutral-500">Stocare</span>
                <span className="text-right font-semibold">{copy.storage}</span>
              </div>

              <div className="flex justify-between gap-5 border-b border-black/10 pb-4">
                <span className="text-neutral-500">Baterie</span>
                <span className="text-right font-semibold">{copy.battery}</span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="text-neutral-500">Finisaj</span>
                <span className="text-right font-semibold">{copy.finish}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-2">
          <article className="rounded-[28px] border border-black/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Puncte forte
            </p>

            <ul className="mt-7 space-y-4 text-base text-neutral-700">
              {copy.highlights.map((highlight) => (
                <li key={highlight}>✓ {highlight}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[28px] bg-[#111111] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Inclus în configurație
            </p>

            <ul className="mt-7 space-y-4 text-base text-white/75">
              {copy.includes.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px] rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Fă-l al tău
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                Schimbă stocarea, finisajul, software-ul sau accesoriile.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
                Aceasta este o configurație de referință. Folosește
                configuratorul pentru a pregăti o variantă în jurul bibliotecii
                tale muzicale și preferințelor tale.
              </p>
            </div>

            <Link
              href="/ro/build"
              className="w-fit rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
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