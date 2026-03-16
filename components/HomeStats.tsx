import Reveal from "@/components/Reveal";

const stats = [
  { value: "100MMscfd", label: "Gas Processing Capacity" },
  { value: "Ikeja Electric", label: "Flagship Offtake Relationship" },
  { value: "UPDC + FHA", label: "Strategic Estate Partners" },
  { value: "MWM Germany", label: "Engine Technology Base" },
];

export default function HomeStats() {
  return (
    <section className="page-shell relative overflow-hidden bg-[var(--z-blue)] py-20">
      <div className="soft-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="hover-lift rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_15px_50px_rgba(7,24,47,0.08)] backdrop-blur-md">
                <div className="text-3xl font-semibold text-[var(--z-navy)]">
                  {item.value}
                </div>

                <div className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--z-navy)]/80">
                  {item.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}