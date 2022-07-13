let btns = document.querySelectorAll(".add-to-cart");
let marker = document.querySelector(".dots--nil");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.textContent == "Add to cart") {
      btn.classList.remove("add-to-cart");
      btn.classList.add("add-to-cart2");
      btn.innerHTML = `<img src = "image/remove.svg" class="remove" style="padding-right: 7px "; />Remove`;
      marker.classList.add("dots--dot");
    } else if (btn.innerText == "Remove") {
      btn.classList.add("add-to-cart");
      btn.innerHTML = "Add to cart";
    }

    let markerCount = document.querySelectorAll(".remove").length;
    if (markerCount > 0) {
      marker.classList.remove("dots--nil");
      marker.classList.add("dots--dot");
    } else {
      marker.classList.remove("dots--dot");
      marker.classList.add("dots--nil");
    }
  });
});