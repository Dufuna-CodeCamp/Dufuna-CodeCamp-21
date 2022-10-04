let address = document.getElementById('location');
let locations = document.querySelector('datalist');
let redirect = document.querySelectorAll("div.recipe");
let changeColor = document.getElementById("location").placeholder;
let color = document.getElementById("location")

// console.log(changeColor2)

let locationChoice = [
    locations.options[0].text,
    locations.options[1].text,
    locations.options[2].text,
    locations.options[3].text,
    locations.options[4].text
]

console.log(locationChoice.includes("Jigawa"))

address.addEventListener('change', () => {
    if(locationChoice.includes(address.value)) {
        newImages()
    } else if(address.value != "") {
        newImages()
    } else {
        images()
    }
})

address.addEventListener('change', () => {
    if(locationChoice.includes(address.value)) {
        console.log(address.value)
    } else if(address.value != "") {
        console.log(address.value)
    } else {
        console.log("Select your location")
    }
})

redirect.forEach(element => {
    element.addEventListener('click', () => {
        if(locationChoice.includes(address.value)) {
            window.location.replace("../evendor.html")
        } else if(address.value != "") {
            window.location.replace("../evendor.html")
        } else {
            address.placeholder = "This field is required"
            color.style.fontSize = "30px"
            alert ("Please provide your location!")
        }
    });
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