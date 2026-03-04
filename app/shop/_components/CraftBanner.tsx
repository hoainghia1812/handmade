"use client";

import { useInView } from "../../hooks/useInView";
import { useTranslations } from "next-intl";

export default function CraftBanner() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const t = useTranslations("product");

  return (
    <section className="bg-brand-brown dark:bg-neutral-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-x-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12"
      >
        <div className="space-y-3 md:space-y-4 text-center lg:text-left">
          <p className={`reveal from-left text-primary tracking-[0.4em] uppercase text-xs font-bold ${inView ? "in-view" : ""}`}>
            {t("craftBanner.eyebrow")}
          </p>
          <h2 className={`reveal from-left reveal-delay-100 font-display text-3xl sm:text-4xl md:text-5xl italic text-background-light leading-tight ${inView ? "in-view" : ""}`}>
            {t("craftBanner.title")}
          </h2>
          <p className={`reveal from-left reveal-delay-200 text-background-light/60 text-xs sm:text-sm max-w-md mx-auto lg:mx-0 ${inView ? "in-view" : ""}`}>
            {t("craftBanner.desc")}
          </p>
        </div>

        <div className={`reveal from-right reveal-delay-300 shrink-0 ${inView ? "in-view" : ""}`}>
          <a
            href="#"
            className="inline-block bg-primary text-white px-8 py-4 sm:px-10 md:px-12 md:py-5 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase hover:bg-background-light hover:text-brand-brown transition-all duration-300"
          >
            {t("craftBanner.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
