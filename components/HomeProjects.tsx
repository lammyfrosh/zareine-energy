import Reveal from "@/components/Reveal";

const projects = [
  { title: "Amuwo Odofin IPP", text: "A flagship embedded power project designed to support major commercial and distribution demand clusters." },
  { title: "Kwale Gas Processing Plant", text: "Gas infrastructure development focused on stable supply and scalable long-term energy delivery." },
  { title: "UPDC Estate Embedded Power", text: "A structured estate-scale power solution designed for reliability, quality and continuity of supply." },
];

export default function HomeProjects() {
  return (
    <section className="page-shell bg-[var(--z-blue-pale)] py-24">
      <div className="soft-grid absolute inset-0 opacity-35" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-navy)]">Flagship Projects</p>
              <h2 className="mt-4 display-font text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
                Structured projects built for growth and credibility
              </h2>
            </div>
            <a href="/projects" className="text-sm font-semibold text-[var(--z-navy)] transition hover:opacity-70">View all projects →</a>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <div className="hover-lift rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 className="display-font text-3xl font-semibold text-[var(--z-navy)]">{project.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{project.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}