const benefits = [
  {
    title: "Extended Battery",
    text: "Up to 3000mAh for days of uninterrupted music.",
    icon: "▯",
  },
  {
    title: "Flash Storage",
    text: "Fast, reliable storage up to 1TB.",
    icon: "▰",
  },
  {
    title: "Expertly Restored",
    text: "Meticulously tested and brought back to life.",
    icon: "✦",
  },
  {
    title: "1 Year Warranty",
    text: "We stand behind every build we ship.",
    icon: "◇",
  },
];

export function Benefits() {
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