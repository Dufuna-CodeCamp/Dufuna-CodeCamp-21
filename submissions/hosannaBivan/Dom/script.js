var buttons = document.getElementsByClassName("cart")
var cart = document.getElementById('cart')

function addToCart(){
    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", () => {

            buttons[i].classList.toggle("remove");

            if (buttons[i].innerHTML == "Add to Cart"){
                buttons[i].innerHTML = "Remove"
            }
            else{
                buttons[i].innerHTML = "Add to Cart"
            }

                if(buttons[i].innerHTML == "Remove"){
                    cart.classList.add("cart-dot");   
                }
                else{
                    cart.classList.remove("cart-dot");   
                }

            
        })

        
        
    }

    } 

addToCart()



