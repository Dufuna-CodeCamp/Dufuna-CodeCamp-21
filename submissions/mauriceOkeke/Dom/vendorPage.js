let ctaBtn = document.getElementsByTagName("button");
let dot = document.querySelector(".dot");

for (let btn of ctaBtn) {
  btn.addEventListener("click", function () {
    if (btn.textContent == "Add to Cart") {
      btn.style.background = "gray";
      btn.style.color = "rgba(255, 255, 255, 1)";
      btn.style.border = "gray";
      btn.innerHTML =
        '<img src = "../images/remove.svg" class = "remove" style=" width:20px; padding-right:2px" />Remove';
      btn.style.display = "flex";
      btn.style.alignItems = "center";
    } else if (btn.innerText == "Remove") {
      btn.style.background = "#fff";
      btn.style.color = "rgba(255, 0, 0, 1)";
      btn.style.border = "1px solid red";
      btn.innerHTML = "Add to Cart";
    }

    let cartDotCount = document.querySelectorAll(".remove").length;
    if (cartDotCount > 0) {
      dot.style.display = "flex";
    } else {
      dot.style.display = "none";
    }
    dot.innerText = cartDotCount;
  });
}
