"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function StoryHero() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);

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
          alt="Artisan crafting"
          className="object-cover scale-110 brightness-[0.55] dark:brightness-[0.4]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtJuPF37gE56fSewtifGK_tM7K5o-bpW354TJuzcbvCFdmiBIOZOE00Aqm26uOuxB_A9twsMVl_sgtQXBjB9uzwwKx9UBmzIbtPWm6Np1aDakw8sn5tdTFXedkDV61QToyFY5cLv6_TWSGXHBJeNg1gkyAlHltaGtYhjuTsvz7YUTtIuOFVcPbnOU_k5rc5KkA1T4jMcSGIu6MPAcPzO0tgjzkYrAI5knKGJhFEhC296icFQmHGDnLsSGU5gejYs0U3bovKmu3Btw"
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-3xl">
          <p className="text-primary tracking-[0.5em] uppercase text-[10px] sm:text-xs font-semibold mb-4 animate-[heroIn_1s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
            Mush &amp; Co. — Est. 2018
          </p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] text-white font-medium tracking-tight leading-none mb-6 animate-[heroIn_1s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]">
            Our<br /><em>Story</em>
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed animate-[heroIn_1s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]">
            A legacy built one thread at a time — where heritage craft meets the modern luxury of giving.
          </p>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-10 right-6 sm:right-12 lg:right-16 flex flex-col items-center gap-3"
          style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          <span className="text-white/30 text-[9px] tracking-[0.4em] uppercase [writing-mode:vertical-rl] rotate-180">Scroll</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-primary animate-[scrollLine_2s_ease-in-out_infinite]" style={{ height: "40%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
