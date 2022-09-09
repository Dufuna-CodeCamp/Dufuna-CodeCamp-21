let btns = document.querySelectorAll(".add-btn");
let cartNotice = document.querySelector(".nav-item span");
let noticeCount = 0;
//EVENT
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Add to Cart") {
        btn.innerHTML =
        '<div class="remove"><img src="../CSS/images/remove.svg" alt=""><span>Remove</span></div>';
      btn.style.backgroundColor = "#A5A5A5";
      btn.style.color = "#ffffff";
      btn.style.border = "none";
      cartNotice.style.display = "block";
      noticeCount++;
    } else if (btn.innerText === "Remove") {
      btn.innerText = "Add to Cart";
      btn.style.backgroundColor = "#ffffff";
      btn.style.color = "#ad4c4c";
      btn.style.border = "4px solid #ad4c4c";
      cartNotice.style.display = "block";
      noticeCount--;
    }
    if (noticeCount <= 0) {
      cartNotice.style.display = "none";
    }
  });
});
