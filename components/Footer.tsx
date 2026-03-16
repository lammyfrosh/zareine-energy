const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M13.5 8H16V4.5h-2.5C10.8 4.5 9 6.3 9 9v2H6v3.5h3V21h3.5v-6.5H15L15.5 11H12.5V9c0-.6.4-1 1-1Z"/></svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.6V19H16v-4c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19H10v-9Z"/></svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2.5A1.5 1.5 0 0 0 5.5 7v10A1.5 1.5 0 0 0 7 18.5h10a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 17 5.5H7Zm10.25 1.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--z-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
        <div>
          <div className="text-lg font-semibold tracking-[0.24em]">ZAREIN ENERGY</div>
          <p className="mt-5 max-w-md text-sm leading-7 text-gray-300">
            From Wellhead to Grid — Zarein Energy. Reliable power solutions for
            industrial, commercial and grid-scale development across Nigeria.
          </p>
          <div className="mt-6 flex gap-4 text-white">
            <a href="#" className="rounded-full border border-white/20 p-3 transition hover:bg-white hover:text-[var(--z-navy)]"><FacebookIcon /></a>
            <a href="#" className="rounded-full border border-white/20 p-3 transition hover:bg-white hover:text-[var(--z-navy)]"><LinkedinIcon /></a>
            <a href="#" className="rounded-full border border-white/20 p-3 transition hover:bg-white hover:text-[var(--z-navy)]"><InstagramIcon /></a>
          </div>
        </div>

        <div>
          <h3 className="display-font text-3xl font-semibold">Quick Contact</h3>
          <form className="mt-6 space-y-4">
            <input type="text" placeholder="Full Name" className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none" />
            <textarea rows={4} placeholder="Message" className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none" />
            <button type="submit" className="rounded-full bg-[var(--z-blue)] px-6 py-3 text-sm font-semibold text-[var(--z-navy)] transition hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h3 className="display-font text-3xl font-semibold">Contact Details</h3>
          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-300">
            <p>Lagos, Nigeria</p>
            <p>Jerry Raji</p>
            <p>info@zareinenergy.com</p>
            <p>invest@zareinenergy.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-gray-300 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Zarein Energy. All rights reserved.</p>
          <p>Blue/white premium corporate website experience.</p>
        </div>
      </div>
    </footer>
  );
}