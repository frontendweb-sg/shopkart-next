import { useState } from "react";

export type ICartProps = {
  items: ICart[];
  total: number;
};
export default function useCart() {
  const [cart, setCart] = useState<ICartProps>({
    items: [],
    total: 0,
  });

  const addItemToCart = (item: ICart) => {
    const itemIndex = cart.items.findIndex((row: ICart) => row.productId === item.productId);
    const updateItem = cart.items[itemIndex];
    let updateItems = [...cart.items];
    if (updateItem) {
      updateItem.qty = updateItem.qty! + 1;
      updateItems[itemIndex] = updateItem;
    } else {
      item.qty = 1;
      updateItems.push(item);
    }
    let total = updateItems.reduce((first, next) => first + next.qty! * next.price, 0);
    setCart((prev) => ({ ...prev, items: updateItems, total }));
  };

  const deleteItemFromCart = (item: any) => {};
  const increaseQty = (item: any) => {};
  const decreaseQty = () => {};

  return {
    cart,
    addItemToCart,
    deleteItemFromCart,
    increaseQty,
    decreaseQty,
  };
}
