import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const teamMembers = [
  {
    name: "Jerry S. Raji",
    role: "Managing Partner",
    summary:
      "Seasoned project leader with experience across multinational infrastructure and energy delivery. Brings strong capability in strategic planning, stakeholder engagement, operational roadmaps, and risk management.",
  },
  {
    name: "Haliru Momodu",
    role: "Finance",
    summary:
      "Banking and finance executive with over two decades of experience spanning corporate banking, project and infrastructure finance, private equity, venture capital, and transaction structuring across African markets.",
  },
  {
    name: "Edio Uti",
    role: "Technical Consultant",
    summary:
      "Energy and industrial projects specialist with deep expertise in rotating equipment, electro-mechanical systems, procurement strategy, vendor management, and end-to-end project delivery.",
  },
  {
    name: "Opeyemi Folayan",
    role: "Technical Consultant on Energy",
    summary:
      "Siemens-certified electrical engineer with extensive experience in power systems, regulatory strategy, commercial negotiations, and both on-grid and off-grid infrastructure planning.",
  },
  {
    name: "Damilare Olayiwola",
    role: "Technical Consultant",
    summary:
      "Power systems professional with over a decade of industry experience and a strong track record supporting and managing large-scale electricity and energy sector projects.",
  },
  {
    name: "Ayokunle Anifowose",
    role: "HR Personnel",
    summary:
      "People operations professional with broad cross-sector HR experience covering recruitment, employee engagement, performance management, and organisational support strategy.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[var(--z-text)]">
        <section className="relative isolate overflow-hidden pt-24">
          <div className="absolute inset-0">
            <img
              src="/images/hero-about-executives.png"
              alt="Zarein Energy leadership and corporate engagement"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,24,0.58)_0%,rgba(3,10,24,0.74)_42%,rgba(3,10,24,0.88)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,212,251,0.16),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-28 text-white lg:px-8 lg:py-32">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--z-blue)]">
                About Us
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.02]">
                From Wellhead to Grid
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Zarein Energy is building dependable gas-to-power and
                infrastructure-led solutions designed to support industrial
                growth, long-term reliability and strategic value creation
                across Nigeria’s evolving energy landscape.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <Reveal>
              <div className="space-y-6 text-lg leading-8 text-gray-700">
                <p>
                  Zarein Energy is an independent Nigerian power producer
                  focused on developing gas-to-power infrastructure for
                  industrial, commercial and grid-scale energy users.
                </p>
                <p>
                  The company is positioned to deliver reliable power solutions
                  through structured project development, bankable partnerships,
                  efficient generation technology and long-term operational
                  excellence.
                </p>
                <p>
                  With a growing portfolio spanning embedded power, gas
                  processing and infrastructure-led developments, Zarein Energy
                  is building the next generation of dependable power assets for
                  Nigeria.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
                <img
                  src="/images/hero-about-executives.png"
                  alt="Corporate leadership discussion"
                  className="h-[440px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-[var(--z-blue-pale)] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue-2)]">
                  Our Team
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
                  Experienced professionals driving execution, finance, and
                  technical excellence
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Our leadership and advisory team combines project delivery
                  discipline, financial depth, energy sector expertise, and
                  people operations capability to support reliable
                  infrastructure development across Nigeria.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.05}>
                  <div className="h-full rounded-[1.75rem] border border-[rgba(13,47,79,0.08)] bg-white p-7 shadow-[0_18px_50px_rgba(13,47,79,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(13,47,79,0.12)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--z-blue-2)]">
                      {member.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[var(--z-navy)]">
                      {member.name}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-gray-700">
                      {member.summary}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-navy)]">
                  Team Strength
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
                  Built for strategic growth and dependable delivery
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Zarein Energy’s strength lies in combining engineering
                  capability, project management discipline, commercial
                  structuring, and operational support under one delivery-driven
                  platform.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  This integrated team model allows us to move from concept to
                  execution with greater clarity, stronger partnerships, and a
                  long-term focus on reliability and value creation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[2rem] bg-[var(--z-navy)] p-8 text-white shadow-2xl">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                    <p className="text-2xl font-semibold">Leadership</p>
                    <p className="mt-2 text-sm text-white/75">
                      Strategic guidance across infrastructure development and
                      execution.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                    <p className="text-2xl font-semibold">Finance</p>
                    <p className="mt-2 text-sm text-white/75">
                      Strong capability in structuring, funding strategy, and
                      governance.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                    <p className="text-2xl font-semibold">Technical</p>
                    <p className="mt-2 text-sm text-white/75">
                      Power systems, equipment strategy, project delivery, and
                      operations support.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                    <p className="text-2xl font-semibold">People</p>
                    <p className="mt-2 text-sm text-white/75">
                      Organisational support, performance alignment, and team
                      enablement.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}