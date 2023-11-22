"use client";
import { memo } from "react";
import Button, { ButtonProps } from "../common/Button";
import { AppContent } from "@/utils/AppContent";
import { useRouter } from "next/navigation";

export type CheckoutButtonProps = ButtonProps & {};

/**
 * Checkout button
 */
const CheckoutButton = memo(function CheckoutButton({ ...rest }: CheckoutButtonProps) {
  const router = useRouter();
  return (
    <Button className="w-full" {...rest} onClick={() => router.push("/checkout")}>
      {AppContent.checkout}
    </Button>
  );
});

export default CheckoutButton;
