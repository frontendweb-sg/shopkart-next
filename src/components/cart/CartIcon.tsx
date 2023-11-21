"use client";
import { FaRupeeSign, FaShoppingBasket, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useApp } from "../context/App";
import { useToggle } from "@/hooks/useToggle";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import CartItemQty from "./CartItemQty";

const CartIcon = () => {
  const { open, closeHandler, openHandler } = useToggle();
  const { cart, deleteItemFromCart } = useApp();
  const router = useRouter();

  return (
    <div
      className="relative"
      // onMouseEnter={openHandler} onMouseLeave={closeHandler}
    >
      <div className="relative">
        <FaShoppingCart />
        <div className="absolute -top-2 -right-3 rounded-full w-4 h-4 text-center leading-4 bg-rose-600 text-white text-xs">
          {cart.items.length}
        </div>
      </div>
      {!open && (
        <div className="absolute top-full right-0">
          <div className="bg-white shadow w-80 p-3 mt-3 rounded-md">
            <div>
              {cart.items.map((item, index: number) => {
                return (
                  <li
                    key={item.id}
                    className={classNames("py-2 flex group relative items-center", {
                      "border-b": index !== cart.items.length - 1,
                    })}
                  >
                    <div className="w-13 min-w-fit bg-rose-300">
                      <Image src="/image.webp" width={40} height={40} alt="avatar" />
                    </div>
                    <div className="pl-3 flex-1">
                      <h6 className="text-xs font-semibold">
                        {item.productName.substring(0, 35)}...
                      </h6>
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
                );
              })}

              {!cart.items.length && (
                <div className="py-12 flex flex-col justify-center items-center">
                  <FaShoppingBasket className="text-gray-400" />
                  <p className="text-lg/[50px] text-gray-400 block">Cart is Empty</p>
                </div>
              )}
            </div>
            <div className="mt-2 flex justify-between border-t pt-3 items-center">
              <p className="text-xs flex items-center">
                Total: <FaRupeeSign className="text-xs" /> {cart.total}
              </p>
              <Button onClick={() => router.push("/cart")}>Go to cart</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
