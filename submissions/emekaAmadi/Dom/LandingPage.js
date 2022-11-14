let Fast_food ="../images/fast-food.svg";
let Drinks ="../images/mai-thai 1.svg";
let Restaurant ="../images/resturant.svg";
let Vegetables ="../images/healthy-food 1.svg";
let select = document.querySelector(".select");
let images = document.querySelectorAll(".choices_img");
let title = document.querySelectorAll(".header-gray");
let variety = document.querySelectorAll(".wrapper");
let vendorUrl = "./vendorPage.html";


let imageArray= [Fast_food,Vegetables,Drinks,Restaurant];

select.addEventListener('change', function(){

images.forEach((item, index)=> { 
 item.src =imageArray[index];
})
title.forEach((items)=> { 
 items.classList.remove("header-gray");
 items.classList.add("header-color");
 console.log(title.classList)
})

variety.forEach((item)=> {item.addEventListener("click", () => {
    window.location.href = vendorUrl;
  
  });})
});
