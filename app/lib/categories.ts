import { Category } from "../types/category";

/* ─────────────────────────────────────────────────────
   Khi tích hợp API thật, thay mock bằng:

   export async function getCategories(): Promise<Category[]> {
     const res = await fetch(`${process.env.API_URL}/categories`, {
       next: { revalidate: 3600 },          // ISR — cache 1 giờ
     });
     if (!res.ok) throw new Error("Failed to fetch categories");
     return res.json();
   }
───────────────────────────────────────────────────── */

const MOCK_CATEGORIES: Category[] = [
  {
    id: "cat-001",
    slug: "heritage-throws",
    title: "Heritage Throws",
    label: "Explore Throws",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAp9f1M64Xn7ehv8vs-TAgqDSR854VE8LHranmPKuNVm6ESk_mKMjaTb9miR_DPQGVeOhhsQ9rHyXIZUUfmukmNAZuMEwTvloUZqVPp3X0D_PIKS5exY7qJhdZiwu_a07r9ACRCrKnLOAhvAXzGurkvrE2mjy3LMBHSxqY0ZLV-yiv6l2zU9P6TkaKRJJM5hPbe3XIa8VfJUkpbb52XHbGLw3IqHLnpI3h_exNYbzJ4r50MheTYP7fwtH0hN4KkVhZBoXb5iNwBMy0",
    imageAlt: "Handmade Blankets",
    href: "/shop?category=Throws",
    productCount: 24,
  },
  {
    id: "cat-002",
    slug: "artisan-cushions",
    title: "Artisan Cushions",
    label: "View Accents",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaqKjN_qh9_nvQStIndooZykKBPFIim30BT6jUiHDGxWPI40md4zPo3vwNFFWaEejLoVNETFblDSCgkjEgZuzQrEFNx4mrLWlHzpM8ATY3sff2LxnyjFYblIaQM3phvQXVH9V_nMyl2XslpRB8r2s1ne9ONmpYf1vbwPAejPs6ozB8KjZ3mlheOM1QhLJSeUpI4Tc0uGKfXSaiC3_7zbwN8Pnv1MaIR6l2KMIQR_IqY7BKJtTk-Qb6jZ05PgJPf0Jp5rZ_dl3_sOQ",
    imageAlt: "Luxury Cushions",
    href: "/shop?category=Cushions",
    productCount: 18,
  },
  {
    id: "cat-003",
    slug: "living-essentials",
    title: "Living Essentials",
    label: "Browse Essentials",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAN75cqxoSnhOSjO4x7bkbnHaMOeVwOsVI2rDDFN6Xo8P4AWT7gpLr5CgwenyBEPKGEMnaCXjItzunkUdrbotuuQnZKj8-lUEIJu7T5PMfNAiEP1CCYb-R0wr4F8kDzvkG3LPnHao_CapK5mSzEm7bkZuRpUWSM5KZ5Ug0VKFGQLT8yMkeZ0FkHYJFzjzrOyY5xMt7QV2tDH97M9yr_LjvfHSUZ71VAskXnyfav2RTrSaybayD66pJ-2GOtFdQl2pyp5wBv2ott-oM",
    imageAlt: "Sustainable Living",
    href: "/shop?category=Rugs",
    productCount: 12,
  },
];

export async function getCategories(): Promise<Category[]> {
  // TODO: replace with real API call
  return MOCK_CATEGORIES;
}
