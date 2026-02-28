"use client";

import { useState, useMemo, useEffect, useRef } from "react";
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

const PAGE_SIZE = 16;

interface ShopClientProps {
  initialProducts: Product[];
  categories: string[];
}

export default function ShopClient({ initialProducts, categories }: ShopClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy]                 = useState<SortValue>("featured");
  const [currentPage, setCurrentPage]       = useState(1);
  const [sortOpen, setSortOpen]             = useState(false);
  const gridTopRef                          = useRef<HTMLDivElement>(null);

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

  const totalPages  = Math.ceil(filtered.length / PAGE_SIZE);
  const startIndex  = (currentPage - 1) * PAGE_SIZE;
  const pageItems   = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  // Reset về trang 1 khi đổi filter/sort
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSortChange = (val: SortValue) => {
    setSortBy(val);
    setSortOpen(false);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll lên đầu grid
    setTimeout(() => {
      gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  // Tính dãy số trang hiển thị (luôn hiện tối đa 5 nút)
  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages: (number | "...")[] = [1];
    const left  = Math.max(2, currentPage - 1);
    const right = Math.min(totalPages - 1, currentPage + 1);

    if (left > 2)          pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("...");
    pages.push(totalPages);

    return pages;
  }, [totalPages, currentPage]);

  return (
    <>
      {/* ── Sticky Filter Bar ─────────────────────────── */}
      <div className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-brand-brown/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 gap-3 sm:gap-6">

            {/* Category tabs */}
            <nav className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto scrollbar-hide flex-1 min-w-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`relative px-2.5 sm:px-4 py-2 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase whitespace-nowrap transition-colors duration-200 shrink-0 ${
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
            <div className="flex items-center gap-3 sm:gap-6 shrink-0">
              <span className="text-[10px] sm:text-[11px] tracking-widest opacity-40 hidden sm:block">
                {filtered.length} pieces
              </span>

              <div className="relative">
                <button
                  onClick={() => setSortOpen((o) => !o)}
                  className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase opacity-70 hover:opacity-100 transition-opacity"
                >
                  <span className="hidden sm:inline">{SORT_OPTIONS.find((o) => o.value === sortBy)?.label}</span>
                  <span className="sm:hidden">Sort</span>
                  <span className="material-symbols-outlined text-sm sm:text-[16px]">
                    {sortOpen ? "expand_less" : "expand_more"}
                  </span>
                </button>

                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-44 sm:w-48 bg-background-light dark:bg-background-dark border border-brand-brown/15 dark:border-white/10 shadow-xl z-50">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleSortChange(opt.value)}
                        className={`w-full text-left px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-[11px] tracking-widest uppercase hover:bg-primary/10 transition-colors ${
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 md:py-16 overflow-hidden">

        {/* Anchor để scroll-to khi đổi trang */}
        <div ref={gridTopRef} className="-mt-4 pt-4" aria-hidden />

        {pageItems.length === 0 ? (
          <div className="text-center py-20 md:py-32">
            <span className="material-symbols-outlined text-4xl md:text-5xl opacity-20 mb-4 block">search_off</span>
            <p className="font-display italic text-xl md:text-2xl opacity-40">No pieces found</p>
          </div>
        ) : (
          <>
            {/* Info row */}
            <p className="text-[10px] sm:text-[11px] tracking-widest opacity-40 mb-6 md:mb-10">
              Showing {startIndex + 1}–{Math.min(startIndex + PAGE_SIZE, filtered.length)} of {filtered.length} pieces
            </p>

            {/* Grid */}
            <div
              ref={gridRef}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 md:gap-x-6 md:gap-y-14"
            >
              {pageItems.map((product, i) => (
                <div
                  key={product.id}
                  className={`reveal ${gridInView ? "in-view" : ""}`}
                  style={{ transitionDelay: `${(i % 4) * 80}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* ── Pagination ─────────────────────────────── */}
            {totalPages > 1 && (
              <div className="mt-14 md:mt-20 flex flex-col items-center gap-6">

                {/* Page buttons */}
                <div className="flex items-center gap-1 sm:gap-2">
                  {/* Prev */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-brand-brown/20 dark:border-white/15 disabled:opacity-25 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-base sm:text-lg">chevron_left</span>
                  </button>

                  {/* Page numbers */}
                  {pageNumbers.map((p, idx) =>
                    p === "..." ? (
                      <span
                        key={`ellipsis-${idx}`}
                        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[11px] opacity-40"
                      >
                        ···
                      </span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => handlePageChange(p as number)}
                        aria-label={`Page ${p}`}
                        aria-current={currentPage === p ? "page" : undefined}
                        className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[11px] sm:text-xs tracking-widest border transition-all duration-200 ${
                          currentPage === p
                            ? "bg-primary border-primary text-white"
                            : "border-brand-brown/20 dark:border-white/15 hover:border-primary hover:text-primary"
                        }`}
                      >
                        {p}
                      </button>
                    )
                  )}

                  {/* Next */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-brand-brown/20 dark:border-white/15 disabled:opacity-25 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-base sm:text-lg">chevron_right</span>
                  </button>
                </div>

                {/* Page x of y */}
                <p className="text-[10px] tracking-[0.25em] uppercase opacity-40">
                  Page {currentPage} of {totalPages}
                </p>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
