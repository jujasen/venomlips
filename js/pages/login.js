import { baseUrl } from "../general/settings.js"
import { saveToken, saveUser } from "../utils/storage.js";
import displayMessage from "../ui/displayMessage.js";


const form = document.querySelector(".login");
const error = document.querySelector(".login__error");


form.addEventListener("submit", logInVal);

function logInVal(event) {

    const username = document.querySelector("#username");
    const usernameMsg = document.querySelector("#usernameHelp");
    const password = document.querySelector("#password");
    const passwordMsg = document.querySelector("#passwordHelp");

    event.preventDefault();

    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();

    doLogin(usernameVal, passwordVal, usernameMsg, passwordMsg, error);

}


async function doLogin(username, password, usernameMsg, passwordMsg, errorMsg) {
    const url = baseUrl + "/auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();


        if (json.user) {

            saveToken(json.jwt);
            saveUser(json.user);


            if (json.user.username === "admin") {
                location.href = "./admin.html";
            } else {
                //last page tutorial https://www.w3schools.com/jsref/met_his_back.asp
                window.history.back();
            }
        }

        if (json.error) {

            displayMessage("block", errorMsg);
            errorMsg.innerText = json.message[0].messages[0].message;


            if (username < 3) {
                displayMessage("block", usernameMsg);
            } else {
                displayMessage("none", usernameMsg);
            }

            if (password < 3) {
                displayMessage("block", passwordMsg);
            } else {
                displayMessage("none", passwordMsg);
            }


            console.log(json.error);
        }
    } catch (error) {
        const errorDisplay = document.querySelector(".login__error");

        errorDisplay.style.display = "block";
    }
}