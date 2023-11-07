import Hero from "@/components/common/Hero";
import Header from "@/components/layouts/Header";
import Product from "@/components/product/Product";
import { getCategories } from "@/lib/category";
import { getProducts } from "@/lib/product";
import { ICategoryDoc } from "@/models/category";
import { IProductDoc } from "@/models/product";
import Link from "next/link";

export default async function Home() {
  const categories = await getCategories();
  const products: IProductDoc[] = await getProducts();

  return (
    <>
      <Header />
      <main className="relative flex-grow">
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <Hero />
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
            {categories.map((cat: ICategoryDoc) => (
              <Link
                href={`/products/${cat.slug}`}
                key={cat.id}
                className="flex justify-between items-center bg-gray-200 rounded-md px-5 2xl:px-3.5 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3.5 transition hover:bg-gray-100"
              >
                {cat.title}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
            {products.map((product: IProductDoc) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <h1>HOme page</h1> {JSON.stringify(categories)}
      </main>
    </>
  );
}
