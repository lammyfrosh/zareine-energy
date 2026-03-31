import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-white pt-24 text-[var(--z-text)]">
        
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-contact-facility.png"
              alt="Zarein Energy corporate facility and operations"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,24,0.60)_0%,rgba(3,10,24,0.74)_42%,rgba(3,10,24,0.88)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,212,251,0.16),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-28 text-white lg:px-8 lg:py-32">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--z-blue)]">
                Contact
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.02]">
                Let’s start the conversation
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Engage with Zarein Energy on partnerships, investment
                opportunities, and infrastructure collaboration across the
                energy value chain.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="relative px-6 py-20 lg:px-8">
          <div className="soft-grid absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-start">
            
            {/* LEFT INFO */}
            <Reveal>
              <div className="space-y-8">
                
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--z-navy)]/70">
                    Get in touch
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-[var(--z-navy)] sm:text-4xl">
                    Speak with our team
                  </h2>
                </div>

                <div className="space-y-5 text-lg text-gray-700">
                  <p>
                    <span className="font-semibold text-[var(--z-navy)]">
                      Investor Email:
                    </span>{" "}
                    invest@zareinenergy.com
                  </p>

                  <p>
                    <span className="font-semibold text-[var(--z-navy)]">
                      General Email:
                    </span>{" "}
                    info@zareinenergy.com
                  </p>
                </div>

                {/* EXTRA TRUST BLOCK */}
                <div className="rounded-[2rem] bg-[var(--z-blue-soft)] p-6 ring-1 ring-gray-200">
                  <p className="text-sm text-gray-600 leading-7">
                    Zarein Energy engages with institutional investors,
                    infrastructure partners, and industrial clients seeking
                    reliable, scalable and structured energy solutions across
                    Nigeria.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* FORM */}
            <Reveal delay={0.08}>
              <form className="rounded-[2rem] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-slate-200">
                <div className="grid gap-5">
                  
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[var(--z-blue)]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[var(--z-blue)]"
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[var(--z-blue)]"
                  />

                  <textarea
                    rows={5}
                    placeholder="Message"
                    className="rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[var(--z-blue)]"
                  />

                  <button
                    type="submit"
                    className="mt-2 rounded-full bg-[var(--z-navy)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--z-blue)] hover:shadow-lg"
                  >
                    Send Enquiry
                  </button>

                </div>
              </form>
            </Reveal>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}