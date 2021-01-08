
let selector = document.querySelector(".edit__product");

export default function selectDisplay(data) {


    data.forEach(function (product) {

        selector.innerHTML +=
            `
        <option data-id="${product.id}" class="edit__option">${product.title}</option>
        `
    });

}