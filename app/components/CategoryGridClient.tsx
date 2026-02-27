"use client";

import { useInView } from "../hooks/useInView";
import CategoryCard from "./CategoryCard";
import { Category } from "../types/category";

const DELAYS = ["", "reveal-delay-200", "reveal-delay-400"];

interface CategoryGridClientProps {
  categories: Category[];
}

export default function CategoryGridClient({ categories }: CategoryGridClientProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((category, i) => (
        <div
          key={category.id}
          className={`reveal ${DELAYS[i] ?? ""} ${inView ? "in-view" : ""}`}
        >
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
  );
}
