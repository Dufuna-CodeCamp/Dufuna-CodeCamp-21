
var cart = document.getElementsByClassName("cart")
var remove = document.getElementsByClassName("remove")
var notify = document.getElementsByClassName("notify");

//IF CLICKED, NOTIFICATION APPEAR
var notification = 0
function getNotify() {
   
    if (notification == 0) {
        notify[0].textContent =" "
    }else{
        notify[0].textContent = "*";
        
    }
}

//REMOVE IS HIDDEN
for (let i = 0; i < remove.length; i++) {
    remove[i].style.display = "none";
    
}
// IF "ADD TO CART IS CLICKED", ADD TO CART IS HIDDEN 
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', function(){
       cart[i].style.display = "none"

// "REMOVE" IS DISPLAYED
        var removeNext = cart[i].nextElementSibling;
        removeNext.style.display = "block"

//NOTIFICATION IS DISPLAYED
       notification +=1
       getNotify();
    })
}

// IF "REMOVE IS CLICKED AGAIN", REMOVE IS HIDDEN
for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', function(){
       remove[i].style.display = "none"

// "ADD TO CART IS DISPLAYED"
        var Addcart = remove[i].previousElementSibling;
         Addcart.style.display = "block"

 //NOTIFICATION IS REMOVED
      notification -=1
      getNotify()
        
    })
}




