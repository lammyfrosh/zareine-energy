import Reveal from "@/components/Reveal";

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
          <h2 className="mt-4 display-font text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
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
        </Reveal>
      </div>
    </section>
  );
}