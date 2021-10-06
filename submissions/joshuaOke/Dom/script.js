let currentLocation = document.querySelector("#address"),
    divInterests = document.querySelector(".interests");

function MakeChanges(e) {
    if (currentLocation.value == "") {
        currentLocation.nextElementSibling.innerHTML =
            '<span style="color: red" > Please select a location </span>';
        for (const interest of divInterests.children) {
            imageSrc = interest.children[0].attributes.src;
            currentSrc = imageSrc.value;
            imgUrl = currentSrc.split(".svg");

            if (!imgUrl[0].includes("_disabled")) {
                imgUrl[0] += "_disabled.svg";
                imageSrc.value = imgUrl[0];
                imageSrc.nodeValue = imgUrl[0];
                imageSrc.textContent = imgUrl[0];
            }
            interest.style.cursor = "auto";
            interest.onclick = null;
            interest.children[1].style.color = "#A5A5A5";
            interest.children[2].style.color = "#A5A5A5";
        }
    } else {
        currentLocation.nodeValue = currentLocation.value;
        currentLocation.nextElementSibling.innerHTML = "";
        for (const interest of divInterests.children) {
            imageSrc = interest.children[0].attributes.src;
            currentSrc = imageSrc.value;
            currentSrc = currentSrc.replace("_disabled", "");
            interest.style.cursor = "pointer";
            interest.onclick = () => (window.location.href = "./vendors.html");
            imageSrc.value = currentSrc;
            imageSrc.nodeValue = currentSrc;
            imageSrc.textContent = currentSrc;
            interest.children[1].style.color = "#AD4C4C";
            interest.children[2].style.color = "#696969";
        }
    }
}

currentLocation.addEventListener("change", MakeChanges);