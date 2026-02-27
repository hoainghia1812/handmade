"use client";

import Image from "next/image";
import { useInView } from "../hooks/useInView";

export default function OurStory() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#EBE4D5] dark:bg-neutral-900" id="story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

          {/* Images */}
          <div className={`reveal from-left ${inView ? "in-view" : ""} relative`}>
            <div className="relative w-full aspect-square">
              <Image
                fill
                alt="Artisan Hands"
                className="object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtJuPF37gE56fSewtifGK_tM7K5o-bpW354TJuzcbvCFdmiBIOZOE00Aqm26uOuxB_A9twsMVl_sgtQXBjB9uzwwKx9UBmzIbtPWm6Np1aDakw8sn5tdTFXedkDV61QToyFY5cLv6_TWSGXHBJeNg1gkyAlHltaGtYhjuTsvz7YUTtIuOFVcPbnOU_k5rc5KkA1T4jMcSGIu6MPAcPzO0tgjzkYrAI5knKGJhFEhC296icFQmHGDnLsSGU5gejYs0U3bovKmu3Btw"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-10 hidden lg:block w-48 h-64 md:w-64 md:h-80 border-4 border-primary/20 p-3 md:p-4">
              <div className="relative w-full h-full">
                <Image
                  fill
                  alt="Wool Detail"
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5P5jfL6RURg_w2_8tlxOjWh9aticf_LV17dMSblStiJkWbohjoEEACUR93dhAHngGT5YKnnRmiNsV6r9HRN2sO21tU7c-_MCddiLVnFm0oXQ8OgX3TVbGajCSR3aR1reX1UcULVdlOyLGOcfyXUpR5AgIYSfwqjhNYVEay62Njg_xWkR-3gwtcVFVscaKvDz6KLdA4oAy1-jZWD6L-imGnBmDMA1aLG8lUEJ7f8wJtXFcj6ztEQesDX6xP40PxSYRlZkKBKXy0dc"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 md:space-y-8">
            <span className={`reveal from-right ${inView ? "in-view" : ""} block text-primary tracking-[0.4em] uppercase text-xs font-bold`}>
              The Maker&apos;s Mark
            </span>
            <h2 className={`reveal from-right reveal-delay-100 ${inView ? "in-view" : ""} font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight italic`}>
              Rooted in Heritage, Crafted for Comfort.
            </h2>
            <p className={`reveal from-right reveal-delay-200 ${inView ? "in-view" : ""} text-base md:text-lg leading-relaxed opacity-80`}>
              At Mush &amp; Co., we believe that luxury is felt, not just seen. Every piece in
              our collection is meticulously hand-crocheted or woven by master artisans using
              time-honored techniques passed through generations.
            </p>
            <p className={`reveal from-right reveal-delay-300 ${inView ? "in-view" : ""} text-base md:text-lg leading-relaxed opacity-80`}>
              We source only the finest, sustainable natural fibers—from ethically harvested
              Merino wool to rare Grade-A cashmere—ensuring each creation is a legacy piece for
              your home.
            </p>
            <div className={`reveal from-right reveal-delay-400 ${inView ? "in-view" : ""} pt-2 md:pt-6`}>
              <button className="flex items-center space-x-4 group">
                <span className="w-12 h-px bg-brand-brown dark:bg-background-light group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
                <span className="text-xs tracking-[0.3em] uppercase font-bold">
                  Discover Our Story
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
