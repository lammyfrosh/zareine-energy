const solutions = [
  {
    title: "Embedded Power Systems",
    text: "Dedicated power solutions designed for estates, commercial hubs and mixed-use developments.",
  },
  {
    title: "Gas-to-Power Infrastructure",
    text: "Efficient and scalable infrastructure built to support reliable long-term energy delivery.",
  },
  {
    title: "Commercial Energy Partnerships",
    text: "Structured partnership models that align technical delivery with business sustainability.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
            What We Do
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Smart solutions for energy-intensive environments
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}