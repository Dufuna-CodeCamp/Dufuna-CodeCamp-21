let buttons = document.querySelectorAll(".button");
    cart = document.querySelector(".cart");


buttons.forEach((button)=>{
    button.addEventListener("click",function() {
        if (button.textContent == "Add to Cart"){
            button.classList.remove('button');
            button.classList.add('change');
            button.innerHTML = "<img src = '../FoodBagTaskAssets/remove.svg' class = 'remove'> Remove";    
        } else {
            button.classList.add('button');
            button.innerText = "Add to Cart";
        }

        let cartDot = document.querySelectorAll('.remove').length;
        if (cartDot > 0) {
            cart.classList.add('dot') ;         
        } else{
            cart.classList.remove('dot');
        }
    });
})