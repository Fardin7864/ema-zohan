import { useOutletContext } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";
import { AiFillDelete, AiFillCreditCard } from "react-icons/ai";
import { getFromLocalStorage } from "../LocalStorage/Localstorage";
import { useEffect, useState } from "react";

const CartProducts = () => {
    const [products , setProducts] = useState();
    const allProducts = useOutletContext();
    const savedProducts = getFromLocalStorage();
    useEffect(() => { 
        const toDisplayProduct = allProducts.filter(product => savedProducts.includes(product.id));
        setProducts(toDisplayProduct);
     },[])
    //  console.log(products)
  return (
    <>
      <div>
        {
            products?.map(product => <CartProduct
            key={product.id}
            product={product}
            ></CartProduct>)
        }        
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
