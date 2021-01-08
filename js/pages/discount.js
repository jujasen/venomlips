import { baseUrl } from "../general/settings.js";
import applyDiscount from "../general/applyDiscount.js";

const discountsUrl = baseUrl + "/discounts";

async function getDiscounts() {
    try {
        const response = await fetch(discountsUrl);
        const json = await response.json();
        const discounts = json;


        const discountBtn = document.querySelector(".discountdisplay__btn");

        discountBtn.addEventListener("click", function() {
            applyDiscount(discounts);
        });


    }  catch (error) {
        console.log(error);
        const errorDisplay = document.querySelector(".loading-error");

        errorDisplay.style.display = "block";
    }

}

getDiscounts();