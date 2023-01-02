//variables
const addToCart = document.querySelectorAll("section div .add");
const notificationDot = document.querySelector("nav ul li a i");

//initializing count varaible
let count = 0;

//function to change button when clicked
addToCart.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.innerText === "Add to Cart") {
      item.classList.replace("add", "remove");
      item.innerHTML =
        '<button class="remove"><img src = "../assets/remove.svg"> <span>Remove</span></button>';
      count++;
    } else {
      item.innerText = "Add to Cart";
      item.classList.replace("remove", "add");

      count--;
    }

    //code for notifications
    if (count > 0) {
      notificationDot.style.visibility = "visible";
    } else {
      notificationDot.style.visibility = "hidden";
    }
  });
});
