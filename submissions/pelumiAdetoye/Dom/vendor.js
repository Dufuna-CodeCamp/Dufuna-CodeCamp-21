let addToCart = document.querySelectorAll(".addtocart")

let notify = document.querySelector(".notify")

// add to cart and remove from cart
for(let cart of addToCart ){
  cart.addEventListener('click', ()=>{

    if(cart.innerText === "Add to Cart"){
      cart.style.backgroundColor = "#A5A5A5";
      cart.style.color = "rgba(255, 255, 255, 1)";
      cart.style.border = "none";
      cart.innerHTML =
        '<img src = "../imgs/remove.svg" class = "remove" style=" width:20px; padding-right:2px; color:rgba(255, 255, 255, 1);"/><span style="color:rgba(255, 255, 255, 1);">Remove</span>';
      cart.style.display = "flex";
      cart.style.alignItems = "center";
    } else if (cart.innerText === "Remove"){
      cart.style.backgroundColor = "rgba(255, 255, 255, 1)";
      cart.style.color = "#ad4c4c";
      cart.style.border = "1px solid #ad4c4c";
      cart.innerHTML = "Add to Cart";
    }

    let cartNotificationBtn = document.querySelectorAll(".remove").length;
    // console.log(cartNotificationBtn)
    notify.innerHTML = cartNotificationBtn
    notify.style = "padding-top:2px; padding-bottom:7px; padding-left:5px;"

    if (cartNotificationBtn > 0) {
      notify.style.display = "inline-flex";
      notify.style.color = "white"
    } else {
      notify.style.display = "none";
    }
 
  })  
}


