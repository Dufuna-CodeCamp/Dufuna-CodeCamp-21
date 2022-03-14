let input = document.querySelector('input').addEventListener('input', function (event) {
    if (event.target.value != ""){
        document.getElementById("fast-food").src = "../FoodBag Task Images/fast-food.svg";
        document.getElementById("vegetables").src = "../FoodBag Task Images/Vegetables _ Drinks.svg";
        document.getElementById("drinks").src = "../FoodBag Task Images/Drinks _ Cocktails.svg";
        document.getElementById("resturants").src = "../FoodBag Task Images/resturant.svg";
        var interestoptions = document.querySelectorAll(".interestoptions");
        for(let i = 0; i < interestoptions.length; i++){
            interestoptions[i].style.color = "brown";
        }

        var interestlines = document.querySelectorAll(".interestlines");
        for(let i = 0; i < interestlines.length; i++){
            interestlines[i].style.color = "black";
        }

        var interestlist = document.querySelectorAll(".interestlist");
        for (let i = 0; i < interestlist.length; i++){
            interestlist[i].addEventListener('click', loadVendor);
        }
        
    }
   console.log(event.target.value);
    
});



function loadVendor() {
    window.location = "vendors_page.html"
}

  
//document.getElementById("img").src = img.src.replace("_t", "_b");

