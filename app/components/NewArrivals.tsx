import { getProducts } from "../lib/products";
import NewArrivalsClient from "./NewArrivalsClient";

export default async function NewArrivals() {
  const { data: products } = await getProducts({ sort: "newest", limit: 4 });

  return <NewArrivalsClient products={products} />;
}
