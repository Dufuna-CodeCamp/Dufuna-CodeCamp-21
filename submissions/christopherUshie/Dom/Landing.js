let locationSelect = document.querySelector("#address-list");
let interest = document.querySelector(".card").children;
let errorMessage = document.querySelector(".error-message");

locationSelect.addEventListener("change", function (e) {
    if (!(e.target.value === "")) {
        changeInterests();
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Please Provide a location";
        changeInterestsBack();
    }
});

function changeInterests() {
    let images;
    for (let i = 0; i < interest.length; i++) {
        interest[i].style.cursor = "pointer";
        interest[i].addEventListener("click", function () {
            window.location.href = "vendors.html";
        });
        images = interest[i].getElementsByTagName("img")[0];


        // Change images
        let imageNameArray = [];
        imageNameArray.push(images.getAttribute("src").split("_"));
        for (let x = 0; x < imageNameArray.length; x++) {
            imageNameArray[x].pop();
            let imageReturn = imageNameArray[x] + ".svg";
            images.src = imageReturn;
        }

        // Change text color
        let toggle = interest[i].getElementsByClassName("card-info")[0].childNodes[1];
        let foodInfo = toggle.nextElementSibling;
        foodInfo.style.color = "black";
        if (toggle.classList.contains("gray-color")) {
            toggle.classList.remove("gray-color");
            toggle.classList.add("red-color");
        } else {
            toggle.classList.add("gray-color");
        }
    }
}

function changeInterestsBack() {
    let images;
    for (let i = 0; i < interest.length; i++) {
        interest[i].style.cursor = "auto";
        interest[i].addEventListener("click", function () {
            window.location.href = "";
        });
        images = interest[i].getElementsByTagName("img")[0];

        // Change images
        let imageNameArray = [];
        imageNameArray.push(images.getAttribute("src").split("."));
        for (let x = 0; x < imageNameArray.length; x++) {
            imageNameArray[x].pop();
            let imageReturn = imageNameArray[x].join("") + "_disabled.svg";
            images.src = imageReturn;
        }

        // Change text color
        let toggle = interest[i].getElementsByClassName("card-info")[0].childNodes[1];
        let foodInfo = toggle.nextElementSibling;
        foodInfo.style.color = "black";
        if (toggle.classList.contains("gray-color")) {
            toggle.classList.remove("gray-color");
            toggle.classList.add("red-color");
        } else {
            toggle.classList.add("gray-color");
            foodInfo.style.color = "gray";
        }
    }
}
