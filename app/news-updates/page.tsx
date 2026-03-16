import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function NewsUpdatesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-navy)]">
              News & Updates
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
              Latest company developments and market activity
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12 rounded-[2rem] bg-[var(--z-blue-soft)] p-10 ring-1 ring-gray-200">
              <p className="text-lg leading-8 text-gray-600">
                News articles, project milestones, partnership announcements and
                event participation will appear here.
              </p>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}