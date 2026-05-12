"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function StoryHero() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);
  const t = useTranslations("story");

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Parallax image */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          fill priority
          alt={t("hero.alt")}
          className="object-cover scale-110 brightness-[0.55] dark:brightness-[0.4]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtJuPF37gE56fSewtifGK_tM7K5o-bpW354TJuzcbvCFdmiBIOZOE00Aqm26uOuxB_A9twsMVl_sgtQXBjB9uzwwKx9UBmzIbtPWm6Np1aDakw8sn5tdTFXedkDV61QToyFY5cLv6_TWSGXHBJeNg1gkyAlHltaGtYhjuTsvz7YUTtIuOFVcPbnOU_k5rc5KkA1T4jMcSGIu6MPAcPzO0tgjzkYrAI5knKGJhFEhC296icFQmHGDnLsSGU5gejYs0U3bovKmu3Btw"
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-3xl">
          <p className="story-eyebrow mb-4 animate-[heroIn_1s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[0.98] mb-4 sm:mb-6 animate-[heroIn_1s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]">
            {t("hero.title")}<br /><em className="font-medium">{t("hero.titleEm")}</em>
          </h1>
          <p className="story-hero-lead max-w-2xl mb-5 sm:mb-6 animate-[heroIn_1s_cubic-bezier(0.22,1,0.36,1)_0.32s_both]">
            {t("hero.lead")}
          </p>
          <p className="story-hero-prose animate-[heroIn_1s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-10 right-6 sm:right-12 lg:right-16 flex flex-col items-center gap-3"
          style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          <span className="text-white/30 text-[9px] tracking-[0.4em] uppercase [writing-mode:vertical-rl] rotate-180">{t("hero.scroll")}</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-primary animate-[scrollLine_2s_ease-in-out_infinite]" style={{ height: "40%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
