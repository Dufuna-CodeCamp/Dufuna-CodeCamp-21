var img = new Image();
img.src = "../FoodBag Task Images/remove.svg";
var dotlink = document.getElementById("dotlink");

var cart = document.querySelectorAll(".cart");
        cart.forEach(cart => {
            cart.addEventListener('click', function() { 
                if (cart.textContent ==="Add to cart"){
                cart.innerHTML ='<img height="20px" width="30px" src="'+img.src+'" />' + "Remove";
                cart.style.position = "absolute";
                cart.style.color = "white";
                cart.style.backgroundColor = "grey";
                cart.style.borderColor = "grey";
                cart.style.display = "flex";
                cart.style.textAlign = "center";
                cart.style.alignItems= "center";
                dotlink.classList.add("dot");
                
            }else{
                cart.innerHTML = "Add to cart";
                cart.style.color = "brown";
                cart.style.position = "absolute";
                cart.style.backgroundColor = "white";
                cart.style.borderColor = "brown";
                cart.style.display = "flex";
                cart.style.textAlign = "center"
                cart.style.alignItems= "center";
                cart.style.fontSize = "15px";
                dotlink.classList.remove("dot");
               

            }
            

            
        });
    });