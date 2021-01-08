import { getCartFromStorage } from "../utils/storage.js";


export default function displayCart(data, targetElement) {

    const element = document.querySelector(targetElement);

    element.innerHTML = "";


    data.forEach(function(product){

        const addedToCart = getCartFromStorage();

        if (addedToCart === undefined || addedToCart.length == 0) {
            element.innerHTML = `<p class="shoppingcart__noitems">There are no amazing products in your shopping cart 🥺</p>`;
        }


        //tutorial used for looping over objects https://medium.com/chingu/looping-over-arrays-and-objects-in-javascript-57e1188c1ba2
        for(let item in addedToCart) {

            
            let cartId = parseInt(addedToCart[item].id);

            if (isNaN(cartId)) {
                cartId = parseInt(addedToCart.id);
            }


            if (cartId === product.id) {

                let itemAmount = parseInt(addedToCart[item].amount);

                if (isNaN(itemAmount)) {
                    itemAmount = parseInt(addedToCart.amount);
                }

                element.innerHTML +=
                `
        
              <div class="cartitem">
              <div class="cartitem__details">
                <a href="./details.html?id=${product.id}"><img class="cartitem__img" src="${product.image_url}" alt="${product.title + " " + "lipgloss"}"></a>
                <a href="./details.html?id=${product.id}"><h2 class="cartitem__title">${product.title}</h2></a>
                <p class="cartitem__price">$ ${product.price.toFixed(2)}</p>
              </div>
              <div class="cartitem__buttons">
                <div class="button cartitem__amount">
                  <i class="button__icon  cartitem__amount-minus fas fa-minus"></i>
                  <p data-id="${cartId}" data-amount="${itemAmount}" class="cartitem__amount-number">${itemAmount}</p>
                  <i class="button__icon cartitem__amount-plus fas fa-plus"></i>
                </div>
                <div class="button cartitem__remove">
                  <p class="button__text cartitem__remove-text">Remove</p>
                  <i class="button__icon  cartitem__remove-icon fas fa-times"></i>
                </div>
              </div>
            </div>
        
                `
            }
        }

    });
}