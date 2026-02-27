"use client";

import { useInView } from "../hooks/useInView";
import ProductCard from "./ProductCard";
import { Product } from "../types/product";

const DELAYS = ["", "reveal-delay-100", "reveal-delay-200", "reveal-delay-300"];

interface NewArrivalsClientProps {
  products: Product[];
}

export default function NewArrivalsClient({ products }: NewArrivalsClientProps) {
  const { ref: headingRef, inView: headingInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView }       = useInView<HTMLDivElement>();

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12" id="shop">
      <div className="max-w-7xl mx-auto">

        {/* Heading row */}
        <div
          ref={headingRef}
          className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-16"
        >
          <div className={`reveal from-left ${headingInView ? "in-view" : ""}`}>
            <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-2 block">
              Curation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">New Arrivals</h2>
          </div>
          <a
            className={`reveal from-right reveal-delay-200 text-xs tracking-widest uppercase border-b border-brand-brown dark:border-background-light pb-1 hover:text-primary transition-colors mt-4 md:mt-0 ${headingInView ? "in-view" : ""}`}
            href="/shop"
          >
            View All Products
          </a>
        </div>

        {/* Products grid */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`reveal ${DELAYS[i] ?? ""} ${gridInView ? "in-view" : ""}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
