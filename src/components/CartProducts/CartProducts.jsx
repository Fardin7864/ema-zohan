import CartProduct from "../CartProduct/CartProduct";
import { AiFillDelete, AiFillCreditCard } from "react-icons/ai";

const CartProducts = () => {
  return (
    <>
      <div>
        <CartProduct></CartProduct>
      </div>
      <div className="bg-[#ff99004d] w-1/3 rounded-xl my-5">
        <div className="px-5">
          <h4 className="text-3xl font-bold py-4">Order Summary</h4>
          <p className="py-2">Selected Item: </p>
          <p className="py-2">Total Price: </p>
          <p className="py-2">Total Shipping Charge: </p>
          <p className="py-2">Tex: </p>
          <h4 className=" text-2xl font-bold py-2">Grand Total: </h4>
        </div>
        <div className="flex flex-col gap-3">
          <button className="btn btn-accent rounded-none">
            Clear Cart <AiFillDelete></AiFillDelete>
          </button>
          <button className="btn btn-primary rounded-none">
            Check Out <AiFillCreditCard></AiFillCreditCard>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProducts;
