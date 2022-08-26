let currentAddress = document.querySelector('.address'),
    interest = document.getElementsByClassName("interest-container"),
    main = document.querySelectorAll('.name'),
    food = document.getElementById('fastFood'),
    vegetables = document.getElementById('vegs'),
    drink = document.getElementById('drinks'),
    mart = document.getElementById('restaurant');

currentAddress.addEventListener('change', createChanges => {

    if (createChanges.value !== "") {
        fastFood.src = "../images/fast-food.svg";
        vegs.src = "../images/Vegetables & Drinks.svg";
        drinks.src = "../images/Drinks & Cocktails.svg";
        restaurant.src = "../images/resturant.svg";

        main.forEach((header => {
            header.style.color = "#AD4C4C";
        }
        ));

        for (let i = 0; i < interest.length; i++) {
            interest[i].addEventListener('click', () => {
                window.location.href = "../html/vendor.html";
            });
        }

    }
})

