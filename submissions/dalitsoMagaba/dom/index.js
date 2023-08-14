let towns = document.querySelector('#location'),
    selections = document.querySelectorAll('.choice'),
    fastFood = document.getElementById('fast-food'),
    vegDrinks = document.getElementById('veg-drinks'),
    cTails = document.getElementById('cocktails'),
    restaurant = document.getElementById('resturant');

    towns.addEventListener('change', () => {
        let chosenTown = towns.value;
        let red = document.querySelectorAll('.redText');
        if (chosenTown !== " ") {
            fastFood.src="./Images/fast-food.svg";
            vegDrinks.src="./Images/vegetables _ Drinks.svg";
            cTails.src="./Images/Drinks _ Cocktails.svg";
            restaurant.src="./Images/resturant.svg";
            
            red.forEach((redText) => {
                redText.style.color = "#A52A2A";
            });

            for(var i = 0; i < selections.length; i++){
                selections[i].addEventListener('click', () => {
                    window.location = "./vendor.html"
                });
            } 
        }
    });