import { saveFavs, getExistingFavs, getUsername } from "../utils/storage.js";

export default function addToFavorites(event) {

    const username = getUsername();


    if (username) {
        this.classList.toggle("fas");
        this.classList.toggle("far");

        const id = this.dataset.id;
        console.log(id);

        const currentFavs = getExistingFavs();
        console.log(currentFavs);

        const favExists = currentFavs.find(function (fav) {
            return fav.id === id;
        });
        console.log(favExists);


        if (favExists === undefined) {
            const favId = { id: id };

            currentFavs.push(favId);
            saveFavs(currentFavs);
        } else {
            const newFavs = currentFavs.filter((fav) => fav.id !== id);
            saveFavs(newFavs);
        }
    } else {
        location.href = "./login.html";

    }

}