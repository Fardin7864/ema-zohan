import Rating from "react-rating";
import {AiOutlineStar,AiFillStar} from "react-icons/ai"
import { addToLocalStorage, getFromLocalStorage } from "../LocalStorage/Localstorage";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ product }) => {
  const {id, img, name, price, ratings, seller } =
    product;

    const handleAddCart = (id) => {
      const savedProducts = getFromLocalStorage()
      console.log(savedProducts)
      const exist = savedProducts.find(product => product === id)
      console.log(exist)
      if (!exist) {
        success();
        addToLocalStorage(id);
        console.log('success')
      }
      else if (exist) {        
        duplicat();
        console.log('duplicat')
      }
     }
     const success = () =>{
      toast('🦄 Successfully add to cart!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     }
     const duplicat = () =>{
      toast('🦄 Already added this produc!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     }


  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body px-0 py-0 gap-3">
        <div className="px-5 flex flex-col">
          <h5 className="text-[#0E161A] text-xl font-normal">{name}</h5>
          <p className="text-base font-normal">Price: ${price}</p>
        </div>
        <div className="px-5 flex flex-col grow">
          <p className="text-[#878888] text-xs font-normal">
            Manufacturer: {seller}
          </p>
          <p className="flex justify-center items-center text-yellow-300 text-xl">
          <Rating
             emptySymbol={<AiOutlineStar></AiOutlineStar>}
             fullSymbol={<AiFillStar></AiFillStar>}
             initialRating={ratings}
             readonly></Rating>
            </p>
        </div>
        <div className="card-actions justify-end">
        <div onClick={() => handleAddCart(id)}  className="w-full btn flex justify-center items-center h-12 bg-[#FFE0B3] rounded-br-lg rounded-bl-lg">
          <button>Add to Cart </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
