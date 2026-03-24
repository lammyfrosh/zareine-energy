import Reveal from "@/components/Reveal";

export default function HomeInvestor() {
  return (
    <section className="relative overflow-hidden bg-[var(--z-navy)] py-28 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,212,251,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(86,185,238,0.08),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        
        {/* TEXT SIDE */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
              Investor Relations
            </p>

            <h2 className="mt-4 display-font text-4xl font-semibold tracking-tight sm:text-5xl">
              Structured opportunities designed for long-term value creation
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Zarein Energy provides access to infrastructure-led investment
              opportunities backed by disciplined project execution,
              commercial clarity, and a long-term strategic outlook.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/investor-relations"
                className="rounded-full bg-[var(--z-blue)] px-7 py-3.5 text-sm font-semibold text-[var(--z-navy)] shadow-[0_14px_40px_rgba(143,212,251,0.28)] transition duration-300 hover:scale-[1.02]"
              >
                Explore Opportunities
              </a>

              <a
                href="mailto:invest@zareinenergy.com"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/30 hover:bg-white/15"
              >
                invest@zareinenergy.com
              </a>
            </div>

            {/* Key metrics feel */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                "Infrastructure Focus",
                "Long-term Projects",
                "Energy Sector Depth",
                "Execution Discipline",
                "Strategic Partnerships",
                "Scalable Delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* IMAGE SIDE */}
        <Reveal delay={0.1}>
          <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
            <img
              src="/images/investor-meeting.png"
              alt="Energy investment strategy meeting"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,14,28,0.85),rgba(6,14,28,0.25),transparent)]" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-8">
              <h3 className="text-2xl font-semibold">
                Investment Highlights
              </h3>

              <ul className="mt-5 space-y-3 text-white/80">
                <li>• Diversified infrastructure portfolio</li>
                <li>• Strong commercial positioning</li>
                <li>• Institutional-grade structuring</li>
                <li>• Long-term operational value focus</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}