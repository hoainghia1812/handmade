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
      <div className="relative aspect-4/5 overflow-hidden mb-5 bg-stone-100 dark:bg-stone-800">
        <Image
          fill
          alt={name}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          src={imageUrl}
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-4 left-4 bg-primary text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1">
            {badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWished((w) => !w); }}
          className="absolute top-4 right-4 bg-white/80 dark:bg-black/70 p-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
          aria-label="Wishlist"
        >
          <span
            className={`material-symbols-outlined text-[18px] ${wished ? "text-primary" : ""}`}
            style={wished ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            favorite
          </span>
        </button>

        {/* Quick Add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <button
            onClick={(e) => e.preventDefault()}
            className="w-full bg-brand-brown dark:bg-background-light text-background-light dark:text-brand-brown text-[11px] tracking-[0.25em] uppercase py-4 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors duration-300"
          >
            Quick Add
          </button>
        </div>
      </div>

      <h4 className="font-display text-xl mb-1 group-hover:text-primary transition-colors duration-300">
        {name}
      </h4>
      <p className="text-primary font-semibold">{formatPrice(priceInCents, currency)}</p>
      <p className="text-[10px] tracking-widest uppercase opacity-50 mt-1">{material}</p>
    </Link>
  );
}
