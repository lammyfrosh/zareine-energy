import Reveal from "@/components/Reveal";

const GraphIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 19h16" />
    <path d="M7 15l3-3 3 2 4-5" />
    <path d="M17 9h3v3" />
  </svg>
);

export default function HomeInvestor() {
  return (
    <section className="bg-[var(--z-navy)] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
              Investor Relations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Structured opportunities for long-term energy investment
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Zarein Energy offers access to a diversified portfolio of
              gas-to-power and embedded infrastructure projects positioned for
              scale, resilience and long-term value creation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/investor-relations"
                className="rounded-full bg-[var(--z-blue)] px-6 py-3 text-sm font-semibold text-[var(--z-navy)] transition hover:opacity-90"
              >
                View Investor Page
              </a>

              <a
                href="mailto:invest@zareinenergy.com"
                className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--z-navy)]"
              >
                invest@zareinenergy.com
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="hover-lift rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
            <div className="inline-flex rounded-2xl bg-white/10 p-3 text-[var(--z-blue)]">
              <GraphIcon />
            </div>

            <h3 className="mt-5 text-2xl font-semibold">Investment Highlights</h3>

            <ul className="mt-5 space-y-4 text-gray-300">
              <li>• Diversified project portfolio</li>
              <li>• Gas-to-power infrastructure focus</li>
              <li>• Institutional-grade positioning</li>
              <li>• Long-term operational value</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
