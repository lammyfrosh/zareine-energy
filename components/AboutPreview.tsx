import Reveal from "@/components/Reveal";

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
  </svg>
);

const FactoryIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 21V9l7 4V9l7 4V5l4 2v14H3Z" />
  </svg>
);

export default function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-gray-200">
            <img
              src="/images/plant%20(1).jpg"
              alt="Industrial plant"
              className="h-[460px] w-full object-cover transition duration-700 hover:scale-[1.04]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-navy)]">
            About Zarein
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--z-text)] sm:text-4xl">
            Nigeria’s next-generation energy infrastructure partner
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Zarein Energy is an independent Nigerian power producer focused on
              developing gas-to-power infrastructure for industrial, commercial
              and grid-scale energy users.
            </p>

            <p>
              Our model combines reliable generation technology, structured
              partnerships and long-term operational value to support
              high-demand developments across Nigeria.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="hover-lift rounded-3xl border border-gray-200 bg-[var(--z-blue-soft)] p-5">
              <div className="text-[var(--z-navy)]">
                <ShieldIcon />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-[var(--z-navy)]">
                Bankable Structure
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Built around credible project development and long-term value.
              </p>
            </div>

            <div className="hover-lift rounded-3xl border border-gray-200 bg-[var(--z-blue-soft)] p-5">
              <div className="text-[var(--z-navy)]">
                <FactoryIcon />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-[var(--z-navy)]">
                Infrastructure Focus
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Power solutions designed for estates, industry and growth hubs.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}