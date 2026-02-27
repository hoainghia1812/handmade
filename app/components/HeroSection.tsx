"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">

      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <Image
          fill
          alt="Luxury Wool Texture"
          className="object-cover brightness-[0.85] dark:brightness-[0.6] scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIFebga5kQz5t3adBI1sSPmuTDrOHAenWzC15lfdgvJFs7O8ZUp3guexQ632Fk3qP7pS2UaebNoi83y5CJZ4qofy6A6HhV-qr67tyLNym0gPvhuo2PPc-B31X5W7izgAs36toYcYaTcZhaOAmRNVSkzndtJj75cLTSFuyy2GFzIPGee3jWbLPImAua02Mhh3wdvCCKiZn93MIQg_l_vd279o8_477w1PlGOmb-IxNCkB88014BVgiz-tdlBcciYxBs7HuZaYvoCOE"
          priority
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 animate-[heroIn_1.2s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
        <h2 className="font-display italic text-lg sm:text-2xl md:text-3xl mb-3 md:mb-4 text-primary">
          Artisanship in every stitch
        </h2>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 md:mb-8">
          The Luxury of Giving
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <a
            className="w-full sm:w-auto bg-primary hover:bg-opacity-90 text-white px-8 py-3 md:px-10 md:py-4 text-xs sm:text-sm tracking-widest uppercase transition-all duration-300"
            href="/shop"
          >
            Shop Collection
          </a>
          <a
            className="w-full sm:w-auto border border-white/40 hover:border-white text-white px-8 py-3 md:px-10 md:py-4 text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 bg-white/5 backdrop-blur-sm"
            href="/#story"
          >
            Our Process
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <span className="material-symbols-outlined text-white opacity-50">
          keyboard_double_arrow_down
        </span>
      </div>
    </section>
  );
}
