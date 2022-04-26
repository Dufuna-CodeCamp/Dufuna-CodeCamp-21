const   town = document.getElementById('local'),
        interestHeader = document.querySelectorAll('.interetHeader'),
        cards = document.querySelectorAll('.card')
        fastFood = document.getElementById('fastFood'),
        vDrinks = document.getElementById('V&Drinks'),
        drinksCocktail = document.getElementById('drinks&Cocktail'),
        resturant = document.getElementById('resturant')
;

town.addEventListener('input', (e)=>{

    if(e.target.value !== " "){
        fastFood.src = "Asset/images/fast-food.svg";
        vDrinks.src = "Asset/images/Vegetables_&_Drinks.svg";
        drinksCocktail.src = "Asset/images/Drinks_&_Cocktails.svg";
        resturant.src = "Asset/images/resturant_disabled.svg";

        interestHeader.forEach((interetHeader => {
            interetHeader.style.color = "#AD4C4C";
        })) 

        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", ()=>{
                window.location = "venders.html"
            })
        }

    }

})

console.dir("interestHeader");
