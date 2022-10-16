let addBtn = document.querySelectorAll(".add-btn");
let dot = document.querySelector(".dot");

let arr = [];

addBtn.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.classList.contains("add-btn")) {
            item.classList.replace("add-btn", "remove-btn");
            item.textContent = "Remove";
            item.style.color = "rgb(255, 255, 255)";
            arr.push("item-added");
        }
        else {
            item.classList.replace("remove-btn", "add-btn");
            item.textContent = "Add to Cart";
            item.style.color = "#C17979"
            arr.pop();
        }

        if (arr.length === 0) {
            dot.style.display = "none";
        }
        else {
            dot.style.display = "block";
        }
    })
})
