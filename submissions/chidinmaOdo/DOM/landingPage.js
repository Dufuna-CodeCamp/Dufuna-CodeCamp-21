let fastFood = "../css/image/fast-food.svg";
let drinks = "../css/image/Drinks & Cocktails.svg";
let restaurant = "../css/image/resturant.svg";
let vegetable = "../css/image/Vegetables & Drinks.svg";
let address = document.getElementById("locate");
let images = document.querySelectorAll(".img-box");
let imageTitle = document.querySelectorAll(".img-title");
let cards = document.querySelectorAll(".box1");
let vendorUrl = "./vendorpage.html";

let imageArr = [fastFood, drinks, restaurant, vegetable];

const changeFunct = () => {
    let selectedValue = address.options[address.selectedIndex].value;

    //document.getElementsByClassName(".img-title"). style.color = "red";
    
    imageTitle.forEach((item) => {
        item.classList.remove("img-title");
        item.classList.add("img-title--red");
    });

    images.forEach((item, index) => {
        item.src = imageArr[index];
    });
    console.log(selectedValue);
    cards.forEach((item) => {
        item.addEventListener("click", () => {
            window.location.href = vendorUrl;
        });
    });
};

address.addEventListener("change", changeFunct);



console.log("Hello");