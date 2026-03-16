import Reveal from "@/components/Reveal";

export default function ContactCTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[var(--z-navy)] px-8 py-16 text-white lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
                  Contact Us
                </p>
                <h2 className="mt-4 display-font text-4xl font-semibold sm:text-5xl">
                  Let’s build a more reliable energy future together
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                  Zarein Energy is ready to partner with industrial facilities,
                  commercial developments and institutional stakeholders seeking
                  dependable long-term power solutions.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--z-navy)] transition hover:bg-[var(--z-blue)]">
                    Contact Page
                  </a>
                  <a href="mailto:info@zareinenergy.com" className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--z-navy)]">
                    info@zareinenergy.com
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[2rem] ring-1 ring-white/10">
                <img
                  src="/images/plant%20(2).jpg"
                  alt="Engineer working on energy infrastructure"
                  className="h-[340px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}