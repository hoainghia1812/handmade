export interface Category {
  id: string;
  slug: string;
  title: string;
  label: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  productCount?: number;
}

/** Khớp với response từ API /categories */
export interface ApiCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  created_at: string;
}

export interface ApiCategoriesResponse {
  data: ApiCategory[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
