export default function SearchSection() {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Location"
            className="flex-1 px-4 py-3 border rounded-lg"
          />

          <input
            type="text"
            placeholder="Property Type"
            className="flex-1 px-4 py-3 border rounded-lg"
          />

          <input
            type="text"
            placeholder="Price Range"
            className="flex-1 px-4 py-3 border rounded-lg"
          />

          <button className="bg-[var(--z-blue)] text-[var(--z-navy)] px-6 py-3 rounded-lg font-semibold">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}