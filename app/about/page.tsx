import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-navy)]">
              About Us
            </p>
            <h1 className="mt-4 display-font text-5xl font-semibold tracking-tight text-[var(--z-text)] sm:text-6xl">
              From Wellhead to Grid
            </h1>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-6 text-lg leading-8 text-gray-700">
                <p>
                  Zarein Energy is an independent Nigerian power producer focused
                  on developing gas-to-power infrastructure for industrial,
                  commercial and grid-scale energy users.
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
              <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-gray-200">
                <img
                  src="/images/plant%20(1).jpg"
                  alt="Industrial plant"
                  className="h-[460px] w-full object-cover"
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