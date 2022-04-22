const locationInputField = document.getElementById("location"),
  fastFoodImage = document.getElementById("fast"),
  vegetablesImage = document.getElementById("vegetables"),
  drinksImage = document.getElementById("drinks"),
  restaurantImage = document.getElementById("restaurant"),
  firstParagraph = document.getElementsByClassName("first-para"),
  secondParagraph = document.getElementsByClassName("second-para"),
  vendorsLink = document.getElementsByClassName("vendors-link");

/* Event Listeners */

locationInputField.addEventListener("input", changePicture); //Executes the function when the value of the input field changes
for (let i = 0; i < vendorsLink.length; i++) {
  vendorsLink[i].addEventListener("click", clearInputField); //Executes the function when an interest is clicked
}

/* Function Declarations */

const clearInputField = () => {
  // Clears the input field when an interest is clicked
  locationInputField.value = "";
};

const changePicture = () => {
  //changes the picture and font colors of the text in the div
  if (locationInputField.value !== "") {
    fastFoodImage.src = "/images/fast-food.svg";
    vegetablesImage.src = "/images/Vegetables _ Drinks.svg";
    drinksImage.src = "/images/Drinks _ Cocktails.svg";
    restaurantImage.src = "/images/resturant.svg";

    for (let i = 0; i < firstParagraph.length; i++) {
      firstParagraph[i].style.color = "#AD4C4C";
      secondParagraph[i].style.color = "#696969";
      vendorsLink[i].setAttribute("href", "/Vendors' page/vendor-page.html");
    }
    return false;
  } else {
    fastFoodImage.src = "/images/fast-food_disabled.svg";
    vegetablesImage.src = "/images/Vegetables _ Drinks_disabled.svg";
    drinksImage.src = "/images/Drinks _ Cocktails_disabled.svg";
    restaurantImage.src = "/images/resturant_disabled.svg";

    for (let i = 0; i < firstParagraph.length; i++) {
      firstParagraph[i].style.color = "#A5A5A5";
      secondParagraph[i].style.color = "#A5A5A5";
      vendorsLink[i].removeAttribute("href");
    }
    return true;
  }
};
