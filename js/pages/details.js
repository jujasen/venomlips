import { baseUrl } from "../general/settings.js";
import displayDetails from "../ui/displayDetails.js";
import showIngredients from "../ui/showIngredients.js"
import { addToCart} from "../ui/addToCart.js";
import addToFavorites from "../ui/addToFavorites.js";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const productUrl = baseUrl + "/products/" + id;

const container = ".productdetails";

(async function () {
    try {
        const response = await fetch(productUrl);
        const json = await response.json();
        const product = json;



        displayDetails(product, container);


        

        const cartButtons = document.querySelectorAll(".details__button");

        cartButtons.forEach((button) => {
            button.addEventListener("click", addToCart);
        });




        const ingredients = document.querySelector(".ingredients__dropdown");

        ingredients.addEventListener("click", showIngredients);

        const favButton = document.querySelector(".details__favorite");

        favButton.addEventListener("click", addToFavorites);






    } catch (error) {
        console.log(error);
        const errorDisplay = document.querySelector(".loading-error");

        errorDisplay.style.display = "block";
    }

})();




