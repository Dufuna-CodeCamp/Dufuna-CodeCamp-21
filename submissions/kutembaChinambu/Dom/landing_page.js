/*declaring an input variable that checks if the datalist does not contain any string, if it does:
it changes the images on the interests list to active ones
changes the text color of the interest list text content
makes each interest list item clickable */

document.querySelector('input').addEventListener('input', function (event) {
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
    
});


//function that loads the vendors page when an interest list item is loaded
function loadVendor() {
    window.location = "vendors_page.html";
}


