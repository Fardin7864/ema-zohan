import { duplicat, success } from "../Product/Product";

const addToLocalStorage = (id) =>{
    const savedCart = getFromLocalStorage();
    const exist = savedCart.find(savedId => savedId == id)
    if (!exist) {  
        success();
        savedCart.push(id);
        localStorage.setItem('emajohn_cart', JSON.stringify(savedCart));
    }
    else if (exist) {
        
        duplicat()
    }

}

const removeFromLocalStorage = (id) => { 
    const cart = getFromLocalStorage();
    const afterRemoved = cart.filter(product => product !== id);
    localStorage.setItem('emajohn_cart', JSON.stringify(afterRemoved));
 }

const getFromLocalStorage = () => { 
    const cartStr = localStorage.getItem('emajohn_cart');
    if (cartStr) {
        const cart = JSON.parse(cartStr);
        return cart;
    }
    else return [];
 }

 export {addToLocalStorage, getFromLocalStorage, removeFromLocalStorage};