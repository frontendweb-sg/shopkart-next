import Product from "@/components/product/Product";
import { getProducts } from "@/lib/product";
import { IProductDoc } from "@/models/product";
import queryString from "query-string";
/**
 * Search page
 * @returns
 */
const Page = async ({ searchParams }: { searchParams: any }) => {
  const queryParam = queryString.stringify(searchParams);
  const products = await getProducts(queryParam);
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {products.map((product: IProductDoc) => {
          return (
            <div key={product.id} className="col-span-3">
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
