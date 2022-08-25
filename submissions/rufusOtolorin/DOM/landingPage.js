const place = document.getElementById('where'),
    interestBox = document.getElementsByClassName('PIBOX'),
    itemName = document.querySelectorAll('.name'),
    fastFood = document.getElementById('fastfood'),
    vegetables = document.getElementById('vegetables'),
    drinks = document.getElementById('drinks'),
    restaurant = document.getElementById('resturant');


place.addEventListener('input', (e) => {
    if (e.target.list !== " ") {
        fastFood.src = "../asset/fast-food.svg.png";
        vegetables.src ="../asset/Vegetables & Drinks.svg.png";
        drinks.src = "../asset/Drinks & Cocktails.svg.png";
        restaurant.src = "../asset/resturant.svg.png";

        itemName.forEach((header => {
            header.style.color = "brown";
        }
        ));

        for(let i = 0; i < interestBox.length; i++){
            interestBox[i].addEventListener('click', () => {
                window.location = "vendor.html";
            });
        }
        
    }

});
    
