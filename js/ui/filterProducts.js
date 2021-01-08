import displayProducts from "./displayProducts.js";

const filterInput = document.querySelector(".filter__input");
const filterRemove = document.querySelector(".filter__remove");


export function openFilter() {


    filterInput.classList.toggle("filter__input--show");
    filterInput.classList.toggle("filter__input--hidden");

    filterRemove.classList.toggle("filter__remove--show");
    filterRemove.classList.toggle("filter__remove--hidden");

}

export function closeFilter() {

    location.reload();
}

export function filterProducts(data, targetElement) {

    function searchProducts(event) {
        //method used https://flaviocopes.com/how-to-uppercase-first-letter-javascript/

        const searchValue = event.target.value.trim().charAt(0).toUpperCase() + event.target.value.trim().slice(1);

        const searchNumberValue = parseInt(event.target.value.trim());
        
        const filteredProducts = data.filter(function(product) {
            if(product.title.includes(`${searchValue}`)) {
                return true;
            }

            if(searchNumberValue >= product.price) {
                return true;
            }

            if(product.description.includes(`${searchValue.toLowerCase()}`)) {
                return true;
            }
        });
    
        displayProducts(filteredProducts, targetElement);
    }

    filterInput.addEventListener("keyup", searchProducts)

}

