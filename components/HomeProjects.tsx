import Reveal from "@/components/Reveal";

const projects = [
  {
    number: "01",
    title: "Amuwo Odofin IPP",
    text: "A flagship embedded power project designed to support major commercial and distribution demand clusters.",
  },
  {
    number: "02",
    title: "Kwale Gas Processing Plant",
    text: "Gas infrastructure development focused on stable supply and scalable long-term energy delivery.",
  },
  {
    number: "03",
    title: "UPDC Estate Embedded Power",
    text: "A structured estate-scale power solution designed for reliability, quality and continuity of supply.",
  },
];

export default function HomeProjects() {
  return (
    <section className="page-shell relative overflow-hidden bg-[var(--z-blue-pale)] py-24 lg:py-28">
      <div className="soft-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.55),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue-2)]">
                Flagship Projects
              </p>
              <h2 className="mt-4 display-font text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
                Structured projects built for growth and credibility
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                Our project approach is designed around reliability, scalable
                infrastructure, and long-term delivery confidence for serious
                industrial and institutional stakeholders.
              </p>
            </div>

            <a
              href="/projects"
              className="inline-flex items-center text-sm font-semibold text-[var(--z-navy)] transition hover:translate-x-1 hover:opacity-80"
            >
              View all projects →
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          <Reveal delay={0.08}>
            <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_24px_90px_rgba(15,23,42,0.16)] ring-1 ring-black/5">
              <img
                src="/images/projects-turbine.png"
                alt="Large-scale refinery and energy infrastructure"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[500px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,18,35,0.82),rgba(8,18,35,0.18),transparent)]" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--z-blue)]">
                  Delivery Capability
                </p>
                <h3 className="mt-3 max-w-xl text-2xl font-semibold text-white sm:text-3xl">
                  Infrastructure developed for reliability, scalability, and
                  long-term operational value
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                  We combine project discipline, industrial insight, and
                  practical execution standards to develop energy assets that
                  support performance and continuity across demanding
                  environments.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={0.12 + index * 0.08}>
                <div className="hover-lift h-full rounded-[2rem] border border-[rgba(13,47,79,0.08)] bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--z-blue-soft)] text-sm font-semibold text-[var(--z-navy)]">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-[var(--z-navy)]">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {project.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}