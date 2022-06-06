const notificationDot = document.querySelector(".dot"),
  addToCartButtons = document.querySelectorAll("button");

addToCartButtons.forEach((button, i) => {
  var firstClick = true;
  btnArr = [];
  button.addEventListener("click", function () {
    if (firstClick) {
      btnArr.push(button[i]);
      if (button.innerText == "Remove") {
        button.innerText = "Add to Cart";
        button.style.color = "#AD4C4C";
        button.style.border = "1px solid #AD4C4C";
        button.style.background = "#FFFFFF";
        notificationDot.style.display = "none";
      } else {
        button.innerText = "Remove";
        button.style.color = "#E6E6E6";
        button.style.border = "none";
        button.style.background =
          "#A5A5A5 url('../../css/images/remove.svg') no-repeat left center";
        notificationDot.style.display = "block";
      }
      firstClick = false;
    } else {
      button.innerText = "Add to Cart";
      button.style.color = "#AD4C4C";
      button.style.border = "1px solid #AD4C4C";
      button.style.background = "#FFFFFF";
      notificationDot.style.display = "block";
      btnArr.pop(button[i]);
      firstClick = true;
    }
    if (btnArr.length == 0) {
      notificationDot.style.display = "none";
    }
    return false;
  });
});
