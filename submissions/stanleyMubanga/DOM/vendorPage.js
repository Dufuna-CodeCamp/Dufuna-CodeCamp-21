const   removeImg = new Image();
        removeImg.src = "../assets/remove.svg";
        cartBtn = document.getElementById('cartBtn');
        addToCartbtns = document.querySelectorAll('.cart-adder-btn');

function addItem() {
    let picker = document.querySelectorAll(".remove-item");
        itemPopup = document.getElementById("newItem");
    if (picker.length >=1) {
        itemPopup.style.display = 'inline-block';
    } else {
        itemPopup.style.display = 'none';
    }
}

addToCartbtns.forEach(addToCartbtn => {
    addToCartbtn.addEventListener('click', function() {
        if (addToCartbtn.textContent === "Add to Cart") {
            addToCartbtn.classList.add("remove-item");
            addToCartbtn.classList.remove("border-btn")
            addToCartbtn.innerHTML ='<img height="22px" width="22px" src="'+removeImg.src+'" />' + "Remove";
        } else {
            addToCartbtn.classList.add("border-btn");
            addToCartbtn.classList.remove("remove-item");
            addToCartbtn.innerHTML ='Add to Cart';
            itemPopup.style.display = 'none';
        }
        addItem();
    })
})
