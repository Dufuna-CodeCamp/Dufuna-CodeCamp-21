let locationItem = document.querySelector('.location');
let flexCard = document.querySelector(".flex-card");
let flexCard2 = document.querySelector(".flex-card-2");

locationItem.addEventListener("change", toggleState);

function toggleState() {
    if(locationItem.value == "None") {
        flexCard.style.display = "none";
        flexCard2.style.display = "flex";
    } else {
        flexCard.style.display = "flex";
        flexCard2.style.display = "none";
    }
}

