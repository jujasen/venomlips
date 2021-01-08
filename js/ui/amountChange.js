import { getCartFromStorage, saveCartItem } from "../utils/storage.js";
import displayCartTotal from "../ui/displayCartTotal.js";

export function reduceAmount() {

    const parent = this.parentNode;

    const amountCounter = parent.querySelector(".cartitem__amount-number");

    const id = parseInt(amountCounter.dataset.id);

    const currentCart = getCartFromStorage();


    for (let item in currentCart) {
        const cartId = parseInt(currentCart[item].id);

        if (cartId === id) {

            const dataItemAmount = parseInt(currentCart[item].amount);

            const itemAmount = dataItemAmount - 1;

            if (itemAmount <= 0) {
                const parent = this.parentNode;

                const amountCounter = parent.querySelector(".cartitem__amount-number");

                const id = amountCounter.dataset.id;
            
            
                const currentCart = getCartFromStorage();
            
            
                const newCart = currentCart.filter((product) => product.id !== id);
                saveCartItem(newCart);
            
                location.reload();
            }

            amountCounter.innerText = itemAmount;


            const data = localStorage.getItem('added');

            const parsedData = JSON.parse(data);

            if (parsedData != null) {
                for (let i = 0; i < parsedData.length; i++) {

                    if (parsedData[i].id === cartId.toString()) {

                        parsedData[i].amount = itemAmount.toString();
                        break;

                    }
                }
                localStorage.setItem("added", JSON.stringify(parsedData))

            } else {
                console.log(false);
            }
            displayCartTotal();
        }
    }
}

export function increaseAmount() {

    const parent = this.parentNode;

    const amountCounter = parent.querySelector(".cartitem__amount-number");

    const id = parseInt(amountCounter.dataset.id);
    const amount = parseInt(amountCounter.dataset.amount);


    const currentCart = getCartFromStorage();


    for (let item in currentCart) {
        const cartId = parseInt(currentCart[item].id);

        if (cartId === id) {

            const dataItemAmount = parseInt(currentCart[item].amount);

            const itemAmount = dataItemAmount + 1;

            amountCounter.innerText = itemAmount;

            const data = localStorage.getItem('added');

            const parsedData = JSON.parse(data);

            if (parsedData != null) {
                for (let i = 0; i < parsedData.length; i++) {

                    if (parsedData[i].id === cartId.toString()) {

                        parsedData[i].amount = itemAmount.toString();
                        break;

                    }
                }
                localStorage.setItem("added", JSON.stringify(parsedData))

            } else {
                console.log(false);
            }
            displayCartTotal();

        }
    }
}