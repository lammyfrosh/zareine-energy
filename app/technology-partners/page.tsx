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
  },
  {
    name: "Clarke Energy",
    file: "/logos/clarke-energy.png",
    logoClass: "max-h-16 max-w-[150px]",
  },
  {
    name: "Hidier Power",
    file: "/logos/hidier-power.png",
    logoClass: "max-h-14 max-w-[190px]",
  },
  {
    name: "Axxela",
    file: "/logos/axxela.png",
    logoClass: "max-h-16 max-w-[190px]",
  },
  {
    name: "Tetracore",
    file: "/logos/tetracore.png",
    logoClass: "max-h-16 max-w-[240px]",
  },
  {
    name: "Ikeja Electric",
    file: "/logos/ikeja-electric.png",
    logoClass: "max-h-16 max-w-[90px]",
  },
  {
    name: "Federal Housing Authority",
    file: "/logos/fha.png",
    logoClass: "max-h-16 max-w-[200px]",
  },
];

export default function TechnologyPartnersPage() {
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <section className="relative overflow-hidden bg-[var(--z-navy)] pt-36 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,212,255,0.10),transparent_28%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-blue)]">
                Technology & Partners
              </p>

              <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Built with trusted technology and strategic relationships
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                Our project delivery model is strengthened by trusted technology
                providers, infrastructure collaborators, and strategic
                relationships that support long-term energy performance and
                confidence.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="bg-[#f7fbff] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {partners.map((partner, index) => (
                <Reveal key={partner.name} delay={index * 0.06}>
                  <div className="rounded-[2rem] border border-[#dcecf7] bg-[#eaf6ff] p-8 shadow-[0_12px_40px_rgba(7,24,47,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(7,24,47,0.09)]">
                    <div className="flex h-[140px] items-center justify-center rounded-[1.5rem] bg-white px-6 py-6">
                      {!broken[partner.file] ? (
                        <img
                          src={partner.file}
                          alt={partner.name}
                          className={`h-auto w-auto object-contain ${partner.logoClass}`}
                          onError={() =>
                            setBroken((prev) => ({
                              ...prev,
                              [partner.file]: true,
                            }))
                          }
                        />
                      ) : (
                        <span className="text-lg font-semibold text-[var(--z-navy)]">
                          {partner.name}
                        </span>
                      )}
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold text-[var(--z-navy)]">
                      {partner.name}
                    </h2>
                  </div>
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