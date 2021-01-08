import { baseUrl } from "../general/settings.js";
import displayProducts from "../ui/displayProducts.js";
import { openFilter, closeFilter, filterProducts } from "../ui/filterProducts.js";
import addToFavorites from "../ui/addToFavorites.js";



const productsUrl = baseUrl + "/products";

const container = ".products";

async function getProducts() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        const products = json;

        console.log(products);
        displayProducts(products, container);
        filterProducts(products, container);

        const favButtons = document.querySelectorAll(".product__favorite")


        favButtons.forEach((button) => {
            button.addEventListener("click", addToFavorites)
        });


    } catch (error) {
        const errorDisplay = document.querySelector(".loading-error");

        errorDisplay.style.display = "block";
    }

}

getProducts();


const filterBtn = document.querySelector(".filter__button");

filterBtn.addEventListener("click", openFilter);

const closeFilterBtn = document.querySelector(".filter__remove");

closeFilterBtn.addEventListener("click", closeFilter);
