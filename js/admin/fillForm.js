
export default function fillForm(data) {


    const successEdit = document.querySelector(".form__success--edit");
    const successDelete = document.querySelector(".form__success--delete");

    successEdit.style.display = "none";
    successDelete.style.display = "none";


    //tutorial used for finding value of select: https://stackoverflow.com/questions/14976495/get-selected-option-text-with-javascript


    const selector = document.querySelector(".edit__product");

    const option = selector.options[selector.selectedIndex];

    const selectedId = parseInt(option.dataset.id);

    const titleInput = document.querySelector(".edit__title");
    const descInput = document.querySelector(".edit__desc");
    const imgInput = document.querySelector(".edit__img");
    const ingredientInput = document.querySelector(".edit__ingredients");
    const priceInput = document.querySelector(".edit__price");
    const featuredInput = document.querySelector(".switch__input");
    let idValue = document.querySelector(".edit__id");

    titleInput.value = "";
    descInput.value = "";
    imgInput.value = "";
    ingredientInput.value = "";
    priceInput.value = "";
    featuredInput.checked = false;


    data.forEach(function (product) {


        if (selectedId === product.id) {
            titleInput.value = `${product.title}`;
            descInput.value = `${product.description}`;
            imgInput.value = `${product.image_url}`;
            priceInput.value = `${product.price}`;
            ingredientInput.value = `${product.ingredients}`;
            idValue.innerText = `ID: ${product.id}`

            if (product.featured === true) {
                featuredInput.checked = true;
            }
        }
    });
}