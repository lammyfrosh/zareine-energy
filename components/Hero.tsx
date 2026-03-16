"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/refinery-night.png"
          onError={() => setVideoError(true)}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-refinery.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/refinery-night.png')" }}
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,10,26,0.45),rgba(3,10,26,0.68),rgba(3,10,26,0.88))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,201,255,0.12),transparent_28%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 sm:px-10 lg:px-8">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[var(--z-blue)] sm:text-sm"
          >
            Energy Infrastructure • Industrial Excellence • Strategic Growth
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
          >
            Building Premium Energy Infrastructure for High-Impact Industries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
          >
            Zarein Energy delivers reliable industrial energy solutions,
            operational intelligence, and infrastructure capability designed to
            support growth, performance, and long-term value creation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="rounded-full bg-[var(--z-blue)] px-6 py-3 text-sm font-semibold text-[var(--z-navy)] transition hover:scale-[1.02] hover:opacity-95"
            >
              Explore Projects
            </Link>

            <Link
              href="/investor-relations"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              Investor Relations
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4 }}
            className="mt-14 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4"
          >
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-2xl font-semibold text-white">Industrial</p>
              <p className="mt-2 text-sm text-white/70">Energy capability</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-2xl font-semibold text-white">Premium</p>
              <p className="mt-2 text-sm text-white/70">Project delivery focus</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-2xl font-semibold text-white">Reliable</p>
              <p className="mt-2 text-sm text-white/70">Operational support</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-2xl font-semibold text-white">Strategic</p>
              <p className="mt-2 text-sm text-white/70">Client partnerships</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}