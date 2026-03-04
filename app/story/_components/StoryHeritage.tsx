"use client";

import Image from "next/image";
import { useInView } from "../../hooks/useInView";
import { useTranslations } from "next-intl";

export default function StoryHeritage() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const t = useTranslations("story");

  const stats = [
    { num: "200+", label: t("heritage.stat1") },
    { num: "12", label: t("heritage.stat2") },
    { num: "100%", label: t("heritage.stat3") },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image side */}
          <div className={`reveal from-left ${inView ? "in-view" : ""} relative`}>
            <p className="text-[120px] sm:text-[160px] md:text-[200px] font-display font-bold leading-none text-brand-brown/5 dark:text-white/5 absolute -top-8 -left-4 select-none pointer-events-none">
              01
            </p>

            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                fill alt="Heritage craftsmanship"
                className="object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5P5jfL6RURg_w2_8tlxOjWh9aticf_LV17dMSblStiJkWbohjoEEACUR93dhAHngGT5YKnnRmiNsV6r9HRN2sO21tU7c-_MCddiLVnFm0oXQ8OgX3TVbGajCSR3aR1reX1UcULVdlOyLGOcfyXUpR5AgIYSfwqjhNYVEay62Njg_xWkR-3gwtcVFVscaKvDz6KLdA4oAy1-jZWD6L-imGnBmDMA1aLG8lUEJ7f8wJtXFcj6ztEQesDX6xP40PxSYRlZkKBKXy0dc"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-brand-brown dark:bg-background-dark p-5 sm:p-7 shadow-2xl hidden sm:block">
              <p className="font-display text-4xl sm:text-5xl text-background-light font-bold leading-none">7+</p>
              <p className="text-background-light/50 text-[10px] tracking-[0.3em] uppercase mt-1">{t("heritage.years")}</p>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6 sm:space-y-8">
            <div className={`reveal from-right ${inView ? "in-view" : ""}`}>
              <span className="text-primary tracking-[0.4em] uppercase text-[10px] sm:text-xs font-semibold block mb-4">
                {t("heritage.chapter")}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight italic">
                {t("heritage.title")}
              </h2>
            </div>

            <p className={`reveal from-right reveal-delay-100 ${inView ? "in-view" : ""} text-base sm:text-lg leading-relaxed opacity-70`}>
              {t("heritage.p1")}
            </p>
            <p className={`reveal from-right reveal-delay-200 ${inView ? "in-view" : ""} text-base sm:text-lg leading-relaxed opacity-70`}>
              {t("heritage.p2")}
            </p>

            <div className={`reveal from-right reveal-delay-300 ${inView ? "in-view" : ""} grid grid-cols-3 gap-4 pt-4 border-t border-brand-brown/10 dark:border-white/10`}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl sm:text-4xl font-bold text-primary leading-none">{s.num}</p>
                  <p className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase opacity-50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
