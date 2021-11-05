const showCart = document.querySelector('.add-to-cart');
const firstButton = document.querySelector('#add-info');
const toggleButton = document.querySelector('#add-info');
const firstButton2 = document.querySelector('#add-info2');
const firstButton3 = document.querySelector('#add-info3');
const firstButton4 = document.querySelector('#add-info4');
const secondButton = document.querySelector('.second-one')
const secondButton1 = document.querySelector('.second-one1')
const secondButton2 = document.querySelector('.second-one2')
const secondButton3 = document.querySelector('.second-one3')




function addToCart(id) {
  showCart.innerHTML = '<div style="background-color: red; width: 17px; height:17px; border-radius: 50px"; margin-top: 30px; ></div>'
}


function toggleCart(e) {
  e.preventDefault()
   
   addToCart();
     
}


firstButton.addEventListener('click', toggleCart)
firstButton2.addEventListener('click', toggleCart)
firstButton3.addEventListener('click', toggleCart)
firstButton4.addEventListener('click', toggleCart)
secondButton.addEventListener('click', toggleCart)
secondButton1.addEventListener('click', toggleCart)
secondButton2.addEventListener('click', toggleCart)
secondButton3.addEventListener('click', toggleCart)









