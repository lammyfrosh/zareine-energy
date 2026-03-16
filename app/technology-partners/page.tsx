import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const partners = [
  "MWM / Caterpillar",
  "Clarke Energy",
  "Hidier Power",
  "Axxela",
  "Tetracore",
  "Ikeja Electric",
  "FHA",
];

export default function TechnologyPartnersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--z-dark)]">
            Technology & Partners
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--z-text)] sm:text-5xl">
            Built with trusted technology and strategic relationships
          </h1>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner}
                className="hover-lift rounded-[2rem] bg-[var(--z-bg)] p-8 ring-1 ring-gray-200"
              >
                <h2 className="text-xl font-semibold text-[var(--z-dark)]">
                  {partner}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}