import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "Amuwo Odofin IMG Franchise IPP",
    text: "A flagship embedded power project designed to support major distribution and commercial demand clusters with reliable, scalable electricity infrastructure.",
  },
  {
    title: "Kwale FTZ Gas Processing Plant",
    text: "Gas infrastructure development focused on long-term supply stability, processing efficiency and scalable energy delivery for industrial growth.",
  },
  {
    title: "UPDC Residential Estate IPP",
    text: "Embedded power designed for estate-scale reliability, modern living and improved power quality through structured infrastructure deployment.",
  },
  {
    title: "FHA Festac Estate IPP",
    text: "A residential power infrastructure project built to strengthen estate-wide electricity reliability and support sustainable community growth.",
  },
  {
    title: "FHA Zuba Estate IPP",
    text: "A structured project supporting dependable energy access for expanding residential communities through resilient embedded power systems.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[var(--z-blue-pale)] pt-24 text-[var(--z-text)]">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-projects-lng-terminal.png"
              alt="Large-scale gas and energy infrastructure project"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,24,0.62)_0%,rgba(3,10,24,0.72)_38%,rgba(3,10,24,0.88)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,212,251,0.18),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-28 text-white lg:px-8 lg:py-32">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--z-blue)]">
                Projects
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.02]">
                Building Nigeria’s energy future project by project
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Our portfolio reflects a practical, growth-oriented approach to
                embedded power, gas infrastructure and resilient energy delivery
                across industrial and residential demand clusters.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative px-6 py-20 lg:px-8">
          <div className="soft-grid absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-10 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--z-navy)]/70">
                  Selected Developments
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[var(--z-navy)] sm:text-4xl">
                  Strategic assets positioned for long-term impact
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.07}>
                  <article className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--z-blue),rgba(143,212,251,0.35),transparent)]" />

                    <div className="mb-6 inline-flex rounded-full border border-[var(--z-blue)]/30 bg-[var(--z-blue)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--z-navy)]">
                      Project
                    </div>

                    <h2 className="text-2xl font-semibold leading-tight text-[var(--z-navy)] sm:text-3xl">
                      {project.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      {project.text}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[var(--z-navy)]/75 transition duration-300 group-hover:text-[var(--z-navy)]">
                      <span>Energy Infrastructure</span>
                      <span className="text-[var(--z-blue)]">•</span>
                      <span>Strategic Delivery</span>
                    </div>
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