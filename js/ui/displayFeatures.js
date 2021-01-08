import { getExistingFavs, getUsername } from "../utils/storage.js";

export default function displayFeatures(data, targetElement) {

  const element = document.querySelector(targetElement);

  element.innerHTML = "";

  const favorited = getExistingFavs();


  data.forEach(function (product) {

    if (product.featured === true) {

      let cssClass = "far";
      const doesObjectExist = favorited.find(function (fav) {
        return parseInt(fav.id) === product.id;
      });


      const username = getUsername();

      if (username) {
        if (doesObjectExist) {
          cssClass = "fas";
        }
      }


      element.innerHTML +=
        `
            <div class="product">
            <img class="product__img" src="${product.image_url}" alt="${product.title + " " + "lipgloss"}">
            <div class="product__info">
              <h3 class="product__title">${product.title}</h3>
              <div class="product__inline">
              <p class="product__price">$ ${product.price}.00</p>
              <i data-id="${product.id}" class="product__favorite ${cssClass} fa-heart"></i>
              </div>
              <a class="button" href="details.html?id=${product.id}">
                <p class="button__text">View product</p>
                <i class="button__icon fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
            `
    }
  });
}
