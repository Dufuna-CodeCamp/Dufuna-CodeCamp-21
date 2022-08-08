let locationOne = document.getElementById("location_1");
let interestBox = document.querySelectorAll(".item");
let images = document.querySelectorAll(".images");
//Setting img changes
locationOne.addEventListener("change", () => {
    images.forEach((element) => {
        image = element.getAttribute("src").replace("_disabled", "");
        element.setAttribute("src", image);
    });
    //Text and Links
    interestBox.forEach((element) => {
        element.querySelector(".outlook").style.color = "#ad4c4c";
        element.addEventListener("click", () => {
            window.location.href = "../CSS/vendor.html";
        });
    });
});