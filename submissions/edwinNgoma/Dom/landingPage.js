const   city = document.getElementById('location');
        interestCards = document.querySelectorAll('.content-card');
        interestImg = document.querySelector('.content-image');
        interestHeaders = document.querySelectorAll(".content-header");
        fastFood = document.getElementById("fastFood");
        vegetables = document.getElementById("vegetables");
        drinks = document.getElementById("drinks");
        resturant = document.getElementById("resturant");

    city.addEventListener('input', (event) => {

        if(event.target.value !== "") {
            fastFood.src ="../Assets/images/fast-food.svg";
            vegetables.src ="../Assets/images/Vegetables & Drinks.svg";
            drinks.src ="../Assets/images/Drinks & Cocktails.svg";
            resturant.src ="../Assets/images/resturant.svg";

            interestHeaders.forEach((interestHeader => {
                interestHeader.style.color = "#AD4C4C";
            }))
            interestCards.forEach((interestCard => {
                interestCard.classList.add("activeCard");
            }))
            for (let l = 0; l < interestCards.length; l++) {
                interestCards[l].addEventListener('click', () => {
                    window.location = "vendorPage.html"
                })
                
            }
        }
    })