let buttons = document.querySelectorAll(".btn");
let body = document.querySelector("body");
let span = document.querySelector("#red");

buttons.forEach((element) => {
  element.addEventListener("click", function () {
    const initialText = "Add to Cart";

    if (element.textContent.includes(initialText)) {
      //the romove button text
      element.innerHTML =
        '<img src = "image/remove.svg" style=" width:22px; height:22px; padding-right:2px; background:gray;">Remove';
      element.style.display = "flex";
      element.style.justifyContent = "center";
      element.style.backgroundColor = "gray";
      element.style.fontSize = "20px";
      element.style.color = "white";
      element.style.border = "none";
      //cart notification style
      span.style.position = "absolute";
      span.style.borderRadius = "50%";
      span.style.width = "9px";
      span.style.height = "9px";
      span.style.backgroundColor = "rgb(168, 43, 43)";
    } else {
      //to return the button back to its default property
      element.textContent = initialText;
      element.style.backgroundColor = "white";
      element.style.fontSize = "15px";
      element.style.color = "red";
      element.style.border = "1px solid red";
      span.style.width = "0px";
    }
  });
});
//to make sure the cart notification stays on if there is any item in the cart
let newButton = "Remove";
body.addEventListener("click", () => {
  if (body.textContent.includes(newButton)) {
    span.style.width = "9px";
  }
});
