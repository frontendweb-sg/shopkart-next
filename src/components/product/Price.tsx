import { memo } from "react";
import { FaRupeeSign } from "react-icons/fa";

type PriceProps = {
  price: string | number;
  offerPrice: string | number;
};
const Price = memo(function Price({ price, offerPrice }: PriceProps) {
  return (
    <div className="text-sm flex items-center gap-4 mt-1">
      <ins className="flex no-underline items-center font-semibold text-rose-600">
        <FaRupeeSign className="text-xs" /> {offerPrice}
      </ins>
      <del className="flex items-center font-semibold text-gray-400">
        <FaRupeeSign className="text-xs" />
        {price}
      </del>
    </div>
  );
});

export default Price;
