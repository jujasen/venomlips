export default function displayCartTotal() {
    const shippingContainer = document.querySelector(".cartdetails__shipping");

    shippingContainer.style.display = "flex";

    const cartItems = document.getElementsByClassName("cartdetails__item");

    let total = 0;



    //tutorial for total price used: https://github.com/WebDevSimplified/Introduction-to-Web-Development/blob/master/Introduction%20to%20JavaScript/Lesson%201/store.js
    for (let i = 0; i < cartItems.length; i++) {

        const cartItem = cartItems[i];

        const priceContainer = cartItem.querySelector(".item__price");

        const price = parseInt(`${priceContainer.innerText}`.replace("$ ", ""));

        let totalDisplay = document.querySelector(".total__price");

        total = total + price;
        //tutorial on how to round numbers https://stackoverflow.com/questions/4937251/why-is-my-tofixed-function-not-working
        total = Math.round(total * 1000) / 1000;
        totalDisplay.innerText = "$ " + total;



    }
    if (cartItems.length > 1) {
        const discountContainer = document.querySelector(".cartdetails__discount-price");
        let discount = discountContainer.getAttribute('data-percentage');
        if (discount != null) {

            discount = discount / 100;
            console.log(discount);
            console.log(total);

            total = total * (1 - discount);
            console.log(total);

            total = Math.round(total * 1000) / 1000;

            let totalDisplay = document.querySelector(".total__price");

            totalDisplay.innerText = "$ " + total;

            discountContainer.innerText = `- ${discount * 100} %`;
        }
    }






    if (cartItems.length <= 1) {


        let cartDetails = document.getElementsByClassName("shoppingcart--hide");

        console.log(cartDetails.length);


        for (let i = 0; i < cartDetails.length; i++) {
            cartDetails[i].style.display = "none";
        }

    }


}