"use client";

import { useInView } from "../../hooks/useInView";
import { useTranslations } from "next-intl";

const MATERIAL_KEYS = [
  { key: "merino", color: "bg-[#D4C5B0]" },
  { key: "cashmere", color: "bg-[#C8B8A2]" },
  { key: "alpaca", color: "bg-[#B5A898]" },
  { key: "cotton", color: "bg-[#E8DED0]" },
] as const;

export default function StoryMaterials() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const t = useTranslations("story");

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#EBE4D5] dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className={`reveal ${inView ? "in-view" : ""} mb-14 sm:mb-20`}>
          <span className="text-primary tracking-[0.4em] uppercase text-[10px] sm:text-xs font-semibold block mb-4">
            {t("materials.eyebrow")}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic max-w-xl">
            {t("materials.title")}
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {MATERIAL_KEYS.map((m, i) => {
            const name = t("materials." + m.key);
            const origin = t("materials." + m.key + "Origin");
            const grade = t("materials." + m.key + "Grade");
            const traitsStr = t("materials." + m.key + "Traits");
            const traits = traitsStr.split(",").map((s) => s.trim());
            return (
              <div
                key={m.key}
                className={`reveal ${inView ? "in-view" : ""} group bg-background-light dark:bg-background-dark border border-brand-brown/10 dark:border-white/8 hover:border-primary/30 transition-all duration-500 overflow-hidden`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`${m.color} h-28 sm:h-32 transition-all duration-700 group-hover:h-36`} />
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl mb-0.5">{name}</h3>
                    <p className="text-[10px] tracking-[0.25em] uppercase opacity-40">{origin}</p>
                  </div>
                  <p className="text-[11px] sm:text-xs tracking-wide text-primary font-medium">{grade}</p>
                  <ul className="space-y-1.5">
                    {traits.map((tr) => (
                      <li key={tr} className="flex items-center gap-2 text-xs sm:text-sm opacity-60">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        {tr}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
