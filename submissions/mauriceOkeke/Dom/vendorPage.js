let ctaBtn = document.getElementsByTagName("button");
let dot = document.querySelector(".dot");

for (let btn of ctaBtn) {
  btn.addEventListener("click", function () {
    if (btn.textContent == "Add to Cart") {
      btn.style.backgroundColor = "#A5A5A5";
      btn.style.color = "rgba(255, 255, 255, 1)";
      btn.style.border = "none";
      btn.innerHTML =
        '<img src = "../images/remove.svg" class = "remove" style=" width:20px; padding-right:2px; color:#fff" />Remove';
      btn.style.display = "flex";
      btn.style.alignItems = "center";
    } else if (btn.innerText == "Remove") {
      btn.style.backgroundColor = "#fff";
      btn.style.color = "rgba(255, 255, 255, 1)";
      btn.style.border = "1px solid rgba(255, 255, 255, 1)";
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
