"use client";

import Image from "next/image";
import { useInView } from "../../hooks/useInView";
import { useTranslations } from "next-intl";

export default function StoryArtisans() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const t = useTranslations("story");

  return (
    <section className="relative py-32 sm:py-40 md:py-52 overflow-hidden bg-brand-brown dark:bg-[#0e0b09]">
      <div className="absolute inset-0">
        <Image
          fill
          alt={t("artisans.alt")}
          className="object-cover opacity-20 dark:opacity-10"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1cM0elRRIY9Xq3x0DnlBpOsBvSwRndN7aI0ZiGyOH0iRd6S8rXFHnwVuWcaYuY7QcjIp_Ke01vcWPf7km3EClEFe_v6RpAeRWpepN43Amc33NiSEpPOOHaw2bt5ztx7ZYHfMX_ANn8AmX3iBV2cQT-LMShhNKeFpOV7oxjEX5lxRrBHgurHQQjOKzX3F-SZnLeBv2lcncOJttrS4tOFg2DtvKMcho1zJ3K14CXJgkHn_zlihp-lIIaT7VOSkFqzQVHmSsPt9GqSQ"
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <span className={`reveal from-scale ${inView ? "in-view" : ""} story-eyebrow block mb-6`}>
          {t("artisans.eyebrow")}
        </span>

        <h2 className={`reveal reveal-delay-100 ${inView ? "in-view" : ""} story-section-title--light mb-8 sm:mb-10`}>
          {t("artisans.headline")}
        </h2>

        <p className={`reveal reveal-delay-200 ${inView ? "in-view" : ""} story-body--inverse mb-5 sm:mb-6`}>
          {t("artisans.p1")}
        </p>
        <p className={`reveal reveal-delay-300 ${inView ? "in-view" : ""} story-body--inverse`}>
          {t("artisans.p2")}
        </p>
      </div>
    </section>
  );
}
