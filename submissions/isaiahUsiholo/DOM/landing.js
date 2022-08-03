let addressBar = document.getElementById("address");
let foodChoice = document.getElementsByClassName("choice");
let fastFood = document.getElementById("ff");
let vegies = document.getElementById("vf");
let drinks = document.getElementById("dc");
let restaurant = document.getElementById("res");
let h1 = document.getElementById("col1");
let h2 = document.getElementById("col2");
let h3 = document.getElementById("col3");
let h4 = document.getElementById("col4");

console.log(foodChoice[0])


let value = addressBar.innerText;
if (value == "") {
    fastFood.src = "../assets/fast-food_disabled.svg";
    vegies.src = "../assets/Vegetables & Drinks_disabled.svg";
    drinks.src = "../assets/Drinks & Cocktails_disabled.svg";
    restaurant.src = "../assets/resturant_disabled.svg";
    h1.style.color = "gray";
    h2.style.color = "gray";
    h3.style.color = "gray";
    h4.style.color = "gray";
}
else {
    for (i = 0; i < foodChoice.length; i++) {
        foodChoice[i].addEventListener("click", ()=>{
    window.location.assign("./vendorpage.html")}
);
    }
}









