var buttons = document.getElementsByClassName("cart")
var cart = document.getElementById('cart')


function addToCart(){
    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", () => {


            if (buttons[i].innerHTML == "Add to Cart"){

                buttons[i].innerHTML = "Remove <span><img class='remove-icon' src='./images/Vector.png' alt=''></span>"

                buttons[i].classList.add("remove");

                cart.classList.add("cart-dot");   

            }
            else{
                buttons[i].innerHTML = "Add to Cart"

                buttons[i].classList.remove("remove");

                cart.classList.remove("cart-dot");   

            }
            
        })
        
    }

    } 

addToCart()



