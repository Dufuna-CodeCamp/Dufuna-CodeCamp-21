const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', function(event) {
  if ( button.textContent == 'Add to Cart' ) {
     button.textContent = 'Remove';
     button.style.color = 'white';
     button.style.backgroundColor = "#4E4D4D"
    }
    else  {
      button.style.color = '#4E4D4D';
      button.style.backgroundColor = "white"
    }

    var removeCart = document.getElementById("added"); 
    var addCart = document.getElementById ("not-added"); 
    removeCart.style.display = (this.onclick) ? "none":"block";
    addCart.style.display = (this.onclick) ? "block":"block"; 

    if (button.textContent == 'Add to Cart') {
      removeCart.style.display = (this.onclick) ? "block":"none";
    }   
}));




 
