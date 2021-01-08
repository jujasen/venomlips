import { getCartFromStorage, saveCartItem } from "../utils/storage.js";




export default function removeFromCart() {
    const parent = this.parentNode;

    const amountCounter = parent.querySelector(".cartitem__amount-number");

    const id = amountCounter.dataset.id;


    const currentCart = getCartFromStorage();


    const newCart = currentCart.filter((product) => product.id !== id);
    saveCartItem(newCart);

    location.reload();

}