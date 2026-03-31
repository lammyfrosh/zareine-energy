"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useState } from "react";

const partners = [
  {
    name: "MWM / Caterpillar",
    file: "/logos/mwm.png",
    logoClass: "max-h-14 max-w-[190px]",
    category: "Power Technology",
  },
  {
    name: "Clarke Energy",
    file: "/logos/clarke-energy.png",
    logoClass: "max-h-16 max-w-[150px]",
    category: "Engineering Partner",
  },
  {
    name: "Hidier Power",
    file: "/logos/hidier-power.png",
    logoClass: "max-h-14 max-w-[190px]",
    category: "Energy Solutions",
  },
  {
    name: "Axxela",
    file: "/logos/axxela.png",
    logoClass: "max-h-16 max-w-[190px]",
    category: "Gas Infrastructure",
  },
  {
    name: "Tetracore",
    file: "/logos/tetracore.png",
    logoClass: "max-h-16 max-w-[240px]",
    category: "Strategic Delivery",
  },
  {
    name: "Ikeja Electric",
    file: "/logos/ikeja-electric.png",
    logoClass: "max-h-16 max-w-[90px]",
    category: "Distribution Partner",
  },
  {
    name: "Federal Housing Authority",
    file: "/logos/fha.png",
    logoClass: "max-h-16 max-w-[200px]",
    category: "Institutional Partner",
  },
];

export default function TechnologyPartnersPage() {
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-white pt-24 text-[var(--z-text)]">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-partners-technology.png"
              alt="Technology and infrastructure partnership ecosystem"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,24,0.62)_0%,rgba(3,10,24,0.76)_42%,rgba(3,10,24,0.90)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,212,251,0.16),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-28 text-white lg:px-8 lg:py-32">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--z-blue)]">
                Technology & Partners
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.02]">
                Built with trusted technology and strategic relationships
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Our project delivery model is strengthened by proven technology
                providers, infrastructure collaborators, and strategic
                relationships that support reliability, scale, and long-term
                energy performance.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative bg-[#f7fbff] px-6 py-20 lg:px-8">
          <div className="soft-grid absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--z-navy)]/70">
                  Strategic Network
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[var(--z-navy)] sm:text-4xl">
                  Trusted names supporting delivery confidence
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Zarein Energy works alongside respected technology,
                  infrastructure, and institutional partners aligned with
                  dependable execution and long-term project value.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {partners.map((partner, index) => (
                <Reveal key={partner.name} delay={index * 0.06}>
                  <article className="group rounded-[2rem] border border-[#dcecf7] bg-white/85 p-8 shadow-[0_18px_50px_rgba(7,24,47,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(7,24,47,0.10)]">
                    <div className="flex h-[148px] items-center justify-center rounded-[1.5rem] border border-slate-100 bg-white px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                      {!broken[partner.file] ? (
                        <img
                          src={partner.file}
                          alt={partner.name}
                          className={`h-auto w-auto object-contain transition duration-300 group-hover:scale-[1.03] ${partner.logoClass}`}
                          onError={() =>
                            setBroken((prev) => ({
                              ...prev,
                              [partner.file]: true,
                            }))
                          }
                        />
                      ) : (
                        <span className="text-center text-lg font-semibold text-[var(--z-navy)]">
                          {partner.name}
                        </span>
                      )}
                    </div>

                    <div className="mt-6">
                      <div className="inline-flex rounded-full border border-[var(--z-blue)]/25 bg-[var(--z-blue)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--z-navy)]">
                        {partner.category}
                      </div>

                      <h2 className="mt-4 text-2xl font-semibold text-[var(--z-navy)]">
                        {partner.name}
                      </h2>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}