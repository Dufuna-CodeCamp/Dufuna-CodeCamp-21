let buttons = document.querySelectorAll(".btn");
let cartNotification = document.querySelector("#cartNotification");

let cartCounter = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const btnText = "Add to Cart";

    if (btn.textContent.includes(btnText)) {
      //the remove button text
      btn.innerHTML =
        '<img src = "image/remove.svg" style=" width:22px; height:22px; padding-right:2px; background:gray;"><span style = "background:gray;color:rgba(255, 255, 255, 1)">Remove</span>';
      btn.classList.add("removeText");
      cartNotification.classList.add("notification");

      cartCounter += 1;
    } else {
      //to return the button back to its default property
      btn.textContent = btnText;
      btn.classList.remove("removeText");
      cartCounter -= 1;
    }
    //to return cartNotification to default style
    if (cartCounter < 1) {
      cartNotification.classList.remove("notification");
    }
  });
});
