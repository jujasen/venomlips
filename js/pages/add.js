import { getUsername } from "../utils/storage.js";
import submitAdd from "../admin/submitAdd.js";

const username = getUsername();

if (username != "admin") {
    location.href = "/";
}

const form = document.querySelector(".add");

form.addEventListener("submit", submitAdd);

