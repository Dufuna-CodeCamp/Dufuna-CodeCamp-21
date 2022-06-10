let btns = document.querySelectorAll(".kfc__CTA");
let marker = document.querySelector(".nav__btns--nil");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.textContent == "Add to Cart") {
      btn.classList.remove("kfc__CTA");
      btn.classList.add("kfc__CTA2");
      btn.innerHTML = `<img src = "../assets/svgs/remove.svg" class="kfc__CTA--img" style="padding-right: 7px "; />Remove`;
      marker.classList.add("nav__btns--dot");
    } else if (btn.innerText == "Remove") {
      btn.classList.add("kfc__CTA");
      btn.innerHTML = "Add to Cart";
    }

    let markerCount = document.querySelectorAll(".kfc__CTA--img").length;
    if (markerCount > 0) {
      marker.classList.remove("nav__btns--nil");
      marker.classList.add("nav__btns--dot");
    } else {
      marker.classList.remove("nav__btns--dot");
      marker.classList.add("nav__btns--nil");
    }
  });
});
