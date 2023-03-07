const addCart = document.querySelectorAll(".addToCartButton");
const notification = document.getElementsByClassName("notificationDot");
console.log(notification);
let notificationCount = 0;

for (let addToCartButton of addCart) {
  console.log(addToCartButton);

  addToCartButton.addEventListener("click", function () {
    if (addToCartButton.innerText === "Add to Cart") {
      addToCartButton.style.backgroundColor = "#A5A5A5";
      addToCartButton.style.color = "rgba(255, 255, 255, 1)";
      addToCartButton.style.border = "none";
      addToCartButton.innerHTML =
        '<img src = "CSS/assets/My_Drive/remove.svg" class = "remove"/>Remove';
 notification[0].style.display = "inline-block";
      notificationCount++;
      notification.innerText = notificationCount;
     
    } else if (addToCartButton.innerText === "Remove") {
      addToCartButton.style.backgroundColor = "#fff";
      addToCartButton.style.color = "#ad4c4c";
      addToCartButton.style.border = "1px solid #ad4c4c";
      addToCartButton.innerText = "Add to Cart";
      notificationCount--;
      notification.innerText = notificationCount;
    }

    if (notificationCount <= 0) {
      notification[0].style.display = "none";
    }
  });
}