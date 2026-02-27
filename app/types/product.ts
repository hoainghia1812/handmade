export type ProductBadge = "New" | "Bestseller" | "Limited";

export interface Product {
  id: string;
  slug: string;
  name: string;
  priceInCents: number;   // API trả về số nguyên (cents)
  currency: string;       // "USD"
  material: string;
  category: string;       // "Throws" | "Cushions" | "Rugs"
  categorySlug: string;   // "throws" | "cushions" | "rugs"
  imageUrl: string;
  badge?: ProductBadge;
  isAvailable: boolean;
  createdAt: string;      // ISO 8601
}

export interface ProductsQuery {
  category?: string;
  sort?: "featured" | "price-asc" | "price-desc" | "newest";
  page?: number;
  limit?: number;
}

export interface ProductsResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
}

/** Định dạng giá từ cents → "$420.00" */
export function formatPrice(priceInCents: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(priceInCents / 100);
}
