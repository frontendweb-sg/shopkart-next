import { getProduct } from "@/lib/product";

const Page = async ({ params }: { params: { slug: string[] } }) => {
  const product = await getProduct(params.slug[1]);
  return <div>Product detail page {JSON.stringify(product)}</div>;
};
export default Page;
