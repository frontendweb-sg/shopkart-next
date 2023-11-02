import { ICategory } from "@/models/category";
import { IProduct, IProductDoc } from "@/models/product";
import Image from "next/image";

type ProductProps = {
  product: IProductDoc;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="mb-3 bg-slate-50">
      <div className="p-3">
        <div className="">
          <Image alt="" src="/image.webp" width={400} height={200} />
        </div>
        <div>
          <h6>
            {product.title} - ({(product.category as ICategory).title})
          </h6>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
