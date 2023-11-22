import CartItems from "@/components/cart/CartItems";
import CartSummary from "@/components/cart/CartSummary";
import CheckoutButton from "@/components/checkout/CheckoutButton";
import Panel from "@/components/common/Panel";
import { FaRupeeSign } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <div className="bg-rose-500 h-24 flex-grow flex items-end py-3 ">
        <div className="mx-auto max-w-[1920px]">
          <h1 className="text-lg text-white">Cart</h1>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-8">
          <h6>Bags</h6>
          <Panel>
            <CartItems />
          </Panel>
        </div>
        <div className="col-span-4">
          <Panel>
            <CartSummary />
          </Panel>
        </div>
      </div>
    </>
  );
};

export default Page;
