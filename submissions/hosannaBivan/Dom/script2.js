var boxes = document.getElementsByClassName("f");
var newBoxes = document.getElementsByClassName("g");
var selectBox = document.getElementById("address");

selectBox.addEventListener("change", selectLocation)

function selectLocation() {
            for(let i=0; i<boxes.length; i++){
            
                    const displayOld = boxes[i]
                    const displayNew = newBoxes[i];
                    
                    displayOld.style.display = "none";
                    displayNew.style.display = "block";
                    
            }
   }



for(var newBox of newBoxes){
    newBox.addEventListener('mouseover', makeSelection);
    
}

function makeSelection(){
    for(let i=0; i<newBoxes.length; i++){
        newBoxes[i].addEventListener('click', function(){
            // e.preventDefault();
            
            window.location.href="food.html";
        })
    }       
}





// var buttons = document.getElementsByClassName("cart")
// var cart = document.getElementById('cart')

// function addToCart(){
//     for(let i=0; i<buttons.length; i++){
//         buttons[i].addEventListener("click", () => {

//             buttons[i].classList.toggle("remove");

//             if (buttons[i].innerHTML == "Add to Cart"){
//                 buttons[i].innerHTML = "Remove"
//             }
//             else{
//                 buttons[i].innerHTML = "Add to Cart"
//             }

//                 if(buttons[i].innerHTML == "Remove"){
//                     cart.classList.add("cart-dot");   
//                 }
//                 else{
//                     cart.classList.remove("cart-dot");   
//                 }

            
//         })

        
        
//     }

//     } 

// addToCart()



