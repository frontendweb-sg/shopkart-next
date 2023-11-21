"use client";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../common/Button";
import Input from "../common/Input";
import { useApp } from "../context/App";
import Box from "../common/Box";
import classNames from "classnames";

/**
 * Quantity
 * @returns
 */
const CartItemQty = ({ productId, qty }: { productId: string | number; qty: string | number }) => {
  const { decreaseQty, increaseQty } = useApp();
  const btnClasses = classNames(
    "text-rose-600 rounded-sm bg-gray-200 text-center py-1.5 px-1 hover:bg-rose-500 hover:text-white"
  );
  return (
    <Box className="flex items-center">
      <button className={btnClasses} onClick={() => decreaseQty(productId)}>
        <FaMinus className="text-xs" />
      </button>
      <input
        className="w-8 mx-2 outline-none text-center border border-gray-100"
        value={qty}
        readOnly
      />
      <button className={btnClasses} onClick={() => increaseQty(productId)}>
        <FaPlus className="text-xs" />
      </button>
    </Box>
  );
};

export default CartItemQty;
