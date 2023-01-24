document.addEventListener('DOMContentLoaded', () => {
    const selectedLocation = document.querySelector("#location"),
      interestSectionImages = document.querySelectorAll(".foodInterests-img"),
      interestSection = document.querySelectorAll(".interest"),
      enabledImages = ["fast-food.svg", "Vegetables & Drinks.svg", "Drinks & Cocktails.svg", "resturant.svg"],
      disabledImages = ["fast-food_disabled.svg", "Vegetables & Drinks_disabled.svg", "Drinks & Cocktails_disabled.svg", "resturant_disabled.svg"];
      let saved = [];
    selectedLocation.addEventListener("change", (e) => {
        if (e.target.value === "") {
            let i = 0;
            interestSectionImages.forEach(function (image) {
                image.src = "../images/" + disabledImages[i];
                i++;
            });
            interestSection.forEach(function (interestSection) {
                interestSection.addEventListener("mouseover", function () {
                    interestSection.style.cursor = "default";
                });
            });
            interestSection.forEach((card) => {
                const add = card.addEventListener('click', () => {
                    return null;
                }, false);
                add;
                card.removeEventListener('click', add, true);
            });
        }else {
            let i = 0;
            interestSectionImages.forEach(function (images) {
                images.src = "../images/" + enabledImages[i];
                i++;
                console.dir(images)
            })

            interestSection.forEach(function (interestSection) {
                interestSection.addEventListener("mouseover", function () {
                    interestSection.style.cursor = "pointer";
                })

                interestSection.addEventListener("click", function () {
                    window.open("vendors.html", "_self");
                }, true);
            })
            saved[0] = interestSection.innerHTML;
        }
    });
})