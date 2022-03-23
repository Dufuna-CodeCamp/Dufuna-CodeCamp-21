const buttons = document.querySelectorAll("button"); 
buttons.forEach(button=>button.addEventListener("click" , function() {
    if (button.textContent == "Add to Cart" ){
        button.textContent = "Remove";
        button.style.color = "white";
        button.style.backgroundColor = "#ccc";
        button.style.borderColor = "white";
    }
    else {
        button.style.color = "red";
        button.style.backgroundColor = "white";
        button.style.borderColor = "red";
        button.textContent = "Add to Cart";
    }
    var removeCart = document.getElementById("added");
    var addCart = document.getElementById("not-added");
    removeCart.style.display = (this.onclick) ? "none":"block";
    addCart.style.display = (this.onclick) ? "block": "block";
    if (button.textContent == "Add to cart"){
        removeCart.style.display = (this.onclick) ? "block" : "none";
    }

}));
