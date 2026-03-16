"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useState } from "react";

const partners = [
  { name: "MWM / Caterpillar", file: "/logos/mwm.png" },
  { name: "Clarke Energy", file: "/logos/clarke-energy.png" },
  { name: "Hidier Power", file: "/logos/hidier-power.png" },
  { name: "Axxela", file: "/logos/axxela.png" },
  { name: "Tetracore", file: "/logos/tetracore.png" },
  { name: "Ikeja Electric", file: "/logos/ikeja-electric.png" },
  { name: "FHA", file: "/logos/fha.png" },
];

export default function TechnologyPartnersPage() {
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-navy)]">
              Technology & Partners
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
              Built with trusted technology and strategic relationships
            </h1>
          </Reveal>

          <div className="partner-marquee mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {partners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 0.06}>
                <div className="hover-lift rounded-[2rem] bg-[var(--z-blue-soft)] p-8 ring-1 ring-gray-200">
                  <div className="flex min-h-[90px] items-center justify-center rounded-2xl bg-white px-6 py-5">
                    {!broken[partner.file] ? (
                      <img
                        src={partner.file}
                        alt={partner.name}
                        className="max-h-12 w-auto object-contain"
                        onError={() =>
                          setBroken((prev) => ({ ...prev, [partner.file]: true }))
                        }
                      />
                    ) : (
                      <span className="text-lg font-semibold text-[var(--z-navy)]">
                        {partner.name}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-[var(--z-navy)]">
                    {partner.name}
                  </h2>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}