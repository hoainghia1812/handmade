"use client";

import { useInView } from "../../hooks/useInView";

const VALUES = [
  {
    number: "01",
    title:  "Artisan First",
    icon:   "handshake",
    body:   "We work directly with master weavers — no middlemen, no shortcuts. Every commission begins with a conversation, a sketch, and a commitment to pure human skill.",
  },
  {
    number: "02",
    title:  "Pure Materials",
    icon:   "eco",
    body:   "We source only certified natural fibres: Merino wool from ethically managed Australian farms, Grade-A cashmere from Mongolia, and baby alpaca from the Peruvian highlands.",
  },
  {
    number: "03",
    title:  "Timeless Design",
    icon:   "auto_awesome",
    body:   "We reject trends in favour of permanence. Each silhouette is refined over months until it is simply perfect — a piece you will still love in twenty years.",
  },
];

export default function StoryValues() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#EBE4D5] dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className={`reveal ${inView ? "in-view" : ""} mb-16 sm:mb-20`}>
          <span className="text-primary tracking-[0.4em] uppercase text-[10px] sm:text-xs font-semibold block mb-4">
            What We Stand For
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic max-w-lg">
            Three pillars. One promise.
          </h2>
        </div>

        {/* Values */}
        <div ref={ref} className="divide-y divide-brand-brown/10 dark:divide-white/10">
          {VALUES.map((v, i) => (
            <div
              key={v.number}
              className={`reveal ${inView ? "in-view" : ""} reveal-delay-${i * 100} group grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-4 sm:gap-8 lg:gap-16 items-start py-10 sm:py-12`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Number */}
              <span className="font-display text-6xl sm:text-7xl font-bold text-brand-brown/10 dark:text-white/10 leading-none select-none">
                {v.number}
              </span>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl group-hover:text-primary transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed opacity-70 max-w-xl">
                  {v.body}
                </p>
              </div>

              {/* Icon */}
              <span className="material-symbols-outlined text-4xl sm:text-5xl opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-500 hidden sm:block self-center">
                {v.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
