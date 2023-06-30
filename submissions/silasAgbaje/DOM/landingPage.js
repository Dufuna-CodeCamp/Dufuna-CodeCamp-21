const   place = document.getElementById("location");
        interestText = document.querySelectorAll(".interest-text");
        interestList = document.querySelectorAll(".interest-list");
        interestHeaders = document.querySelectorAll(".interest-heading");

        fastFood = document.getElementById("fast-food");
        vegetables = document.getElementById("vegetable-drink");
        drinks = document.getElementById("drink-cocktail");
        restaurant = document.getElementById("restaurant");
    

    place.addEventListener('input', (event) => {
        if(event.target.value !== "") {
            fastFood.src = "../../CSS/eCommerce-Img/fast-food.svg";
            vegetables.src = "../../CSS/eCommerce-Img/Vegetables _ Drinks.svg";
            drinks.src = "../../CSS/eCommerce-Img/Drinks _ Cocktails.svg";
            restaurant.src = "../../CSS/eCommerce-Img/resturant.svg";

            interestHeaders.forEach((element => {
                element.style.color = "#AD4C4C";
            }));
            
            interestText.forEach((elements => {
                elements.style.color = '#000';
            }));

            interestList.forEach((element => {
                element.addEventListener('click', () => {
                    window.location = "../../CSS/html/vendorindex.html"
                })
            }));

        } else {
            
            fastFood.src = "../../CSS/eCommerce-Img/fast-food_disabled.svg";
            vegetables.src = "../../CSS/eCommerce-Img/Vegetables _ Drinks_disabled.svg";
            drinks.src = "../../CSS/eCommerce-Img/Drinks _ Cocktails_disabled.svg";
            restaurant.src = "../../CSS/eCommerce-Img/resturant_disabled.svg";

            interestHeaders.forEach((element => {
                element.style.color = "gray";
            }));
            
            interestText.forEach((elements => {
                elements.style.color = 'gray';
            }));

            interestList.forEach((element => {
                element.addEventListener('click', () => {
                    window.location = "../../CSS/html/eComm-index.html"
                })
            }));
        }
    })
