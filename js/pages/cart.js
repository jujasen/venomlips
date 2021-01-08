import { baseUrl } from "../general/settings.js";
import displayCart from "../ui/displayCart.js";
import displayCartDetails from "../ui/displayCartDetails.js";
import displayCartTotal from "../ui/displayCartTotal.js";
import { reduceAmount, increaseAmount } from "../ui/amountChange.js";
import removeFromCart from "../ui/removeFromCart.js";



const cartContainer = ".cart";
const cartDetailsContainer = ".cartdetails__products";
const productsUrl = baseUrl + "/products";

async function getCart() {

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        const products = json;
        displayCart(products, cartContainer);
        displayCartDetails(products, cartDetailsContainer);
        displayCartTotal();

        const reduce = document.querySelectorAll(".cartitem__amount-minus");

        for (let i = 0; i < reduce.length; i++) {
            reduce[i].addEventListener("click", reduceAmount);

            reduce[i].addEventListener("click", function(){
                displayCartDetails(products, cartDetailsContainer);
                displayCartTotal();

            });
        }

        const increase = document.querySelectorAll(".cartitem__amount-plus");

        for (let i = 0; i < increase.length; i++) {
            increase[i].addEventListener("click", increaseAmount);

            increase[i].addEventListener("click",  function(){
                displayCartDetails(products, cartDetailsContainer);
                displayCartTotal();

            });
        }


        const remove = document.querySelectorAll(".cartitem__remove");

        for (let i = 0; i < remove.length; i++) {
            remove[i].addEventListener("click", removeFromCart);
        }




    } catch (error) {
        console.log(error);
        const errorDisplay = document.querySelector(".loading-error");

        errorDisplay.style.display = "block";
    }
}

getCart();