import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--z-bg)] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-dark)]">
            Sustainability
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
            A practical transition pathway for reliable power
          </h1>

          <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-gray-700">
            <p>
              Zarein Energy’s gas-to-power focus supports a cleaner and more
              reliable alternative to diesel and heavy fuel oil in high-demand
              environments.
            </p>

            <p>
              The company’s infrastructure direction also considers long-term
              ESG alignment, operational efficiency and future-readiness.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}