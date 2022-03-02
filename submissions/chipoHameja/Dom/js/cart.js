const buttonContainers = document.querySelectorAll(".button-container"),
      cartDot = document.querySelector("#cart-dot");

buttonContainers.forEach(function (container) {
    container.addEventListener("click", function (e) {
        let buttonContainer = e.target.closest(".button-container")
        buttonContainer.classList.toggle("added")
        console.dir(buttonContainer)
        let removeImage = buttonContainer.querySelector(".remove")
    
        if (buttonContainer.classList.contains("added")) {
            removeImage.style.display = "inline"
            buttonContainer.querySelector(".add-to-cart").innerText = "Remove"
        }
        
        else {
            removeImage.style.display = "none"
            buttonContainer.querySelector(".add-to-cart").innerText = "Add to Cart"
        }

        cartItems()
    })
})

function cartItems() {
    let addedItems = document.querySelectorAll(".added")
    
    if (addedItems.length > 0) {
        cartDot.style.opacity = 1;
    }

    else {
        cartDot.style.opacity = 0;
    }
}