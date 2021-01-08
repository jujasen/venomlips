import { baseUrl } from "../general/settings.js";
import { getToken } from "../utils/storage.js";

export default async function deleteProduct(id) {

    const doDelete = confirm("Are you sure you want to delete this product?");
    console.log(id);

    if (doDelete) {
        const url = baseUrl + "/products/" + id;

        const token = getToken();

        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await fetch(url, options);
            const json = await response.json();


            const success = document.querySelector(".form__success--delete");


            success.style.display = "block";
            console.log(json);
        } catch (error) {
            const errorDisplay = document.querySelector(".loading-error");

            errorDisplay.style.display = "block";

        }
    }

}