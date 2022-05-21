var buttons = document.querySelectorAll('.button-container');
let dot = document.getElementById('reddot')


buttons.forEach(btn=>{
    btn.addEventListener("click",index=>{
        let container = index.target.closest('.button-container');
        container.classList.toggle('added');
        console.dir(container);
        let replace = container.querySelector('.replace')
        let addToCart = container.querySelector('.cart-button')
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