"use client";

import Image from "next/image";
import { useInView } from "../../hooks/useInView";

export default function StoryArtisans() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative py-32 sm:py-40 md:py-52 overflow-hidden bg-brand-brown dark:bg-[#0e0b09]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          fill alt="Artisan at work"
          className="object-cover opacity-20 dark:opacity-10"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1cM0elRRIY9Xq3x0DnlBpOsBvSwRndN7aI0ZiGyOH0iRd6S8rXFHnwVuWcaYuY7QcjIp_Ke01vcWPf7km3EClEFe_v6RpAeRWpepN43Amc33NiSEpPOOHaw2bt5ztx7ZYHfMX_ANn8AmX3iBV2cQT-LMShhNKeFpOV7oxjEX5lxRrBHgurHQQjOKzX3F-SZnLeBv2lcncOJttrS4tOFg2DtvKMcho1zJ3K14CXJgkHn_zlihp-lIIaT7VOSkFqzQVHmSsPt9GqSQ"
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">

        {/* Quote mark */}
        <span className={`reveal from-scale ${inView ? "in-view" : ""} material-symbols-outlined text-primary text-5xl sm:text-6xl mb-8 block`}>
          format_quote
        </span>

        {/* Quote */}
        <blockquote className={`reveal reveal-delay-100 ${inView ? "in-view" : ""} font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-background-light leading-tight mb-10 sm:mb-14`}>
          &ldquo;I do not make products. I make memories — woven one thread at a time, with love for the person who will receive them.&rdquo;
        </blockquote>

        {/* Attribution */}
        <div className={`reveal reveal-delay-200 ${inView ? "in-view" : ""} flex items-center justify-center gap-4`}>
          <div className="h-px w-10 bg-primary/60" />
          <div className="text-center">
            <p className="text-background-light text-xs tracking-[0.3em] uppercase font-semibold">Nguyễn Thị Lan</p>
            <p className="text-background-light/40 text-[10px] tracking-[0.2em] uppercase mt-0.5">Lead Artisan — 22 years</p>
          </div>
          <div className="h-px w-10 bg-primary/60" />
        </div>

        {/* Divider */}
        <div className={`reveal reveal-delay-300 ${inView ? "in-view" : ""} mt-16 sm:mt-20 pt-14 sm:pt-16 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8`}>
          {[
            { num: "22 yrs", label: "Average experience" },
            { num: "12",     label: "Master artisans" },
            { num: "4",      label: "Generations of craft" },
            { num: "100%",   label: "Women-led atelier" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl text-primary font-bold">{s.num}</p>
              <p className="text-background-light/40 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
