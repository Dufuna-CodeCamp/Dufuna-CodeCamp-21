let fastFood = document.getElementById("fast-food");
let vegetable = document.getElementById("vegetables");
let cocktails = document.getElementById("cocktails");
let resturant = document.getElementById("resturant");

let dropdown = document.getElementById("dropdown");

dropdown.addEventListener("change", function () {
  fastFood.src = "../images/fast-food.svg";
  vegetable.src = "../images//Vegetables & Drinks.svg";
  cocktails.src = "../images/Drinks & Cocktails.svg";
  resturant.src = "../images/resturant.svg";
});
