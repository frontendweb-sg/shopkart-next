"use client";
import Button from "../common/Button";
import { memo } from "react";
import { AppContent } from "@/utils/AppContent";
import { useRouter } from "next/navigation";
import { useApp } from "../context/App";

/**
 * Buynow component
 */
const BuyNow = memo(function BuyNow({ item }: { item: ICart }) {
  const { addItemToCart } = useApp();
  const router = useRouter();

  const handleBuynow = () => {
    addItemToCart(item);
    router.push("/checkout");
  };

  return <Button onClick={handleBuynow}>{AppContent.buynow}</Button>;
});

export default BuyNow;
