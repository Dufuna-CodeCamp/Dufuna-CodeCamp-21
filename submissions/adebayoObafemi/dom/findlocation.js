let address = document.getElementById('location-list');
let locations = document.querySelector('select');
let redirect = document.querySelectorAll("div.recipe");
// let changeColor = document.getElementById("location").placeholder;
// let color = document.getElementById("location")

let locationChoice = [
    locations.options[1].text,
    locations.options[2].text,
    locations.options[3].text,
    locations.options[4].text,
    locations.options[5].text
]

console.log(locationChoice.includes("Jigawa"))

address.addEventListener('change', () => {
    if(locationChoice.includes(address.value)) {
        newImages()
    } else {
        images()
    }
})

address.addEventListener('change', () => {
    if(address.value == "") {
        console.log("Select your location");
        // console.log(address.value)
    } else if(locationChoice.includes(address.value)) {
        console.log(address.value)
    } else {
        console.log("")
    }
})

// console.log(address.value)

// address.addEventListener('change', () => {
//     console.log(address.value)
//     console.log(locationChoice.includes(address.value))
// })

// console.log(address.options[1].text)

redirect.forEach(element => {
    element.addEventListener('click', () => {
        if(address.value == "") {
            alert ("Please select a location!")
        } else if (locationChoice.includes(address.value)) {
            window.location.replace("../evendor.html")
        } else {
            location.reload()
        }
    })
});

newImages = () => {
    document.querySelector('img[alt=fast-food]').src="/FoodBag Task Assets(beginner)/fast-food.svg";
    document.querySelector('img[alt=veg]').src="/FoodBag Task Assets(beginner)/Vegetables _ Drinks.svg";
    document.querySelector('img[alt=drinks]').src="/FoodBag Task Assets(beginner)/Drinks _ Cocktails.svg";
    document.querySelector('img[alt=resturant]').src="/FoodBag Task Assets(beginner)/resturant.svg";
}

images = () => {
    document.querySelector('img[alt=fast-food]').src="/FoodBag Task Assets(beginner)/fast-food_disabled.svg";
    document.querySelector('img[alt=veg]').src="/FoodBag Task Assets(beginner)/Vegetables _ Drinks_disabled.svg";
    document.querySelector('img[alt=drinks]').src="/FoodBag Task Assets(beginner)/Drinks _ Cocktails_disabled.svg";
    document.querySelector('img[alt=resturant]').src="/FoodBag Task Assets(beginner)/resturant_disabled.svg";
}