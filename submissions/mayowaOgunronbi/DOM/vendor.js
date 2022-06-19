const button = document.querySelectorAll(".btn-container");
const cartDot = document.querySelector ("#dot");


button.forEach(function(container) {
    container.addEventListener ("click", function(e) {
        let buttonContainers = e.target.closest (".btn-container");
        buttonContainers.classList.toggle ("Added");

        // console.dir(buttonContainers);
        const removeImage = buttonContainers.querySelector("#remove");
        const addToCart = buttonContainers.querySelector("#add-to-cart");
       

        if (buttonContainers.classList.contains("Added")) {
            // removeImage.style.padding = "inline";
            addToCart.innerText = "Remove";
            buttonContainers.style.color = "white";
            removeImage.style.visibility = "visible";
            buttonContainers.style.backgroundColor = "grey";

        } else {
            removeImage.style.visibility = "hidden";
            addToCart.innerText = "Add to cart";
            buttonContainers.style.color = "brown";
            buttonContainers.style.backgroundColor = "white";
        }

        cartItems ();
    })
})

function cartItems () {
    let addedItems = document.querySelectorAll (".Added");
    if (addedItems.length > 0) {
        cartDot.style.visibility = "visible";
    } else {
        cartDot.style.visibility = "hidden";
    }
}



