import {
  ApiProductsResponse,
  ApiProduct,
  Product,
  ProductsQuery,
  ProductsResponse,
} from "../types/product";

const API_BASE = "https://managersales.vercel.app/api";

function mapApiProduct(p: ApiProduct): Product {
  const firstVariant = p.product_variants[0];
  const price = firstVariant?.price ?? p.base_price ?? 0;
  const imageUrl = firstVariant?.image_url ?? "";

  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    priceInCents: price,          // với VND: giá trị = số tiền thực
    currency: "VND",
    material: p.description ?? "",
    category: p.categories?.name ?? "Uncategorized",
    categorySlug: p.categories?.slug ?? "uncategorized",
    imageUrl,
    badge: undefined,
    isAvailable: p.is_active,
    createdAt: p.created_at,
  };
}

export async function getProducts(query?: ProductsQuery): Promise<ProductsResponse> {
  const page  = query?.page  ?? 1;
  const limit = query?.limit ?? 100;

  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const res = await fetch(`${API_BASE}/products?${params.toString()}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const json: ApiProductsResponse = await res.json();
  let products = json.data.map(mapApiProduct);

  // Lọc theo tên category (ví dụ: "Gấu bông") nếu filter bar truyền xuống
  if (query?.category && query.category !== "All") {
    products = products.filter((p) => p.category === query.category);
  }

  // Sort client-side
  if (query?.sort === "price-asc") {
    products.sort((a, b) => a.priceInCents - b.priceInCents);
  } else if (query?.sort === "price-desc") {
    products.sort((a, b) => b.priceInCents - a.priceInCents);
  } else if (query?.sort === "newest") {
    products.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  return {
    data: products,
    total: json.pagination.total,
    page: json.pagination.page,
    limit: json.pagination.limit,
  };
}

/** Lấy danh sách category từ API (hiển thị trên filter bar) */
export async function getProductCategories(): Promise<string[]> {
  try {
    const res = await fetch(
      `${API_BASE}/categories?page=1&limit=50`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const json: { data: { name: string }[] } = await res.json();
    const names = json.data.map((c) => c.name);
    return ["All", ...names];
  } catch (err) {
    console.error("[getProductCategories]", err);
    return ["All"]; // fallback an toàn khi API lỗi
  }
}

