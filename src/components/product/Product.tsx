import { ICategory } from "@/models/category";
import { IProductDoc } from "@/models/product";
import Image from "next/image";
import CartButton from "../cart/CartButton";
import classNames from "classnames";
import Price from "./Price";
import LinkItem from "../common/LinkItem";
import { AppContent } from "@/utils/AppContent";

type ProductProps = {
  product: IProductDoc;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div
      className={classNames(
        "group relative  border min-h-full border-gray-50 rounded-md pb-10 hover:bg-gray-100"
      )}
    >
      <div className="flex h-48 rounded-t-md overflow-hidden relative">
        <Image alt="" src="/image.webp" fill={true} />
      </div>
      <div className="w-full p-3">
        <h6 className="text-[10px] text-rose-600 font-semibold uppercase">
          {(product.category as ICategory)?.title}
        </h6>
        <h5 className="truncate text-[12px] font-semibold">{product.title}</h5>
        <p className="text-body text-sm text-gray-600 leading-normal  truncate">
          {product.description.substring(0, 50)}
        </p>
        <Price offerPrice={product.price} price={10} />
        <div className="hidden left-3 right-3 items-center  justify-between group-hover:flex absolute bottom-3">
          <LinkItem
            className="btn btn-primary btn-xs"
            href={`/products/${(product.category as ICategory).slug}/${product.slug}`}
          >
            {AppContent.details}
          </LinkItem>
          <CartButton
            item={{
              id: product.id,
              price: product.price,
              productName: product.title,
              productId: product.id,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
