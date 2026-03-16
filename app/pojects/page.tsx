import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Amuwo Odofin IMG Franchise IPP",
    text: "A flagship embedded power project designed to support major distribution and commercial demand clusters.",
  },
  {
    title: "Kwale FTZ Gas Processing Plant",
    text: "Gas infrastructure development focused on long-term supply stability and scalable energy delivery.",
  },
  {
    title: "UPDC Residential Estate IPP",
    text: "Embedded power designed for estate-scale reliability, modern living and improved power quality.",
  },
  {
    title: "FHA Festac Estate IPP",
    text: "A residential power infrastructure project built to strengthen estate-wide electricity reliability.",
  },
  {
    title: "FHA Zuba Estate IPP",
    text: "A structured project supporting dependable energy access for growing residential communities.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--z-bg)] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-dark)]">
            Projects
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
            Building Nigeria’s energy future project by project
          </h1>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="hover-lift rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-gray-200"
              >
                <div className="inline-flex rounded-2xl bg-[var(--z-blue-soft)] px-4 py-2 text-sm font-semibold text-[var(--z-dark)]">
                  Project
                </div>

                <h2 className="mt-5 text-2xl font-semibold text-[var(--z-dark)]">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">{project.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}