let FastFood = "image/fast-food.svg";
let Drinks = "image/Drinks & Cocktails.svg";
let Restaurant = "image/resturant.svg";
let Vegetables = "image/Vegetables & Drinks.svg";
let selectBox = document.getElementById("location1");
let images = document.querySelectorAll(".img");
let availableFoods = document.querySelectorAll(".available-foods");
let vendorUrl = "vendorpage.html";

let imageArray = [FastFood, Vegetables, Drinks, Restaurant];

const changeFunc = () => {
  let selectedValue = selectBox.options[selectBox.selectedIndex].value;

  images.forEach((item, index) => {
    item.src = imageArray[index];
  });
  console.log(selectedValue);
  availableFoods.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = vendorUrl;
    });
  });
};

selectBox.addEventListener("change", changeFunc);