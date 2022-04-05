const clickButton = document.querySelectorAll(".add-to-cart");
const notification = document.querySelector(".headers-cart");
let notificationClick = 0;

for (let button of clickButton) {
    console.log(button);
  
    button.addEventListener("click", function () {
      if (button.innerText === "Add to Cart") {
        button.style.backgroundColor = "#A5A5A5";
        button.style.color = "rgba(255, 255, 255, 1)";
        button.style.border = "none";
        button.innerHTML =
          '<img src = "image/remove.svg" class = "remove" style = "width:30px; height: 35px; padding-right:2px; color: #fff"  alt = "remove">Remove';
        notification.style.display = "inline";
        notificationClick++;
        notification.innerText = notificationClick;
      } else if (button.innerText === "Remove") {
        button.style.backgroundColor = "#fff";
        button.style.color = "#ad4c4c";
        button.style.border = "1px solid #ad4c4c";
        button.innerText = "Add to Cart";
        notificationClick--;
        notification.innerText = notificationClick;
      }

      if (notificationClick <= 0) {
        notification.style.display = "none";
    //   } else {
    //       notification.style.display = "none"
      }

    });
  }
  