"use client";

import { useInView } from "../../hooks/useInView";
import { useTranslations } from "next-intl";

export default function StoryMaterials() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const t = useTranslations("story");

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#EBE4D5] dark:bg-neutral-900 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`reveal ${inView ? "in-view" : ""} mb-10 sm:mb-14`}>
          <span className="story-eyebrow block mb-4">
            {t("materials.eyebrow")}
          </span>
          <h2 className="story-section-title max-w-3xl">
            {t("materials.title")}
          </h2>
        </div>

        <p className={`reveal reveal-delay-100 ${inView ? "in-view" : ""} story-body max-w-3xl mb-12 sm:mb-16`}>
          {t("materials.intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          <article
            className={`reveal reveal-delay-100 ${inView ? "in-view" : ""} rounded-xl bg-background-light/60 dark:bg-background-dark/40 border border-brand-brown/10 dark:border-white/10 p-6 sm:p-8`}
          >
            <p className="font-display text-4xl text-primary/35 leading-none mb-4">01</p>
            <h3 className="story-card-title mb-3">
              {t("materials.point1Title")}
            </h3>
            <p className="story-body">
              {t("materials.point1Body")}
            </p>
          </article>

          <article
            className={`reveal reveal-delay-200 ${inView ? "in-view" : ""} rounded-xl bg-background-light/60 dark:bg-background-dark/40 border border-brand-brown/10 dark:border-white/10 p-6 sm:p-8`}
          >
            <p className="font-display text-4xl text-primary/35 leading-none mb-4">02</p>
            <h3 className="story-card-title mb-3">
              {t("materials.point2Title")}
            </h3>
            <p className="story-body">
              {t("materials.point2Body")}
            </p>
          </article>

          <article
            className={`reveal reveal-delay-300 ${inView ? "in-view" : ""} rounded-xl bg-background-light/60 dark:bg-background-dark/40 border border-brand-brown/10 dark:border-white/10 p-6 sm:p-8`}
          >
            <p className="font-display text-4xl text-primary/35 leading-none mb-4">03</p>
            <h3 className="story-card-title mb-3">
              {t("materials.point3Title")}
            </h3>
            <p className="story-body">
              {t("materials.point3Body")}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
