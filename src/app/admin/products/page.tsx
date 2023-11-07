import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { getProducts } from "@/lib/product";

const Page = async () => {
  const products = await getProducts();
  return (
    <div>
      <PageTitle label="Products" tagline="Welcome to products page">
        <Link href="/admin/products/add-product">Add Product</Link>
      </PageTitle>
      Products {JSON.stringify(products)}
    </div>
  );
};

export default Page;
