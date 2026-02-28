import { getCategories } from "../lib/categories";
import CategoryGridClient from "./CategoryGridClient";

export default async function CategoryGrid() {
  const categories = await getCategories();

  return (
    <section className="py-24 px-6 lg:px-12 bg-white dark:bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <CategoryGridClient categories={categories} />
      </div>
    </section>
  );
}
