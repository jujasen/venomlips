import { baseUrl } from "../general/settings.js";

const herobanner = document.querySelector(".herobanner--first");

const heroUrl = baseUrl + "/home";

export default async function displayHero() {
    try {
        const response = await fetch(heroUrl);
        const json = await response.json();
        const hero = json;

        const heroImg = hero.herobanner_image_url;
    
        herobanner.style.backgroundImage = 
        ` url("${heroImg}")`;


    }  catch (error) {
        console.log(error);
    }

}
