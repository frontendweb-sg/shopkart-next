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
      {products.map((product: IProductDoc) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Page;
