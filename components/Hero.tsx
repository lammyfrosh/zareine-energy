const ArrowRightIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--z-dark)]">
      <div
        className="hero-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-energy.jpg')" }}
      />

      <div className="absolute inset-0 bg-[var(--z-dark)]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--z-dark)]/90 via-[var(--z-dark)]/65 to-[var(--z-dark)]/20" />

      <div className="absolute bottom-10 left-0 right-0 hidden justify-center md:flex">
        <div className="shimmer-line h-[2px] w-40 bg-white/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 lg:px-8">
        <div className="max-w-4xl text-white">
          <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.34em] text-[var(--z-blue)]">
            From Wellhead to Grid
          </p>

          <h1 className="animate-fade-up delay-1 mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Reliable Power
            <br />
            For A Growing Nigeria
          </h1>

          <p className="animate-fade-up delay-2 mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
            Zarein Energy is an independent Nigerian power producer developing
            gas-to-power solutions for industrial, commercial and grid-scale
            energy demand across Nigeria.
          </p>

          <div className="animate-fade-up delay-3 mt-9 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--z-blue)] px-6 py-3 text-sm font-semibold text-[var(--z-dark)] transition hover:opacity-90"
            >
              Explore Projects
              <ArrowRightIcon />
            </a>

            <a
              href="/investor-relations"
              className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--z-dark)]"
            >
              Investor Relations
              <ArrowRightIcon />
            </a>
          </div>

          <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="float-slow rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <div className="text-2xl font-semibold">5</div>
              <div className="mt-1 text-sm uppercase tracking-[0.2em] text-gray-200">
                Active Projects
              </div>
            </div>

            <div className="float-slow rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md [animation-delay:0.4s]">
              <div className="text-2xl font-semibold">230MW+</div>
              <div className="mt-1 text-sm uppercase tracking-[0.2em] text-gray-200">
                Power Pipeline
              </div>
            </div>

            <div className="float-slow rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md [animation-delay:0.8s]">
              <div className="text-2xl font-semibold">Q4 2026</div>
              <div className="mt-1 text-sm uppercase tracking-[0.2em] text-gray-200">
                Target COD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}