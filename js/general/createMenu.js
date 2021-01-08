import { getUsername, getUser, getCartFromStorage } from "../utils/storage.js";
import logout from "./logout.js";


export default function createMenu() {
    const container = document.querySelector(".navbar__collapse");
    const iconContainer = document.querySelector(".navbar__icons");
    const { pathname } = document.location;

    const user = getUser();
    console.log(user);


    const username = getUsername();

    console.log("Username: " + username);

    let usernameAuth = "";
    let loggedinActive = "";
    let cartActive = "";
    let adminMenu = "";

    
    let logInOut = 
    `
    <li class="navbar__item nav-item">
    <a class="navbar__link ${pathname === "/login.html" ? "navbar__link--active" : ""} nav-link" href="login.html">Log in / Register</a>
    </li>
    `;

    let userGreeting =
    `
    <a class="navbar__admin" href="./login.html">
        <i class="navbar__icon fas fa-user ${pathname === "/login.html" ? "navbar__icon--active" : ""}"></i>
    </a>
    `;

    const cart = getCartFromStorage();

    let favoritesLink = "";

    if (cart.length) {
        cartActive = "navbar__icon--active";
    }

    if (username) {
        usernameAuth = "Hi, " + username;

        loggedinActive = "navbar__icon--active";

        favoritesLink = 
        `
        <li class="navbar__item nav-item">
            <a class="navbar__link ${pathname === "/favorites.html" ? "navbar__link--active" : ""} nav-link" href="favorites.html">Favorites</a>
        </li>
        `;

        logInOut = 
        `
        <li class="navbar__item nav-item">
            <a class="navbar__link nav-link logout"} nav-link" href="index.html">Log out</a>
        </li>
        `;

        if (user === "authenticated") {

            adminMenu = 
            `
            <li class="navbar__item navbar__dropdown nav-item dropdown">
            <a class="navbar__link nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Admin</a>
            <div class="dropdown__menu dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown__item ${pathname === "/admin.html" ? "dropdown__item--active" : ""} dropdown-item" href="admin.html">Admin panel</a>
                <a class="dropdown__item ${pathname === "/edit.html" ? "dropdown__item--active" : ""} dropdown-item" href="edit.html">Edit & delete</a>
                <a class="dropdown__item ${pathname === "/add.html" ? "dropdown__item--active" : ""} dropdown-item" href="add.html">Add product</a>
            </div>
            </li>
            `
            userGreeting =
            `
            <a class="navbar__admin" href="admin.html">
                <i class="navbar__icon ${loggedinActive} fas fa-user"></i>${usernameAuth}
            </a>
            `
        }

        if (user === "public") {

            userGreeting =
            `
            <a class="navbar__admin" href="favorites.html">
                <i class="navbar__icon ${loggedinActive} fas fa-user"></i>${usernameAuth}
            </a>
            `;
        }



    }


    iconContainer.innerHTML += 

    `
    <a href="cart.html">
        <i class="${cartActive} navbar__icon navcart ${pathname === "/cart.html" ? "navbar__icon--active" : ""}  fas fa-shopping-cart"></i></i>
    </a>
    ${userGreeting}
    <button class="navbar__toggler navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
    aria-label="Toggle navigation">
        <i class="navbar__icon navbar__icon--no-pad-r fas fa-bars navbar-toggler-icon"></i>
    </button>
    
    `


    container.innerHTML += 
    

    `
    <ul class="navbar__nav navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="navbar__item">
            <a class="navbar__link 
            ${pathname === "/" || pathname === "/index.html" ? "navbar__link--active" : ""} nav-link" href="index.html">Home</a>
        </li>
        ${adminMenu}
        <li class="navbar__item  nav-item">
            <a class="navbar__link ${pathname === "/products.html" || pathname === "/details.html" ? "navbar__link--active" : ""} nav-link" href="products.html">All products</a>
        </li>
        <li class="navbar__item nav-item">
            <a class="navbar__link ${pathname === "/cart.html" ? "navbar__link--active" : ""} nav-link" href="cart.html">Shopping cart</a>
        </li>
        ${favoritesLink}
        ${logInOut}
  </ul>

    `

    logout();
}