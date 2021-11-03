const showCart = document.querySelector('.add-to-cart');
const firstButton = document.querySelector('#add-info');
const firstButton2 = document.querySelector('#add-info2');
const firstButton3 = document.querySelector('#add-info3');
const firstButton4 = document.querySelector('#add-info4');
const remveInfo = document.querySelector('#remove-info')
const itemOne = document.querySelector('.item-one')



function addToCart (e)  {
    e.preventDefault(); 
        showCart.innerHTML = '<div style="background-color: red; width: 17px; height:17px; border-radius: 50px"; margin-top: 30px; ></div>'
        
}

function removeCart(e) {
    e.preventDefault();
    showCart.innerHTML = ''
    
    
}


firstButton.addEventListener('click', addToCart)
firstButton2.addEventListener('click', addToCart)
firstButton3.addEventListener('click', addToCart)
firstButton4.addEventListener('click', addToCart)


removInfo.addEventListener('click', removeCart)







