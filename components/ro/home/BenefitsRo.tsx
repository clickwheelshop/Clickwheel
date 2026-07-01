const benefits = [
  {
    title: "Baterie extinsă",
    text: "Până la 3000mAh pentru zile întregi de muzică.",
    icon: "▯",
  },
  {
    title: "Stocare flash",
    text: "Stocare rapidă și fiabilă, până la 1TB.",
    icon: "▰",
  },
  {
    title: "Restaurat cu atenție",
    text: "Testat riguros și readus la viață cu grijă.",
    icon: "✦",
  },
  {
    title: "Garanție 1 an",
    text: "Susținem fiecare configurație pe care o livrăm.",
    icon: "◇",
  },
];

export function BenefitsRo() {
  return (
    <section className="bg-[#101010] text-white">
      <div className="mx-auto grid max-w-[1600px] md:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className={`flex gap-4 px-8 py-9 ${
              index !== benefits.length - 1
                ? "border-b border-white/15 md:border-b-0 md:border-r"
                : ""
            }`}
          >
            <div className="pt-0.5 text-3xl leading-none text-blue-500">
              {benefit.icon}
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide">
                {benefit.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/65">
                {benefit.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}