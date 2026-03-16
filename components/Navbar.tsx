"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/investor-relations", label: "Investors" },
  { href: "/technology-partners", label: "Technology & Partners" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/news-updates", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--z-navy)]/55 text-white backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logos/zarein-logo.png"
              alt="Zarein Energy Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="leading-tight">
              <span className="block text-base font-semibold tracking-[0.28em] sm:text-lg">
                ZAREIN ENERGY
              </span>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-white/65 sm:text-[11px]">
                Powering Industrial Growth
              </span>
            </div>
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden items-center gap-7 text-sm lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-white/90 transition hover:text-[var(--z-blue)]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--z-blue)] hover:text-[var(--z-navy)]"
          >
            Get in Touch
          </Link>
        </motion.nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[var(--z-navy)]/95 px-6 py-5 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 transition hover:text-[var(--z-blue)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit rounded-full bg-[var(--z-blue)] px-5 py-2.5 font-semibold text-[var(--z-navy)]"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}