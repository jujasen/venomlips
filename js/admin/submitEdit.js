import updateProduct from "./updateProduct.js";

const titleInput = document.querySelector(".edit__title");
const descInput = document.querySelector(".edit__desc");
const imgInput = document.querySelector(".edit__img");
const ingredientInput = document.querySelector(".edit__ingredients");
const priceInput = document.querySelector(".edit__price");
const featuredInput = document.querySelector(".switch__input");
const selectedId = document.querySelector(".edit__id");



export default function submitEdit(event) {

    event.preventDefault();


    const successAll = document.querySelectorAll(".form__success");

    for (let i = 0; i < successAll.length; i++) {
        successAll[i].style.display = "none";

    }



    const idValue = parseInt(selectedId.innerText.replace("ID: ", ""));
    const titleValue = titleInput.value.trim();
    const descValue = descInput.value.trim();
    const imgValue = imgInput.value.trim();
    const priceValue = parseInt(priceInput.value);
    const ingredientsValue = ingredientInput.value.trim();
    const featuredValue = featuredInput.checked;

    console.log(featuredValue);

    const titleError = document.querySelector("#productitleHelp");
    const descError = document.querySelector("#productdescHelp");
    const imgError = document.querySelector("#productimgHelp");
    const ingredientsError = document.querySelector("#productingredientsHelp");
    const priceError = document.querySelector("#productpriceHelp");


    if (titleValue.length < 2 || titleValue.length > 16) {
        titleError.style.display = "block";
    } else {
        titleError.style.display = "none";
    }

    if (descValue.length < 10) {
        descError.style.display = "block";
    } else {
        descError.style.display = "none";
    }

    //method of checking if value is integer used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
    if (!Number.isInteger(priceValue)) {
        priceError.style.display = "block";
    } else {
        priceError.style.display = "none";
    }




    // img url test method used: https://www.codegrepper.com/code-examples/javascript/javascript+validate+url
    var pattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i');

    if (!pattern.test(imgValue)) {
        imgError.style.display = "block";
    } else {
        imgError.style.display = "none";
    }

    if (ingredientsValue.length < 10) {
        ingredientsError.style.display = "block";
    } else {
        ingredientsError.style.display = "none";
    }

    if (titleValue.length > 2 && titleValue.length < 16 && descValue.length >= 10 && pattern.test(imgValue) && ingredientsValue.length >= 10 && priceValue % 1 === 0) {
        updateProduct(idValue, titleValue, priceValue, descValue, imgValue, ingredientsValue, featuredValue);

    }


}

