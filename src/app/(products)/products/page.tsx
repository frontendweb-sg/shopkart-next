import { getProductByCategory } from "@/lib/product";
import { IProductDoc } from "@/models/product";
import { NextRequest } from "next/server";
import Product from "@/components/product/Product";
type SearchParamsProps = {
  category: string;
};

const Page = async ({ searchParams }: { searchParams: SearchParamsProps }) => {
  const products: IProductDoc[] = await getProductByCategory(searchParams.category);
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
        {products.map((product: IProductDoc) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
