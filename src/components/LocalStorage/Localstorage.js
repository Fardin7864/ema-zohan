const addToLocalStorage = (id) =>{
    const savedCart = getFromLocalStorage();
    const exist = savedCart.find(savedId => savedId == id)
    if (!exist) {     
        savedCart.push(id);
        localStorage.setItem('emajohn_cart', JSON.stringify(savedCart));
    }

}

const getFromLocalStorage = () => { 
    const cartStr = localStorage.getItem('emajohn_cart');
    if (cartStr) {
        const cart = JSON.parse(cartStr);
        return cart;
    }
    else return [];
 }

 export {addToLocalStorage, getFromLocalStorage};