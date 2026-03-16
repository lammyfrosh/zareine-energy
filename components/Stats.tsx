const stats = [
  { value: "5", label: "Active Projects" },
  { value: "230MW+", label: "Pipeline Capacity" },
  { value: "100MMscfd", label: "Gas Processing" },
  { value: "Q4 2026", label: "Target COD" },
];

export default function Stats() {
  return (
    <section className="bg-[var(--z-blue)] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl bg-white/40 p-8 backdrop-blur-sm"
          >
            <div className="text-4xl font-bold text-[var(--z-dark)]">
              {item.value}
            </div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--z-dark)]">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}