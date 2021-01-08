import { getUsername } from "../utils/storage.js";
import logout from "./logout.js";

export default function createFooter() {
    const container = document.querySelector(".footer__nav");

    const { pathname } = document.location;

    const username = getUsername();

    let logInOut = 
    `
    <li class="footer__nav-item">
        <a class="footer__nav-link ${pathname === "/login.html" ? "footer__nav-link--active" : ""}" href="login.html">Log in / Register</a>
    </li>
    `;

    let favoritesLink = "";

    if (username) {

        logInOut = 
        `
        <li class="footer__nav-item">
            <a class="footer__nav-link logout" href="index.html">Log out</a>
        </li>
        `;

        favoritesLink = 
        `
        <li class="footer__nav-item">
            <a class="footer__nav-link" href="favorites.html">Favorites</a>
        </li>
        `;

    }

    container.innerHTML = 

        `
        <ul class="footer__nav">
            <li class="footer__nav-item">
                <a class="footer__nav-link footer__nav-link--active" href="index.html">Home</a>
            </li>
            <li class="footer__nav-item">
                <a class="footer__nav-link" href="products.html">All Products</a>
            </li>
            <li class="footer__nav-item">
                <a class="footer__nav-link" href="cart.html">Shopping cart</a>
            </li>
            ${favoritesLink}
            ${logInOut}
        </ul>
        `;

    logout();
}