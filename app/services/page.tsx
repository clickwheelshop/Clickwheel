import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const services = [
  {
    number: "01",
    title: "Flash Storage Upgrade",
    description:
      "Replace the original hard drive with reliable flash storage for faster performance, quieter use and more space for music.",
    options: ["128GB", "256GB", "512GB", "1TB", "2TB"],
  },
  {
    number: "02",
    title: "Extended Battery",
    description:
      "Replace ageing batteries with modern high-capacity options for longer listening sessions and everyday reliability.",
    options: ["2000mAh", "3000mAh", "Battery health check"],
  },
  {
    number: "03",
    title: "Housing Restoration",
    description:
      "Refresh the exterior with replacement front plates, rear housings, click wheels, screens and selected colour options.",
    options: [
      "Front housing",
      "Rear housing",
      "Click wheel",
      "Screen replacement",
    ],
  },
  {
    number: "04",
    title: "Rear Steel Restoration",
    description:
      "Restore the stainless-steel rear housing with careful polishing for a cleaner, more refined finish.",
    options: [
      "Surface polishing",
      "Scratch reduction",
      "Mirror finish restoration",
    ],
  },
  {
    number: "05",
    title: "Rockbox Setup",
    description:
      "Install and configure Rockbox for expanded format support, themes, advanced playback controls and dual boot options.",
    options: [
      "Rockbox installation",
      "Dual boot setup",
      "Theme installation",
      "Music library setup",
    ],
  },
  {
    number: "06",
    title: "Diagnostics & Repair",
    description:
      "A practical assessment for devices with charging, storage, screen, button or headphone-jack issues.",
    options: [
      "Device inspection",
      "Charging issues",
      "Button repair",
      "Audio repair",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      <Navbar />

      <section className="border-b border-black/10 px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Services
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Restore what matters.
                <br />
                Upgrade what counts.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
              From flash storage and battery upgrades to complete cosmetic
              restoration, Clickwheel gives classic music players a second life.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Workshop Services
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Built around your device.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Send us your own iPod Classic or choose a restored Clickwheel
              build. We review each device and confirm the work before payment.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] md:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-semibold text-blue-600">
                    {service.number}
                  </span>

                  <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-neutral-500">
                    Clickwheel Workshop
                  </span>
                </div>

                <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">
                  {service.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {service.options.map((option) => (
                    <span
                      key={option}
                      className="rounded-full bg-[#f4f1eb] px-3 py-2 text-xs font-medium text-neutral-700"
                    >
                      {option}
                    </span>
                  ))}
                </div>

                <Link
                  href="/request-build"
                  className="mt-8 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Ask about this service →
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
              Send Your Own Device
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Already own an iPod Classic?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              We can assess your device for storage upgrades, battery
              replacement, cosmetic restoration or repair. Every project is
              reviewed before work begins.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-white/5 p-8">
            <p className="text-sm font-semibold text-white">
              What to include in your request
            </p>

            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/70">
              <li>• Your iPod model and storage capacity</li>
              <li>• A short description of the issue or upgrade</li>
              <li>• Photos of the front, rear and screen</li>
              <li>• Your preferred finish or storage option</li>
            </ul>

            <Link
              href="/request-build"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Start a request →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px] rounded-[30px] border border-black/10 bg-white p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Important
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Honest restoration expectations.
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600">
            Restoration improves the look and function of a classic device, but
            some deep scratches, dents, corrosion or internal faults may remain.
            Final options and pricing are confirmed after inspection.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}