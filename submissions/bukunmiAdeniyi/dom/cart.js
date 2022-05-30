
const selectedArea = document.getElementById("area");
const menuImg = document.querySelectorAll(".menu-img");
const imgParent = document.querySelectorAll(".food-menu");
const span = document.querySelector(".span");
const domChanges = function () {
    for(let i = 0; i < menuImg.length, i < imgParent.length; i++) {
        let menuSource = menuImg[i].attributes.src;
        let menuValue = menuSource.value;
        let menuParent = imgParent[i];
        if (selectedArea.value) {
            menuSource.textContent = menuValue.replace("_disabled", "");
            menuParent.children[1].style.color = "#AD4C4C";
            menuParent.style.cursor = `pointer`;
            menuParent.onclick = () => location.href = "../html/vendor.html";
            span.textContent = "";
            
        } else {
            menuImg.textContent = menuValue
            .replace(".svg", "")
            .concat(`_disabled.svg`);
            menuParent.children[1].style.color = `#A5A5A5`;
            menuParent.style.cursor = `auto`;
            menuParent.onclick = () => location.href = ``;
            span.textContent = "Select a location please";
            span.style.color = "red";
        }
    }
};
selectedArea.addEventListener("change", domChanges);

