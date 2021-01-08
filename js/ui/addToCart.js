import { checkCartItems } from "../utils/storage.js";
import { getCartFromStorage, saveCartItem } from "../utils/storage.js";


export function addToCart(event) {

    const buttonText = this.firstElementChild;

    if (buttonText.innerText === "Added to cart") {
        buttonText.innerText = "Add to cart";
    } else {
        buttonText.innerText = "Added to cart";
    }

    const buttonIconCart = this.children[1];
    const buttonIconRemove = this.lastElementChild;

    buttonIconCart.classList.toggle("button__icon--remove");

    buttonIconRemove.classList.toggle("button__icon--remove");

    const id = this.dataset.id;
    const amount = this.dataset.amount;

    console.log(id, amount);

    const currentCart = getCartFromStorage();

    console.log(currentCart);

    const productExists = currentCart.find(function (product) {
        return product.id === id;
    });



    if (productExists === undefined) {
        const productId = { id: id, amount: amount };

        currentCart.push(productId);
        saveCartItem(currentCart);
    }
    else {
        const newCart = currentCart.filter((product) => product.id !== id);
        saveCartItem(newCart);
    }





    const isInCart = checkCartItems();

    console.log(isInCart);

    if (isInCart === true) {
        const navCart = document.querySelector(".navcart");


        navCart.classList.add("navbar__icon--active");
    }





}


