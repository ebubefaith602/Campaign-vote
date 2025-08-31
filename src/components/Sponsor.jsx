import React from "react";

const Sponsor = () => {
  const sponsors = [
    { id: 1, name: "Dr. Sarah Johnson" },
    { id: 2, name: "Michael Anderson" },
    { id: 3, name: "Prof. Daniel Williams" },
    { id: 4, name: "Emily Carter" },
    { id: 5, name: "James Thompson" },
    { id: 6, name: "Olivia Martinez" },
  ];

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-yellow-600 tracking-wide">
          Our Esteemed Sponsors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((s) => (
            <div
              key={s.id}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-400 transition duration-300"
            >
              <p className="text-xl font-semibold text-gray-800">{s.name}</p>
              <span className="mt-2 block text-sm text-gray-500">
                Campaign Supporter
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
