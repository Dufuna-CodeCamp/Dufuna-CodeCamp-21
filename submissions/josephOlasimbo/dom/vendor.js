const buttons = document.querySelectorAll(".button");
const notify = document.getElementById("dot");

for (let button of buttons) {
    // console.log(button)
    button.addEventListener('click', () => {
        if (button.innerText == "Add to Cart") {
            button.style.backgroundColor = "#A5A5A5";
            button.innerHTML =
                '<img src = "../Images/remove.svg" height = "24px" width = "24px" class="remove"/>' + 'Remove'
            button.style.color = "#FFFFFF";
            button.style.border = "none";
            notify.style.display = "inline";
        } else if (button.innerText == "Remove") {
            button.innerText = "Add to Cart";
            button.style.backgroundColor = "#FFF";
            button.style.border = "1px solid #AD4C4C";
            button.style.color = "#AD4C4C";
            notify.style.display = "none";
        }
    })
}
