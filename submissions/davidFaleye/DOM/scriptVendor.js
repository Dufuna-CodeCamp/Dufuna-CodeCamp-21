const button = document.querySelectorAll(".add-to-cart-button");  
let dot = document.querySelector(".cartdot");  
   
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() { 
      if (button[i].innerText == "Add to Cart"){
        button[i].innerHTML = '<img src="src/remove.svg" style="vertical-align: middle; color: rgba(255, 255, 255, 1); width: 22%" class="remove">Remove';
        button[i].style.padding = "7px 15px";
        button[i].style.color = "white";
        button[i].style.backgroundColor = "#A5A5A5";
        button[i].style.border = "none"; 
        }else if 
        (button[i].innerText == "Remove") {
        button[i].innerText = "Add to Cart";
        button[i].style.color = "#AD4C4C";
        button[i].style.backgroundColor = "white";
        button[i].style.border = "1px solid #AD4C4C";
        button[i].style.padding = "7px 20px";
        }
    const dotRemove = document.querySelectorAll(".remove").length;
      if (dotRemove > 0) {
        dot.style.display = "inline";
        } else {
        dot.style.display = "none";
        }
  });
  }

  
