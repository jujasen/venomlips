import { getExistingFavs } from "../utils/storage.js";

export default function displayFavs(data, targetElement) {

  const element = document.querySelector(targetElement);

  element.innerHTML = "";


  data.forEach(function (product) {

    const favorited = getExistingFavs();

    if (favorited === undefined || favorited.length == 0) {
      element.innerHTML = `<p class="products__empty">You have no favorites 🥺</p>`;
    }

    let cssClass = "far";
    const doesObjectExist = favorited.find(function (fav) {
      return parseInt(fav.id) === product.id;
    });

    if (doesObjectExist) {
      cssClass = "fas";
    }


    //tutorial used for looping over objects https://medium.com/chingu/looping-over-arrays-and-objects-in-javascript-57e1188c1ba2
    for (let item in favorited) {


      let favId = parseInt(favorited[item].id);

      if (isNaN(favId)) {
        favId = parseInt(favorited.id);
      }


      if (favId === product.id) {


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
    }

  });
}