import { getUsername } from "../utils/storage.js";

const username = getUsername();

if (username != "admin") {
    location.href = "/";

}