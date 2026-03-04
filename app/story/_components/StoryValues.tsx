"use client";

import { useInView } from "../../hooks/useInView";
import { useTranslations } from "next-intl";

export default function StoryValues() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const t = useTranslations("story");

  const VALUES = [
    { number: "01", titleKey: "v1Title", bodyKey: "v1Body", icon: "handshake" },
    { number: "02", titleKey: "v2Title", bodyKey: "v2Body", icon: "eco" },
    { number: "03", titleKey: "v3Title", bodyKey: "v3Body", icon: "auto_awesome" },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#EBE4D5] dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className={`reveal ${inView ? "in-view" : ""} mb-16 sm:mb-20`}>
          <span className="text-primary tracking-[0.4em] uppercase text-[10px] sm:text-xs font-semibold block mb-4">
            {t("values.eyebrow")}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic max-w-lg">
            {t("values.title")}
          </h2>
        </div>

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
                  {t("values." + v.titleKey)}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed opacity-70 max-w-xl">
                  {t("values." + v.bodyKey)}
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
