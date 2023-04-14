let image = document.querySelectorAll(".image");
let address = document.querySelectorAll("select");
let interest = document.querySelectorAll(".interest");
let textName = document.querySelectorAll(".name");

address.forEach((item) => {
  item.addEventListener("change", function () {
    image[0].outerHTML =
      '<img class="image" src="image/fast-food.svg" alt="Food">';
    image[1].outerHTML =
      '<img class="image" src="image/Vegetables _ Drinks.svg" alt="Vegetables">';
    image[2].outerHTML =
      '<img class="image" src="image/Drinks _ Cocktails.svg" alt = "Drinks">';
    image[3].outerHTML =
      '<img class="image" src="image/resturant.svg" alt="resturant">';

    // to change the color of the text after clicking the location
    textName.forEach((text) => {
      text.style.color = "red";
    });

    //to link the page to vendors page after clicking on the location
    interest.forEach((click) => {
      click.addEventListener("click", function () {
        location.href = "../css/vendor.html";
      });
    });
  });
});
console.log(textName);
