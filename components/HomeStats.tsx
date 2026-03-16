import Reveal from "@/components/Reveal";

const stats = [
  {
    value: "100MMscfd",
    label: "Gas Processing",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2s4 4 4 8a4 4 0 1 1-8 0c0-4 4-8 4-8Z" />
        <path d="M5 22h14" />
      </svg>
    ),
  },
  {
    value: "Ikeja Electric",
    label: "Flagship Offtake",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8Z" />
      </svg>
    ),
  },
  {
    value: "UPDC + FHA",
    label: "Estate Partners",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    value: "MWM Germany",
    label: "Engine Technology",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.8 1.8 0 0 0 15 19.4a1.8 1.8 0 0 0-1 .16 1.8 1.8 0 0 0-1 1.64V21a2 2 0 1 1-4 0v-.08a1.8 1.8 0 0 0-1-1.64 1.8 1.8 0 0 0-1-.16 1.8 1.8 0 0 0-1.98.36l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.8 1.8 0 0 0 4.6 15a1.8 1.8 0 0 0-.16-1 1.8 1.8 0 0 0-1.64-1H2.7a2 2 0 1 1 0-4h.08a1.8 1.8 0 0 0 1.64-1 1.8 1.8 0 0 0 .16-1 1.8 1.8 0 0 0-.36-1.98l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.8 1.8 0 0 0 9 4.6a1.8 1.8 0 0 0 1-.16 1.8 1.8 0 0 0 1-1.64V2.7a2 2 0 1 1 4 0v.08a1.8 1.8 0 0 0 1 1.64 1.8 1.8 0 0 0 1 .16 1.8 1.8 0 0 0 1.98-.36l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.8 1.8 0 0 0 19.4 9c0 .35.06.68.16 1 .28.63.9 1.03 1.64 1.03h.08a2 2 0 1 1 0 4h-.08a1.8 1.8 0 0 0-1.64 1Z" />
      </svg>
    ),
  },
];

export default function HomeStats() {
  return (
    <section className="page-shell bg-[var(--z-blue)] py-20">
      <div className="soft-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08}>
            <div className="hover-lift rounded-[2rem] border border-white/60 bg-white/60 p-8 backdrop-blur-md">
              <div className="text-[var(--z-navy)]">{item.icon}</div>
              <div className="mt-5 text-3xl font-semibold text-[var(--z-navy)]">
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