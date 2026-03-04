import Footer from "../../components/Footer";
import ChatButton from "../../components/ChatButton";
import ShopHero from "../../shop/_components/ShopHero";
import ShopClient from "../../shop/_components/ShopClient";
import CraftBanner from "../../shop/_components/CraftBanner";
import { getProducts, getProductCategories } from "../../lib/products";

export const metadata = {
  title: "Shop — Mush & Co.",
  description: "Browse our full collection of handcrafted luxury pieces.",
};

export default async function LocaleShopPage() {
  const [{ data: products }, categories] = await Promise.all([
    getProducts(),
    getProductCategories(),
  ]);

  return (
    <>
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

