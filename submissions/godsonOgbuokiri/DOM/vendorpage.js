const removeButton = document.getElementsByClassName("rmv-btn");
const cartButtons = document.getElementsByClassName("cart");
const notification = document.getElementById("notification")

let cart = 0;

for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", function () {
        removeButton[i].style.display = "none"
        cartButtons[i].style.display = "flex"
        cart--;
        updateNotification(cart);
    })
}

for (let i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener("click", function () {
        cartButtons[i].style.display = "none"
        removeButton[i].style.display = "flex"
        cart++;
        updateNotification(cart);
    })
}

function updateNotification(itemsInCart) {
    if(itemsInCart == 0) {
        notification.style.display = "none";
    } else {
        notification.style.display = "inline-block";
        // notification.innerText = itemsInCart;
    }
}