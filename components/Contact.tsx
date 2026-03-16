export default function Contact() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[var(--z-dark)] px-8 py-16 text-white lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
            Contact Us
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Let’s build a more reliable energy future together
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Zarein Energy is ready to partner with industrial facilities,
            commercial developments and institutional stakeholders seeking
            dependable long-term power solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--z-dark)] transition hover:bg-[var(--z-blue)]"
            >
              Contact Page
            </a>

            <a
              href="mailto:info@zareinenergy.com"
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--z-dark)]"
            >
              info@zareinenergy.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}