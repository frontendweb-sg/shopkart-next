"use client";

import { AppContent } from "@/utils/AppContent";
import Button from "../common/Button";
import { useApp } from "../context/App";

const CartButton = ({ item }: { item: ICart }) => {
  const { cart, addItemToCart } = useApp();

  return (
    <div>
      <Button onClick={() => addItemToCart(item)}>{AppContent.addToCart}</Button>
    </div>
  );
};

export default CartButton;
