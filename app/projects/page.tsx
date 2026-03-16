import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const projects = [
  { title: "Amuwo Odofin IMG Franchise IPP", text: "A flagship embedded power project designed to support major distribution and commercial demand clusters." },
  { title: "Kwale FTZ Gas Processing Plant", text: "Gas infrastructure development focused on long-term supply stability and scalable energy delivery." },
  { title: "UPDC Residential Estate IPP", text: "Embedded power designed for estate-scale reliability, modern living and improved power quality." },
  { title: "FHA Festac Estate IPP", text: "A residential power infrastructure project built to strengthen estate-wide electricity reliability." },
  { title: "FHA Zuba Estate IPP", text: "A structured project supporting dependable energy access for growing residential communities." },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell min-h-screen bg-[var(--z-blue-pale)] px-6 py-28 lg:px-8">
        <div className="soft-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-navy)]">
              Projects
            </p>
            <h1 className="mt-4 display-font text-5xl font-semibold tracking-tight text-[var(--z-text)] sm:text-6xl">
              Building Nigeria’s energy future project by project
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.07}>
                <div className="hover-lift rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-gray-200">
                  <h2 className="display-font text-3xl font-semibold text-[var(--z-navy)]">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-7 text-gray-600">{project.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}