"use client";

import { useInView } from "../../hooks/useInView";

export default function CraftBanner() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-brand-brown dark:bg-neutral-900 py-24 px-6 lg:px-12 overflow-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <div className="space-y-4 text-center lg:text-left">
          <p className={`reveal from-left text-primary tracking-[0.4em] uppercase text-xs font-bold ${inView ? "in-view" : ""}`}>
            Made to Order
          </p>
          <h2 className={`reveal from-left reveal-delay-100 font-display text-4xl md:text-5xl italic text-background-light leading-tight ${inView ? "in-view" : ""}`}>
            Can&apos;t find what you&apos;re<br />looking for?
          </h2>
          <p className={`reveal from-left reveal-delay-200 text-background-light/60 text-sm max-w-md ${inView ? "in-view" : ""}`}>
            Every piece in our atelier can be custom-crafted to your exact specifications — dimensions, fibres, and colour.
          </p>
        </div>

        <div className={`reveal from-right reveal-delay-300 shrink-0 ${inView ? "in-view" : ""}`}>
          <a
            href="#"
            className="inline-block bg-primary text-white px-12 py-5 text-[11px] tracking-[0.3em] uppercase hover:bg-background-light hover:text-brand-brown transition-all duration-300"
          >
            Request Bespoke
          </a>
        </div>
      </div>
    </section>
  );
}
