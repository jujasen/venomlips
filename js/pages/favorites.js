import { baseUrl } from "../general/settings.js";
import displayFavs from "../ui/displayFavs.js";
import addToFavorites from "../ui/addToFavorites.js";
import { getUsername } from "../utils/storage.js";


const username = getUsername();

if (!username) {
    location.href = "/";

}

const productsUrl = baseUrl + "/products";

const container = ".favorites";

async function getFavorites() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        const products = json;

        displayFavs(products, container);

        const favButtons = document.querySelectorAll(".product__favorite")


        favButtons.forEach((button) => {
            button.addEventListener("click", addToFavorites)
        });


    }  catch (error) {
        console.log(error);
        const errorDisplay = document.querySelector(".loading-error");

        errorDisplay.style.display = "block";
    }

}

getFavorites();