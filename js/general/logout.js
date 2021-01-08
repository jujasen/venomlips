import { clearStorage } from "../utils/storage.js";

export default function logout() {
    const buttons = document.querySelectorAll(".logout");

    for (let i = 0; i < buttons.length; i++) {

        if (buttons) {
            buttons[i].onclick = function () {
                const doLogout = confirm("Are you sure you want to log out?");
    
                console.log(doLogout);
                if (doLogout === true) {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                }

                if(doLogout === false) {
                    location.reload();
                }
            };
        }
    }

}