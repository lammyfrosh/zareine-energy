const projects = [
  {
    title: "Amuwo Odofin IPP",
    text: "A flagship embedded power project designed to support major commercial and distribution demand clusters.",
  },
  {
    title: "Kwale Gas Processing Plant",
    text: "Gas infrastructure development focused on stable supply and scalable long-term energy delivery.",
  },
  {
    title: "UPDC Estate Embedded Power",
    text: "A structured estate-scale power solution designed for reliability, quality and continuity of supply.",
  },
];

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

export default function HomeProjects() {
  return (
    <section className="section-shell bg-[var(--z-bg)] py-24">
      <div className="soft-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-dark)]">
              Flagship Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--z-text)] sm:text-4xl">
              Structured projects built for growth and credibility
            </h2>
          </div>

          <a
            href="/projects"
            className="text-sm font-semibold text-[var(--z-dark)] transition hover:opacity-70"
          >
            View all projects →
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="hover-lift rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              <div className="inline-flex rounded-2xl bg-[var(--z-blue-soft)] p-3 text-[var(--z-dark)]">
                <BoltIcon />
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-[var(--z-dark)]">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">{project.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}