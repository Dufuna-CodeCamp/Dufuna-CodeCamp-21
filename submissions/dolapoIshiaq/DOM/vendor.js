let cartList = document.querySelectorAll(".cart");
let dot = document.querySelector('.dot');

cartList.forEach(function(e){
  e.addEventListener("click", function(){
    if(e.innerText == "Add to Cart"){
      e.innerHTML=
      "<img src = '../css-Folder/img/remove.svg' class = 'remove' style='width:35px; position: relative;top: 12px; color:#fff'> Remove";
      e.style.backgroundColor = "#A5A5A5";
      e.style.color = "white";
      e.style.border = "none";
    }

      else{
        e.innerHTML= 'Add to Cart';
        e.style.color = "#AD4C4C";
        e.style.backgroundColor = "white";
        e.style.border = "";
      }
    let cartCount = document.querySelectorAll(".remove").length;
       if (cartCount > 0) {
          dot.style.display = "block";
          dot.textContent= cartCount;
        }
        else {
           dot.style.display = "none";

            }
  });
});
