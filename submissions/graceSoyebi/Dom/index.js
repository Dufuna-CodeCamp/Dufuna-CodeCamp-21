var options=document.querySelector('option');
var myimg1=document.getElementById(myimg1);
console.log(options)
options.addEventListener('click', function(){
    myimg1.style.display="none";
    
    var img = document.createElement("img");
    img.src = "/css/assets/FoodBag Task Assets(beginner)/fast-food.svg";

    var interest = document.getElementsById("interest");
    interest.appendChild(img);
    
})
console.log("option")
// options.addEventListener('click', function(){
//     if (document.getElementById("myimg1").src=="/css/assets/FoodBag Task Assets(beginner)/fast-food_disabled.svg"){
//         document.getElementById("myimg1").src="/css/assets/FoodBag Task Assets(beginner)/fast-food.svg"
//     }
//     else{
//         document.getElementById("myimg1").src="/css/assets/FoodBag Task Assets(beginner)/fast-food_disabled.svg"
//     }
// })

