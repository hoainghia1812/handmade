import Image from "next/image";
import Link from "next/link";
import { Category } from "../types/category";
import { useLocale, useTranslations } from "next-intl";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { slug, title, label, imageUrl, imageAlt, href, productCount } = category;
  const locale = useLocale();
  const tProduct = useTranslations("product");
  const tHome = useTranslations("home");
  const localizedHref = href.startsWith("/") ? `/${locale}${href}` : href;

  const titleKey = `categories.${slug}.title` as never;
  const labelKey = `categories.${slug}.label` as never;

  let displayTitle = title;
  let displayLabel = label;

  try {
    displayTitle = tHome(titleKey);
    displayLabel = tHome(labelKey);
  } catch {
    // fallback to category data nếu thiếu key
  }

  return (
    <Link href={localizedHref} className="group relative overflow-hidden aspect-3/4 block cursor-pointer">
      <Image
        fill
        alt={imageAlt}
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        src={imageUrl}
      />
      <div className="absolute inset-0 bg-brand-brown/20 group-hover:bg-brand-brown/40 transition-colors duration-500" />

      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white">
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl mb-1 md:mb-2">{displayTitle}</h3>
        <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-90 border-b border-white/50 pb-1 inline-block">
          {displayLabel}
        </p>
        {productCount !== undefined && (
          <p className="text-[9px] sm:text-[10px] tracking-widest opacity-50 mt-1 md:mt-2">
            {productCount} {tProduct("categoryCard.pieces")}
          </p>
        )}
      </div>
    </Link>
  );
}
