let buttons = document.querySelectorAll(".cart");
let cartMarker = document.querySelector(".nav-link--nil");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (btn.textContent == "Add to Cart") {
            btn.classList.remove("cart");
            btn.classList.add("cart2");
            btn.innerHTML = `<img src = "../css/image/remove.svg" class="KFC-img2";/>Remove`;
            cartMarker.classList.add("nav-btns--dot");
        } else if (btn.innerText == "Remove") {
            btn.classList.add("cart");
            btn.innerHTML = "Add to Cart";
        }

        let selectedItem = document.querySelectorAll(".KFC-img2").length;
        if (selectedItem > 0) {
            cartMarker.classList.remove("nav-link--nil");
            cartMarker.classList.add("nav-btns-dot");
        } else {
            cartMarker.classList.remove("nav-btns--dot");
            cartMarker.classList.add("nav-link--nil");
        }
    });
});