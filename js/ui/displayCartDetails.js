import { getCartFromStorage } from "../utils/storage.js";

export default function displayCartDetails(data, targetElement) {
    let element = document.querySelector(targetElement);

    element.innerHTML = "";


    data.forEach(function(product){
        
        const addedToCart = getCartFromStorage();

        if (addedToCart === undefined || addedToCart.length == 0) {
            element.innerHTML = "";
        }

        for(let item in addedToCart) {


            const cartId = parseInt(addedToCart[item].id);

            const itemAmount = parseInt(addedToCart[item].amount);

            const itemPrice = itemAmount * product.price;

            if(cartId === product.id) {

                element.innerHTML += `
                <div class="cartdetails__item">
                    <p class="item__amount">${itemAmount}x</p>
                    <p class="item__name">${product.title}</p>
                    <p class="item__price">$ ${itemPrice.toFixed(2)}</p>
                </div>
                `
            }

        }
    })


}