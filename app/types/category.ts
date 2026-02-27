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
