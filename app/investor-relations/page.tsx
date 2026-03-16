import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function InvestorRelationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--z-navy)] px-6 py-28 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
              Investor Relations
            </p>
            <h1 className="mt-4 max-w-4xl display-font text-5xl font-semibold tracking-tight sm:text-6xl">
              Structured opportunities for long-term energy investment
            </h1>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-6 text-lg leading-8 text-gray-300">
                <p>
                  Zarein Energy offers investors access to a diversified portfolio
                  of gas-to-power and embedded infrastructure projects positioned
                  for scale, resilience and long-term value creation.
                </p>
                <p>
                  The company’s transaction philosophy is aligned with institutional
                  standards, strong project governance and development-finance-grade structuring.
                </p>
                <a
                  href="mailto:invest@zareinenergy.com"
                  className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--z-navy)] transition hover:bg-[var(--z-blue)]"
                >
                  invest@zareinenergy.com
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-md">
                <img
                  src="/images/plant%20(2).jpg"
                  alt="Engineer at energy infrastructure site"
                  className="h-full min-h-[360px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}