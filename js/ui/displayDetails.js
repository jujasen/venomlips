import { getExistingFavs, getUsername } from "../utils/storage.js";
import { getCartFromStorage } from "../utils/storage.js";


export default function displayDetails(product, targetElement) {

  const currentCart = getCartFromStorage();

  const id = product.id.toString();

  const currentFavs = getExistingFavs();

  const favExists = currentFavs.find(function (fav) {
    return fav.id === id;
  });

  let cssClass = "far";

  const username = getUsername();

  if(username) {
    if (favExists) {
      cssClass = "fas";
    }
  }

  const productExists = currentCart.find(function (product) {
    return product.id === id;
  });

  product.amount = 1;


  let cartButton = `            
    <div class="button details__button" data-amount=${product.amount} data-id=${product.id} >
      <p class="button__text">Add to cart</p>
      <i class="button__icon fas fa-shopping-cart"></i>
      <i class="button__icon button__icon--remove fas fa-times"></i>
    </div>
  `
  if (productExists) {
    cartButton = `            
    <div class="button details__button" data-amount=${product.amount} data-id=${product.id} >
      <p class="button__text">Added to cart</p>
      <i class="button__icon button__icon--remove fas fa-shopping-cart"></i>
      <i class="button__icon fas fa-times"></i>
    </div>
    `
  }

  const element = document.querySelector(targetElement);

  element.innerHTML = "";

  element.innerHTML +=
    `
      <!-- Back function from here: https://stackoverflow.com/questions/8814472/how-to-make-an-html-back-link -->
      <a href="javascript:history.back()">Go Back</a>
      <div class="productdisplay">
        <img class="productdisplay__img" src="${product.image_url}" alt="${product.title + " " + "lipgloss"}">
        <section class="details">
          <div class="details__inline">
            <h1 class="details__title">${product.title}</h1>
            <i data-id="${product.id}" class="details__favorite ${cssClass} fa-heart"></i>
          </div>
          <div class="details__inline">
            <p class="details__price">$ ${product.price}.00</p>
            ${cartButton}
          </div>
          <h2 class="h2 details__h2">Description</h2>
          <p class="details__text">${product.description}</p>
        </section>
      </div>
      <section class="ingredients">
        <div class="ingredients__dropdown">
          <h2 class="h2 ingredients__title">Ingredients</h2>
          <i class="ingredients__icon fas fa-chevron-down"></i>
        </div>
        <p class="ingredients__text ingredients__text--hidden">
          ${product.ingredients}
        </p>
      </section>

      `



}