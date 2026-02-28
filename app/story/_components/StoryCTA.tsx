"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "../../hooks/useInView";

export default function StoryCTA() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          fill alt="Collection"
          className="object-cover brightness-[0.55] dark:brightness-[0.4]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIFebga5kQz5t3adBI1sSPmuTDrOHAenWzC15lfdgvJFs7O8ZUp3guexQ632Fk3qP7pS2UaebNoi83y5CJZ4qofy6A6HhV-qr67tyLNym0gPvhuo2PPc-B31X5W7izgAs36toYcYaTcZhaOAmRNVSkzndtJj75cLTSFuyy2GFzIPGee3jWbLPImAua02Mhh3wdvCCKiZn93MIQg_l_vd279o8_477w1PlGOmb-IxNCkB88014BVgiz-tdlBcciYxBs7HuZaYvoCOE"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 text-center text-white px-4 sm:px-6 max-w-3xl mx-auto">
        <p className={`reveal from-scale ${inView ? "in-view" : ""} text-primary tracking-[0.5em] uppercase text-[10px] sm:text-xs font-semibold mb-4`}>
          The Collection Awaits
        </p>
        <h2 className={`reveal reveal-delay-100 ${inView ? "in-view" : ""} font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight italic mb-6 sm:mb-8`}>
          Wear the story.
        </h2>
        <p className={`reveal reveal-delay-200 ${inView ? "in-view" : ""} text-white/60 text-sm sm:text-base mb-10 sm:mb-12 max-w-md mx-auto leading-relaxed`}>
          Every piece is a chapter waiting to be lived in. Browse our full collection of handcrafted luxury.
        </p>
        <div className={`reveal reveal-delay-300 ${inView ? "in-view" : ""} flex flex-col sm:flex-row items-center justify-center gap-4`}>
          <Link
            href="/shop"
            className="w-full sm:w-auto bg-primary text-white px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-background-light hover:text-brand-brown transition-all duration-300"
          >
            Shop Collection
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto border border-white/30 hover:border-white text-white px-10 py-4 text-xs tracking-[0.3em] uppercase bg-white/5 backdrop-blur-sm transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
