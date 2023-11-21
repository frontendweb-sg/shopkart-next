import { ICategory } from "@/models/category";
import { IProduct, IProductDoc } from "@/models/product";
import Image from "next/image";
import Button from "../common/Button";
import { FaRupeeSign } from "react-icons/fa";
import CartButton from "../cart/CartButton";

type ProductProps = {
  product: IProductDoc;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white">
      <div className="flex mb-3 md:mb-3.5">
        <Image alt="" src="/image.webp" width={400} height={200} />
      </div>

      <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
        {(product.category as ICategory)?.title}
        <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
          {product.title}
        </h2>
        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
          {product.description}
        </p>
        <div
          className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
           text-heading"
        >
          <span className="flex text-md text-rose-600 items-center false">
            <FaRupeeSign />
            {product.price}
          </span>
        </div>
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
  );
};

export default Product;
