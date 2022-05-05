let btns = document.querySelectorAll('.btn'),
badge = document.querySelector('.notification .badge');

let badgeCount = 0;
btns.forEach(btn => {
  btn.addEventListener('click', ()=>{
      if (btn.innerText === "Add to Cart"){
        btn.innerHTML = '<span class="remove-btn"><img src="/css/assets/FoodBag Task Assets(beginner)/remove.svg">Remove</span>'
        btn.style.backgroundColor = "grey"
        btn.style.color = "#fff";
        btn.style.border = "none";
        badge.style.display = "block";
        badgeCount++;
} 
else if (btn.innerText === "Remove"){
    btn.innerText = "Add to Cart";
    btn.style.backgroundColor = "#fff";
    btn.style.color = "#ad4c4c";
    badge.style.display = "block";
    btn.style.border = "1px solid #ad4c4c";
    badgeCount --;

}
if (badgeCount<=0){
    badge.style.display = "none";
} 
});
});


















// let mybutton = document.querySelector(".btn"),
//     mybutton2 = document.querySelector(".remove-btn")

//     mybutton.addEventListener("click", function(){
//        mybutton2.display = "block" ;
//        mybutton.display = "none"
//     })

//     mybutton2.addEventListener("click", function(){
//         mybutton.display = "block" ;
//         mybutton2.display = "none";

// console.log(mybutton)

// mybutton.addEventListener("click", function onclick(event){
//         event.target.style.backgroundColor="gray";
//     });



