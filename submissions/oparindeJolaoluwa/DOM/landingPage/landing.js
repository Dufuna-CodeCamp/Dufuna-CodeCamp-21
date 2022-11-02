const   locate = document.getElementById('inputaddress'),
        intHeader = document.querySelectorAll('.dishead'),
        column = document.querySelectorAll('.col')
        fastFood = document.getElementById('fastfood'),
        vegDrinks = document.getElementById('vegfruit'),
        drinksCocktail = document.getElementById('dricock'),
        resturant = document.getElementById('restrant')
;

locate.addEventListener('input', (e)=>{

    if(e.target.value !== " "){
        fastFood.src = "../Asset/FoodBag Task Assets(beginner)/fast-food.svg";
        vegDrinks.src = "../Asset/FoodBag Task Assets(beginner)/Vegetables _ Drinks.svg";
        drinksCocktail.src ="../Asset/FoodBag Task Assets(beginner)/Drinks _ Cocktails.svg";
        resturant.src = "../Asset/FoodBag Task Assets(beginner)/resturant.svg";

        intHeader.forEach((intHeader => {
            intHeader.style.color = "#AD4C4C";
        })) 

        for (var i = 0; i < column.length; i++) {
            column[i].addEventListener("click", ()=>{
                window.location = "../vendorPage/index.html"
            })
        }

    }

})

console.dir("intHeader");
