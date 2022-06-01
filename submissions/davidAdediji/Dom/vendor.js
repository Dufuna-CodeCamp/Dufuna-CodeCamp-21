"use strict;";
let btns = document.querySelectorAll(".btn");
let cartNotify = document.querySelector(".nav-item span");

let notifyCount = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Add to Cart") {
      btn.innerHTML =
        '<div class="remove"><img src="./img/remove.svg" alt=""><span>Remove</span></div>';
      btn.style.backgroundColor = "#A5A5A5";
      btn.style.color = "#fff";
      btn.style.border = "none";
      cartNotify.style.display = "block";
      notifyCount++;
    } else if (btn.innerText === "Remove") {
      btn.innerText = "Add to Cart";
      btn.style.backgroundColor = "#fff";
      btn.style.color = "#ad4c4c";
      btn.style.border = "1px solid #ad4c4c";
      cartNotify.style.display = "block";
      notifyCount--;
    }
    if (notifyCount <= 0) {
      cartNotify.style.display = "none";
    }
  });
});
