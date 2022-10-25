let cartItem = document.querySelectorAll(".addtocart");
let activeOrder = document.querySelector("#active");

let notifyActive = 0;

cartItem.forEach(element => {
    element.addEventListener("click", () => {
        if(element.innerText === "Add to Cart") {
            element.innerHTML = `<a href="#" class="menurm">
            <img src="./FoodBag Task Assets(beginner)/remove.svg" alt="rm">
            Remove</a>`
            element.style.padding = "2px 30px 2px 2px";
            element.style.alignItems = "center";
            element.style.backgroundColor = "hsla(0, 0%, 65%, 1)";
            element.style.color = "hsla(0, 0%, 90%, 1)";
            element.style.border = "none";
            activeOrder.style.display = "flex";
            notifyActive++;
        } else if(element.innerText === "Remove") {
            element.innerText = 'Add to Cart';
            element.style.padding = "10px 25px";
            element.style.backgroundColor = "hsla(0, 0%, 100%, 1)";
            element.style.color = "hsla(0, 39%, 49%, 1)";
            element.style.border = "1px solid hsla(0, 39%, 49%, 1)";
            activeOrder.style.display = "flex";
            notifyActive--;
        }

        if(notifyActive <= 0) {
            activeOrder.style.display = "none";
        }
    })
});