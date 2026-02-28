"use client";

import { useInView } from "../../hooks/useInView";

const MATERIALS = [
  {
    name:    "Merino Wool",
    origin:  "Australia",
    grade:   "Superfine 17.5 micron",
    traits:  ["Ultra-soft", "Breathable", "Thermoregulating"],
    color:   "bg-[#D4C5B0]",
  },
  {
    name:    "Cashmere",
    origin:  "Mongolia",
    grade:   "Grade A — 14 micron",
    traits:  ["Exceptionally rare", "Cloud-light", "Ages beautifully"],
    color:   "bg-[#C8B8A2]",
  },
  {
    name:    "Baby Alpaca",
    origin:  "Peru",
    grade:   "First-shear fibre",
    traits:  ["Hypoallergenic", "Silk-like sheen", "Durable"],
    color:   "bg-[#B5A898]",
  },
  {
    name:    "Organic Cotton",
    origin:  "Vietnam",
    grade:   "GOTS Certified",
    traits:  ["Sustainably farmed", "Crisp texture", "Colourfast"],
    color:   "bg-[#E8DED0]",
  },
];

export default function StoryMaterials() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#EBE4D5] dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className={`reveal ${inView ? "in-view" : ""} mb-14 sm:mb-20`}>
          <span className="text-primary tracking-[0.4em] uppercase text-[10px] sm:text-xs font-semibold block mb-4">
            Chapter 03 — The Fibre
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic max-w-xl">
            Only the finest raw materials on earth.
          </h2>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {MATERIALS.map((m, i) => (
            <div
              key={m.name}
              className={`reveal ${inView ? "in-view" : ""} group bg-background-light dark:bg-background-dark border border-brand-brown/10 dark:border-white/8 hover:border-primary/30 transition-all duration-500 overflow-hidden`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Swatch */}
              <div className={`${m.color} h-28 sm:h-32 transition-all duration-700 group-hover:h-36`} />

              {/* Info */}
              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl mb-0.5">{m.name}</h3>
                  <p className="text-[10px] tracking-[0.25em] uppercase opacity-40">{m.origin}</p>
                </div>
                <p className="text-[11px] sm:text-xs tracking-wide text-primary font-medium">{m.grade}</p>
                <ul className="space-y-1.5">
                  {m.traits.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-xs sm:text-sm opacity-60">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
