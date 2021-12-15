
// let btnChicken = document.querySelector("#chicken");
// let btnCitizen = document.querySelector("#citizen");

const buttons = document.querySelectorAll("button"); 
buttons.forEach(button=>button.addEventListener("click" , function() {
    if (button.textContent == "Add to cart" ){
        button.textContent = "Remove";
        button.style.color = "white";
        button.style.backgroundColor = "grey";
        button.style.borderColor = "white";
    }
    else {
        button.style.color = "red";
        button.style.backgroundColor = "white";
        button.style.borderColor = "red";
        button.textContent = "Add to cart";
    }
    var removeCart = document.getElementById("added");
    var addCart = document.getElementById("not-added");
    removeCart.style.display = (this.onclick) ? "none":"block";
    addCart.style.display = (this.onclick) ? "block": "block";
    if (button.textContent == "Add to cart"){
        removeCart.style.display = (this.onclick) ? "block" : "none";
    }

}));











// btnChicken.addEventListener("click",() =>{
//     btnChicken.style.backgroundColor="grey";
//     btnChicken.style.color="white";
//     btnChicken.innerText="Remove";
//     btnChicken.style.borderColor="white";
// }) 

// btnCitizen.addEventListener("click",() =>{
//     btnCitizen.style.backgroundColor="grey";
//     btnCitizen.style.color="white";
//     btnCitizen.innerText="Remove";
//     btnCitizen.style.borderColor="white";
// }) 
