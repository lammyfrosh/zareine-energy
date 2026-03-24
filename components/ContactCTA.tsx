import Reveal from "@/components/Reveal";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,212,251,0.18),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-[var(--z-navy)] px-8 py-12 text-white shadow-[0_30px_100px_rgba(15,23,42,0.25)] lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14">
            
            {/* IMAGE BACKGROUND */}
            <div className="absolute inset-0">
              <img
                src="/images/contact-lagos.jpg"
                alt="Lagos skyline"
                className="h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,24,47,0.95),rgba(7,24,47,0.75),rgba(7,24,47,0.55))]" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
                Contact Us
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Let’s build a more reliable energy future together
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/80">
                Zarein Energy partners with industrial facilities, commercial
                developments and institutional stakeholders to deliver reliable,
                scalable and long-term energy infrastructure solutions.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--z-navy)] shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition duration-300 hover:scale-[1.02]"
                >
                  Get in Touch
                </a>

                <a
                  href="mailto:info@zareinenergy.com"
                  className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/40 hover:bg-white/15"
                >
                  info@zareinenergy.com
                </a>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="relative z-10 hidden lg:block">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <h3 className="text-2xl font-semibold">Why Work With Us</h3>

                <ul className="mt-5 space-y-4 text-white/80">
                  <li>• Reliable energy infrastructure delivery</li>
                  <li>• Strategic project execution capability</li>
                  <li>• Strong industry and partnership network</li>
                  <li>• Long-term operational value focus</li>
                </ul>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}