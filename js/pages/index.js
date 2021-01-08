import { baseUrl } from "../general/settings.js";
import displayHero from "../other/herobanner.js";
import displayFeatures from "../ui/displayFeatures.js";
import addToFavorites from "../ui/addToFavorites.js";

displayHero();

const productsUrl = baseUrl + "/products"

const container = ".products";

async function getFeatures() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        const products = json;

        displayFeatures(products, container);

        const favButtons = document.querySelectorAll(".product__favorite")


        favButtons.forEach((button) => {
            button.addEventListener("click", addToFavorites);
        });


    }  catch (error) {
        console.log(error);
        const errorDisplay = document.querySelector(".loading-error");

        errorDisplay.style.display = "block";
    }

}

getFeatures();