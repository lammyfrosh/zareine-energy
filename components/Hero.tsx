"use client";

import { motion } from "framer-motion";

const ArrowRightIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--z-navy)]">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-energy.jpg')" }}
      />

      <div className="absolute inset-0 bg-[var(--z-navy)]/48" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--z-navy)]/92 via-[var(--z-navy)]/66 to-[var(--z-navy)]/18" />

      <div className="absolute bottom-10 left-0 right-0 hidden justify-center md:flex">
        <div className="shimmer-line h-[2px] w-44 bg-white/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 lg:px-8">
        <div className="max-w-4xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm font-medium uppercase tracking-[0.34em] text-[var(--z-blue)]"
          >
            From Wellhead to Grid
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 display-font text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
          >
            Reliable Power
            <br />
            For A Growing Nigeria
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg"
          >
            Zarein Energy is an independent Nigerian power producer developing
            gas-to-power solutions for industrial, commercial and grid-scale
            energy demand across Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--z-blue)] px-6 py-3 text-sm font-semibold text-[var(--z-navy)] transition hover:opacity-90"
            >
              Explore Projects
              <ArrowRightIcon />
            </a>

            <a
              href="/investor-relations"
              className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--z-navy)]"
            >
              Investor Relations
              <ArrowRightIcon />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
