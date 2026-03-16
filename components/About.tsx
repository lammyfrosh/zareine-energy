export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-dark)]">
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
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-gray-200">
          <img
            src="/images/plant%20(1).jpg"
            alt="Zarein Energy infrastructure"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}