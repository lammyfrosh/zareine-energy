import Reveal from "@/components/Reveal";

const solutions = [
  {
    title: "Embedded Power Systems",
    text: "Dedicated power solutions designed for estates, commercial hubs and mixed-use developments where reliability and stability are critical.",
  },
  {
    title: "Gas-to-Power Infrastructure",
    text: "Efficient infrastructure solutions designed to convert gas resources into stable electricity supply for industrial-scale operations.",
  },
  {
    title: "Commercial Energy Partnerships",
    text: "Strategic partnership structures that align technical delivery, operational performance and long-term energy sustainability.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-gray-100 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

        {/* LEFT CONTENT */}

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Smart solutions for energy-intensive environments
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Zarein Energy develops infrastructure solutions designed to
              support high-demand industrial, commercial and estate-scale
              energy environments across Nigeria.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solutions.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="hover-lift rounded-[1.8rem] bg-white p-8 shadow-sm ring-1 ring-gray-200 transition hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-[var(--z-navy)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <Reveal delay={0.12}>
          <div className="group overflow-hidden rounded-[2rem] shadow-[0_20px_80px_rgba(15,23,42,0.15)] ring-1 ring-black/5">
            <img
              src="/images/control-room.png"
              alt="Energy control room monitoring infrastructure"
              className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}