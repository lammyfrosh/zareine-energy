import Reveal from "@/components/Reveal";

export default function ContactCTA() {
  return (
    <section className="bg-[#f5f7fb] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-[var(--z-navy)] px-8 py-10 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)] lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
                Contact Us
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Let’s build a more reliable energy future together
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Zarein Energy is ready to partner with industrial facilities,
                commercial developments and institutional stakeholders seeking
                dependable long-term power solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--z-navy)] transition hover:opacity-90"
                >
                  Contact Page
                </a>

                <a
                  href="mailto:info@zareinenergy.com"
                  className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--z-navy)]"
                >
                  info@zareinenergy.com
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/images/refinery-day.png"
                alt="Refinery infrastructure"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,24,47,0.22)] via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}