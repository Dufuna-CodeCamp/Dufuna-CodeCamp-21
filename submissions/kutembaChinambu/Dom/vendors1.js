var img = new Image();
img.src = "../FoodBag Task Images/remove.svg";
var dotlink = document.getElementById("dotlink");
var selector = document.querySelectorAll('remove-btn');


//select all elements with the class cart-button and alternate between cart-btn class and remove-btn class
let  cartOptions = document.querySelectorAll('.cart-btn');
cartOptions.forEach(cartOptions => {
    cartOptions.addEventListener('click', function() { 
    if (cartOptions.textContent ==="Add to cart") {
        cartOptions.classList.remove("cart-btn");
        cartOptions.classList.add("remove-btn");
        cartOptions.innerHTML = '<img height="17px" width="17px" src="'+img.src+'" />' + "Remove";
        
    }else {
        cartOptions.innerHTML = "<a class='cart-btn'>Add to cart</a>";
        cartOptions.classList.remove("remove-btn"); 
        dotlink.style.display = 'none';

    } 
    addDot();
        
    })
})
//add a dot when a user adds something to the cart
function addDot(){
     var dotlink = document.getElementById("dotlink");
        var selector = document.querySelectorAll('.remove-btn');
        console.log(selector);
        console.log(selector.length);
            if (selector.length >=1) {
            dotlink.style.display = 'inline-block';

            } else {
                dotlink.style.display = 'none';

            }
}
    





