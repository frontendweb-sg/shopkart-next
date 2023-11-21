import useCart, { ICartProps } from "@/hooks/useCart";
import useConfirmation, { IConfirmation } from "@/hooks/useConfirmation";
import { ReactNode, createContext, useContext, useMemo } from "react";

type AppState = {
  cart: ICartProps;
  confirm: IConfirmation;
  onCancelConfirmation: () => void;
  onConfirmation: (confirm: IConfirmation) => void;
  addItemToCart: (item: any) => void;
  decreaseQty: (item: any) => void;
  deleteItemFromCart: (item: any) => void;
  increaseQty: (item: any) => void;
};
export const AppContext = createContext<AppState | null>(null);
const AppProvider = ({ children }: { children: ReactNode }) => {
  const { cart, addItemToCart, decreaseQty, deleteItemFromCart, increaseQty } = useCart();
  const { confirm, onCancelConfirmation, onConfirmation } = useConfirmation();
  const state = useMemo(
    () => ({
      cart,
      confirm,
      onCancelConfirmation,
      onConfirmation,
      addItemToCart,
      decreaseQty,
      deleteItemFromCart,
      increaseQty,
    }),
    [
      confirm,
      cart,
      onCancelConfirmation,
      onConfirmation,
      addItemToCart,
      decreaseQty,
      deleteItemFromCart,
      increaseQty,
    ]
  );

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext<AppState | null>(AppContext);
  if (!context) throw new Error("Context can not be empty!");
  return context;
};
export default AppProvider;
