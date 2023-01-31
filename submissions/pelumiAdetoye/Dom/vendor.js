let addToCart = document.querySelectorAll(".addtocart")

let notify = document.querySelector(".notify")

// add to cart and remove from cart
for(let cart of addToCart ){
  cart.addEventListener('click', (e)=>{

    if(cart.innerText === "Add to Cart"){
      cart.style.backgroundColor = "#A5A5A5";
      cart.style.color = "rgba(255, 255, 255, 1)";
      cart.style.border = "none";
      cart.innerHTML =
        '<img src = "../imgs/remove.svg" class = "remove" style=" width:20px; padding-right:2px; color:#fff" />Remove';
      cart.style.display = "flex";
      cart.style.alignItems = "center";
    } else if (cart.innerText == "Remove") {
      cart.style.backgroundColor = "#fff";
      cart.style.color = "#ad4c4c";
      cart.style.border = "1px solid #ad4c4c";
      cart.innerHTML = "Add to Cart";
    }

    let cartNotificationBtn = document.querySelectorAll(".remove").length;

    if (cartNotificationBtn > 0) {
      notify.style.display = "inline-flex";
    } else {
      notify.style.display = "none";
    }
 
  })  
}


