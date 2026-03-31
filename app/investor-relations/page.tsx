import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function InvestorRelationsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--z-navy)] px-6 py-28 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          {/* Header */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
              Investor Relations
            </p>

            <h1 className="mt-4 max-w-4xl display-font text-5xl font-semibold tracking-tight sm:text-6xl leading-tight">
              Structured opportunities for long-term energy investment
            </h1>
          </Reveal>

          {/* Content Section */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
            
            {/* Left Text */}
            <Reveal>
              <div className="space-y-6 text-lg leading-8 text-gray-300">
                <p>
                  Zarein Energy offers investors access to a diversified portfolio
                  of gas-to-power and embedded infrastructure projects positioned
                  for scale, resilience and long-term value creation.
                </p>

                <p>
                  Our investment approach is anchored in disciplined execution,
                  institutional-grade governance and development-finance-aligned structuring.
                </p>

                <p>
                  We partner with capital providers seeking exposure to Africa’s
                  evolving energy landscape through assets designed for sustainable returns.
                </p>

                <a
                  href="mailto:invest@zareinenergy.com"
                  className="inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-[var(--z-navy)] transition-all duration-300 hover:bg-[var(--z-blue)] hover:text-white shadow-lg hover:shadow-xl"
                >
                  Contact Investment Team
                </a>
              </div>
            </Reveal>

            {/* Right Image */}
            <Reveal delay={0.08}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10">
                
                <img
                  src="/images/hero-investor-corporate-energy.png"
                  alt="Energy executives discussing investment strategy"
                  className="h-full min-h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              </div>
            </Reveal>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}