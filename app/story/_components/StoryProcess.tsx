"use client";

import Image from "next/image";
import { useInView } from "../../hooks/useInView";

const STEPS = [
  {
    number: "01",
    title:  "Design",
    body:   "Each collection begins with extensive research into traditional weaving patterns, translated into contemporary silhouettes through weeks of sketching and sampling.",
    src:    "https://lh3.googleusercontent.com/aida-public/AB6AXuCUqBJh2dv8H2MeJxXuFow45okAbswrol6Q18bUEmdhWcTXLr5nrndXL8jl8sc9aDWTI_83itlul8p80-yDtjXKti3AgO95D2Kv5rCgpYP2mxSrPbE4De5F1o83DesDIGfwdRj34vcdJ3THJf9WbKRmROFoN6yS1CsMHTfo_I1dkpsu8GxN5qu0-LW4SG7bifXsDkdDzDJ9rPd3QQBbLmAK8agVYq6DpLvWjwrWBGy5qUgDxeb5IOjIqQYLFYiyso5fKAaQ9Gk-puA",
  },
  {
    number: "02",
    title:  "Source",
    body:   "We travel to the origin of each fibre — meeting farmers, testing raw materials, and selecting only those that meet our rigorous standards of quality and ethics.",
    src:    "https://lh3.googleusercontent.com/aida-public/AB6AXuBmgYnlGiANqFRA7kNvb3eNWBz4zSd9VSmssbt1FbOhRAMpgoMfNFY0rds3pFhKrKYcMYuZKCDTbDZupKaaLbJ839TpJ88T2lkuBnQCQnItiHrTt_XT3B2_yXyzS0OvrcXJGtJ2Jvlhx6NKbO9Gb7enJvlqB6Man-eVWJHZPxgdPNYP48_GY1J5eK0QlJLOdGs458rTarp2XNaDFgpf98BeG2bwQLXNbQ__DYdLZxxyhwEjh36AWMUAxa_BvQFtagl_AK7GcPbcytw",
  },
  {
    number: "03",
    title:  "Craft",
    body:   "Our artisans spend between 40 and 200 hours on a single piece. No machines are involved in the weaving process — only hands, patience, and generations of inherited skill.",
    src:    "https://lh3.googleusercontent.com/aida-public/AB6AXuAtJuPF37gE56fSewtifGK_tM7K5o-bpW354TJuzcbvCFdmiBIOZOE00Aqm26uOuxB_A9twsMVl_sgtQXBjB9uzwwKx9UBmzIbtPWm6Np1aDakw8sn5tdTFXedkDV61QToyFY5cLv6_TWSGXHBJeNg1gkyAlHltaGtYhjuTsvz7YUTtIuOFVcPbnOU_k5rc5KkA1T4jMcSGIu6MPAcPzO0tgjzkYrAI5knKGJhFEhC296icFQmHGDnLsSGU5gejYs0U3bovKmu3Btw",
  },
  {
    number: "04",
    title:  "Deliver",
    body:   "Every finished piece is inspected by hand, wrapped in archival tissue, and shipped in our signature keepsake box — ready to become part of your home for generations.",
    src:    "https://lh3.googleusercontent.com/aida-public/AB6AXuBKl2gqJxZcC51zFxd4XwvCdmbVroEMa0h267Z5Zf5xq00sRgN5rPBDq5ZXYLD1nm_Dbz6iHRQokMijSrP3RLikKbc0TQIO4aVucKqUXkfCUOBCNefiwjuYEZh8aK_Pr5cssMFFYGsQUx5pySvF8CP1mkcAHwNmaB1JGSa7jHL2BCicti0BHtJUILJ0FEpY0KlPWIJJKRcrbXeUP0DwqyefUybKhHZjL3polR8I1o6XnbxWwUneJIabwj5Z1tP8t4ybwIV5LsF6rkU",
  },
];

/* ── Step item — hook được gọi đúng cấp component ── */
interface StepProps {
  step: typeof STEPS[number];
  index: number;
}

function ProcessStep({ step, index }: StepProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-brand-brown/10 dark:border-white/10 ${
        isEven ? "" : "md:[&>*:first-child]:order-last"
      }`}
    >
      {/* Image */}
      <div className={`reveal ${isEven ? "from-left" : "from-right"} ${inView ? "in-view" : ""} relative aspect-4/3 overflow-hidden`}>
        <Image
          fill alt={step.title}
          className="object-cover transition-transform duration-700 hover:scale-105"
          src={step.src}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Text */}
      <div className={`reveal ${isEven ? "from-right" : "from-left"} reveal-delay-100 ${inView ? "in-view" : ""} flex flex-col justify-center px-8 py-10 sm:px-12 sm:py-12 md:px-14 md:py-16 bg-[#EBE4D5]/40 dark:bg-neutral-900/40`}>
        <span className="font-display text-7xl sm:text-8xl font-bold text-brand-brown/8 dark:text-white/8 leading-none mb-4 select-none">
          {step.number}
        </span>
        <h3 className="font-display text-3xl sm:text-4xl md:text-5xl italic mb-4 sm:mb-6">{step.title}</h3>
        <p className="text-sm sm:text-base leading-relaxed opacity-70 max-w-sm">{step.body}</p>
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function StoryProcess() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div ref={headRef} className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className={`reveal from-left ${headInView ? "in-view" : ""} text-primary tracking-[0.4em] uppercase text-[10px] sm:text-xs font-semibold block mb-4`}>
              Chapter 02 — The Process
            </span>
            <h2 className={`reveal from-left reveal-delay-100 ${headInView ? "in-view" : ""} font-display text-4xl sm:text-5xl md:text-6xl italic max-w-lg`}>
              From fibre to heirloom.
            </h2>
          </div>
          <p className={`reveal from-right ${headInView ? "in-view" : ""} text-sm opacity-50 max-w-xs leading-relaxed text-right hidden sm:block`}>
            A journey of 40–200 hours, travelled entirely by hand.
          </p>
        </div>

        {/* Steps — mỗi step là một component riêng để gọi hook đúng cách */}
        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
