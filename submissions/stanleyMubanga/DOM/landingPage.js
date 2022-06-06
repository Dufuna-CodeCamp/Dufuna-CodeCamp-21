const   city = document.getElementById('location');
        interestCards = document.querySelectorAll('.interest-card');
        interestImg = document.querySelector('.interest-image');
        interestHeaders = document.querySelectorAll(".interests-header");
        fastFood = document.getElementById("fastFood");
        vegetables = document.getElementById("vegetables");
        drinks = document.getElementById("drinks");
        resturant = document.getElementById("resturant");

    city.addEventListener('input', (event) => {

        if(event.target.value !== "") {
            fastFood.src =  "../assets/fast-food.svg";
            vegetables.src = "../assets/Vegetables & Drinks.svg";
            drinks.src = "../assets/Drinks & Cocktails.svg";
            resturant.src = "../assets/resturant.svg";

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