import { baseUrl } from "../general/settings.js"
import { saveToken, saveUser } from "../utils/storage.js";
import displayMessage from "../ui/displayMessage.js";

const form = document.querySelector(".register");
const error = document.querySelector(".regError");

form.addEventListener("submit", registerVal);

function registerVal(event) {

    const username = document.querySelector("#regUsername");
    const usernameMsg = document.querySelector("#regUsernameHelp");
    const email = document.querySelector("#regEmail");
    const EmailMsg = document.querySelector("#regEmailHelp");
    const password = document.querySelector("#regPassword");
    const passwordMsg = document.querySelector("#regPasswordHelp");
    

    event.preventDefault();

    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();


    doRegister(usernameVal, passwordVal, emailVal, usernameMsg, passwordMsg, EmailMsg, error);
}

async function doRegister(username, password, email, usernameMsg, passwordMsg, emailMsg, errorMsg) {
    const url = baseUrl + "/auth/local/register";

    const data = JSON.stringify({ username: username, email: email, password: password });


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
                location.href = "/";
            }
        }

        if (json.error) {

            displayMessage("block", errorMsg);
            errorMsg.innerText = json.message[0].messages[0].message;


            if (username.length < 2) {
                displayMessage("block", usernameMsg);
            } else {
                displayMessage("none", usernameMsg);
            }

            if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) === false) {
                displayMessage("block", emailMsg);
                console.log(false);
            } else {
                displayMessage("none", emailMsg);
                console.log(true);
            }
            

            if (password.length < 2) {
                displayMessage("block", passwordMsg);
            } else {
                displayMessage("none", passwordMsg);
            }


            console.log(json.error);
        }
    } catch (error) {
        const errorDisplay = document.querySelector(".register__error");

        errorDisplay.style.display = "block";
    }
}