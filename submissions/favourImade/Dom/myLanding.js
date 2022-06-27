let addressList = document.getElementById("address"),
    fastFood = document.getElementById("fastfood"),
    vegetables = document.getElementById("vegetables"),
    resturant = document.getElementById("resturant"),
    drinks = document.getElementById("drinks"),
    interests = document.querySelectorAll("#inter"),
    container = document.querySelectorAll(".interest");

addressList.addEventListener('input', function(e) {
    if(!(e.target.value == " ")){
        fastFood.src = "../css/images/fast-food.svg";
        vegetables.src = "../css/images/Vegetables & Drinks.svg";
        drinks.src = "../css/images/Drinks & Cocktails.svg";
        resturant.src = "../css/images/resturant.svg";

        interests.forEach((inter) => {
            inter.style.color = "brown";
        });

        for (let i = 0; i < container.length; i++){
            container[i].style.cursor = "pointer";
            container[i].addEventListener("click", function(){
                window.location = "vendor.html";
            });
        }

        // //function that loads the vendors page when an interest list item is loaded
        // function loadVendor() {
        //     window.location = "vendor.html";
        // }
    }
})
