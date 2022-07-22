const   place = document.getElementById('location');
        interestBox = document.getElementsByClassName('box');
        itemName = document.querySelectorAll('.name');
        food = document.getElementById("fastFood");
        veg = document.getElementById("vegetables");
        cocktails = document.getElementById("drinks");
        eatery = document.getElementById("restaurant");
        // image = document.querySelector('.bnw');



place.addEventListener('input', (e) => {

    if (e.target.value !== " ") {
        fastFood.src ="../assets/fast-food.svg.png";
        vegetables.src ="../assets/Vegetables & Drinks.svg.png";
        drinks.src = "../assets/Drinks & Cocktails.svg.png";
        restaurant.src = "../assets/resturant.svg.png";
    

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
})


// if (document.ready){
//     var blackWhite = document.querySelectorAll('.bnw');
//     var colored = document.querySelectorAll('.color');
//     var btn = document.querySelector('#location');

//     blackWhite:show;
//     colored:hide;

//     function change(){
//         btn.addEventListener('input', function(){
//             blackWhite.hide;
//             colored.show;
//         })
//     }
// }





