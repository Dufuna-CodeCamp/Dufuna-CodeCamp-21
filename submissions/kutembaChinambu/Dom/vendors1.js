var img = new Image();
img.src = "../FoodBag Task Images/remove.svg";
var dotlink = document.getElementById("dotlink");


var button = document.createElement('div');
button.innerHTML = "<a class='cart-btn'>Add to cart</a>";



let  cartOptions = document.querySelectorAll('.vendoroptions');
for (let i=0 ; i <  cartOptions.length ; i++){
    cartOptions[i].appendChild(button.cloneNode(true));//.addEventListener ('click', addRemove);
    addRemove();

}

function addRemove() {
    let removeBtn = document.querySelectorAll(".cart-btn");
    removeBtn.forEach(removeBtn => {
        removeBtn.addEventListener('click', function() { 
            console.log(removeBtn)
        if (removeBtn.textContent === "Remove") {
            removeBtn.innerHTML = "<a class='cart-btn'>Add to cart</a>";
            removeBtn.classList.remove("remove-btn");

        }else {
            removeBtn.classList.remove("cart-btn");
            removeBtn.classList.add("remove-btn");
            removeBtn.innerHTML = '<img height="20px" width="20px" src="'+img.src+'" />' + "Remove";
            
        }
   
        })
    })
    }


