"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const heroStats = [
  {
    value: "Gas & Power",
    label: "Integrated energy capability",
  },
  {
    value: "Project Delivery",
    label: "Execution with operational discipline",
  },
  {
    value: "Strategic Partners",
    label: "Long-term industrial relationships",
  },
  {
    value: "Premium Standards",
    label: "Built for confidence and growth",
  },
];

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-refinery.jpg"
          onError={() => setVideoError(true)}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-refinery.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-refinery.jpg')" }}
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.50)_0%,rgba(2,8,23,0.72)_38%,rgba(2,8,23,0.90)_72%,rgba(2,8,23,0.98)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.16),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_22%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_26%)]" />
      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute right-0 top-0 z-[1] h-44 w-72 bg-[linear-gradient(to_bottom_left,rgba(2,8,23,0.96),rgba(2,8,23,0.76),transparent)] sm:h-52 sm:w-96 lg:h-64 lg:w-[30rem]" />
      <div className="absolute left-0 top-24 z-[1] hidden h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl lg:block" />
      <div className="absolute bottom-20 right-20 z-[1] hidden h-52 w-52 rounded-full bg-sky-400/10 blur-3xl lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(to_top,rgba(255,255,255,0.08),transparent)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 sm:px-10 lg:px-8">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--z-blue)] shadow-[0_0_18px_rgba(143,212,251,0.9)]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--z-blue)] sm:text-xs">
                Gas Infrastructure • Energy Solutions • Industrial Growth
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="mt-7 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
            >
              Powering Industrial Progress with Premium Gas and Energy
              Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18 }}
              className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
            >
              Zarein Energy delivers reliable gas-focused infrastructure,
              operational intelligence, and strategic energy solutions designed
              to strengthen performance, unlock growth, and create long-term
              value across high-impact industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-[var(--z-blue)] px-7 py-3.5 text-sm font-semibold text-[var(--z-navy)] shadow-[0_18px_45px_rgba(143,212,251,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-95"
              >
                Explore Projects
              </Link>

              <Link
                href="/investor-relations"
                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/30 hover:bg-white/14"
              >
                Investor Relations
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.38 }}
            className="hidden lg:block"
          >
            <div className="ml-auto max-w-md rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--z-blue)]">
                    Energy Focus
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Built for modern energy leadership
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-2xl border border-white/12 bg-white/10" />
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-medium text-white">Gas Infrastructure</p>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Premium execution across critical energy systems and
                    industrial support assets.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-medium text-white">Operational Excellence</p>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Structured delivery, reliable systems, and long-view
                    project confidence.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-medium text-white">Strategic Partnerships</p>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Designed to support clients, investors, and industrial
                    stakeholders at scale.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 pb-16 sm:px-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {heroStats.map((item) => (
            <div
              key={item.value}
              className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl"
            >
              <p className="text-lg font-semibold text-white sm:text-xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/68">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}