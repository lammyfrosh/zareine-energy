import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    title: "Cleaner Power Pathways",
    text: "Our gas-to-power approach supports a more practical transition away from diesel and other higher-emission alternatives in high-demand environments.",
  },
  {
    title: "Operational Efficiency",
    text: "Structured energy systems, efficient generation assets, and disciplined delivery help reduce waste while improving reliability and performance.",
  },
  {
    title: "Future Readiness",
    text: "We develop infrastructure with long-term adaptability in mind, supporting evolving ESG expectations, energy resilience, and market needs.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[var(--z-blue-pale)] pt-24 text-[var(--z-text)]">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-sustainability-renewables.png"
              alt="Renewable and transition energy infrastructure"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,24,0.58)_0%,rgba(3,10,24,0.72)_42%,rgba(3,10,24,0.88)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,212,251,0.16),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-28 text-white lg:px-8 lg:py-32">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--z-blue)]">
                Sustainability
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.02]">
                A practical transition pathway for reliable power
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Zarein Energy’s infrastructure approach is built around cleaner
                energy pathways, stronger operational efficiency, and a
                long-term view of resilience, value creation, and responsible
                growth.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative px-6 py-20 lg:px-8">
          <div className="soft-grid absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <div className="max-w-4xl space-y-6 text-lg leading-8 text-gray-700">
                <p>
                  Zarein Energy’s gas-to-power focus supports a cleaner and more
                  reliable alternative to diesel and heavy fuel oil in
                  high-demand environments.
                </p>
                <p>
                  Our infrastructure direction also considers long-term ESG
                  alignment, operational efficiency, and the need to build
                  systems that remain relevant as the energy landscape evolves.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.07}>
                  <article className="rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                    <div className="mb-6 inline-flex rounded-full border border-[var(--z-blue)]/30 bg-[var(--z-blue)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--z-navy)]">
                      Sustainability
                    </div>

                    <h2 className="text-2xl font-semibold text-[var(--z-navy)]">
                      {pillar.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      {pillar.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}