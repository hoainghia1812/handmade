import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatButton from "../components/ChatButton";
import ShopHero from "./_components/ShopHero";
import ShopClient from "./_components/ShopClient";
import CraftBanner from "./_components/CraftBanner";
import { getProducts, getProductCategories } from "../lib/products";

export const metadata = {
  title: "Shop — Mush & Co.",
  description: "Browse our full collection of handcrafted luxury pieces.",
};

export default async function ShopPage() {
  const [{ data: products }, categories] = await Promise.all([
    getProducts(),
    getProductCategories(),
  ]);

  return (
    <>
      <Header />

      <main className="bg-background-light dark:bg-background-dark min-h-screen">
        <ShopHero />
        <ShopClient initialProducts={products} categories={categories} />
        <CraftBanner />
      </main>

      <Footer />
      <ChatButton />
    </>
  );
}
