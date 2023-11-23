import BuyNow from "@/components/cart/BuyNow";
import CartButton from "@/components/cart/CartButton";
import Container from "@/components/common/Container";
import Price from "@/components/product/Price";
import { getProduct } from "@/lib/product";
import { ICategoryDoc } from "@/models/category";
import Image from "next/image";

const Page = async ({ params }: { params: { slug: string[] } }) => {
  const product = await getProduct(params.slug[1]);
  return (
    <Container>
      <div className="grid grid-cols-3 gap-4">
        <div className="relative col-span-1">
          <Image alt="" src="/image.webp" fill={true} />
        </div>
        <div className="col-span-2">
          <span className="block text-rose-600 text-xs">
            {(product.category as ICategoryDoc).title.toUpperCase()}
          </span>
          <h2>{product.title}</h2>
          <Price offerPrice={product.price} price={0} />
          <p>{product.description}</p>
          <div className="mt-3">
            <h6>Specification</h6>
            <ul className="mt-2">
              <li className="grid grid-cols-2">
                {product.attributes?.map((item) => {
                  return (
                    <div key={JSON.stringify(item)}>
                      <h6 className="text-sm text-rose-600">{item.name}</h6>
                      <span className="text-xs text-gray-500">{item.value}</span>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <CartButton
              item={{
                id: product.id,
                productId: product.id,
                productName: product.title,
                price: product.price,
              }}
            />
            <BuyNow
              item={{
                id: product.id,
                productId: product.id,
                productName: product.title,
                price: product.price,
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Page;
