let address = document.getElementById('searchDetails');
let Pickup = document.querySelector('select');
let redirect = document.querySelectorAll("div.pickdetails");


let Picks = [
    Pickup.options[1].text,
    Pickup.options[2].text,
    Pickup.options[3].text,
    Pickup.options[4].text,
    Pickup.options[5].text
]


address.addEventListener('change', () => {
    if(Picks.includes(address.value)) {
        newImages()
    } else {
        images()
    }
})



redirect.forEach(element => {
    element.addEventListener('click', () => {
        if(address.value == "") {
            alert ("Please select a location!")
        } else if (Picks.includes(address.value)) {
            window.location.replace("Vendor.html")
        } else {
            location.reload()
        }
    })
});

newImages = () => {
    document.querySelector('img[alt=fast-image]').src="./img/fast-food.svg";
    document.querySelector('img[alt=Vegetables_Drinks]').src="./img/Vegetables _ Drinks.svg";
    document.querySelector('img[alt=Drink_Cocktails]').src="./img/Drinks _ Cocktails.svg";
    document.querySelector('img[alt=Resturant]').src="./img/resturant.svg";
}

images = () => {
    document.querySelector('img[alt=fast-image]').src="./img/fast-food_disabled.svg";
    document.querySelector('img[alt=Vegetables_Drinks]').src="./img/Vegetables _ Drinks_disabled.svg";
    document.querySelector('img[alt=Drink_Cocktails]').src="./img/Drinks _ Cocktails_disabled.svg";
    document.querySelector('img[alt=Resturant]').src="./img/resturant_disabled.svg";
}