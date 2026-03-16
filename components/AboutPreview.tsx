import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="group overflow-hidden rounded-[2rem] shadow-[0_20px_80px_rgba(15,23,42,0.12)] ring-1 ring-gray-200">
            <img
              src="/images/engineer-pipeline.png"
              alt="Engineer inspecting industrial infrastructure"
              className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
            About Zarein
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
            Nigeria’s next-generation energy infrastructure partner
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Zarein Energy is an independent Nigerian energy company focused on
              developing reliable infrastructure solutions for industrial,
              commercial, and large-scale power demand environments.
            </p>

            <p>
              Our model combines technical capability, disciplined execution,
              and strategic partnerships to deliver projects built for
              long-term operational value, resilience, and growth.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/about"
              className="rounded-full bg-[var(--z-navy)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Learn More
            </a>

            <a
              href="/projects"
              className="rounded-full border border-[var(--z-navy)]/15 px-6 py-3 text-sm font-semibold text-[var(--z-navy)] transition hover:bg-[var(--z-blue-pale)]"
            >
              View Projects
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}