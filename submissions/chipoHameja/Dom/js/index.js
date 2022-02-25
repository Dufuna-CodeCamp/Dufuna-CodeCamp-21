document.addEventListener('DOMContentLoaded', () => {
    const selectedLocation = document.querySelector("#location"),
      interestCardImages = document.querySelectorAll(".interest-image"),
      interestCards = document.querySelectorAll(".interest-card"),
      enabledImages = ["fast-food.svg", "Vegetables _ Drinks.svg", "Drinks _ Cocktails.svg", "resturant.svg"],
      disabledImages = ["fast-food_disabled.svg", "Vegetables _ Drinks_disabled.svg", "Drinks _ Cocktails_disabled.svg", "resturant_disabled.svg"];
      let saved = [];
    selectedLocation.addEventListener("change", (e) => {
        if (e.target.value === "") {
            let i = 0;
            interestCardImages.forEach(function (image) {
                image.src = "../css/assets/" + disabledImages[i];
                i++;
            });
            interestCards.forEach(function (interestCard) {
                interestCard.addEventListener("mouseover", function () {
                    interestCard.style.cursor = "default";
                });
            });
            interestCards.forEach((card) => {
                const add = card.addEventListener('click', () => {
                    return null;
                }, false);
                add;
                card.removeEventListener('click', add, true);
            });
        }else {
            let i = 0;
            interestCardImages.forEach(function (image) {
                // console.log(image);
                image.src = "../css/assets/" + enabledImages[i];
                i++;
                console.dir(image)
            })

            interestCards.forEach(function (interestCard) {
                interestCard.addEventListener("mouseover", function () {
                    interestCard.style.cursor = "pointer";
                })

                interestCard.addEventListener("click", function () {
                    window.open("vendor.html", "_self");
                }, true);
            })
            saved[0] = interestCards.innerHTML;
        }
    });
})