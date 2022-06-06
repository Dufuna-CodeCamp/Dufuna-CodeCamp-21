const   area = document.getElementById('address');
        item = document.getElementsByClassName("interest-item");
        itemImg = document.getElementsByClassName("interest-Img");
        itemHeaders = document.querySelectorAll(".interest-header");
        fastFood = document.getElementById("fastFood");
        veges = document.getElementById("vegetables");
        drinks = document.getElementById("drinks");
        restaurant = document.getElementById("resturants");

        area.addEventListener('input', (jr) => {

            if (jr.target.value !== " ") {
                fastFood.src = "../Assets/images/fast-food.svg";
                vegetables.src = "../Assets/images/Vegetables _ Drinks.svg";
                drinks.src = "../Assets/images/Drinks _ Cocktails.svg";
                restaurant.src = "../Assets/images/resturant.svg";
                
                itemHeaders.forEach((itemHeader => {
                    itemHeader.style.color = "#AD4C4C";
                }));
                for (let i = 0; i < item.length; i++) {
                   item[i].addEventListener('click', ()=> {
                       window.location = "Vendors_page.html"
                   });
                    
                }
            }
        })