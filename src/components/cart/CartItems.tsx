"use client";
import { memo } from "react";
import { useApp } from "../context/App";
import classNames from "classnames";
import Image from "next/image";
import { FaRupeeSign, FaTimes } from "react-icons/fa";
import CartItemQty from "./CartItemQty";

/**
 * Cart items list
 */
const CartItems = memo(function CartItems() {
  const { cart, decreaseQty, deleteItemFromCart } = useApp();
  return (
    <div>
      {cart.items.map((item: ICart) => (
        <li key={item.id} className={classNames("flex items-center")}>
          <div className="w-13 min-w-fit bg-rose-300">
            <Image src="/image.webp" width={40} height={40} alt="avatar" />
          </div>
          <div className="pl-3 flex-1">
            <h6 className="text-xs font-semibold">{item.productName.substring(0, 35)}...</h6>
            <div className="flex items-center justify-between">
              <span className="flex items-center text-xs font-bold text-rose-600 my-2">
                <FaRupeeSign className="mr-1" />
                {item.price}
              </span>
              <CartItemQty productId={item.productId} qty={item.qty!} />
            </div>
            <button
              className="absolute invisible group-hover:visible right-0 top-2 hover:text-rose-600 text-xs"
              onClick={() => deleteItemFromCart(item.productId)}
            >
              <FaTimes />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
});

export default CartItems;
