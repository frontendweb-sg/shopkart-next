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

  const deleteItemFromCart = (id: string) => {
    const item = cart.items.find((row: ICart) => row.productId === id) as ICart;
    const items = cart.items.filter((row: ICart) => row.productId !== id);

    setCart((prev) => ({
      ...prev,
      items,
      total: prev.total - item?.price * item?.qty!,
    }));
  };

  const increaseQty = (id: string) => {
    let existingCartItems = [...cart.items];
    const itemIndex = cart.items.findIndex((row: ICart) => row.productId === id);
    const item = existingCartItems[itemIndex] as ICart;

    if (item) item.qty = item.qty! + 1;

    setCart((prev) => ({
      ...prev,
      items: existingCartItems,
      total: prev.total + item?.price,
    }));
  };

  const decreaseQty = (id: string) => {
    let existingCartItems = [...cart.items];
    const itemIndex = cart.items.findIndex((row: ICart) => row.productId === id);
    const item = existingCartItems[itemIndex] as ICart;

    if (item.qty === 1) existingCartItems.splice(itemIndex, 1);
    if (item.qty! > 1) {
      item.qty = item.qty! - 1;
    }

    setCart((prev) => ({
      ...prev,
      items: existingCartItems,
      total: prev.total - item?.price,
    }));
  };

  return {
    cart,
    addItemToCart,
    deleteItemFromCart,
    increaseQty,
    decreaseQty,
  };
}
