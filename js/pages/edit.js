import { baseUrl } from "../general/settings.js";
import selectDisplay from "../admin/selectDisplay.js";
import fillForm from "../admin/fillForm.js";
import submitEdit from "../admin/submitEdit.js";
import deleteProduct from "../admin/deleteProduct.js";
import { getUsername } from "../utils/storage.js";

const username = getUsername();

if (username != "admin") {
    location.href = "/";

}


const productsUrl = baseUrl + "/products";

const selector = document.querySelector(".edit__product")

// method used: https://stackoverflow.com/questions/4076770/getting-value-of-select-dropdown-before-change
    selector.addEventListener("change", function(){
        let previous = this.value;

        const confirmSelect = function confirmChange() {
            confirm("Are you sure you want to choose a new product? All unsaved changes will be lost.");
        };

        confirmSelect();


        if(confirmSelect === true) {
            previous = this.value;

        }
    })


async function editProducts() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        const products = json;

        selectDisplay(products);

        selector.addEventListener("change", function() {
            fillForm(products);
        });

        const form = document.querySelector(".edit");

        form.addEventListener("submit", submitEdit);

    }  catch (error) {

        const errorMsg = document.querySelector(".form__error");
        errorMsg.style.display = "block;"
        console.log(error);
    }
}

editProducts();

const deleteButton = document.querySelector(".edit__btn-delete");

deleteButton.addEventListener("click", function() {
    const selectedId = document.querySelector(".edit__id");
    const idValue = parseInt(selectedId.innerText.replace("ID: ", ""));
    
    deleteProduct(idValue);
})

