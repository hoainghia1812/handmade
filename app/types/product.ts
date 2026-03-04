export type ProductBadge = "New" | "Bestseller" | "Limited";

// Dữ liệu UI-friendly mà FE sử dụng
export interface Product {
  id: string;
  slug: string;
  name: string;
  priceInCents: number;   // dùng \"cents\" cho tương thích, nhưng với VND giá trị = số tiền thực
  currency: string;       // \"VND\"
  material: string;
  category: string;       // tên category (ví dụ: \"Gấu bông\")
  categorySlug: string;   // slug category (ví dụ: \"gau-bong\") hoặc \"uncategorized\"
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
// Cấu trúc API thật từ managersales.vercel.app
export interface ApiProductVariant {
  id: string;
  sku: string;
  size: string | null;
  color: string | null;
  price: number;              // giá theo đơn vị tiền tệ (VND)
  image_url: string;
  created_at: string;
  product_id: string;
  stock_quantity: number;
}

export interface ApiProduct {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  category_id: string | null;
  base_price: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  categories: {
    id: string;
    name: string;
    slug: string;
    created_at: string;
    description: string | null;
  } | null;
  product_variants: ApiProductVariant[];
}

export interface ApiProductsResponse {
  data: ApiProduct[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/** Định dạng giá. Với VND, không chia cho 100. */
export function formatPrice(amount: number, currency = "USD"): string {
  const value = currency === "VND" ? amount : amount / 100;
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency,
    minimumFractionDigits: currency === "VND" ? 0 : 2,
  }).format(value);
}

