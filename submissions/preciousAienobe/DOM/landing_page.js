let interests = document.querySelectorAll(".interests")
let images = document.querySelectorAll(".img");

let imageURL = [
  "../images/fast-food.svg",
  "../images//Vegetables & Drinks.svg",
  "../images/Drinks & Cocktails.svg",
  "../images/resturant.svg",
];

let dropdown = document.getElementById("dropdown");

dropdown.addEventListener("change", function () {
  interests.forEach(interests => {
    interests.style.cursor = "pointer";
    interests.addEventListener("click", () => {
      window.location.href = "../html/vendor_page.html";
    })
  });

  for (i = 0; i < imageURL.length; i++) {
    images[i].src = imageURL[i];
  }
});


