"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[rgba(3,10,24,0.86)] shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
          : "border-b border-white/8 bg-[rgba(3,10,24,0.58)] backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-2 backdrop-blur-md transition duration-300 group-hover:border-white/20 group-hover:bg-white/12">
              <img
                src="/logos/zarein-logo.png"
                alt="Zarein Energy Logo"
                className="h-10 w-auto object-contain sm:h-11"
              />
            </div>

            <div className="leading-tight">
              <span className="block text-sm font-semibold tracking-[0.24em] text-white sm:text-base">
                ZAREIN ENERGY
              </span>
              <span className="block text-[10px] uppercase tracking-[0.32em] text-white/60 sm:text-[11px]">
                Powering Industrial Growth
              </span>
            </div>
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="hidden items-center gap-2 lg:flex"
        >
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 backdrop-blur-xl">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                    active
                      ? "bg-white/12 text-[var(--z-blue)]"
                      : "text-white/85 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="ml-3 inline-flex items-center justify-center rounded-full bg-[var(--z-blue)] px-5 py-3 text-sm font-semibold text-[var(--z-navy)] shadow-[0_16px_40px_rgba(143,212,251,0.24)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-95"
          >
            Get in Touch
          </Link>
        </motion.nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/15 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-xl leading-none">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/10 bg-[rgba(3,10,24,0.96)] px-6 py-5 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-white/10 text-[var(--z-blue)]"
                        : "text-white/88 hover:bg-white/6 hover:text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[var(--z-blue)] px-5 py-3 text-sm font-semibold text-[var(--z-navy)] shadow-[0_16px_40px_rgba(143,212,251,0.22)]"
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}