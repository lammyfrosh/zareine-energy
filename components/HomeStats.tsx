import Reveal from "@/components/Reveal";

const stats = [
  { value: "100MMscfd", label: "Gas Processing" },
  { value: "Ikeja Electric", label: "Flagship Offtake" },
  { value: "UPDC + FHA", label: "Estate Partners" },
  { value: "MWM Germany", label: "Engine Technology" },
];

export default function HomeStats() {
  return (
    <section className="page-shell bg-[var(--z-blue)] py-20">
      <div className="soft-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08}>
            <div className="hover-lift rounded-[2rem] border border-white/60 bg-white/60 p-8 backdrop-blur-md">
              <div className="text-3xl font-semibold text-[var(--z-navy)]">
                {item.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--z-navy)]/85">
                {item.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}