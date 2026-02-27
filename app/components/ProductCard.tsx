"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product, formatPrice } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, priceInCents, currency, material, imageUrl, badge, slug } = product;
  const [wished, setWished] = useState(false);

  return (
    <Link href={`/shop/${slug}`} className="group block cursor-pointer">
      <div className="relative aspect-4/5 overflow-hidden mb-3 sm:mb-4 md:mb-5 bg-stone-100 dark:bg-stone-800">
        <Image
          fill
          alt={name}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          src={imageUrl}
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 bg-primary text-white text-[8px] sm:text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 sm:px-3 sm:py-1">
            {badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWished((w) => !w); }}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-white/80 dark:bg-black/70 p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
          aria-label="Wishlist"
        >
          <span
            className={`material-symbols-outlined text-sm sm:text-base md:text-[18px] ${wished ? "text-primary" : ""}`}
            style={wished ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            favorite
          </span>
        </button>

        {/* Quick Add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <button
            onClick={(e) => e.preventDefault()}
            className="w-full bg-brand-brown dark:bg-background-light text-background-light dark:text-brand-brown text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.25em] uppercase py-2.5 sm:py-3 md:py-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors duration-300"
          >
            Quick Add
          </button>
        </div>
      </div>

      <h4 className="font-display text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
        {name}
      </h4>
      <p className="text-primary font-semibold text-sm sm:text-base">{formatPrice(priceInCents, currency)}</p>
      <p className="text-[9px] sm:text-[10px] tracking-widest uppercase opacity-50 mt-1">{material}</p>
    </Link>
  );
}
