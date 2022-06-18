let theparentNode = document.querySelector('.nav-container'); 
let thereferenceNode = document.querySelector('.three'); 
let addCart = document.querySelectorAll(".cart");
let cart = document.querySelectorAll(".two");
let newElement = document.createElement('div'); 
let buttonClicks = 0;

addCart.forEach((addedCart) => {
    addedCart.onclick = () => {

        if (addedCart.innerText==='Add to Cart'){
            addedCart.innerHTML = '<span>&#8854 Remove</span>';
            addedCart.classList.remove('cart_new');
            addedCart.classList.add('remove');

            newElement.innerHTML="";
            theparentNode.insertBefore(newElement, thereferenceNode);
            newElement.classList.add('notification'); 
            
            buttonClicks += 1;
            console.log (buttonClicks);
        }

        else  if (addedCart.innerText==='⊖ Remove'){
            addedCart.innerHTML = '<a href="#"><span>Add to Cart</span><a>'; 
            addedCart.classList.add('cart_new');

            buttonClicks -= 1;
            console.log (buttonClicks);

                if (buttonClicks == 0){
                    theparentNode.removeChild(newElement);
                }
        }

        console.dir(addedCart);
            
    }
});