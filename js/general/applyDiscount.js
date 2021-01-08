import { getUsername } from "../utils/storage.js";
import displayCartTotal from "../ui/displayCartTotal.js";


export default function applyDiscount(data) {
    const input = document.querySelector(".discountdisplay__input");

    const btn = document.querySelector(".discountdisplay__btn");

    const inputValue = input.value.trim();

    const success = document.querySelector(".discountdisplay__success");

    const error = document.querySelector(".discountdisplay__error");

    const loginError = document.querySelector(".discountdisplay__loginerror");

    const discountDisplay = document.querySelector(".cartdetails__discount");

    let discountName = discountDisplay.querySelector(".cartdetails__discount-name");

    let discountPrice = discountDisplay.querySelector(".cartdetails__discount-price");



    success.style.display = "none";
    error.style.display = "none";
    loginError.style.display = "none";

    for (let i = 0; i < data.length; i++) {
        const percentage = data[i].percentage / 100;

        let totalContainer = document.querySelector(".total__price");

        const total = parseInt(`${totalContainer.innerText}`.replace("$ ", ""));

        const newTotal = total * (1 - percentage);

        console.log(percentage, total, newTotal);

        const discountNumber = data[i].percentage;

        const username = getUsername();

        error.style.display = "none"

        if (inputValue === data[i].code) {

            if (!data[i].useronly) {
                error.style.display = "none"
                totalContainer.innerText = `$ ${newTotal}`;

                discountName.innerText = `${data[i].code}`;

                success.style.display = "block";

                error.style.display = "none";


                discountPrice.innerText = `- ${discountNumber} %`;

                console.log(discountPrice);


                discountPrice.setAttribute('data-percentage', `${data[i].percentage}`);

                console.log(discountPrice);


                discountDisplay.style.display = "flex";

                input.style.display = "none";

                btn.style.display = "none";
            } else {
                if (username) {
                    totalContainer.innerText = `$ ${newTotal}`

                    discountName.innerText = `${inputValue}`;

                    success.style.display = "block";

                    error.style.display = "none";


                    discountPrice.innerText = `- ${discountNumber} %`
                    discountPrice.setAttribute('data-percentage', `${data[i].percentage}`);


                    discountDisplay.style.display = "flex";

                    input.style.display = "none";

                    btn.style.display = "none";
                } else {
                    loginError.style.display = "block";

                }
            }
            break;
        } else {
            error.style.display = "block";
        }
    }
    displayCartTotal();
}