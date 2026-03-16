import Reveal from "@/components/Reveal";

export default function HomeInvestor() {
  return (
    <section className="bg-[var(--z-navy)] py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
              Investor Relations
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Structured opportunities for long-term energy investment
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Zarein Energy offers access to a portfolio of infrastructure-led
              energy opportunities positioned for scale, resilience, and
              long-term strategic value creation.
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
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--z-navy)]"
              >
                invest@zareinenergy.com
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md">
            <img
              src="/images/solar-engineers.png"
              alt="Engineers reviewing future energy infrastructure"
              className="h-[320px] w-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-semibold">Investment Highlights</h3>

              <ul className="mt-5 space-y-4 text-gray-300">
                <li>• Diversified project portfolio</li>
                <li>• Infrastructure-led growth positioning</li>
                <li>• Institutional-grade opportunity framing</li>
                <li>• Long-term operational value creation</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}