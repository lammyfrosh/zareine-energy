"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const heroStats = [
  {
    title: "Industrial",
    text: "Energy capability",
  },
  {
    title: "Premium",
    text: "Project delivery focus",
  },
  {
    title: "Reliable",
    text: "Operational support",
  },
  {
    title: "Strategic",
    text: "Client partnerships",
  },
];

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

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,10,22,0.58),rgba(4,10,22,0.74),rgba(4,10,22,0.90))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(143,212,251,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(86,185,238,0.10),transparent_26%)]" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute right-0 top-0 z-[1] h-40 w-72 bg-[linear-gradient(to_bottom_left,rgba(4,10,22,0.97),rgba(4,10,22,0.80),transparent)] sm:h-48 sm:w-80 lg:h-56 lg:w-[26rem]" />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(247,251,255,0.18),transparent)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 sm:px-10 lg:px-8">
        <div className="w-full">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.42em] text-[var(--z-blue)] sm:text-sm"
            >
              Energy Infrastructure • Industrial Excellence • Strategic Growth
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl lg:leading-[1.02]"
            >
              Building Premium Energy Infrastructure for High-Impact Industries
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="mt-7 max-w-2xl text-base leading-8 text-white/82 sm:text-lg"
            >
              Zarein Energy delivers reliable industrial energy solutions,
              operational intelligence, and infrastructure capability designed
              to support growth, performance, and long-term value creation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="rounded-full bg-[var(--z-blue)] px-7 py-3.5 text-sm font-semibold text-[var(--z-navy)] shadow-[0_14px_40px_rgba(143,212,251,0.28)] transition duration-300 hover:scale-[1.02] hover:opacity-95"
              >
                Explore Projects
              </Link>

              <Link
                href="/investor-relations"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/30 hover:bg-white/15"
              >
                Investor Relations
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-16 grid max-w-5xl gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {heroStats.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/12 bg-white/10 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              >
                <p className="text-2xl font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}