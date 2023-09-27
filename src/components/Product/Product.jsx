
const Product = ({product}) => {
    const {category, img, name, price, ratings, ratingsCount, seller, stock} = product

    // console.log(product)
    return (
        <div className="w-[300px] h-[508px] shadow-xl">
            <div className="w-[286px] h-[286px] rounded-lg p-5">
                <img src={img} alt="" className="rounded-lg"/>
            </div>
            <div className="px-5 flex flex-col flex-grow">
                <h5 className="text-[#0E161A] text-xl font-normal">{name}</h5>
                <p className="text-base font-normal">Price: ${price}</p>
            </div>
            <div className="px-5 flex flex-col">
                <p className="text-[#2A414F] text-xs font-normal">Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <div className="w-full flex justify-center items-center h-12 bg-[#FFE0B3] rounded-br-lg rounded-bl-lg">
                <button>Add to Cart </button>
            </div>
            
        </div>
    );
};

export default Product;