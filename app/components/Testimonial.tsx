"use client";

import { useInView } from "../hooks/useInView";

export default function Testimonial() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 text-center bg-background-light dark:bg-background-dark overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto">
        <span className={`reveal from-scale ${inView ? "in-view" : ""} material-symbols-outlined text-primary text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8 block`}>
          format_quote
        </span>
        <p className={`reveal reveal-delay-200 ${inView ? "in-view" : ""} font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl italic leading-snug mb-8 md:mb-12`}>
          &ldquo;There is a profound soul in things made by hand. Mush &amp; Co. captures
          the essence of warmth and luxury in a way that feels personal.&rdquo;
        </p>
        <div className={`reveal reveal-delay-400 ${inView ? "in-view" : ""} flex items-center justify-center space-x-4`}>
          <div className="h-px w-8 bg-primary" />
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold">
            Elena Vance, Interior Designer
          </span>
          <div className="h-px w-8 bg-primary" />
        </div>
      </div>
    </section>
  );
}
