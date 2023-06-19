let cartItems = document.querySelectorAll('.add-to-cart'),
    addedItem = document.getElementById('notification');

let orderCount = 0;

cartItems.forEach(element => {
    element.addEventListener('click', function() {
        if(element.innerText === "Add to Cart"){
            element.innerHTML = '<div class="remove" ><img src="./Images/remove.svg" viewBox="0 0 150 50">Remove</div>';
            addedItem.style.display = "inline";
            element.style.border = "none";
            orderCount++;
    } else if(element.innerText === "Remove") {
        element.innerText = 'Add to Cart';
        element.style.border ="2px solid rgba(165, 42, 42, 0.801)"
        orderCount--;
    }

    if(orderCount <= 0) {
        addedItem.style.display = "none"
    }
})
});
