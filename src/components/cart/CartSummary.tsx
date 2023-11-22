"use client";

import CheckoutButton from "../checkout/CheckoutButton";
import { memo } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useApp } from "../context/App";

const CartSummary = memo(function CartSummary() {
  const { cart } = useApp();
  return (
    <div>
      <h6>Summary</h6>
      <ul className="list-item my-3 ">
        <li className="flex items-center">
          <span className="text-sm"> Total: </span>
          <FaRupeeSign className="text-xs" /> {cart.total}
        </li>
      </ul>

      <CheckoutButton />
    </div>
  );
});

export default CartSummary;
