let FastFood = "../assets/svgs/fast-food.svg";
let Drinks = "../assets/svgs/Drinks & Cocktails.svg";
let Restaurant = "../assets/svgs/resturant.svg";
let Vegetables = "../assets/svgs/Vegetables & Drinks.svg";
let selectBox = document.getElementById("select__box");
let images = document.querySelectorAll(".cards__img--img");
let cardTitle = document.querySelectorAll(".cards__title");
let cards = document.querySelectorAll(".cards");
let vendorUrl = "./vendorsPage.html";

let imageArray = [FastFood, Vegetables, Drinks, Restaurant];

const changeFunc = () => {
  let selectedValue = selectBox.options[selectBox.selectedIndex].value;

  cardTitle.forEach((item) => {
    item.classList.remove("cards__title");
    item.classList.add("cards__title--red");
  });

  images.forEach((item, index) => {
    item.src = imageArray[index];
  });
  console.log(selectedValue);
  cards.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = vendorUrl;
    });
  });
};

selectBox.addEventListener("change", changeFunc);
