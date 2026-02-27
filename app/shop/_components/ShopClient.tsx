"use client";

import { useState, useMemo } from "react";
import ProductCard from "../../components/ProductCard";
import { useInView } from "../../hooks/useInView";
import { Product } from "../../types/product";

const SORT_OPTIONS = [
  { label: "Featured",           value: "featured"   },
  { label: "Price: Low to High", value: "price-asc"  },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest",             value: "newest"     },
] as const;

type SortValue = typeof SORT_OPTIONS[number]["value"];

const PAGE_SIZE = 8;

interface ShopClientProps {
  initialProducts: Product[];
  categories: string[];
}

export default function ShopClient({ initialProducts, categories }: ShopClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy]                 = useState<SortValue>("featured");
  const [visibleCount, setVisibleCount]     = useState(PAGE_SIZE);
  const [sortOpen, setSortOpen]             = useState(false);

  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>();

  const filtered = useMemo(() => {
    const base = activeCategory === "All"
      ? [...initialProducts]
      : initialProducts.filter((p) => p.category === activeCategory);

    const list = [...base];
    if (sortBy === "price-asc")  list.sort((a, b) => a.priceInCents - b.priceInCents);
    if (sortBy === "price-desc") list.sort((a, b) => b.priceInCents - a.priceInCents);
    if (sortBy === "newest")     list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return list;
  }, [initialProducts, activeCategory, sortBy]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      {/* ── Sticky Filter Bar ─────────────────────────── */}
      <div className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-brand-brown/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 gap-6">

            {/* Category tabs */}
            <nav className="flex items-center gap-1 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`relative px-4 py-2 text-[11px] tracking-[0.25em] uppercase whitespace-nowrap transition-colors duration-200 ${
                    activeCategory === cat ? "text-primary" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-primary" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right: count + sort */}
            <div className="flex items-center gap-6 shrink-0">
              <span className="text-[11px] tracking-widest opacity-40 hidden sm:block">
                {filtered.length} pieces
              </span>

              <div className="relative">
                <button
                  onClick={() => setSortOpen((o) => !o)}
                  className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase opacity-70 hover:opacity-100 transition-opacity"
                >
                  <span>{SORT_OPTIONS.find((o) => o.value === sortBy)?.label}</span>
                  <span className="material-symbols-outlined text-[16px]">
                    {sortOpen ? "expand_less" : "expand_more"}
                  </span>
                </button>

                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-background-light dark:bg-background-dark border border-brand-brown/15 dark:border-white/10 shadow-xl z-50">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`w-full text-left px-5 py-3 text-[11px] tracking-widest uppercase hover:bg-primary/10 transition-colors ${
                          sortBy === opt.value ? "text-primary" : ""
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Product Grid ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {visible.length === 0 ? (
          <div className="text-center py-32">
            <span className="material-symbols-outlined text-5xl opacity-20 mb-4 block">search_off</span>
            <p className="font-display italic text-2xl opacity-40">No pieces found</p>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14"
          >
            {visible.map((product, i) => (
              <div
                key={product.id}
                className={`reveal ${gridInView ? "in-view" : ""}`}
                style={{ transitionDelay: `${(i % 4) * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="mt-20 text-center">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="group inline-flex items-center gap-4 border border-brand-brown/30 dark:border-white/20 px-12 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
            >
              Load More
              <span className="material-symbols-outlined text-[16px] group-hover:translate-y-0.5 transition-transform">
                expand_more
              </span>
            </button>
            <p className="mt-4 text-[10px] tracking-widest opacity-40">
              Showing {visible.length} of {filtered.length} pieces
            </p>
          </div>
        )}
      </section>
    </>
  );
}
