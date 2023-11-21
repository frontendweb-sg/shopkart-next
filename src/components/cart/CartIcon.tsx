"use client";
import { FaRupeeSign, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import { useApp } from "../context/App";
import { useToggle } from "@/hooks/useToggle";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";

const CartIcon = () => {
  const { open, toggleHandler, closeHandler, openHandler } = useToggle();
  const { cart } = useApp();
  const router = useRouter();
  return (
    <div className="relative" onMouseEnter={openHandler} onMouseLeave={closeHandler}>
      <div className="relative">
        <FaShoppingCart />
        <div className="absolute -top-2 -right-3 rounded-full w-4 h-4 text-center leading-4 bg-rose-600 text-white text-xs">
          {cart.items.length}
        </div>
      </div>
      {open && (
        <div className="absolute top-full right-0">
          <div className="bg-white shadow w-64 p-3 mt-3 rounded-md">
            <div>
              {cart.items.map((item, index: number) => {
                return (
                  <li
                    className={classNames("py-2 flex items-center", {
                      "border-b": index !== cart.items.length - 1,
                    })}
                  >
                    <div className="w-13 min-w-fit">
                      <Image src="/avatar.png" width={40} height={40} alt="avatar" />
                    </div>
                    <div className="pl-3">
                      <h6 className="text-xs font-semibold">
                        {item.productName.substring(0, 50)}...
                      </h6>
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
