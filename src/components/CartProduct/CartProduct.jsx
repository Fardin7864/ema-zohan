
const CartProduct = ({product}) => {
    const {id, img, name, price, ratings, seller } =
    product;

    return (
        <div>
            Name: {name}
            price: {price}
        </div>
    );
};

export default CartProduct;