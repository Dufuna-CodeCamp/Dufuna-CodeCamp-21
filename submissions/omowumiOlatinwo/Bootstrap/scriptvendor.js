let cartButtons = document.querySelectorAll(".cart");
let cart = document.querySelector(".cartt")

cartButtons.forEach((button)=>{
    button.addEventListener("click",function() {
        if (button.textContent == "Add to Cart"){
            button.classList.remove('cart');
            button.classList.add('change');
            button.innerHTML = "<img src = 'images/remove.svg' class = 'remove'> Remove";        
        } else {
            button.classList.add('cart');
            button.innerText = "Add to Cart";
        }
        let cartRedDot = document.querySelectorAll('.remove').length;
        if (cartRedDot > 0) {
            cart.classList.add('dot') ;         
        } else{
            cart.classList.remove('dot');
        }
    });
})

