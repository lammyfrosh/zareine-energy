"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[var(--z-navy)]/70 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logos/zarein-logo.png"
              alt="Zarein Energy Logo"
              className="h-11 w-auto object-contain"
            />
            <span className="text-lg font-semibold tracking-[0.2em]">
              ZAREIN ENERGY
            </span>
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
          className="hidden items-center gap-7 text-sm md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--z-blue)]"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}