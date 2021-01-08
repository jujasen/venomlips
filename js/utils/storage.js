const tokenKey = "token";
const userKey = "user";
const cartKey = "added";

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUsername() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
}

export function getUser() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.role.type;
    }

    return null;
}


export function checkCartItems() {
    const items = getFromStorage(cartKey);

    if (items) {
        if (items.length > 0) {
            return true;
        }
    } else {
        return items;
    }


    return null;
}

export function saveCartItem(product) {
    localStorage.setItem("added", JSON.stringify(product));
}


export function getCartFromStorage() {

    const items = localStorage.getItem(cartKey);

    if (items === null) {
        return [];
    } else {
        return JSON.parse(items);
    }
}

export function clearStorage() {
    localStorage.clear();
}


export function getExistingFavs() {
    const favs = localStorage.getItem("favorited");

    if (favs === null) {
        return [];
    }
    else {
        return JSON.parse(favs);
    }
}


export function saveFavs(favorites) {
    localStorage.setItem("favorited", JSON.stringify(favorites));
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return null;
    }

    return JSON.parse(value);
}

