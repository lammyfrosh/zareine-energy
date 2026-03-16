import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-dark)]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
            Let’s start the conversation
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-lg text-gray-700">
              <p>
                <span className="font-semibold text-[var(--z-dark)]">
                  Location:
                </span>{" "}
                Lagos, Nigeria
              </p>
              <p>
                <span className="font-semibold text-[var(--z-dark)]">
                  Contact Person:
                </span>{" "}
                Jerry Raji
              </p>
              <p>
                <span className="font-semibold text-[var(--z-dark)]">
                  Investor Email:
                </span>{" "}
                invest@zareinenergy.com
              </p>
              <p>
                <span className="font-semibold text-[var(--z-dark)]">
                  General Email:
                </span>{" "}
                info@zareinenergy.com
              </p>
            </div>

            <form className="rounded-[2rem] bg-[var(--z-bg)] p-8 ring-1 ring-gray-200">
              <div className="grid gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[var(--z-dark)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24537f]"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}