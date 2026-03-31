import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const updates = [
  {
    title: "Project Milestones",
    text: "Key delivery progress, operational achievements, and infrastructure development updates will be published here.",
  },
  {
    title: "Partnership Announcements",
    text: "Strategic collaborations, market engagements, and institutional relationships will be highlighted as they develop.",
  },
  {
    title: "Industry & Market Activity",
    text: "Relevant market-facing commentary, company participation, and energy-sector developments will appear in this section.",
  },
];

export default function NewsUpdatesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-white pt-24 text-[var(--z-text)]">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-news-control-room.png"
              alt="Modern energy control room and monitoring systems"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,24,0.60)_0%,rgba(3,10,24,0.74)_42%,rgba(3,10,24,0.88)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,212,251,0.16),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-28 text-white lg:px-8 lg:py-32">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--z-blue)]">
                News & Updates
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.02]">
                Latest company developments and market activity
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Follow Zarein Energy’s progress across project milestones,
                partnerships, market engagement, and key developments shaping
                our growth across the energy value chain.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative px-6 py-20 lg:px-8">
          <div className="soft-grid absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--z-navy)]/70">
                  Company Bulletin
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[var(--z-navy)] sm:text-4xl">
                  A dedicated space for milestones, announcements, and insight
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {updates.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.07}>
                  <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                    <div className="mb-6 inline-flex rounded-full border border-[var(--z-blue)]/30 bg-[var(--z-blue)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--z-navy)]">
                      Update
                    </div>

                    <h3 className="text-2xl font-semibold text-[var(--z-navy)]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.18}>
              <div className="mt-12 rounded-[2rem] bg-[var(--z-blue-soft)] p-10 ring-1 ring-gray-200">
                <p className="max-w-3xl text-lg leading-8 text-gray-600">
                  News articles, project milestones, partnership announcements,
                  media features, and event participation will appear here as
                  Zarein Energy continues to expand its operational and market
                  footprint.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}