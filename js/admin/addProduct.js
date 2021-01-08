import { baseUrl } from "../general/settings.js";
import { getToken } from "../utils/storage.js"

const token = getToken();

export default async function addProduct(title, price, description, image, ingredients, featured) {


    const url = baseUrl + "/products";

    const data = JSON.stringify({title: title, price: price, description: description, image_url: image, ingredients: ingredients, featured: featured});

    const errorMsg = document.querySelector(".form__error");


    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        const success = document.querySelector(".form__success--add");

        success.style.display = "block";

        if(json.error) {
            success.style.display = "none";
            errorMsg.style.display = "block";

        }


    } catch (error) {
        errorMsg.style.display = "block";
        console.log(error);
    }

}