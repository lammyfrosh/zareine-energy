import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--z-dark)]/70 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.24em]">
          ZAREIN ENERGY
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <Link href="/" className="transition hover:text-[var(--z-blue)]">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-[var(--z-blue)]">
            About
          </Link>
          <Link
            href="/projects"
            className="transition hover:text-[var(--z-blue)]"
          >
            Projects
          </Link>
          <Link
            href="/investor-relations"
            className="transition hover:text-[var(--z-blue)]"
          >
            Investors
          </Link>
          <Link
            href="/technology-partners"
            className="transition hover:text-[var(--z-blue)]"
          >
            Technology & Partners
          </Link>
          <Link
            href="/sustainability"
            className="transition hover:text-[var(--z-blue)]"
          >
            Sustainability
          </Link>
          <Link
            href="/news-updates"
            className="transition hover:text-[var(--z-blue)]"
          >
            News
          </Link>
          <Link
            href="/contact"
            className="transition hover:text-[var(--z-blue)]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}