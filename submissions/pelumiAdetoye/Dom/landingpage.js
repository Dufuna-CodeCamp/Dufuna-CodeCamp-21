// let fastFood = document.getElementById("fast-food")
// let fastFoodTexts = document.getElementById("fftexts")

// let vegFruits = document.getElementById("veg-fruits");
// let vegFruitsTexts = document.getElementById("vegfruittexts");

// let drinksCocktails = document.getElementById("drinks-cocktails");
// let drinksCocktailsTexts = document.getElementById("drinkscocktailstexts");

// let restaurants = document.getElementById("restaurants");

let images = ["../imgs/fast-food.svg", "../imgs/Vegetables _ Drinks.svg", "../imgs/Drinks _ Cocktails.svg", "../imgs/resturant.svg"];

let location1 = document.getElementById("address-list");

let imgDiv = document.querySelectorAll("#imgdiv")

let interest = document.querySelectorAll("#interest")

let img = document.querySelectorAll("#img");


function highlightLocation(){
    for(let i=0; i<img.length; i++){
        img[i].src = images[i]
        console.log(images[i])
        interest[i].style.color = "#ad4c4c"
    }

    for (let j = 0; j < imgDiv.length; j++) {
        imgDiv[j].onclick = () => window.open("vendor.html", "_blank")
        imgDiv[j].style.cursor = "pointer";   
     
    }
}

location1.addEventListener('change', highlightLocation);