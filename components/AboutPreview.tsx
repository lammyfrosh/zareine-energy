import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,212,251,0.12),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        
        {/* IMAGE */}
        <Reveal>
          <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_25px_90px_rgba(15,23,42,0.15)] ring-1 ring-black/5">
            <img
              src="/images/about-engineer.png"
              alt="Energy engineer inspecting infrastructure"
              className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,24,47,0.35),transparent)]" />
          </div>
        </Reveal>

        {/* TEXT */}
        <Reveal delay={0.1}>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
              About Zarein
            </p>

            <h2 className="mt-4 display-font text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
              Building Nigeria’s next generation of dependable energy infrastructure
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
              <p>
                Zarein Energy is an independent Nigerian energy company focused
                on delivering reliable, scalable infrastructure solutions for
                industrial, commercial, and large-scale power demand environments.
              </p>

              <p>
                Our approach combines technical depth, disciplined execution,
                and strategic partnerships to develop energy assets that support
                long-term performance, resilience, and sustainable growth.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/about"
                className="rounded-full bg-[var(--z-navy)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(13,47,79,0.25)] transition duration-300 hover:scale-[1.02]"
              >
                Learn More
              </a>

              <a
                href="/projects"
                className="rounded-full border border-[var(--z-navy)]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[var(--z-navy)] transition duration-300 hover:bg-[var(--z-blue-pale)]"
              >
                View Projects
              </a>
            </div>

            {/* highlights */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                "Industrial Power",
                "Gas-to-Power",
                "Embedded Energy",
                "Infrastructure Delivery",
                "Strategic Partnerships",
                "Operational Excellence",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[rgba(13,47,79,0.08)] bg-white px-4 py-3 text-sm text-gray-600 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}