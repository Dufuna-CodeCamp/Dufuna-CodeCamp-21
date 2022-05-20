const select = document.getElementById('location');
const img1 = document.getElementById('fastfood');
const img2 = document.getElementById('veg');
const img3 = document.getElementById('cocktail');
const img4 = document.getElementById('restaurant');
let vendorPage = "vendorspage.html";
let interest = document.querySelectorAll(".interest")



select.addEventListener('input',(event)=>{
    if (event.target.value != ''){
        interest.forEach((item) =>{
            item.style.filter = "grayscale(0)";
            item.addEventListener('click',() =>{
                window.location.href= vendorPage;
            });
        });
        img1.src = "images/fast-food.svg"; 
        img2.src = "images/Vegetables & Drinks.svg";
        img3.src = "images/Drinks & Cocktails.svg";
        img4.src = "images/resturant.svg";
    }
});