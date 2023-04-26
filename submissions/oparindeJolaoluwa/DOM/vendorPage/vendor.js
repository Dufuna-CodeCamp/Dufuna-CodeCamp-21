var buttons = document.querySelectorAll('.buttons');
let dot = document.getElementById('dot')


buttons.forEach(btn=>{
    btn.addEventListener("click",index=>{
        let container = index.target.closest('.buttons');
        container.classList.toggle('added');
        console.dir(container);
        let replace = container.querySelector('.remove')
        let addToCart = container.querySelector('.addbut')
        if (container.classList.contains('added')){
            addToCart.innerText = "Remove";
            replace.style.visibility = "visible";
            addToCart.style.color = "white"
            addToCart.style.backgroundColor = "gray";
            container.style.backgroundColor= "gray";
            container.style.border = "2px none gray"
        } else{
            replace.style.visibility="hidden";
            addToCart.innerText= "Add to Cart";
            addToCart.style.backgroundColor = "white";
            addToCart.style.color = "rgb(197, 28, 28)"
            container.style.backgroundColor= "white";
            container.style.border = "2px solid rgb(197, 28, 28)"
        }
        displayNotif()
    })
})

function displayNotif(){
    let notification = document.querySelectorAll('.added');

    if (notification.length>0){
        dot.style.visibility = "visible"
    } else {
        dot.style.visibility= "hidden"
    }

}


/*const clickButton = document.querySelectorAll(".addbut");
const notification = document.querySelector(".dot");
let notificationClick = 0;

for (let button of clickButton) {
    console.log(button);
  
    button.addEventListener("click", function () {
      if (button.innerText === "Add to Cart") {
        button.style.backgroundColor = "#A5A5A5";
        button.style.color = "rgba(255, 255, 255, 1)";
        button.style.border = "none";
        button.innerHTML =
          '<img src="../Asset/FoodBag Task Assets(beginner)/remove.svg" class= "remove" style= "width:20px; height: 20px; padding-right:2px; color: #ffffff"  alt="remove">Remove';
        notification.style.display = "inline";
         
        notificationClick++;
        notification.innerText = notificationClick;
      } else if (button.innerText === "Remove") {
        button.style.backgroundColor = "#fff";
        button.style.color = "#ad4c4c";
        button.style.border = "1px solid #ad4c4c";
        button.innerText = "Add to Cart";
       
        notificationClick--;
        notification.innerText = notificationClick;
      }

      if (notificationClick <= 0) {
        notification.style.display = "none";
      }

    });
  }*/
  