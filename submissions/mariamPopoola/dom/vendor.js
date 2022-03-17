let addCart = document.querySelectorAll(".add-cart");
let cart = document.querySelector(".cart");
let dot = document.querySelector(".dot");

addCart.forEach(function(e){
    e.addEventListener("click",function(){
        if(e.textContent == "Add to Cart"){
            e.innerHTML = 
            "<img src ='../../css/img/remove.svg' class = 'remove'style='width:35px; position: relative;top: 12px; color:#fff'> Remove"
            e.style.backgroundColor = "#A5A5A5";
            e.style.color = "white";
            e.style.border = "none";

            // cart increment
            let cartCount = document.querySelectorAll(".remove").length;
            if (cartCount > 0) {
                dot.style.display = "block";
                dot.textContent= cartCount;
            }
                    
        }else{
            e.textContent = "Add to cart";
            e.style.color = "#AD4C4C";
            e.style.backgroundColor = "white";
            e.style.border = "";

            // cart decrement
            let cartCount = document.querySelectorAll(".remove").length;
            if (cartCount > 0) {
                dot.style.display = "block";
                dot.textContent= cartCount;
            }else {
                dot.style.display = "none";
                
            }
        }
        
    });
});

// addCart.forEach(function(e){

//     if(e.textContent == "Add to Cart"){
//         e.addEventListener("click",function(){
//             e.innerHTML = 
//             "<img src ='../../css/img/remove.svg' class = 'remove'style='width:35px; position: relative;top: 12px; color:#fff'> Remove"
//             e.style.backgroundColor = "#A5A5A5";
//             e.style.color = "white";
//             e.style.border = "none";
            
//             // cart increment
//             let cartCount = document.querySelectorAll(".remove").length;
//             if (cartCount > 0) {
//                       dot.style.display = "block";
//                     } else {
//                       dot.style.display = "none";
//                     }
//                     dot.textContent= cartCount;
//         })
//     }else{
       
//     }
// });

