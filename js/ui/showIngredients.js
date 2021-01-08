
export default function showIngredients(event) {

    const icon = document.querySelector(".ingredients__icon");

    icon.classList.toggle("fa-chevron-up");
    icon.classList.toggle("fa-chevron-down");

    const text = document.querySelector(".ingredients__text");

    text.classList.toggle("ingredients__text--show");
    text.classList.toggle("ingredients__text--hidden");


}