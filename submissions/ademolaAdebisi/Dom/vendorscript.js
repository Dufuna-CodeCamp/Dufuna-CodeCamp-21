let lists = document.querySelectorAll("button");
let dot = document.querySelector(".dot");

lists.forEach((button) => {
    button.addEventListener('click', function () {
        if (button.innerText == "Add to Cart") {
            button.innerHTML =
                '<img src = "images/remove.svg" class = "remove" style = "width:30px; padding-right:2px; color: #fff"  alt = "remove">Remove';
            button.style.color = "rgba(255, 255, 255, 1)";
            button.style.justifyContent = "space-around";
            button.style.padding = "5px 18px 5px 8px";
            button.style.backgroundColor = "#A5A5A5";
            button.style.border = "none";
            button.style.display = "flex";
            btn.style.alignItems = "center";
        }

        //not selected anymore, return it to default
        else if (button.innerText == "Remove") {
            button.innerText = "Add to Cart";
            button.style.padding = "8px 20px";
            button.style.color = "#ad4c4c";
            button.style.backgroundColor = "#fff";
            button.style.border = "1px solid #ad4c4c";
        }
        const cartCount = document.querySelectorAll(".remove").length;
        if (cartCount > 0) {
            dot.style.display = "inline";
        } else {
            dot.style.display = "none";
        }
        dot.innerText = cartCount;
    })
});