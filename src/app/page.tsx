import CategoryList from "@/components/category/CategoryList";
import Hero from "@/components/common/Hero";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Product from "@/components/product/Product";
import { getCategories } from "@/lib/category";
import { getProducts } from "@/lib/product";
import { IProductDoc } from "@/models/product";

export default async function Home() {
  const categories = await getCategories();
  const products: IProductDoc[] = await getProducts();

  return (
    <div className="min-h-full">
      <Header />
      <Hero />
      <div className="">
        <CategoryList categories={categories} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
