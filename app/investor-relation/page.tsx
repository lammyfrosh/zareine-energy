import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InvestorRelationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--z-dark)] px-6 py-28 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
            Investor Relations
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Structured opportunities for long-term energy investment
          </h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6 text-lg leading-8 text-gray-300">
              <p>
                Zarein Energy offers investors access to a diversified portfolio
                of gas-to-power and embedded infrastructure projects positioned
                for scale, resilience and long-term value creation.
              </p>

              <p>
                The company’s transaction philosophy is aligned with
                institutional standards, strong project governance and
                development-finance-grade structuring.
              </p>

              <p>
                Investor engagement can include project memoranda, financial
                model discussions and partnership exploration across Zarein’s
                active portfolio.
              </p>

              <a
                href="mailto:invest@zareinenergy.com"
                className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--z-dark)] transition hover:bg-[var(--z-blue)]"
              >
                invest@zareinenergy.com
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-md">
              <img
                src="/images/plant%20(2).jpg"
                alt="Engineer at energy infrastructure site"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}