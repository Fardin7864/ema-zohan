import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const products = useLoaderData();
    // console.log(products)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-7">
            {
                products.map(product => 
                    <Product
                    key={product.id}
                    product={product}
                    ></Product>)
            }
        </div>
    );
};

export default Products;